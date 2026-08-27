// Audit Runtime: Inspect DOM, CSS styles, and event triggers step-by-step
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

console.log("==================================================");
console.log("🔍 COMPREHENSIVE RUNTIME AUDIT OF ONE NIGHT AT PASSAGE");
console.log("==================================================");

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8');
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

console.log("\n1. Loading Scripts in JSDOM...");
window.eval(audioJs);
window.eval(storyDataJs);
window.eval(gameJs);

console.log("   window.GAME_DATA keys:", Object.keys(window.GAME_DATA || {}));
console.log("   window.GAME_DATA total nodes:", Object.keys(window.GAME_DATA?.nodes || {}).length);
console.log("   window.game instantiated:", !!window.game);

console.log("\n2. Initial Screen Visibility (Before Start Click):");
console.log("   #title-screen classes:", document.getElementById("title-screen")?.className);
console.log("   #game-screen classes:", document.getElementById("game-screen")?.className);
console.log("   #ending-screen classes:", document.getElementById("ending-screen")?.className);
console.log("   #log-modal classes:", document.getElementById("log-modal")?.className);
console.log("   #dialogue-box exists:", !!document.getElementById("dialogue-box"));
console.log("   #btn-start-game exists:", !!document.getElementById("btn-start-game"));

console.log("\n3. Clicking 'Start the Night' (#btn-start-game)...");
const startBtn = document.getElementById("btn-start-game");
startBtn.click();

console.log("   #title-screen classes after start:", document.getElementById("title-screen")?.className);
console.log("   #game-screen classes after start:", document.getElementById("game-screen")?.className);
console.log("   Current game node:", window.game?.state?.currentNodeKey);
console.log("   Current chemistry:", window.game?.state?.chemistry);
console.log("   Speaker badge text:", document.getElementById("speaker-name")?.textContent);
console.log("   Dialogue text content:", document.getElementById("dialogue-text")?.textContent);
console.log("   Scene progress text:", document.getElementById("scene-progress")?.textContent);
console.log("   [CONTINUE] button classes:", document.getElementById("btn-continue")?.className);
console.log("   [CONTINUE] button HTML:", document.getElementById("btn-continue")?.innerHTML);
console.log("   Choices container classes:", document.getElementById("choices-container")?.className);

console.log("\n4. Simulating Fast Playthrough of Chapter 1 Dialogues & Choices...");
let step = 0;
while (step < 20 && window.game?.state?.currentNodeKey !== "ch2_transition") {
  step++;
  const nodeKey = window.game?.state?.currentNodeKey;
  const choicesContainer = document.getElementById("choices-container");
  const hasChoices = choicesContainer && !choicesContainer.classList.contains("hidden") && choicesContainer.children.length > 0;
  
  if (hasChoices) {
    const firstChoice = choicesContainer.children[0];
    const text = firstChoice.querySelector("span")?.textContent || firstChoice.textContent;
    console.log(`   [Step ${step}] Choice encountered at node '${nodeKey}': "${text}"`);
    firstChoice.click();
    console.log(`      -> Chemistry updated to: ${window.game?.state?.chemistry}% (DOM: ${document.getElementById("meter-percent-text")?.textContent})`);
  } else {
    const speaker = document.getElementById("speaker-name")?.textContent;
    const diag = document.getElementById("dialogue-text")?.textContent;
    console.log(`   [Step ${step}] Dialogue at node '${nodeKey}' [${speaker}]: "${diag?.substring(0, 60)}..."`);
    // Click continue button
    const contBtn = document.getElementById("btn-continue");
    if (contBtn && !contBtn.classList.contains("hidden")) {
      contBtn.click();
    } else {
      document.getElementById("dialogue-box").click();
    }
  }
}

console.log("\n==================================================");
console.log("🎉 AUDIT SCRIPT FINISHED!");
console.log("==================================================");
