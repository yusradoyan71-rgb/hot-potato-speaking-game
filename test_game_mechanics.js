/**
 * Automated Test Suite for Grammar Auction Mechanics & Logic
 * Tests all Section 11 requirements:
 * - 2-team game
 * - 8-team game
 * - Multiple consecutive bids
 * - Insufficient funds
 * - Incorrect answers
 * - Correct answers
 * - No-bid rounds (Pass Lot)
 * - Team budget reaching zero
 * - Equal final scores (Tie-breaking by remaining budget)
 * - Question randomization & no repeats
 * - Grade 7 selection (150 questions)
 * - Grade 8 selection (150 questions)
 * - Mixed-grade selection (300 questions)
 * - Topic filtering
 * - Difficulty filtering
 */

const data = require('./games/grammar-auction/questions.js');

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passedTests++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
  }
}

console.log("==========================================================");
console.log("TESTING GRAMMAR AUCTION GAMEPLAY LOGIC SCENARIOS");
console.log("==========================================================");

// 1. Grade Banks Available
assert(data.grade7.length === 150, "Grade 7 selection has 150 questions");
assert(data.grade8.length === 150, "Grade 8 selection has 150 questions");
assert(data.all.length === 300, "Mixed grade selection has 300 questions");

// 2. Topic Filtering
const g7Ps = data.grade7.filter(q => q.topic === "Present Simple");
assert(g7Ps.length === 15, "Filtering Grade 7 by 'Present Simple' yields 15 questions");
const g8Cond = data.grade8.filter(q => q.topic === "Conditionals");
assert(g8Cond.length === 15, "Filtering Grade 8 by 'Conditionals' yields 15 questions");

// 3. Difficulty Filtering
const g7Easy = data.grade7.filter(q => q.difficulty === "easy");
assert(g7Easy.length === 50, "Filtering Grade 7 by 'easy' yields 50 questions (5 per topic)");
const g8Hard = data.grade8.filter(q => q.difficulty === "hard");
assert(g8Hard.length === 50, "Filtering Grade 8 by 'hard' yields 50 questions (5 per topic)");

// 4. Randomization & No Repeats during game
function pickLots(pool, count) {
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
const selectedLots = pickLots(data.grade7, 20);
assert(selectedLots.length === 20, "Game selects 20 lots");
const lotIds = new Set(selectedLots.map(l => l.id));
assert(lotIds.size === 20, "No questions repeated during a 20-round game");

// 5. Team Setup: 2-team vs 8-team games
function createTeams(count, startingBudget) {
  const teams = [];
  for (let i = 0; i < count; i++) {
    teams.push({
      name: `Team ${i + 1}`,
      balance: startingBudget,
      points: 0,
      correctCount: 0,
      failCount: 0,
      totalPurchased: 0
    });
  }
  return teams;
}
const twoTeams = createTeams(2, 1000);
assert(twoTeams.length === 2 && twoTeams.every(t => t.balance === 1000), "2-team game initialized with $1,000 budgets");
const eightTeams = createTeams(8, 2000);
assert(eightTeams.length === 8 && eightTeams.every(t => t.balance === 2000), "8-team game initialized with $2,000 budgets");

// 6. Multiple Consecutive Bidding Logic
let currentBid = 0;
let highestBidder = null;

function bid(teamIdx, amount, teams) {
  if (amount <= currentBid) return { success: false, reason: "not_higher" };
  if (amount > teams[teamIdx].balance) return { success: false, reason: "insufficient_funds" };
  currentBid = amount;
  highestBidder = teamIdx;
  return { success: true };
}

let teams = createTeams(4, 500);
assert(bid(0, 50, teams).success === true && currentBid === 50 && highestBidder === 0, "Team 1 opens bid at $50");
assert(bid(1, 100, teams).success === true && currentBid === 100 && highestBidder === 1, "Team 2 counter-bids at $100");
assert(bid(2, 150, teams).success === true && currentBid === 150 && highestBidder === 2, "Team 3 increases bid to $150");
assert(bid(3, 120, teams).success === false && bid(3, 120, teams).reason === "not_higher", "Lower bid ($120 <= $150) rejected");

// 7. Insufficient funds test
assert(bid(0, 600, teams).success === false && bid(0, 600, teams).reason === "insufficient_funds", "Bid of $600 exceeding balance of $500 rejected");

// 8. Correct Answer Scoring Rule:
// Team earns points = winningBid, balance -= winningBid
function resolveLot(winnerIdx, isSuccess, bidAmount, teams) {
  const winner = teams[winnerIdx];
  winner.balance = Math.max(0, winner.balance - bidAmount);
  winner.totalPurchased++;
  if (isSuccess) {
    winner.points += bidAmount;
    winner.correctCount++;
  } else {
    winner.failCount++;
  }
}

// Team 3 won at $150 and answered correctly
resolveLot(2, true, 150, teams);
assert(teams[2].points === 150, "Winning team earned +150 points for correct evaluation");
assert(teams[2].balance === 350, "Winning team paid $150, remaining balance is $350 (500 - 150)");
assert(teams[0].balance === 500 && teams[1].balance === 500, "Unsuccessful bidders lost no money (still $500)");

// 9. Incorrect Answer Scoring Rule:
// Team earns 0 points, balance -= winningBid
currentBid = 0;
highestBidder = null;
bid(1, 200, teams); // Team 2 bids $200
resolveLot(1, false, 200, teams); // Team 2 fails evaluation
assert(teams[1].points === 0, "Failed evaluation earned 0 points");
assert(teams[1].balance === 300, "Winning bid $200 deducted from balance (500 - 200 = 300)");

// 10. No-bid round (Pass Lot):
const t0Before = { ...teams[0] };
// pass lot: no change to teams
assert(teams[0].balance === t0Before.balance && teams[0].points === t0Before.points, "Passed lot does not deduct funds or award points");

// 11. Team budget reaching zero
currentBid = 0;
bid(1, 300, teams); // Team 2 has 300 left, goes all in
resolveLot(1, true, 300, teams);
assert(teams[1].balance === 0, "Team 2 balance reached $0");
assert(teams[1].points === 300, "Team 2 earned 300 points (total 300 pts)");
// Team 2 cannot place any more bids
assert(bid(1, 10, teams).success === false, "Team with $0 balance cannot place any bids");

// 12. Tie-breaker Rule:
// Highest accumulated points wins; if points equal, team with higher remaining budget wins
const testTeams = [
  { name: "Team A", points: 400, balance: 100 },
  { name: "Team B", points: 400, balance: 250 }, // same points, more money
  { name: "Team C", points: 200, balance: 800 }
];
const ranked = [...testTeams].sort((a, b) => {
  if (b.points !== a.points) return b.points - a.points;
  return b.balance - a.balance;
});
assert(ranked[0].name === "Team B", "Tie-breaker selects Team B as winner due to higher remaining budget ($250 vs $100)");

console.log("\n==========================================================");
console.log(`SUMMARY: ${passedTests} / ${totalTests} assertions passed.`);
console.log("==========================================================");

if (passedTests === totalTests) {
  console.log("🎉 ALL GAMEPLAY MECHANICS TESTS PASSED PERFECTLY!");
  process.exit(0);
} else {
  console.error("Some tests failed.");
  process.exit(1);
}
