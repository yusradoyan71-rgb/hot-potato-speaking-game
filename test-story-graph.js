// Test Suite: Story Graph & Asset Integrity Verification
const fs = require('fs');
const path = require('path');

console.log("🔍 Running Story Graph & Asset Verification...");

// Load story data by simulating browser window object
const storyDataCode = fs.readFileSync(path.join(__dirname, 'storyData.js'), 'utf8');
const window = {};
eval(storyDataCode);
const data = window.GAME_DATA;

let errorCount = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    errorCount++;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

// 1. Check Chapters
assert(Array.isArray(data.chapters) && data.chapters.length === 8, "Exactly 8 story chapters defined");

// 2. Check Characters
const expectedChars = ['mehmet', 'yusra', 'can', 'selin', 'burak', 'ece'];
expectedChars.forEach(charKey => {
  assert(data.characters[charKey] !== undefined, `Character '${charKey}' is defined`);
  if (data.characters[charKey].avatar) {
    const avatarPath = path.join(__dirname, data.characters[charKey].avatar);
    assert(fs.existsSync(avatarPath), `Avatar asset exists on disk: ${data.characters[charKey].avatar}`);
  }
});

// 3. Check Backgrounds
Object.entries(data.backgrounds).forEach(([bgKey, bgPath]) => {
  const fullPath = path.join(__dirname, bgPath);
  assert(fs.existsSync(fullPath), `Background asset exists on disk: ${bgPath}`);
});

// 4. Validate Story Graph Nodes
const nodeKeys = Object.keys(data.nodes);
assert(nodeKeys.length >= 30, `Rich story graph with ${nodeKeys.length} dialogue nodes`);

nodeKeys.forEach(key => {
  const node = data.nodes[key];

  // Validate speaker
  if (node.speaker) {
    assert(data.characters[node.speaker] !== undefined, `Node '${key}' has valid speaker: ${node.speaker}`);
  }

  // Validate next link
  if (node.next) {
    assert(data.nodes[node.next] !== undefined, `Node '${key}' links to existing next node '${node.next}'`);
  }

  // Validate background reference
  if (node.bg) {
    assert(data.backgrounds[node.bg] !== undefined, `Node '${key}' references valid background '${node.bg}'`);
  }

  // Validate choices
  if (node.choices) {
    assert(Array.isArray(node.choices) && node.choices.length >= 2, `Node '${key}' has at least 2 choices`);
    node.choices.forEach((c, idx) => {
      assert(c.target && data.nodes[c.target] !== undefined, `Node '${key}' choice ${idx} targets valid node '${c.target}'`);
      assert(typeof c.impact === 'number', `Node '${key}' choice ${idx} has numeric impact: ${c.impact}`);
    });
  }
});

if (errorCount === 0) {
  console.log("\n🎉 ALL STORY GRAPH & ASSET INTEGRITY TESTS PASSED!\n");
  process.exit(0);
} else {
  console.error(`\n❌ ${errorCount} TEST(S) FAILED!\n`);
  process.exit(1);
}
