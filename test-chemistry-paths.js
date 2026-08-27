// Test Suite: Chemistry Simulation & End-to-End Walkthrough Paths
const fs = require('fs');
const path = require('path');

console.log("🔍 Running Chemistry Simulation & Branching Paths Test...");

const storyDataCode = fs.readFileSync(path.join(__dirname, 'storyData.js'), 'utf8');
const window = {};
eval(storyDataCode);
const data = window.GAME_DATA;

function simulatePlaythrough(choiceStrategy) {
  let chemistry = data.initialChemistry;
  let currentKey = "ch1_start";
  let visitedNodes = [];
  let choiceCount = 0;

  while (currentKey) {
    visitedNodes.push(currentKey);
    const node = data.nodes[currentKey];
    if (!node) {
      throw new Error(`Node not found: ${currentKey}`);
    }

    if (node.evalEnding) {
      currentKey = chemistry >= data.targetChemistry ? "ch8_high_pre_kiss" : "ch8_low_ending";
      continue;
    }

    if (node.endingType) {
      return {
        ending: node.endingType,
        finalChemistry: chemistry,
        choiceCount: choiceCount,
        pathLength: visitedNodes.length
      };
    }

    if (node.choices && node.choices.length > 0) {
      choiceCount++;
      const chosenChoice = choiceStrategy(node.choices, currentKey);
      chemistry = Math.max(0, Math.min(100, chemistry + chosenChoice.impact));
      currentKey = chosenChoice.target;
    } else if (node.next) {
      currentKey = node.next;
    } else {
      throw new Error(`Dead-end node without next or ending: ${currentKey}`);
    }
  }
}

// 1. Test Best Path (Always pick highest chemistry impact choice)
const bestResult = simulatePlaythrough((choices) => {
  return choices.reduce((prev, curr) => (curr.impact > prev.impact ? curr : prev), choices[0]);
});

console.log("🌟 Optimal Romantic Path Result:", bestResult);
if (bestResult.ending !== "romantic_win" || bestResult.finalChemistry < 80) {
  console.error("❌ FAIL: Best path did not achieve romantic win (>=80%)");
  process.exit(1);
} else {
  console.log(`✅ PASS: Best path achieved '${bestResult.ending}' with ${bestResult.finalChemistry}% chemistry across ${bestResult.choiceCount} choices!`);
}

// 2. Test Worst Path (Always pick lowest chemistry impact choice)
const worstResult = simulatePlaythrough((choices) => {
  return choices.reduce((prev, curr) => (curr.impact < prev.impact ? curr : prev), choices[0]);
});

console.log("💔 Cold / Distance Path Result:", worstResult);
if (worstResult.ending !== "friendship" || worstResult.finalChemistry >= 80) {
  console.error("❌ FAIL: Cold path did not resolve to friendship (<80%)");
  process.exit(1);
} else {
  console.log(`✅ PASS: Cold path achieved '${worstResult.ending}' with ${worstResult.finalChemistry}% chemistry!`);
}

// 3. Test Balanced Path (Mid-level choices)
const balancedResult = simulatePlaythrough((choices) => {
  return choices[1] || choices[0];
});
console.log("🤝 Balanced Path Result:", balancedResult);
console.log(`✅ PASS: Balanced playthrough concluded smoothly with ${balancedResult.finalChemistry}% chemistry.`);

console.log("\n🎉 ALL CHEMISTRY SIMULATION TESTS PASSED!\n");
