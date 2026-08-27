// Full DOM Playthrough Test using JSDOM
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

console.log("🚀 Starting Comprehensive JSDOM End-to-End Test for 'One Night at Passage'...");

const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// Mock Web Audio API for JSDOM environment
const dom = new JSDOM(htmlContent, {
  runScripts: "dangerously",
  resources: "usable",
  url: "http://localhost:3080/"
});

const window = dom.window;
const document = window.document;

// Mock Web Audio API
window.AudioContext = function() {
  return {
    currentTime: 0,
    sampleRate: 44100,
    destination: {},
    createGain: () => ({
      gain: {
        setValueAtTime: () => {},
        linearRampToValueAtTime: () => {},
        exponentialRampToValueAtTime: () => {}
      },
      connect: () => {}
    }),
    createOscillator: () => ({
      type: 'sine',
      frequency: {
        setValueAtTime: () => {},
        exponentialRampToValueAtTime: () => {}
      },
      connect: () => {},
      start: () => {},
      stop: () => {}
    }),
    createBiquadFilter: () => ({
      type: 'lowpass',
      frequency: {
        setValueAtTime: () => {}
      },
      connect: () => {}
    }),
    createBuffer: () => ({
      getChannelData: () => new Float32Array(44100)
    }),
    createBufferSource: () => ({
      buffer: null,
      loop: false,
      connect: () => {},
      start: () => {},
      stop: () => {}
    }),
    resume: () => Promise.resolve()
  };
};
window.webkitAudioContext = window.AudioContext;
window.requestAnimationFrame = (cb) => setTimeout(cb, 16);

// Load scripts into JSDOM
const audioScript = fs.readFileSync(path.join(__dirname, 'audio.js'), 'utf8');
const storyScript = fs.readFileSync(path.join(__dirname, 'storyData.js'), 'utf8');
const gameScript = fs.readFileSync(path.join(__dirname, 'game.js'), 'utf8');

window.eval(audioScript);
window.eval(storyScript);
window.eval(gameScript);

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    process.exit(1);
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

// 1. Check Initial State on Start Screen
assert(document.getElementById("title-screen").classList.contains("hidden") === false, "Title screen is initially visible");
assert(document.getElementById("game-screen").classList.contains("hidden") === true, "Game screen is initially hidden");
assert(document.getElementById("ending-screen").classList.contains("hidden") === true, "Ending screen is initially hidden");

console.log("Debug: window.game exists?", !!window.game);
if (!window.game) {
  window.game = new window.GameEngine();
}

// 2. Click Start Game Button
const startBtn = document.getElementById("btn-start-game");
assert(startBtn !== null, "Start button exists");
startBtn.click();

assert(document.getElementById("title-screen").classList.contains("hidden") === true, "Title screen hidden after start");
assert(document.getElementById("game-screen").classList.contains("hidden") === false, "Game screen visible after start");
assert(document.getElementById("meter-percent-text").textContent === "20%", "Initial chemistry starts at 20%");

// 3. Play through entire story by simulating clicks and choices
let steps = 0;
const maxSteps = 300;
let choiceCount = 0;

function advance() {
  if (steps++ > maxSteps) {
    console.error("❌ FAIL: Playthrough exceeded maximum steps without reaching ending");
    process.exit(1);
  }

  // If choices container has buttons visible
  const choicesContainer = document.getElementById("choices-container");
  if (!choicesContainer.classList.contains("hidden") && choicesContainer.children.length > 0) {
    choiceCount++;
    // Click optimal choice (first choice)
    const firstChoiceBtn = choicesContainer.children[0];
    const choiceText = firstChoiceBtn.querySelector("span").textContent;
    firstChoiceBtn.click();
    console.log(`   [Choice #${choiceCount}] Selected: "${choiceText.substring(0, 45)}..." -> Chemistry: ${document.getElementById("meter-percent-text").textContent}`);
    setTimeout(advance, 10);
    return;
  }

  // Check if reached ending screen
  const endingScreen = document.getElementById("ending-screen");
  if (!endingScreen.classList.contains("hidden")) {
    const finalScore = document.getElementById("final-chemistry-score").textContent;
    const endingTitle = document.getElementById("ending-title").textContent;
    console.log(`\n🏆 Reached Ending Screen! Title: "${endingTitle}", Final Chemistry: ${finalScore}`);
    assert(finalScore === "100%", "Optimal playthrough achieved 100% Final Chemistry");
    assert(endingTitle === "A Night to Remember", "Romantic climax win title rendered");

    // 4. Test Log Modal Controls & Interactions
    const logModal = document.getElementById("log-modal");
    const logBtn = document.getElementById("btn-view-log-end");
    const closeLogBtn = document.getElementById("btn-close-log");
    const footerCloseBtn = document.getElementById("btn-footer-close-log");

    // Test Open via View Log Button
    logBtn.click();
    assert(logModal.classList.contains("hidden") === false, "Log modal opens properly");
    assert(logModal.style.display === "flex", "Log modal display is flex when opened");
    const logItems = document.querySelectorAll(".log-item");
    assert(logItems.length >= 25, `Story Log recorded ${logItems.length} dialogue & choice entries`);

    // Test Close via Header Close Button
    closeLogBtn.click();
    assert(logModal.classList.contains("hidden") === true, "Log modal closes with [✕ Close] button");
    assert(logModal.style.display === "none", "Log modal display is 'none' after closing");

    // Test Open via Header Icon and Close via Footer Button
    const headerLogBtn = document.getElementById("btn-log");
    headerLogBtn.click();
    assert(logModal.classList.contains("hidden") === false, "Log modal opens via header icon");
    footerCloseBtn.click();
    assert(logModal.classList.contains("hidden") === true, "Log modal closes with [▶ Return to Game] footer button");

    // Test Open and Close via Escape key
    headerLogBtn.click();
    assert(logModal.classList.contains("hidden") === false, "Log modal opens for Escape key test");
    window.dispatchEvent(new window.KeyboardEvent("keydown", { key: "Escape", code: "Escape" }));
    assert(logModal.classList.contains("hidden") === true, "Log modal closes via Escape key");

    // Test Open and Close via Backdrop click
    headerLogBtn.click();
    assert(logModal.classList.contains("hidden") === false, "Log modal opens for backdrop click test");
    logModal.dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
    assert(logModal.classList.contains("hidden") === true, "Log modal closes when clicking backdrop outside modal card");

    console.log("\n🎉 FULL END-TO-END DOM PLAYTHROUGH & MODAL TESTS COMPLETED SUCCESSFULLY!\n");
    process.exit(0);
    return;
  }

  // Advance using either the prominent CONTINUE button or dialogue card
  const continueBtn = document.getElementById("btn-continue");
  if (continueBtn && !continueBtn.classList.contains("hidden") && steps % 2 === 0) {
    continueBtn.click();
  } else {
    const dialogueBox = document.getElementById("dialogue-box");
    dialogueBox.click();
  }
  setTimeout(advance, 10);
}

// Kick off simulation
advance();
