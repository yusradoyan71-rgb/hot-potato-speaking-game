const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

console.log("=========================================");
console.log("🧪 TESTING HOT POTATO GAME ENGINE");
console.log("=========================================");

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const scriptContent = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8');

const dom = new JSDOM(html, {
  runScripts: "dangerously",
  resources: "usable",
  url: "http://localhost:3080/"
});

const { window } = dom;
const { document } = window;

// Mock Web Audio API and Canvas for jsdom
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

// Run script.js inside JSDOM environment
window.eval(scriptContent);
window.initGame();

// Wait for DOM to settle
setTimeout(() => {
  console.log("1. Checking Setup Screen Elements...");
  const btnStart = document.getElementById('btnStartGame');
  if (!btnStart) throw new Error("Missing #btnStartGame!");
  console.log("✅ #btnStartGame exists");

  const teamCards = document.querySelectorAll('.team-config-card');
  console.log(`✅ Rendered ${teamCards.length} team cards`);
  if (teamCards.length !== 3) throw new Error("Expected 3 default teams!");

  console.log("2. Switching to 2 Teams and 10 Rounds...");
  const btnTeams2 = document.getElementById('btnTeams2');
  btnTeams2.click();
  const btnRounds10 = document.getElementById('btnRounds10');
  btnRounds10.click();

  const updatedTeamCards = document.querySelectorAll('.team-config-card');
  console.log(`✅ Updated to ${updatedTeamCards.length} team cards`);
  if (updatedTeamCards.length !== 2) throw new Error("Expected 2 team cards!");

  console.log("3. Auto-filling names and starting game...");
  document.getElementById('btnAutofill').click();
  btnStart.click();

  const gameScreen = document.getElementById('gameScreen');
  if (!gameScreen.classList.contains('active')) throw new Error("Game screen should be active!");
  console.log("✅ Game screen is active");

  const scoreCards = document.querySelectorAll('.score-card');
  console.log(`✅ Scoreboard has ${scoreCards.length} team score cards`);

  // Check Round 1 speaker selection
  const speakerButtons = document.querySelectorAll('.btn-speaker');
  console.log(`✅ Team has ${speakerButtons.length} player buttons in speaker selection`);
  if (speakerButtons.length < 2) throw new Error("Speaker buttons missing!");

  console.log("4. Selecting Speaker 1 (Alex)...");
  speakerButtons[0].click();

  const questionView = document.getElementById('activeQuestionView');
  if (!questionView.classList.contains('active')) throw new Error("Question view should be active after speaker selection!");
  console.log("✅ Question view is active");

  const questionText = document.getElementById('questionText').textContent.trim();
  console.log(`✅ Question displayed: "${questionText}"`);
  if (!questionText) throw new Error("Question text cannot be empty!");

  console.log("5. Testing ANSWERED (+1 point)...");
  document.getElementById('btnAnswered').click();
  
  // Verify score
  const team1Score = window.gameState.teams[0].score;
  console.log(`✅ Team 1 score is now: ${team1Score}`);
  if (team1Score !== 1) throw new Error(`Expected Team 1 score to be 1, got ${team1Score}`);

  console.log("🎉 Headless Unit/Integration Test Passed Successfully!");
}, 50);
