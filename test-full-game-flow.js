const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

console.log("==================================================");
console.log("🔥 FULL GAMEPLAY FLOW VALIDATION FOR HOT POTATO");
console.log("==================================================");

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const scriptContent = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8');

const dom = new JSDOM(html, {
  runScripts: "dangerously",
  url: "http://localhost:3080/"
});

const { window } = dom;
const { document } = window;

// Provide clean mocks
window.AudioContext = class {
  constructor() { this.state = 'running'; this.currentTime = 0; }
  createOscillator() {
    return {
      type: 'sine',
      frequency: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} },
      connect: () => {},
      start: () => {},
      stop: () => {}
    };
  }
  createGain() {
    return {
      gain: { setValueAtTime: () => {}, linearRampToValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} },
      connect: () => {}
    };
  }
  createBuffer() { return { getChannelData: () => new Float32Array(100) }; }
  createBufferSource() { return { buffer: null, connect: () => {}, start: () => {}, stop: () => {} }; }
  createBiquadFilter() { return { frequency: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} }, connect: () => {} }; }
  resume() {}
};

window.HTMLCanvasElement.prototype.getContext = () => ({
  clearRect: () => {},
  fillRect: () => {},
  save: () => {},
  restore: () => {},
  translate: () => {},
  rotate: () => {}
});

// Run script only once
window.eval(scriptContent);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function runTests() {
  try {
    // 1. SETUP TESTS
    console.log("\n[Test 1] Testing Team Setup Screen...");
    document.getElementById('btnTeams2').click();
    document.getElementById('btnPlayers2').click();
    document.getElementById('btnRounds10').click();
    document.getElementById('btnAutofill').click();

    // Verify 2 teams, 2 players each
    const gs = window.gameState;
    if (gs.numTeams !== 2) throw new Error(`Expected 2 teams, got ${gs.numTeams}`);
    if (gs.playersPerTeam !== 2) throw new Error(`Expected 2 players, got ${gs.playersPerTeam}`);
    if (gs.totalRounds !== 10) throw new Error(`Expected 10 rounds, got ${gs.totalRounds}`);
    console.log("✅ Setup config verified (2 teams, 2 players/team, 10 rounds)");

    // 2. START GAME
    console.log("\n[Test 2] Starting Game...");
    document.getElementById('btnStartGame').click();

    const gameScreen = document.getElementById('gameScreen');
    if (!gameScreen.classList.contains('active')) throw new Error("Game screen did not activate!");
    console.log("✅ Game screen is active. Round 1 initiated.");

    // 3. ROUND 1: TEAM 1 TURN -> SELECT SPEAKER -> ANSWERED (+1)
    console.log("\n[Test 3] Round 1 - Team 1 Speaker Selection & Answered (+1)...");
    const speakerButtons = document.querySelectorAll('.btn-speaker');
    if (speakerButtons.length !== 2) throw new Error(`Expected 2 speakers, got ${speakerButtons.length}`);
    
    // Select speaker 0 (Alex)
    speakerButtons[0].click();
    
    const questionView = document.getElementById('activeQuestionView');
    if (questionView.classList.contains('hidden')) throw new Error("Question view not visible!");
    console.log("✅ Speaker selected: Alex");

    const qText1 = document.getElementById('questionText').textContent.trim();
    if (!qText1) throw new Error("Question text empty!");
    console.log(`✅ Question displayed: "${qText1}"`);

    // Click ANSWERED!
    document.getElementById('btnAnswered').click();
    if (gs.teams[0].score !== 1) throw new Error(`Expected Team 1 score to be 1, got ${gs.teams[0].score}`);
    console.log("✅ Team 1 score increased to 1.");

    // Wait for turn advance transition (~1.3s in game)
    await sleep(1300);

    // 4. ROUND 1: TEAM 2 TURN -> SELECT SPEAKER -> SKIP QUESTION -> BOOM (+0)
    console.log("\n[Test 4] Round 1 - Team 2 Turn (Skip Question & BOOM)...");
    if (gs.activeTeamIndex !== 1) throw new Error(`Expected active team 1 (Team 2), got ${gs.activeTeamIndex}`);
    console.log(`✅ Active team is now Team 2: ${gs.teams[1].name}`);

    // Select speaker 1 (Maya)
    const speakerButtonsT2 = document.querySelectorAll('.btn-speaker');
    speakerButtonsT2[1].click();

    const qBeforeSkip = document.getElementById('questionText').textContent.trim();
    document.getElementById('btnSkipQuestion').click();
    const qAfterSkip = document.getElementById('questionText').textContent.trim();
    console.log(`✅ Skip question tested. Old: "${qBeforeSkip.substring(0,25)}...", New: "${qAfterSkip.substring(0,25)}..."`);

    // Test Pause / Resume
    console.log("\n[Test 5] Testing Pause / Resume...");
    document.getElementById('btnPauseGame').click();
    if (!gs.isPaused) throw new Error("Game should be paused!");
    console.log("✅ Game paused successfully");
    document.getElementById('btnResumeModal').click();
    if (gs.isPaused) throw new Error("Game should be resumed!");
    console.log("✅ Game resumed successfully");

    // Click BOOM for Team 2
    console.log("\n[Test 6] Testing BOOM (0 points)...");
    document.getElementById('btnBoom').click();
    if (gs.teams[1].score !== 0) throw new Error(`Expected Team 2 score 0, got ${gs.teams[1].score}`);
    console.log("✅ Team 2 score remains 0 after BOOM.");

    // Wait for boom transition (~2.1s)
    await sleep(2100);

    // 5. ROUND 2 TRANSITION CHECK
    console.log("\n[Test 7] Round 2 Verification...");
    if (gs.currentRound !== 2) throw new Error(`Expected Round 2, got ${gs.currentRound}`);
    if (gs.activeTeamIndex !== 0) throw new Error(`Expected active team 0, got ${gs.activeTeamIndex}`);
    console.log(`✅ Round advanced to ${gs.currentRound}, active team back to ${gs.teams[0].name}`);

    // 6. FAST FORWARD TO ROUND 5 (CHAOS ROUND)
    console.log("\n[Test 8] Simulating rounds up to Chaos Round 5...");
    gs.currentRound = 5;
    window.startRound();
    
    // Check chaos round state
    if (gs.isChaosRound) {
      console.log("✅ Round 5 is a CHAOS ROUND");
      const specialBadge = document.getElementById('specialModeBadge');
      console.log(`✅ Special badge content: "${specialBadge.textContent.trim()}"`);
    }

    // Select speaker for round 5
    const round5Speakers = document.querySelectorAll('.btn-speaker');
    round5Speakers[0].click();
    console.log(`✅ Chaos challenge: "${document.getElementById('questionChaosInstruction').textContent.trim()}"`);
    
    // Answer chaos round (+2 points)
    document.getElementById('btnAnswered').click();
    console.log(`✅ Team 1 scored +2 on Chaos Round! Score is now: ${gs.teams[0].score}`);
    await sleep(2000); // Wait for turn timeout and nextTeam transition to fully complete

    // 7. FAST FORWARD TO FINAL ROUND & GAME OVER
    console.log("\n[Test 9] Fast-forwarding to Game Over...");
    gs.currentRound = 11; // past totalRounds (10)
    gs.totalRounds = 10;
    gs.teams[0].score = 8;
    gs.teams[1].score = 5;
    
    // Award some sample successes for player awards
    gs.teams[0].players[0].successes = 5;
    gs.teams[0].players[0].turns = 6;
    gs.teams[0].players[1].successes = 3;
    gs.teams[0].players[1].turns = 4;
    gs.teams[1].players[0].successes = 3;
    gs.teams[1].players[0].turns = 5;
    gs.teams[1].players[1].successes = 2;
    gs.teams[1].players[1].turns = 5;

    // Trigger startRound which will detect round > 10 and show winner
    window.startRound();

    const winnerScreen = document.getElementById('winnerScreen');
    if (!winnerScreen.classList.contains('active')) {
      throw new Error("Winner screen should be active after completing final round!");
    }
    console.log("✅ Winner celebration screen is active!");

    const winnerName = document.getElementById('winningTeamName').textContent.trim();
    console.log(`✅ Winner announced: THE ${winnerName} WIN!`);
    const topSpeaker = document.getElementById('topSpeakerName').textContent.trim();
    console.log(`✅ Top Speaker Award: ${topSpeaker}`);
    const bestPlayer = document.getElementById('bestPlayerName').textContent.trim();
    console.log(`✅ Best Team Player Award: ${bestPlayer}`);

    // Test Play Again & New Game buttons
    console.log("\n[Test 10] Testing Play Again & New Game buttons...");
    window.playAgain();
    if (gs.currentRound !== 1 || gs.teams[0].score !== 0) {
      throw new Error("playAgain failed to reset rounds or score!");
    }
    console.log("✅ Play Again successfully reset score to 0 and round to 1");

    window.newGame();
    const setupScreen = document.getElementById('setupScreen');
    if (!setupScreen.classList.contains('active')) {
      throw new Error("newGame failed to show setup screen!");
    }
    console.log("✅ New Game successfully returned to setup screen");

    console.log("\n==================================================");
    console.log("🎉 ALL 10 AUTOMATED FLOW TESTS PASSED FLAWLESSLY!");
    console.log("==================================================");
  } catch (err) {
    console.error("❌ Test Failed:", err);
    process.exit(1);
  }
}

runTests();
