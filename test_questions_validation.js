/**
 * Automated Verification Script for Grammar Auction Question Bank (300 Sentences)
 */

const fs = require('fs');
const path = require('path');

const questionsFile = path.join(__dirname, 'games', 'grammar-auction', 'questions.js');
const data = require(questionsFile);

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
console.log("GRAMMAR AUCTION 300 QUESTIONS COMPREHENSIVE VALIDATION");
console.log("==========================================================");

// 1. Array checks
assert(Array.isArray(data.grade7), "Grade 7 question bank is an array");
assert(Array.isArray(data.grade8), "Grade 8 question bank is an array");
assert(Array.isArray(data.all), "All questions bank is an array");

// 2. Count checks
assert(data.grade7.length === 150, `Grade 7 has exactly 150 questions (Actual: ${data.grade7.length})`);
assert(data.grade8.length === 150, `Grade 8 has exactly 150 questions (Actual: ${data.grade8.length})`);
assert(data.all.length === 300, `Total questions count is exactly 300 (Actual: ${data.all.length})`);

// 3. ID Uniqueness
const idSet = new Set();
let dupIds = 0;
data.all.forEach(q => {
  if (idSet.has(q.id)) {
    dupIds++;
    console.error(`Duplicate ID found: ${q.id}`);
  }
  idSet.add(q.id);
});
assert(dupIds === 0, `All 300 IDs are completely unique (Duplicate count: ${dupIds})`);

// 4. Sentence Uniqueness
const sentenceSet = new Set();
let dupSentences = 0;
data.all.forEach(q => {
  const normalized = q.sentence.trim().toLowerCase();
  if (sentenceSet.has(normalized)) {
    dupSentences++;
    console.error(`Duplicate sentence found: "${q.sentence}"`);
  }
  sentenceSet.add(normalized);
});
assert(dupSentences === 0, `All 300 sentences are completely unique (Duplicate count: ${dupSentences})`);

// 5. Schema Validation
let schemaErrors = 0;
data.all.forEach(q => {
  if (!q.id || typeof q.id !== 'string') schemaErrors++;
  if (q.grade !== 7 && q.grade !== 8) schemaErrors++;
  if (!q.topic || typeof q.topic !== 'string') schemaErrors++;
  if (!['easy', 'medium', 'hard'].includes(q.difficulty)) schemaErrors++;
  if (!q.sentence || typeof q.sentence !== 'string') schemaErrors++;
  if (typeof q.isCorrect !== 'boolean') schemaErrors++;
  if (!q.isCorrect && (!q.corrected || typeof q.corrected !== 'string')) schemaErrors++;
  if (!q.explanation || typeof q.explanation !== 'string' || q.explanation.length < 10) schemaErrors++;
});
assert(schemaErrors === 0, `All 300 questions satisfy the strict schema (Errors: ${schemaErrors})`);

// 6. Grade 7 Category Breakdown
const expectedG7Topics = [
  "Present Simple",
  "Present Continuous",
  "Present Simple vs Present Continuous",
  "Past Simple",
  "Past Continuous",
  "Past Perfect",
  "Mixed Past Tenses",
  "Used to / Would / Be used to",
  "Gerunds and Infinitives",
  "Modals and Mixed Grammar"
];

console.log("\n--- Grade 7 Topics & Balance ---");
let g7CatErrors = 0;
let g7CorrectCount = 0;
let g7IncorrectCount = 0;
expectedG7Topics.forEach(topic => {
  const items = data.grade7.filter(q => q.topic === topic);
  const correct = items.filter(q => q.isCorrect).length;
  const incorrect = items.filter(q => !q.isCorrect).length;
  const easy = items.filter(q => q.difficulty === 'easy').length;
  const medium = items.filter(q => q.difficulty === 'medium').length;
  const hard = items.filter(q => q.difficulty === 'hard').length;

  if (items.length !== 15 || easy !== 5 || medium !== 5 || hard !== 5) {
    g7CatErrors++;
    console.error(`G7 Topic '${topic}' has issue: Total ${items.length}, Easy: ${easy}, Med: ${medium}, Hard: ${hard}`);
  }
  g7CorrectCount += correct;
  g7IncorrectCount += incorrect;
});
assert(g7CatErrors === 0, "All 10 Grade 7 categories have exactly 15 questions with 5 easy, 5 medium, 5 hard");
assert(g7CorrectCount === 75 && g7IncorrectCount === 75, `Grade 7 balance: exactly ${g7CorrectCount} Correct vs ${g7IncorrectCount} Incorrect (50% / 50%)`);

// 7. Grade 8 Category Breakdown
const expectedG8Topics = [
  "Present and Past Tenses",
  "Past Simple / Past Continuous",
  "Past Perfect and Mixed Tenses",
  "Comparatives",
  "Superlatives",
  "Adjectives vs Adverbs",
  "Modals",
  "Future Forms",
  "Conditionals",
  "Passive Voice and Mixed Grammar"
];

console.log("\n--- Grade 8 Topics & Balance ---");
let g8CatErrors = 0;
let g8CorrectCount = 0;
let g8IncorrectCount = 0;
expectedG8Topics.forEach(topic => {
  const items = data.grade8.filter(q => q.topic === topic);
  const correct = items.filter(q => q.isCorrect).length;
  const incorrect = items.filter(q => !q.isCorrect).length;
  const easy = items.filter(q => q.difficulty === 'easy').length;
  const medium = items.filter(q => q.difficulty === 'medium').length;
  const hard = items.filter(q => q.difficulty === 'hard').length;

  if (items.length !== 15 || easy !== 5 || medium !== 5 || hard !== 5) {
    g8CatErrors++;
    console.error(`G8 Topic '${topic}' has issue: Total ${items.length}, Easy: ${easy}, Med: ${medium}, Hard: ${hard}`);
  }
  g8CorrectCount += correct;
  g8IncorrectCount += incorrect;
});
assert(g8CatErrors === 0, "All 10 Grade 8 categories have exactly 15 questions with 5 easy, 5 medium, 5 hard");
assert(g8CorrectCount === 75 && g8IncorrectCount === 75, `Grade 8 balance: exactly ${g8CorrectCount} Correct vs ${g8IncorrectCount} Incorrect (50% / 50%)`);

console.log("\n==========================================================");
console.log(`SUMMARY: ${passedTests} / ${totalTests} assertions passed.`);
console.log("==========================================================");

if (passedTests === totalTests) {
  console.log("🎉 ALL QUESTION VALIDATION TESTS PASSED PERFECTLY!");
  process.exit(0);
} else {
  console.error("Some tests failed.");
  process.exit(1);
}
