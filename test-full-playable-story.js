// Complete Playable Story Test for "One Night at Passage"
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

console.log("==================================================");
console.log("🚀 TESTING COMPLETE PLAYABLE STORY (CHAPTERS 1 - 8)");
console.log("==================================================");

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const audioJs = fs.readFileSync(path.join(__dirname, 'audio.js'), 'utf8');
const storyDataJs = fs.readFileSync(path.join(__dirname, 'storyData.js'), 'utf8');
const gameJs = fs.readFileSync(path.join(__dirname, 'game.js'), 'utf8');

const dom = new JSDOM(html, {
  runScripts: "dangerously",
  resources: "usable",
  url: "http://localhost:3080/"
});

const window = dom.window;
const document = window.document;

// Mock Web Audio
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

// Execute scripts
window.eval(audioJs);
window.eval(storyDataJs);
window.eval(gameJs);

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    process.exit(1);
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

// 1. Check instant GameEngine initialization
assert(!!window.game, "window.game is immediately instantiated on script load");
assert(window.game.state.chemistry === 20, "Initial chemistry state is 20%");

// 2. Check title screen and click start
const titleScreen = document.getElementById("title-screen");
const gameScreen = document.getElementById("game-screen");
const startBtn = document.getElementById("btn-start-game");

assert(!titleScreen.classList.contains("hidden"), "Title screen is visible initially");
assert(gameScreen.classList.contains("hidden"), "Game screen is hidden initially");

startBtn.click();

assert(titleScreen.classList.contains("hidden"), "Title screen is hidden after start click");
assert(!gameScreen.classList.contains("hidden"), "Game screen is visible after start click");
assert(window.game.state.currentNodeKey === "ch1_start", "Game starts at chapter 1 'ch1_start'");

// 3. Play through the entire 8-chapter story
const chaptersEncountered = new Set();
let choicesChosen = 0;
let dialogueSteps = 0;
const maxSteps = 400;

function advanceStory() {
  if (dialogueSteps++ > maxSteps) {
    console.error("❌ FAIL: Exceeded maximum dialogue steps");
    process.exit(1);
  }

  const currentKey = window.game.state.currentNodeKey;
  const currentNode = window.GAME_DATA.nodes[currentKey];
  if (currentNode && currentNode.chapter) {
    chaptersEncountered.add(currentNode.chapter);
  }

  // Check choices
  const choicesContainer = document.getElementById("choices-container");
  const hasChoices = choicesContainer && !choicesContainer.classList.contains("hidden") && choicesContainer.children.length > 0;

  if (hasChoices) {
    choicesChosen++;
    const choiceBtn = choicesContainer.children[0]; // Choose optimal choice
    const choiceText = choiceBtn.querySelector("span")?.textContent || choiceBtn.textContent;
    choiceBtn.click();
    console.log(`   [Choice #${choicesChosen}] Node '${currentKey}': "${choiceText.substring(0, 45)}..." -> Chemistry: ${window.game.state.chemistry}%`);
    setTimeout(advanceStory, 5);
    return;
  }

  // Check ending screen
  const endingScreen = document.getElementById("ending-screen");
  if (endingScreen && !endingScreen.classList.contains("hidden")) {
    const finalScore = document.getElementById("final-chemistry-score")?.textContent;
    const endingTitle = document.getElementById("ending-title")?.textContent;
    console.log(`\n🏆 Reached Climax Ending Screen! Title: "${endingTitle}", Final Chemistry: ${finalScore}`);
    assert(finalScore === "100%", "Playthrough reached 100% chemistry score");
    assert(endingTitle === "A Night to Remember", "Romantic win climax ending displayed");
    assert(chaptersEncountered.size === 8, `Encountered all 8 chapters: ${Array.from(chaptersEncountered).join(', ')}`);
    assert(choicesChosen === 14, `Completed all 14 interactive branching choices (made: ${choicesChosen})`);

    // Test Dialogue History Log
    const viewLogBtn = document.getElementById("btn-view-log-end");
    viewLogBtn.click();
    const logModal = document.getElementById("log-modal");
    assert(!logModal.classList.contains("hidden"), "Log modal opened from ending screen");
    const logItems = document.querySelectorAll(".log-item");
    assert(logItems.length >= 70, `History log recorded ${logItems.length} story entries`);
    document.getElementById("btn-close-log").click();
    assert(logModal.classList.contains("hidden"), "Log modal closed successfully");

    console.log("\n==================================================");
    console.log("🎉 ALL 8 CHAPTERS TESTED & PASSED WITH 100% SUCCESS!");
    console.log("==================================================");
    process.exit(0);
    return;
  }

  // Click continue button or dialogue card
  const contBtn = document.getElementById("btn-continue");
  if (contBtn && !contBtn.classList.contains("hidden")) {
    contBtn.click();
  } else {
    document.getElementById("dialogue-box").click();
  }

  setTimeout(advanceStory, 5);
}

advanceStory();
