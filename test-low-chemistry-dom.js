// Low Chemistry DOM Playthrough Test
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

console.log("🚀 Testing Low Chemistry / Friendship DOM Playthrough...");

const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

const dom = new JSDOM(htmlContent, {
  runScripts: "dangerously",
  resources: "usable",
  url: "http://localhost:3080/"
});

const window = dom.window;
const document = window.document;

window.AudioContext = function() {
  return {
    currentTime: 0,
    sampleRate: 44100,
    destination: {},
    createGain: () => ({ gain: { setValueAtTime: () => {}, linearRampToValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} }, connect: () => {} }),
    createOscillator: () => ({ type: 'sine', frequency: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} }, connect: () => {}, start: () => {}, stop: () => {} }),
    createBiquadFilter: () => ({ type: 'lowpass', frequency: { setValueAtTime: () => {} }, connect: () => {} }),
    createBuffer: () => ({ getChannelData: () => new Float32Array(44100) }),
    createBufferSource: () => ({ buffer: null, loop: false, connect: () => {}, start: () => {}, stop: () => {} }),
    resume: () => Promise.resolve()
  };
};
window.webkitAudioContext = window.AudioContext;
window.requestAnimationFrame = (cb) => setTimeout(cb, 16);

window.eval(fs.readFileSync(path.join(__dirname, 'audio.js'), 'utf8'));
window.eval(fs.readFileSync(path.join(__dirname, 'storyData.js'), 'utf8'));
window.eval(fs.readFileSync(path.join(__dirname, 'game.js'), 'utf8'));

if (!window.game) {
  window.game = new window.GameEngine();
}

document.getElementById("btn-start-game").click();

let steps = 0;
const maxSteps = 300;
let choiceCount = 0;

function advance() {
  if (steps++ > maxSteps) {
    console.error("❌ FAIL: Exceeded steps in low chemistry test");
    process.exit(1);
  }

  const choicesContainer = document.getElementById("choices-container");
  if (!choicesContainer.classList.contains("hidden") && choicesContainer.children.length > 0) {
    choiceCount++;
    // Click the last choice (worst/cold choice)
    const lastChoiceBtn = choicesContainer.children[choicesContainer.children.length - 1];
    lastChoiceBtn.click();
    setTimeout(advance, 10);
    return;
  }

  const endingScreen = document.getElementById("ending-screen");
  if (!endingScreen.classList.contains("hidden")) {
    const finalScore = document.getElementById("final-chemistry-score").textContent;
    const endingTitle = document.getElementById("ending-title").textContent;
    console.log(`\n🏆 Reached Friendship Ending Screen! Title: "${endingTitle}", Final Chemistry: ${finalScore}`);
    if (endingTitle.includes("One Fun Night in Cyprus")) {
      console.log("✅ PASS: Friendship ending rendered properly for low chemistry (<80%)");
      process.exit(0);
    } else {
      console.error("❌ FAIL: Unexpected ending title:", endingTitle);
      process.exit(1);
    }
    return;
  }

  const continueBtn = document.getElementById("btn-continue");
  if (continueBtn && !continueBtn.classList.contains("hidden") && steps % 2 === 0) {
    continueBtn.click();
  } else {
    document.getElementById("dialogue-box").click();
  }
  setTimeout(advance, 10);
}

advance();
