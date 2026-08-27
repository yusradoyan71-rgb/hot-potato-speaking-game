const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Unit 1: Life Online - Complete Skills Lesson Plan</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

  @page {
    size: A4 portrait;
    margin: 10mm 10mm 10mm 10mm;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  body {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #1e293b;
    background-color: #ffffff;
    font-size: 8.5pt;
    line-height: 1.35;
  }

  .page {
    page-break-after: always;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .page:last-child {
    page-break-after: avoid;
  }

  /* Cover & Header */
  .cover {
    background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 55%, #312e81 100%);
    color: #ffffff;
    padding: 16px 18px;
    border-radius: 8px;
    margin-bottom: 12px;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
  }

  .cover-badge {
    display: inline-block;
    background: rgba(99, 102, 241, 0.35);
    border: 1px solid rgba(165, 180, 252, 0.4);
    color: #c7d2fe;
    font-size: 7pt;
    font-weight: 800;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    padding: 2px 8px;
    border-radius: 12px;
    margin-bottom: 6px;
  }

  .cover h1 {
    font-size: 16pt;
    font-weight: 800;
    letter-spacing: -0.3px;
    line-height: 1.15;
    margin-bottom: 4px;
    color: #ffffff;
  }

  .cover-subtitle {
    font-size: 8.5pt;
    color: #cbd5e1;
    font-weight: 400;
    margin-bottom: 10px;
  }

  .meta-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: 8px;
  }

  .meta-label {
    color: #94a3b8;
    text-transform: uppercase;
    font-size: 6pt;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .meta-val {
    color: #f8fafc;
    font-weight: 700;
    font-size: 7.5pt;
    margin-top: 1px;
  }

  /* Section Title */
  .section-title {
    font-size: 10.5pt;
    font-weight: 800;
    color: #0f172a;
    border-bottom: 2px solid #4f46e5;
    padding-bottom: 4px;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .section-title span.num {
    background: #4f46e5;
    color: white;
    width: 18px;
    height: 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-size: 7.5pt;
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 8px;
    font-size: 7.5pt;
  }

  th {
    background-color: #f1f5f9;
    color: #0f172a;
    font-weight: 700;
    text-align: left;
    padding: 4px 6px;
    border: 1px solid #cbd5e1;
    font-size: 7pt;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  td {
    padding: 3.5px 6px;
    border: 1px solid #e2e8f0;
    vertical-align: top;
    line-height: 1.28;
  }

  tr:nth-child(even) td {
    background-color: #f8fafc;
  }

  /* Cards */
  .card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 8px 10px;
    margin-bottom: 8px;
  }

  /* 1-Page Lesson Card */
  .lesson-sheet {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  .lesson-header {
    border-bottom: 1.5px solid #e2e8f0;
    padding-bottom: 5px;
    margin-bottom: 6px;
  }

  .lesson-header h2 {
    font-size: 11pt;
    font-weight: 800;
    color: #1e1b4b;
    margin-bottom: 3px;
  }

  .lesson-pills {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }

  .pill {
    font-size: 6.5pt;
    font-weight: 700;
    padding: 1.5px 6px;
    border-radius: 10px;
    text-transform: uppercase;
  }

  .pill-main { background: #e0e7ff; color: #3730a3; border: 1px solid #c7d2fe; }
  .pill-sec { background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; }
  .pill-time { background: #fef3c7; color: #92400e; border: 1px solid #fde68a; }
  .pill-page { background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1; }

  .objective-box {
    background: #f8fafc;
    border-left: 3px solid #4f46e5;
    padding: 4px 8px;
    margin-bottom: 5px;
    font-size: 7.8pt;
    line-height: 1.3;
  }
  .objective-box strong { color: #312e81; }

  .adaptation-box {
    background: #fffbeb;
    border-left: 3px solid #f59e0b;
    padding: 3.5px 8px;
    margin-bottom: 6px;
    font-size: 7.2pt;
    color: #78350f;
    line-height: 1.25;
  }

  /* Timetable */
  .timetable { margin-bottom: 6px; }
  .timetable th { background: #e2e8f0; color: #1e293b; font-size: 6.8pt; padding: 3px 5px; }
  .timetable td { font-size: 7.2pt; padding: 3px 5px; line-height: 1.22; }

  /* Procedures */
  .procedure-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
    margin-bottom: 5px;
  }

  .proc-box {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 5px;
    padding: 5px 7px;
    font-size: 7.2pt;
    line-height: 1.25;
  }

  .proc-box h4 {
    font-size: 7pt;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 2px;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .output-box {
    background: #eff6ff;
    border: 1px dashed #60a5fa;
    border-radius: 5px;
    padding: 4px 7px;
    font-size: 7.2pt;
    color: #1e40af;
    margin-bottom: 5px;
    line-height: 1.22;
  }

  /* Differentiation */
  .diff-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
    margin-bottom: 5px;
  }

  .diff-col {
    background: #f8fafc;
    border-radius: 4px;
    padding: 4px 6px;
    font-size: 6.8pt;
    border: 1px solid #e2e8f0;
    line-height: 1.2;
  }

  .diff-col.easier { border-top: 2px solid #10b981; }
  .diff-col.standard { border-top: 2px solid #3b82f6; }
  .diff-col.challenge { border-top: 2px solid #8b5cf6; }
  .diff-col h5 { font-size: 6.8pt; text-transform: uppercase; font-weight: 800; margin-bottom: 2px; }
  .diff-col.easier h5 { color: #047857; }
  .diff-col.standard h5 { color: #1d4ed8; }
  .diff-col.challenge h5 { color: #6d28d9; }

  /* Footer tags */
  .footer-tags {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3px 6px;
    background: #f1f5f9;
    padding: 4px 7px;
    border-radius: 4px;
    font-size: 6.8pt;
    color: #334155;
    line-height: 1.2;
  }

  .footer-tags div strong { color: #0f172a; }

  .badge {
    display: inline-block;
    padding: 1px 5px;
    border-radius: 3px;
    font-size: 6.5pt;
    font-weight: 700;
  }
  .badge-core { background: #dcfce7; color: #166534; }
  .badge-support { background: #e0f2fe; color: #075985; }
  .badge-grammar { background: #fee2e2; color: #991b1b; }

</style>
</head>
<body>

<!-- ==================== PAGE 1: COVER & ANALYSIS ==================== -->
<div class="page">
  <div class="cover">
    <div class="cover-badge">Middle-School EFL/ESL Skills Curriculum</div>
    <h1>UNIT 1: LIFE ONLINE</h1>
    <div class="cover-subtitle">Complete 35-Minute Lesson Plans, Pedagogical Adaptations & Skills Framework</div>
    <div class="meta-grid">
      <div class="meta-item">
        <div class="meta-label">Coursebook Source</div>
        <div class="meta-val">Student's Book pp. 9–20</div>
      </div>
      <div class="meta-item">
        <div class="meta-label">Lesson Duration</div>
        <div class="meta-val">Exactly 35 Mins / Lesson</div>
      </div>
      <div class="meta-item">
        <div class="meta-label">Total Unit Scope</div>
        <div class="meta-val">11 Dedicated Lessons</div>
      </div>
      <div class="meta-item">
        <div class="meta-label">Teacher Role</div>
        <div class="meta-val">Skills & Communication</div>
      </div>
    </div>
  </div>

  <div class="section-title"><span class="num">1</span> Unit 1 — Quick Analysis</div>
  <p style="font-size: 7.8pt; color: #475569; margin-bottom: 6px;">Unit 1 (<strong>Life online</strong>) focuses on adolescent digital habits, social media algorithms, applications, eSports, and global connectivity. Below is the complete content inventory extracted directly from Student's Book pages 9–20.</p>

  <table>
    <thead>
      <tr>
        <th style="width: 22%;">Component</th>
        <th>Exact Coursebook Content & References</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Unit Objectives</strong></td>
        <td>
          • Discuss video preferences and social media habits (SB p. 9)<br>
          • Understand a Q&A article on algorithms & match heading questions to paragraphs (SB p. 10)<br>
          • Learn and use 17 social media/internet action verbs in context (SB p. 11)<br>
          • Describe, compare, and speculate about photos; use filler phrases to buy time (SB p. 13)<br>
          • Listen to a podcast on social-impact apps & tackle multiple-choice distractor strategies (SB p. 14)<br>
          • Master app categories & verb-noun collocations (SB p. 15)<br>
          • Write a structured 4-paragraph 'for and against' essay with linkers (SB p. 17)<br>
          • Read and interpret an infographic on digital inequality (UN SDG 10: Reduced Inequalities) (SB p. 18)<br>
          • Watch & reflect on video documentary: <em>The social media detox</em> (SB p. 19)<br>
          • Complete a 10-item communicative class survey and unit memory challenge (SB p. 20)
        </td>
      </tr>
      <tr>
        <td><strong>Target Vocabulary</strong></td>
        <td>
          • <strong>Social Media Verbs:</strong> <em>access, browse, click, download, follow, log off, log on, post, save, scroll, search, share, swipe, tap, trend, type, upload, view</em> (p. 11)<br>
          • <strong>App Categories:</strong> <em>art & design, dating, food & drink, health & fitness, mobile banking, music, navigation, photography, productivity, reference</em> (p. 15)<br>
          • <strong>Collocations:</strong> <em>check bank balance, draw sketches, add effects/filters, look up a definition, meet a deadline, order a takeaway, reach your destination, start a new relationship, stream playlists, track workouts</em> (p. 15)<br>
          • <strong>Morphology / Suffixes:</strong> <em>-ing, -tion, -sion, -ment</em> (p. 14)
        </td>
      </tr>
      <tr>
        <td><strong>Functional Language</strong></td>
        <td>
          • <strong>Comparing & Contrasting:</strong> <em>Both photos show..., One similarity is that..., In the first photo..., whereas/while in the second photo..., One obvious difference is that...</em> (p. 13)<br>
          • <strong>Speculating:</strong> <em>Everyone seems happy, She could be..., It looks as if...</em> | <strong>Concluding:</strong> <em>On the whole..., To sum up...</em> (p. 13)<br>
          • <strong>Buying Time / Fillers:</strong> <em>"Let me see...", "Let me think for a moment...", "I'm not really sure...", "Er, basically...", repeating question</em> (p. 13)<br>
          • <strong>Essay Linkers:</strong> <em>First of all, Firstly, Secondly, In addition, Furthermore, On the one hand, On the other hand, However, whereas, In conclusion, To sum up, On balance</em> (p. 17)
        </td>
      </tr>
      <tr>
        <td><strong>Reading Texts</strong></td>
        <td>
          • <em>"HOW MUCH DOES SOCIAL MEDIA KNOW ABOUT YOU?"</em> (Q&A on algorithms, targeted ads, echo chambers) (p. 10)<br>
          • <em>"All you need to know about TikTok"</em> (Contextualized text) (p. 11)<br>
          • <em>"Scroll Free September"</em> (Digital wellbeing text) (p. 12)<br>
          • <em>"App of the Week: AILUNA"</em> (Review of eco-challenge app) (p. 15)<br>
          • <em>"Should eSports be an Olympic Sport?"</em> (Model 4-paragraph essay) (p. 17)<br>
          • Infographic: <em>"Connecting with Others"</em> (UN SDG 10 data) (p. 18)
        </td>
      </tr>
      <tr>
        <td><strong>Audio & Video</strong></td>
        <td>
          • Audio 1.1: Summary check (p. 11) | Audio 1.2: TikTok verbs (p. 11)<br>
          • Audio 1.3 & 1.4: Model photo description & filler usage (p. 13)<br>
          • Audio 1.5: <em>Technology Today</em> podcast (5 social impact apps) (p. 14)<br>
          • Audio 1.6: Pronunciation /s/, /z/, /ʃ/, /ʒ/ (p. 16)<br>
          • Video V1.1: <em>The social media detox</em> (Mon's 7-day experiment) (p. 19)
        </td>
      </tr>
    </tbody>
  </table>
</div>

<!-- ==================== PAGE 2: DECISION MATRIX & RATIONALE ==================== -->
<div class="page">
  <div class="section-title"><span class="num">2</span> Skills vs Main Course Decision Matrix</div>
  <p style="font-size: 7.5pt; color: #475569; margin-bottom: 5px;">To prevent duplicate grammar teaching and ensure pure communicative skill development, all coursebook components are categorized below:</p>

  <table>
    <thead>
      <tr>
        <th style="width: 25%;">Unit Content</th>
        <th style="width: 12%;">Page</th>
        <th style="width: 16%;">Classification</th>
        <th>Pedagogical Application in Skills Lessons</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Unit Opener & Video Stills</strong></td>
        <td>SB p. 9</td>
        <td><span class="badge badge-core">Core Skills</span></td>
        <td>Use fully for speaking fluency, vocabulary activation, and personal video habit interviews.</td>
      </tr>
      <tr>
        <td><strong>Reading: Q&A on Algorithms</strong></td>
        <td>SB p. 10</td>
        <td><span class="badge badge-core">Core Skills</span></td>
        <td>Skimming, scanning, matching heading questions, paragraph functions, and textual evidence citing.</td>
      </tr>
      <tr>
        <td><strong>Critical Thinking & TikTok Text</strong></td>
        <td>SB p. 11</td>
        <td><span class="badge badge-core">Core Skills</span></td>
        <td>Reading summary completion, structured ethics debate, and contextualized action verb pair practice.</td>
      </tr>
      <tr>
        <td><strong>Grammar: Present Tense & State Verbs</strong></td>
        <td>SB p. 12</td>
        <td><span class="badge badge-grammar">Main Course</span></td>
        <td><strong>DO NOT teach as grammar.</strong> Adapt "Scroll Free September" theme as conversational stimulus in Video/Detox lesson.</td>
      </tr>
      <tr>
        <td><strong>Speaking: Photos & Buying Time</strong></td>
        <td>SB p. 13</td>
        <td><span class="badge badge-core">Core Skills</span></td>
        <td>Explicit functional language instruction: comparing, contrasting, speculating, and buying time with fillers.</td>
      </tr>
      <tr>
        <td><strong>Listening: Podcast on Apps & Suffixes</strong></td>
        <td>SB p. 14</td>
        <td><span class="badge badge-core">Core Skills</span></td>
        <td>Listening strategies (gist vs detail, distractor trap awareness) + Noun suffix morphology race.</td>
      </tr>
      <tr>
        <td><strong>Reading: Ailuna & App Collocations</strong></td>
        <td>SB p. 15</td>
        <td><span class="badge badge-core">Core Skills</span></td>
        <td>Authentic app review reading, vocabulary collocations, and collaborative problem-solving pitch.</td>
      </tr>
      <tr>
        <td><strong>Grammar: Gerunds/Infinitives & Tips</strong></td>
        <td>SB p. 16</td>
        <td><span class="badge badge-grammar">Main Course</span></td>
        <td><strong>DO NOT teach verb rules.</strong> Extract the pronunciation drill (/s/, /z/, /ʃ/, /ʒ/) for fluency enhancement.</td>
      </tr>
      <tr>
        <td><strong>Writing: 'For and Against' Essay</strong></td>
        <td>SB p. 17</td>
        <td><span class="badge badge-core">Core Skills</span></td>
        <td>Split into 2 lessons: Lesson 7 (Model analysis & Linkers) and Lesson 8 (Guided drafting & Peer review).</td>
      </tr>
      <tr>
        <td><strong>Global Goals: Digital Connection (SDG 10)</strong></td>
        <td>SB p. 18</td>
        <td><span class="badge badge-core">Core Skills</span></td>
        <td>Infographic visual literacy, data interpretation, and critical discussion on the digital divide.</td>
      </tr>
      <tr>
        <td><strong>Video: The Social Media Detox & Project</strong></td>
        <td>SB p. 19</td>
        <td><span class="badge badge-core">Core Skills</span></td>
        <td>Viewing comprehension, personal digital balance reflection, and project pitch preparation.</td>
      </tr>
      <tr>
        <td><strong>Challenge: Survey & Memory Game</strong></td>
        <td>SB p. 20</td>
        <td><span class="badge badge-core">Core Skills</span></td>
        <td>Kinesthetic class survey ("Find Someone Who") and interactive communicative review challenges.</td>
      </tr>
    </tbody>
  </table>

  <div class="section-title" style="margin-top: 8px;"><span class="num">3</span> Number of Lessons & Pedagogical Rationale</div>
  <div class="card" style="background: #f8fafc; border-left: 3.5px solid #4f46e5; padding: 6px 10px; margin-bottom: 0;">
    <p style="font-size: 9.5pt; font-weight: 800; color: #1e1b4b; margin-bottom: 4px;">Unit 1 requires exactly 11 × 35-minute Skills lessons.</p>
    <ul style="font-size: 7.5pt; color: #334155; padding-left: 14px;">
      <li><strong>Rigorous 35-Minute Pacing:</strong> A 35-minute block accommodates exactly one clean pedagogical cycle: Warm-up (4–5m) &rarr; Pre-task Input (6–8m) &rarr; Main Task (10–12m) &rarr; Communicative Output (8–10m) &rarr; Exit Ticket (2–3m). Rushing multiple spreads into 35 minutes reduces lessons to superficial answer-checking.</li>
      <li><strong>Writing Process Division (2 Lessons):</strong> Middle schoolers cannot analyze an essay model, master 11 discourse linkers, brainstorm arguments, draft 4 paragraphs, and peer-edit in 35 minutes. Splitting this into Deconstruction (L7) and Drafting/Peer Editing (L8) guarantees high-quality student writing.</li>
      <li><strong>Rich Authentic Visuals & Media:</strong> Dedicated lessons are allocated for the UN SDG 10 Infographic (L9) and the Video Documentary (L10), allowing genuine critical thinking and spoken response.</li>
      <li><strong>Shy Student Scaffolding:</strong> All lessons implement a low-anxiety progression (<em>Think &rarr; Pair &rarr; Small Group &rarr; Whole Class</em>) ensuring active output without intimidating solo spotlights.</li>
    </ul>
  </div>
</div>

<!-- ==================== PAGE 3: LESSON MAP ==================== -->
<div class="page">
  <div class="section-title"><span class="num">4</span> Unit 1 Lesson Map Overview</div>
  <p style="font-size: 7.8pt; color: #475569; margin-bottom: 6px;">Master overview of the 11-lesson skills sequence showing the primary and secondary skills, coursebook pages, and measurable student outcomes.</p>

  <table>
    <thead>
      <tr>
        <th style="width: 7%;">Lesson</th>
        <th style="width: 25%;">Focus Topic</th>
        <th style="width: 14%;">Main Skill</th>
        <th style="width: 14%;">Secondary Skill</th>
        <th style="width: 15%;">CB Pages</th>
        <th>Main Measurable Outcome</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>L1</strong></td>
        <td>Unit Launch & Online Video Culture</td>
        <td>Speaking</td>
        <td>Vocabulary</td>
        <td>SB p. 9 (TB 30–31)</td>
        <td>Discuss video genres & interview partner on social media habits using full sentences and reasons.</td>
      </tr>
      <tr>
        <td><strong>L2</strong></td>
        <td>Reading 1: How Algorithms Work</td>
        <td>Reading</td>
        <td>Speaking</td>
        <td>SB p. 10 (TB 32–33)</td>
        <td>Skim, scan, and match 6 heading questions to Q&A paragraphs using Reading Expert strategies.</td>
      </tr>
      <tr>
        <td><strong>L3</strong></td>
        <td>Reading 2: TikTok & Data Tracking</td>
        <td>Reading / Crit. Thinking</td>
        <td>Vocabulary / Speaking</td>
        <td>SB p. 11 (TB 34–35)</td>
        <td>Complete a reading summary and debate data collection using 17 social media action verbs.</td>
      </tr>
      <tr>
        <td><strong>L4</strong></td>
        <td>Speaking: Comparing & Speculating</td>
        <td>Speaking</td>
        <td>Listening</td>
        <td>SB p. 13 (TB 38–39)</td>
        <td>Compare 2 educational photos for 60 seconds using contrast linkers (<em>whereas</em>) and fillers.</td>
      </tr>
      <tr>
        <td><strong>L5</strong></td>
        <td>Listening: Apps That Make a Change</td>
        <td>Listening</td>
        <td>Vocabulary</td>
        <td>SB p. 14 (TB 40–41)</td>
        <td>Answer 5 multiple-choice questions on a podcast avoiding distractors; apply noun suffixes.</td>
      </tr>
      <tr>
        <td><strong>L6</strong></td>
        <td>Vocabulary & App Problem-Solving</td>
        <td>Speaking</td>
        <td>Reading</td>
        <td>SB pp. 14–15 (TB 41–43)</td>
        <td>Pitch an app concept and match 10 app categories and collocations to solve local problems.</td>
      </tr>
      <tr>
        <td><strong>L7</strong></td>
        <td>Writing 1: Deconstructing Essays</td>
        <td>Reading for Writing</td>
        <td>Critical Thinking</td>
        <td>SB p. 17 Ex 1–4 (TB 46–47)</td>
        <td>Classify arguments for/against and organize a 4-paragraph essay plan using 4 linker types.</td>
      </tr>
      <tr>
        <td><strong>L8</strong></td>
        <td>Writing 2: Drafting & Peer Review</td>
        <td>Writing</td>
        <td>Peer Assessment</td>
        <td>SB p. 17 Ex 5 (TB 46–47)</td>
        <td>Write a 4-paragraph 'for & against' essay on age limits and complete a peer review checklist.</td>
      </tr>
      <tr>
        <td><strong>L9</strong></td>
        <td>Global Goals: Digital Inequality</td>
        <td>Reading (Infographics)</td>
        <td>Speaking</td>
        <td>SB p. 18 (TB 48–49)</td>
        <td>Interpret an infographic on UN SDG 10 and discuss solutions for the digital divide in groups.</td>
      </tr>
      <tr>
        <td><strong>L10</strong></td>
        <td>Video: The Social Media Detox</td>
        <td>Viewing / Listening</td>
        <td>Speaking</td>
        <td>SB p. 19 Ex 3–6 (TB 50–51)</td>
        <td>Extract details from documentary V1.1 and evaluate personal digital detox habits in pairs.</td>
      </tr>
      <tr>
        <td><strong>L11</strong></td>
        <td>Review Challenge & Mini-Pitches</td>
        <td>Spoken Interaction</td>
        <td>Unit Review</td>
        <td>SB pp. 19–20 (TB 51–53)</td>
        <td>Conduct a 10-item "Find Someone Who" survey and solve 4 memory challenge prompts in teams.</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- ==================== PAGES 4-14: LESSONS 1 TO 11 ==================== -->

<!-- LESSON 1 -->
<div class="page">
  <div class="lesson-sheet">
    <div>
      <div class="lesson-header">
        <h2>LESSON 1 — Video Culture & Social Media Habits</h2>
        <div class="lesson-pills">
          <span class="pill pill-main">Main: Speaking</span>
          <span class="pill pill-sec">Sec: Vocabulary</span>
          <span class="pill pill-time">35 Minutes</span>
          <span class="pill pill-page">SB p. 9 / TB pp. 30–31</span>
        </div>
      </div>
      <div class="objective-box">
        <strong>Lesson Objective:</strong> Students will be able to describe their online video preferences and interview a partner about their social media habits using targeted question prompts and providing at least one supporting reason.
      </div>
      <div class="adaptation-box">
        <strong>Coursebook Adaptation:</strong> SB p. 9 Ex 1–2 adapted from open discussion into a "Top 3 Ranking & Pair Pitch". SB p. 9 Ex 3 converted into a timed 4-minute "Speed Interview" with scaffolded response frames.
      </div>
      <table class="timetable">
        <thead>
          <tr>
            <th style="width: 12%;">Time</th>
            <th style="width: 18%;">Stage</th>
            <th>Teacher Action</th>
            <th>Student Action</th>
            <th style="width: 14%;">Interaction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0–5m (5m)</td>
            <td>Hook & Lead-in</td>
            <td>Writes: <em>"I love my smartphone because..." / "I hate my smartphone because..."</em> Elicits ideas.</td>
            <td>Complete stems individually; compare with desk partner. 2 volunteers share.</td>
            <td>Indiv &rarr; Pair &rarr; Class</td>
          </tr>
          <tr>
            <td>5–12m (7m)</td>
            <td>Vocabulary & Ranking</td>
            <td>Directs to video stills 1–5 on p. 9. Elicits examples of 'life hacks' and 'pranks'. Models speech bubble.</td>
            <td>Match stills to genres; pick personal Top 3 video categories; explain choices to partner.</td>
            <td>Individual &rarr; Pair</td>
          </tr>
          <tr>
            <td>12–22m (10m)</td>
            <td>Speed Interview (Ex 3)</td>
            <td>Sets up Pair Interview (p. 9 Ex 3). Writes stems on board. Sets 4-minute timer per round.</td>
            <td>Partner A interviews B for 4 min (Qs 1–3). Roles swap for Qs 4–6. Note down key answers.</td>
            <td>Pair Work (Timed)</td>
          </tr>
          <tr>
            <td>22–30m (8m)</td>
            <td>Group Synthesis</td>
            <td>Combines pairs into 4s. Challenges them to find 1 shared habit and calculate average screen time.</td>
            <td>Tally most popular platform and average screen time in group. Spokesperson shares 1 stat.</td>
            <td>Small Group (4s)</td>
          </tr>
          <tr>
            <td>30–33m (3m)</td>
            <td>Feedback & Error Focus</td>
            <td>Highlights strong vocabulary heard; writes 2 anonymous student slips on board for correction.</td>
            <td>Self-correct errors on board; record 2 natural collocations in notebook.</td>
            <td>Whole Class</td>
          </tr>
          <tr>
            <td>33–35m (2m)</td>
            <td>Exit Ticket</td>
            <td>Prompts: <em>"Write 1 sentence: 'My partner spends X hours on [app] because...'"</em></td>
            <td>Write 1 complete sentence on an exit slip and hand to teacher.</td>
            <td>Individual</td>
          </tr>
        </tbody>
      </table>
      <div class="procedure-grid">
        <div class="proc-box">
          <h4>Teacher Procedure</h4>
          "Look at Exercise 3 on page 9. Choose questions 1, 2, 3, and 6. Use these starters on the board: <em>'I mainly use... to follow/watch...'</em> and <em>'I spend roughly... hours because...'</em> Partner A has 4 minutes to ask. Partner B must answer in full sentences with a reason. Go!"
        </div>
        <div class="proc-box">
          <h4>Student Procedure</h4>
          Student A: <em>"Which platforms do you use and what for?"</em> Student B: <em>"I use YouTube to watch gaming walkthroughs because they help me pass difficult levels."</em>
        </div>
      </div>
      <div class="output-box">
        <strong>Expected Output:</strong> Structured spoken exchanges in pairs; completed exit slip with habit + duration + purpose clause.
      </div>
      <div class="diff-grid">
        <div class="diff-col easier">
          <h5>Easier Tier</h5>
          Provide prompt bank: <em>YouTube / TikTok | gaming / tutorials | it relaxes me</em>.
        </div>
        <div class="diff-col standard">
          <h5>Standard Tier</h5>
          Answer all interview questions in full sentences with supporting reasons.
        </div>
        <div class="diff-col challenge">
          <h5>Challenge Tier</h5>
          Ask at least 1 impromptu follow-up question per prompt (e.g., <em>"Who is your favorite creator?"</em>).
        </div>
      </div>
    </div>
    <div class="footer-tags">
      <div><strong>Fast Finisher:</strong> Write 3 rules for a "Screen-Free Sunday" challenge.</div>
      <div><strong>If Slow:</strong> Trim Group Synthesis to 4m; do whole-class show of hands.</div>
      <div><strong>Assessment:</strong> Exit slip habit sentence + partner check.</div>
      <div><strong>Teacher Prep:</strong> SB p. 9 displayed; write sentence stems on board.</div>
    </div>
  </div>
</div>

<!-- LESSON 2 -->
<div class="page">
  <div class="lesson-sheet">
    <div>
      <div class="lesson-header">
        <h2>LESSON 2 — Reading 1: How Algorithms Work</h2>
        <div class="lesson-pills">
          <span class="pill pill-main">Main: Reading</span>
          <span class="pill pill-sec">Sec: Speaking</span>
          <span class="pill pill-time">35 Minutes</span>
          <span class="pill pill-page">SB p. 10 / TB pp. 32–33</span>
        </div>
      </div>
      <div class="objective-box">
        <strong>Lesson Objective:</strong> Students will be able to skim, scan, and match 6 heading questions (A–H) to the correct paragraphs in the article <em>"How Much Does Social Media Know About You?"</em> by identifying clue words and eliminating distractors.
      </div>
      <div class="adaptation-box">
        <strong>Coursebook Adaptation:</strong> SB p. 10 Ex 1 combined with lead-in hook. SB p. 10 Ex 2 & Reading Expert turned into a 2-step "Match Race" followed by "Pair Evidence Detective".
      </div>
      <table class="timetable">
        <thead>
          <tr>
            <th style="width: 12%;">Time</th>
            <th style="width: 18%;">Stage</th>
            <th>Teacher Action</th>
            <th>Student Action</th>
            <th style="width: 14%;">Interaction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0–4m (4m)</td>
            <td>Hook & Prediction</td>
            <td>Displays title: <em>"HOW MUCH DOES SOCIAL MEDIA KNOW ABOUT YOU?"</em> Asks how ads appear.</td>
            <td>Brainstorm in pairs: list 3 data points tracked. Elicit 'Algorithm'.</td>
            <td>Pair &rarr; Whole Class</td>
          </tr>
          <tr>
            <td>4–9m (5m)</td>
            <td>Strategy Focus</td>
            <td>Reviews READING EXPERT box (p. 10). Reads headings A–H. Warns that 2 are extra distractors.</td>
            <td>Read 8 headings (A–H). Underline clue words (<em>controversial, beat, money, definition</em>).</td>
            <td>Individual &rarr; Class</td>
          </tr>
          <tr>
            <td>9–19m (10m)</td>
            <td>Silent Match Race</td>
            <td>Sets 4-minute timer for silent reading. Instructs students to match letters A–H to paragraphs 1–6.</td>
            <td>Read silently. Match headings (1D, 2B, 3A, 4E, 5H, 6F). Underline evidence in text.</td>
            <td>Individual Work</td>
          </tr>
          <tr>
            <td>19–27m (8m)</td>
            <td>Pair Evidence Detective</td>
            <td>"Pair Detective": Instructs pairs to prove answers by reading aloud exact sentences with clue words.</td>
            <td>Compare matches with partner. Quote text lines that justify each answer. Identify distractors C & G.</td>
            <td>Pair Work</td>
          </tr>
          <tr>
            <td>27–32m (5m)</td>
            <td>Whole-Class Check</td>
            <td>Confirms answers (1D, 2B, 3A, 4E, 5H, 6F). Explains why C (time) and G (stop adverts) are distractors.</td>
            <td>Verify answers in book; explain why distractors do not fit.</td>
            <td>Whole Class</td>
          </tr>
          <tr>
            <td>32–35m (3m)</td>
            <td>Exit Ticket</td>
            <td>Displays prompt: <em>"According to paragraph 1, what is an algorithm? Write 1 sentence."</em></td>
            <td>Write 1-sentence definition based on text evidence on exit slip.</td>
            <td>Individual</td>
          </tr>
        </tbody>
      </table>
      <div class="procedure-grid">
        <div class="proc-box">
          <h4>Teacher Procedure</h4>
          "Look at the Reading Expert box. Step 1: Read the text quickly for the main idea. You have 4 minutes to match headings A–H to gaps 1–6. Remember: TWO headings are extra! Underline the sentence that proves your choice."
        </div>
        <div class="proc-box">
          <h4>Student Procedure</h4>
          For Paragraph 5, locate clue words: <em>'echo chamber', 'only hear one side', 'hard to reach balanced judgement'</em> &rarr; Match with <strong>H</strong> (<em>Why are algorithms controversial?</em>).
        </div>
      </div>
      <div class="output-box">
        <strong>Expected Output:</strong> Correct matching (1D, 2B, 3A, 4E, 5H, 6F) with underlined evidence; 1-sentence text definition of algorithm.
      </div>
      <div class="diff-grid">
        <div class="diff-col easier">
          <h5>Easier Tier</h5>
          Tell students that headings C and G are distractors (choose 6 from 6).
        </div>
        <div class="diff-col standard">
          <h5>Standard Tier</h5>
          Independently match all 8 headings to 6 paragraphs and identify distractors.
        </div>
        <div class="diff-col challenge">
          <h5>Challenge Tier</h5>
          Write an original heading for Paragraph 5 and 6 before reading options A–H.
        </div>
      </div>
    </div>
    <div class="footer-tags">
      <div><strong>Fast Finisher:</strong> Find and define 3 terms: <em>echo chamber, filter out, targeted ads</em>.</div>
      <div><strong>If Slow:</strong> Model Paragraphs 1 & 2 together with whole class before pair work.</div>
      <div><strong>Assessment:</strong> Exit ticket definition & evidence check.</div>
      <div><strong>Teacher Prep:</strong> SB p. 10 bookmarked; display headings on board.</div>
    </div>
  </div>
</div>

<!-- LESSON 3 -->
<div class="page">
  <div class="lesson-sheet">
    <div>
      <div class="lesson-header">
        <h2>LESSON 3 — Reading 2: TikTok & Data Tracking Debate</h2>
        <div class="lesson-pills">
          <span class="pill pill-main">Main: Reading / Crit. Thinking</span>
          <span class="pill pill-sec">Sec: Vocabulary</span>
          <span class="pill pill-time">35 Minutes</span>
          <span class="pill pill-page">SB p. 11 / TB pp. 34–35</span>
        </div>
      </div>
      <div class="objective-box">
        <strong>Lesson Objective:</strong> Students will be able to complete a reading summary with text-based vocabulary and debate the ethics of data collection using 17 target social media action verbs in a structured pair interview.
      </div>
      <div class="adaptation-box">
        <strong>Coursebook Adaptation:</strong> SB p. 11 Ex 3 completed as timed scan with Audio 1.1. SB p. 11 Ex 4 expanded into a structured pair debate. SB p. 11 Ex 5 & 6 turned into an interactive verb interview.
      </div>
      <table class="timetable">
        <thead>
          <tr>
            <th style="width: 12%;">Time</th>
            <th style="width: 18%;">Stage</th>
            <th>Teacher Action</th>
            <th>Student Action</th>
            <th style="width: 14%;">Interaction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0–5m (5m)</td>
            <td>Summary Scan (Ex 3)</td>
            <td>Sets 3-minute limit for Ex 3 summary. Plays Audio 1.1 to confirm missing 1-word gaps.</td>
            <td>Scan p. 10 text; fill summary (1. algorithms, 2. feed, 3. content, 4. collect, 5. share, etc.). Check audio.</td>
            <td>Individual &rarr; Class</td>
          </tr>
          <tr>
            <td>5–13m (8m)</td>
            <td>Data Ethics Debate (Ex 4)</td>
            <td>Writes: <em>"Is data collection GOOD or BAD?"</em> Models speech bubbles (<em>"saves time"</em> vs <em>"manipulation"</em>).</td>
            <td>Write 1 reason in notebook. Pair debate: Student A (pro: convenience), Student B (con: privacy).</td>
            <td>Indiv &rarr; Pair &rarr; Class</td>
          </tr>
          <tr>
            <td>13–21m (8m)</td>
            <td>Contextual Verbs (Ex 5)</td>
            <td>Directs to <em>"All you need to know about TikTok"</em>. Plays Audio 1.2. Highlights: <em>scroll, swipe, tap, trend</em>.</td>
            <td>Read text; choose correct verb options among 17 pairs (<em>post, log on, scroll, swipe</em>). Check with audio.</td>
            <td>Individual &rarr; Class</td>
          </tr>
          <tr>
            <td>21–30m (9m)</td>
            <td>Pair Verb Interview (Ex 6)</td>
            <td>Instructs completion of questionnaire (Ex 6). Pairs interview each other using Qs 1, 3, 6, 7. Monitors verbs.</td>
            <td>Complete gaps (1. log on, 3. scrolling, 4. swipe, 7. trending). Interview partner; note down answers.</td>
            <td>Pair Work</td>
          </tr>
          <tr>
            <td>30–33m (3m)</td>
            <td>Partner Report</td>
            <td>Asks: <em>"What was the most surprising habit your partner shared?"</em> Elicits 2 reports.</td>
            <td>Report: <em>"Ali logs on 15 times a day, but he never posts or uploads videos."</em></td>
            <td>Whole Class</td>
          </tr>
          <tr>
            <td>33–35m (2m)</td>
            <td>Exit Ticket</td>
            <td>Prompts: <em>"Write 2 sentences using 2 verbs from Ex 5 (e.g., scroll through / upload)."</em></td>
            <td>Write 2 personalized sentences on exit slip.</td>
            <td>Individual</td>
          </tr>
        </tbody>
      </table>
      <div class="procedure-grid">
        <div class="proc-box">
          <h4>Teacher Procedure</h4>
          "Look at the speech bubbles on page 11. One says data tracking is good because you see relevant content; the other says it feels like manipulation. In your notebooks write: <em>'In my view, data collection is... because...'</em> Then share with your shoulder partner."
        </div>
        <div class="proc-box">
          <h4>Student Procedure</h4>
          Student A: <em>"I think it's useful because I find music easily."</em> Student B: <em>"I don't agree. Companies collect data to make money from adverts."</em>
        </div>
      </div>
      <div class="output-box">
        <strong>Expected Output:</strong> Completed summary (Ex 3), TikTok verbs checked (Ex 5), and oral pair interview using target verbs.
      </div>
      <div class="diff-grid">
        <div class="diff-col easier">
          <h5>Easier Tier</h5>
          Provide verb definition list: <em>scroll (move down), swipe (move across), tap (touch screen)</em>.
        </div>
        <div class="diff-col standard">
          <h5>Standard Tier</h5>
          Complete Ex 5 & 6 independently; conduct interview using full sentences.
        </div>
        <div class="diff-col challenge">
          <h5>Challenge Tier</h5>
          Argue from the perspective of an advertiser vs a privacy activist in the debate.
        </div>
      </div>
    </div>
    <div class="footer-tags">
      <div><strong>Fast Finisher:</strong> Write 3 sentences summarizing your partner's Ex 6 answers.</div>
      <div><strong>If Slow:</strong> In Ex 6, assign only questions 1, 3, 5, and 8 for the interview.</div>
      <div><strong>Assessment:</strong> Formative check of Ex 6 verb forms & exit slip sentences.</div>
      <div><strong>Teacher Prep:</strong> Cue Audio 1.1 & 1.2; prepare board with debate stems.</div>
    </div>
  </div>
</div>

<!-- LESSON 4 -->
<div class="page">
  <div class="lesson-sheet">
    <div>
      <div class="lesson-header">
        <h2>LESSON 4 — Speaking: Photo Comparison & Buying Time</h2>
        <div class="lesson-pills">
          <span class="pill pill-main">Main: Speaking</span>
          <span class="pill pill-sec">Sec: Listening / Pragmatics</span>
          <span class="pill pill-time">35 Minutes</span>
          <span class="pill pill-page">SB p. 13 / TB pp. 38–39</span>
        </div>
      </div>
      <div class="objective-box">
        <strong>Lesson Objective:</strong> Students will be able to describe and compare two educational photos for 60 seconds using at least 2 comparison/contrast linkers (<em>whereas, both</em>) and 2 'buying time' filler phrases (<em>Let me see...</em>).
      </div>
      <div class="adaptation-box">
        <strong>Coursebook Adaptation:</strong> SB p. 13 Ex 1–2 used as audio model. Ex 3 (Speaking Expert) drilled via a rapid-fire "3-Second Pause Challenge". Ex 4 & Speaking Guide executed as a timed "1-Minute Fluency Challenge".
      </div>
      <table class="timetable">
        <thead>
          <tr>
            <th style="width: 12%;">Time</th>
            <th style="width: 18%;">Stage</th>
            <th>Teacher Action</th>
            <th>Student Action</th>
            <th style="width: 14%;">Interaction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0–5m (5m)</td>
            <td>Visual Hook (Ex 1)</td>
            <td>Directs to Ex 1 photos (solo gamer vs board game friends). Elicits 1 similarity and 1 difference.</td>
            <td>Spot 1 similarity and 1 difference; share with partner in 30 seconds.</td>
            <td>Pair &rarr; Whole Class</td>
          </tr>
          <tr>
            <td>5–11m (6m)</td>
            <td>Functional Model</td>
            <td>Plays Audio 1.3 (Key Expressions). Drills pronunciation of: <em>Both photos show..., whereas/while..., It looks as if...</em></td>
            <td>Listen and repeat with natural intonation. Classify expressions into: Similarities, Differences, Speculation.</td>
            <td>Whole Class</td>
          </tr>
          <tr>
            <td>11–16m (5m)</td>
            <td>Listening & Strategy</td>
            <td>Plays Audio 1.4 (Boy describing photos). Focuses on SPEAKING EXPERT ("Buying time"): repeating Q, using fillers.</td>
            <td>Identify boy answers Q(b). Circle filler phrases heard (<em>"Let me see...", "Let me think...", "Basically..."</em>).</td>
            <td>Individual &rarr; Class</td>
          </tr>
          <tr>
            <td>16–21m (5m)</td>
            <td>Rapid Filler Drill</td>
            <td>"3-Second Pause Challenge": Asks random complex questions. Demands immediate filler usage before answer.</td>
            <td>Must not stay silent. Use filler immediately: <em>"Let me think for a moment... well, I prefer..."</em></td>
            <td>Teacher &rarr; Student</td>
          </tr>
          <tr>
            <td>21–30m (9m)</td>
            <td>Timed Photo Comparison</td>
            <td>Sets up p. 13 Ex 4 (PC learning vs classroom). Sets 60s timer. Partner B asks follow-up Q. Swaps roles.</td>
            <td>Partner A speaks 60s comparing photos using linkers. Partner B times & asks follow-up Q 1, 2, or 3. Swap.</td>
            <td>Pair Work (Timed)</td>
          </tr>
          <tr>
            <td>30–33m (3m)</td>
            <td>Feedback & Tally</td>
            <td>Praises natural filler usage and contrast linkers. Asks: <em>"Who used at least 2 fillers?"</em></td>
            <td>Partner gives peer feedback: <em>"You used 2 fillers and contrasted both photos with whereas."</em></td>
            <td>Whole Class</td>
          </tr>
          <tr>
            <td>33–35m (2m)</td>
            <td>Exit Ticket</td>
            <td>Prompt: <em>"Write 1 sentence: 'In photo 1..., whereas in photo 2...'"</em></td>
            <td>Complete exit slip with contrast sentence.</td>
            <td>Individual</td>
          </tr>
        </tbody>
      </table>
      <div class="procedure-grid">
        <div class="proc-box">
          <h4>Teacher Procedure</h4>
          "Look at Exercise 4: Photo 1 is a student learning alone online; Photo 2 is students in a classroom with a teacher. Student A has 60 seconds to compare them. You MUST use at least one similarity phrase, one contrast phrase with <em>whereas</em>, and one filler. Student B times and asks follow-up Q 1."
        </div>
        <div class="proc-box">
          <h4>Student Procedure</h4>
          <em>"Both photos show studying. One obvious difference is that in photo 1 the boy is alone with a headset, whereas in photo 2 students are together with a teacher. It looks as if he is focused. Let me see... on the whole I prefer classroom learning."</em>
        </div>
      </div>
      <div class="output-box">
        <strong>Expected Output:</strong> 60 seconds of sustained comparative speech per student using target linkers and filler expressions.
      </div>
      <div class="diff-grid">
        <div class="diff-col easier">
          <h5>Easier Tier</h5>
          Provide scaffold template: <em>1. Both show... 2. In photo 1..., whereas... 3. It looks as if...</em>
        </div>
        <div class="diff-col standard">
          <h5>Standard Tier</h5>
          Speak for 60 seconds using Key Expressions and Speaking Expert fillers autonomously.
        </div>
        <div class="diff-col challenge">
          <h5>Challenge Tier</h5>
          Speak for 90 seconds without repeating adjectives; explain advantages/disadvantages of both.
        </div>
      </div>
    </div>
    <div class="footer-tags">
      <div><strong>Fast Finisher:</strong> Write 3 sentences on pros/cons of VR headsets in schools.</div>
      <div><strong>If Slow:</strong> Reduce speaking turns from 60s to 40s per student.</div>
      <div><strong>Assessment:</strong> Peer checklist scorecard (similarity, difference, filler).</div>
      <div><strong>Teacher Prep:</strong> Cue Audio 1.3 & 1.4; set up online digital stopwatch.</div>
    </div>
  </div>
</div>

<!-- LESSON 5 -->
<div class="page">
  <div class="lesson-sheet">
    <div>
      <div class="lesson-header">
        <h2>LESSON 5 — Listening: Apps That Make a Change</h2>
        <div class="lesson-pills">
          <span class="pill pill-main">Main: Listening</span>
          <span class="pill pill-sec">Sec: Morphology / Suffixes</span>
          <span class="pill pill-time">35 Minutes</span>
          <span class="pill pill-page">SB p. 14 / TB pp. 40–41</span>
        </div>
      </div>
      <div class="objective-box">
        <strong>Lesson Objective:</strong> Students will be able to answer 5 multiple-choice questions about a podcast on social-impact apps by identifying factual clues and avoiding distractors, and form nouns using suffixes (<em>-ing, -tion, -sion, -ment</em>).
      </div>
      <div class="adaptation-box">
        <strong>Coursebook Adaptation:</strong> SB p. 14 Ex 1 used as brief 3m hook. Ex 2 & 3 scaffolded with Listening Expert distractor analysis. Word Expert turned into a fast-paced 4m "Suffix Transformation Race".
      </div>
      <table class="timetable">
        <thead>
          <tr>
            <th style="width: 12%;">Time</th>
            <th style="width: 18%;">Stage</th>
            <th>Teacher Action</th>
            <th>Student Action</th>
            <th style="width: 14%;">Interaction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0–4m (4m)</td>
            <td>Context Hook (Ex 1)</td>
            <td>Asks: <em>"Can an app change the world?"</em> Sets gist question: <em>"What do all 5 apps have in common?"</em></td>
            <td>Look at 'Technology Today' guide (p. 14). Predict how apps could help refugees or food waste.</td>
            <td>Whole Class &rarr; Pair</td>
          </tr>
          <tr>
            <td>4–9m (5m)</td>
            <td>First Listen (Gist)</td>
            <td>Plays Audio 1.5 straight through for general understanding. Checks gist answer with class.</td>
            <td>Listen globally without writing. Answer: <em>"They all help people or have a positive impact on the world."</em></td>
            <td>Individual &rarr; Class</td>
          </tr>
          <tr>
            <td>9–14m (5m)</td>
            <td>Strategy Prep (Ex 3)</td>
            <td>Introduces LISTENING EXPERT box. Warns: <em>"Matching words &ne; correct answer!"</em> Gives 2m for keywords.</td>
            <td>Read Qs 1–5 and options A, B, C. Underline differences between options in each question.</td>
            <td>Individual &rarr; Pair</td>
          </tr>
          <tr>
            <td>14–23m (9m)</td>
            <td>Second Listen (Detail)</td>
            <td>Plays Audio 1.5, pausing briefly after each app to allow students to confirm selections.</td>
            <td>Listen for specific details. Select best options (1B: Refugee challenges, 2C: Charity exercise, 3A, 4A, 5B).</td>
            <td>Individual Work</td>
          </tr>
          <tr>
            <td>23–27m (4m)</td>
            <td>Pair Check & Traps</td>
            <td>Directs pairs to compare answers and identify WHY wrong options were tricky distractors.</td>
            <td>Compare in pairs. Explain which spoken words were distractors. Confirm answers with class.</td>
            <td>Pair &rarr; Whole Class</td>
          </tr>
          <tr>
            <td>27–32m (5m)</td>
            <td>Suffix Race (Word Expert)</td>
            <td>Presents WORD EXPERT: Suffixes (<em>-ing, -tion, -sion, -ment</em>). Writes verbs: <em>understand, organize, decide</em>.</td>
            <td>Transform verbs into nouns: <em>understanding, organization, decision, encouragement, connection</em>.</td>
            <td>Individual &rarr; Board</td>
          </tr>
          <tr>
            <td>32–35m (3m)</td>
            <td>Exit Ticket</td>
            <td>Prompt: <em>"Which of the 5 apps would you download right now and why?"</em></td>
            <td>Write 1 chosen app name and 1 reason on exit ticket slip.</td>
            <td>Individual</td>
          </tr>
        </tbody>
      </table>
      <div class="procedure-grid">
        <div class="proc-box">
          <h4>Teacher Procedure</h4>
          "Look at Question 2 about <em>Charity Miles</em>. Option A mentions marathons; Option B mentions walking your dog; Option C mentions raising money for charity by exercising. The speaker mentions dogs as an example, but what is the app's real purpose? Listen carefully."
        </div>
        <div class="proc-box">
          <h4>Student Procedure</h4>
          Identify that the audio mentions walking the dog as a daily activity, but the core objective is donating money to charities through exercise &rarr; Select <strong>C</strong>.
        </div>
      </div>
      <div class="output-box">
        <strong>Expected Output:</strong> 5 accurate multiple-choice selections with noted distractors; 4 correct noun transformations.
      </div>
      <div class="diff-grid">
        <div class="diff-col easier">
          <h5>Easier Tier</h5>
          Pre-teach 4 vocabulary items: <em>refugee, ethical shopper, food waste, out-of-date</em>.
        </div>
        <div class="diff-col standard">
          <h5>Standard Tier</h5>
          Listen to audio twice and complete questions 1–5 independently.
        </div>
        <div class="diff-col challenge">
          <h5>Challenge Tier</h5>
          Write down the exact distractor phrase in the recording for Questions 1 and 4.
        </div>
      </div>
    </div>
    <div class="footer-tags">
      <div><strong>Fast Finisher:</strong> Add 2 new verbs to each suffix category (e.g., <em>improve &rarr; improvement</em>).</div>
      <div><strong>If Slow:</strong> Skip the board suffix race; cover suffixes orally in 2 minutes.</div>
      <div><strong>Assessment:</strong> Multiple-choice score (/5) + exit ticket rationale.</div>
      <div><strong>Teacher Prep:</strong> Cue Audio 1.5; bookmark SB p. 14.</div>
    </div>
  </div>
</div>

<!-- LESSON 6 -->
<div class="page">
  <div class="lesson-sheet">
    <div>
      <div class="lesson-header">
        <h2>LESSON 6 — Vocabulary & App Problem-Solving Pitch</h2>
        <div class="lesson-pills">
          <span class="pill pill-main">Main: Speaking / Collaboration</span>
          <span class="pill pill-sec">Sec: Reading & Vocabulary</span>
          <span class="pill pill-time">35 Minutes</span>
          <span class="pill pill-page">SB pp. 14–15 / TB pp. 41–43</span>
        </div>
      </div>
      <div class="objective-box">
        <strong>Lesson Objective:</strong> Students will be able to match 10 app categories to their everyday collocations and present a 60-second collaborative pitch for an app designed to solve a community problem.
      </div>
      <div class="adaptation-box">
        <strong>Coursebook Adaptation:</strong> SB p. 15 Ex 5–6 (Ailuna) used as reading model. Ex 7–8 merged into a fast collocation match. SB p. 14 Ex 4 & p. 15 Ex 9 expanded into a 3-person "App Shark Tank" pitch.
      </div>
      <table class="timetable">
        <thead>
          <tr>
            <th style="width: 12%;">Time</th>
            <th style="width: 18%;">Stage</th>
            <th>Teacher Action</th>
            <th>Student Action</th>
            <th style="width: 14%;">Interaction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0–6m (6m)</td>
            <td>Reading Model (Ex 5–6)</td>
            <td>Directs to <em>"APP OF THE WEEK: AILUNA"</em> (p. 15). Explains 'aim high'. Highlights eco-challenges.</td>
            <td>Read review, fill gaps (1. where, 4. for, 5. off, 8. take part). Brainstorm 1 new eco-challenge in pairs.</td>
            <td>Individual &rarr; Pair</td>
          </tr>
          <tr>
            <td>6–13m (7m)</td>
            <td>Collocation Match (Ex 7–8)</td>
            <td>Focuses on Icons A–J (Ex 7) and collocations (Ex 8): <em>check bank balance, meet deadline, track workouts</em>.</td>
            <td>Match icons A–J. Match verbs 1–10 to noun phrases a–j (1-j, 2-c, 3-h, 4-f, 5-e, 6-d, 7-g, 8-i, 9-a, 10-b).</td>
            <td>Individual &rarr; Pair</td>
          </tr>
          <tr>
            <td>13–24m (11m)</td>
            <td>App Blueprint Workshop</td>
            <td>Sets Group Task: "Design an app that makes a positive impact in your city." Displays template on board.</td>
            <td>Work in 3s. Complete App Blueprint: Name, Category, Problem solved, 2 target collocations, App icon sketch.</td>
            <td>Small Group (3s)</td>
          </tr>
          <tr>
            <td>24–31m (7m)</td>
            <td>60-Second "Shark Tank" Pitch</td>
            <td>Organizes simultaneous group-to-group pitching. Groups pitch app in 60s to neighboring group.</td>
            <td>1 student pitches app; listeners ask: <em>"How does it solve the problem? Would I download it?"</em></td>
            <td>Group-to-Group</td>
          </tr>
          <tr>
            <td>31–33m (2m)</td>
            <td>Class Vote</td>
            <td>Elicits top app concept from each table.</td>
            <td>Vote by show of hands for best neighborhood app concept.</td>
            <td>Whole Class</td>
          </tr>
          <tr>
            <td>33–35m (2m)</td>
            <td>Exit Ticket</td>
            <td>Prompt: <em>"Write 1 collocation you use daily: 'I use my... app to [verb+noun]...'"</em></td>
            <td>Write 1 personalized collocation sentence on exit slip.</td>
            <td>Individual</td>
          </tr>
        </tbody>
      </table>
      <div class="procedure-grid">
        <div class="proc-box">
          <h4>Teacher Procedure</h4>
          "In groups of 3, you are app designers. Choose a neighborhood problem (stray animals, food waste, elderly support). Use the template on the board: 1. App Name, 2. Type (from Ex 7), 3. Functions (use 2 collocations from Ex 8). You have 8 minutes to plan and draw an icon!"
        </div>
        <div class="proc-box">
          <h4>Student Procedure</h4>
          <em>"Our app is 'PetFinder'. It is a reference and photography app. It helps neighbors upload photos of lost pets and reach their destination to return them."</em>
        </div>
      </div>
      <div class="output-box">
        <strong>Expected Output:</strong> Completed 4-point app blueprint, sketched icon, and 60-second spoken group pitch.
      </div>
      <div class="diff-grid">
        <div class="diff-col easier">
          <h5>Easier Tier</h5>
          Provide structured pitch starter: <em>"Our app is called ______. It helps people to [collocation 1] and [collocation 2]..."</em>
        </div>
        <div class="diff-col standard">
          <h5>Standard Tier</h5>
          Create independent app concept with custom features and accurate collocations.
        </div>
        <div class="diff-col challenge">
          <h5>Challenge Tier</h5>
          Include a gamified challenge element modeled on the <em>Ailuna</em> app review (p. 15).
        </div>
      </div>
    </div>
    <div class="footer-tags">
      <div><strong>Fast Finisher:</strong> List 2 apps you use for personal goals and their features.</div>
      <div><strong>If Slow:</strong> Do simultaneous group-to-group pitches instead of plenary pitches.</div>
      <div><strong>Assessment:</strong> Collocation accuracy in pitch & exit slip.</div>
      <div><strong>Teacher Prep:</strong> Pitch blueprint on board; scrap paper ready for icon sketch.</div>
    </div>
  </div>
</div>

<!-- LESSON 7 -->
<div class="page">
  <div class="lesson-sheet">
    <div>
      <div class="lesson-header">
        <h2>LESSON 7 — Writing 1: Deconstructing the 'For and Against' Essay</h2>
        <div class="lesson-pills">
          <span class="pill pill-main">Main: Reading for Writing</span>
          <span class="pill pill-sec">Sec: Critical Thinking & Linkers</span>
          <span class="pill pill-time">35 Minutes</span>
          <span class="pill pill-page">SB p. 17 Ex 1–4 / TB pp. 46–47</span>
        </div>
      </div>
      <div class="objective-box">
        <strong>Lesson Objective:</strong> Students will be able to analyze a model 'for and against' essay, categorize arguments into pros and cons, identify paragraph purposes, and classify 11 linkers into 4 functional categories.
      </div>
      <div class="adaptation-box">
        <strong>Coursebook Adaptation:</strong> SB p. 17 Ex 1–2 turned into an Argument Split Race. Ex 3 structured into a 4-paragraph architecture map. Ex 4 (Writing Expert) drilled with linker comma rules.
      </div>
      <table class="timetable">
        <thead>
          <tr>
            <th style="width: 12%;">Time</th>
            <th style="width: 18%;">Stage</th>
            <th>Teacher Action</th>
            <th>Student Action</th>
            <th style="width: 14%;">Interaction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0–5m (5m)</td>
            <td>Topic Hook & Split</td>
            <td>Writes title: <em>"SHOULD ESPORTS BE AN OLYMPIC SPORT?"</em> Directs to sentences 1–6.</td>
            <td>Vote YES/NO with partner. Mark sentences 1–6 as For (F) or Against (A): 1A, 2F, 3A, 4F, 5A, 6F.</td>
            <td>Whole Class &rarr; Pair</td>
          </tr>
          <tr>
            <td>5–13m (8m)</td>
            <td>Model Analysis (Ex 2)</td>
            <td>Sets 4m silent reading of model essay (p. 17). Asks: <em>"Which arguments are used? What is writer's opinion?"</em></td>
            <td>Read essay silently. Identify arguments mentioned (1, 2, 3, 4). Find balanced conclusion in Para 4.</td>
            <td>Individual &rarr; Pair</td>
          </tr>
          <tr>
            <td>13–20m (7m)</td>
            <td>4-Paragraph Structure</td>
            <td>Focuses on SB p. 17 Ex 3. Elicits the core job of each paragraph and diagrams on board.</td>
            <td>Record 1-line function for each paragraph: Para 1: Intro | Para 2: Against | Para 3: For | Para 4: Conclusion.</td>
            <td>Individual &rarr; Class</td>
          </tr>
          <tr>
            <td>20–29m (9m)</td>
            <td>Linker Hunt (Writing Expert)</td>
            <td>Focuses on WRITING EXPERT box (p. 17). Emphasizes comma punctuation after sentence linkers.</td>
            <td>Scan essay; classify linkers: 1. Sequencing (<em>First of all</em>), 2. Adding (<em>In addition</em>), 3. Contrast (<em>However</em>), 4. Concluding (<em>In conclusion</em>).</td>
            <td>Pair Work</td>
          </tr>
          <tr>
            <td>29–33m (4m)</td>
            <td>Guided Brainstorm for L8</td>
            <td>Introduces next lesson's essay topic: <em>"Should there be stronger age restrictions on social media?"</em></td>
            <td>Brainstorm in pairs: 2 points FOR age limits (safety, sleep) and 2 points AGAINST (friend connection, skills).</td>
            <td>Pair Work</td>
          </tr>
          <tr>
            <td>33–35m (2m)</td>
            <td>Exit Ticket</td>
            <td>Prompt: <em>"Combine 2 ideas using However or In addition: (Gaming is fun / It can be unhealthy)."</em></td>
            <td>Write 1 sentence with correct linker and following comma.</td>
            <td>Individual</td>
          </tr>
        </tbody>
      </table>
      <div class="procedure-grid">
        <div class="proc-box">
          <h4>Teacher Procedure</h4>
          "Look at the model essay on page 17. With a highlighter, find every word that connects ideas. Complete the Writing Expert box with: <em>First of all, In addition, On the other hand, In conclusion</em>. Notice the comma right after them? Circle each comma!"
        </div>
        <div class="proc-box">
          <h4>Student Procedure</h4>
          Highlight linkers in text; write into 4 categories in Ex 4; check that punctuation rules (capital letter + comma) are noted.
        </div>
      </div>
      <div class="output-box">
        <strong>Expected Output:</strong> Completed argument analysis, 4-paragraph organizational outline, and classified linker chart.
      </div>
      <div class="diff-grid">
        <div class="diff-col easier">
          <h5>Easier Tier</h5>
          Provide a 4-quadrant linker chart with only 4 missing words to fill in.
        </div>
        <div class="diff-col standard">
          <h5>Standard Tier</h5>
          Complete Ex 1–4 independently; analyze paragraph functions and comma rules.
        </div>
        <div class="diff-col challenge">
          <h5>Challenge Tier</h5>
          Identify alternative linkers not in the book for each category (e.g., <em>Moreover, To conclude</em>).
        </div>
      </div>
    </div>
    <div class="footer-tags">
      <div><strong>Fast Finisher:</strong> Write 2 pros and 2 cons of using phones in schools.</div>
      <div><strong>If Slow:</strong> Do paragraph matching (Ex 3) as whole-class board mapping.</div>
      <div><strong>Assessment:</strong> Linker classification accuracy & exit ticket punctuation.</div>
      <div><strong>Teacher Prep:</strong> Prepare 4-quadrant linker grid on whiteboard.</div>
    </div>
  </div>
</div>

<!-- LESSON 8 -->
<div class="page">
  <div class="lesson-sheet">
    <div>
      <div class="lesson-header">
        <h2>LESSON 8 — Writing 2: Guided Drafting & Peer Review</h2>
        <div class="lesson-pills">
          <span class="pill pill-main">Main: Writing</span>
          <span class="pill pill-sec">Sec: Peer Assessment</span>
          <span class="pill pill-time">35 Minutes</span>
          <span class="pill pill-page">SB p. 17 Ex 5 / TB pp. 46–47</span>
        </div>
      </div>
      <div class="objective-box">
        <strong>Lesson Objective:</strong> Students will be able to write a 4-paragraph 'for and against' essay on social media age restrictions using at least 4 target linkers and conduct a structured peer review using a writing rubric.
      </div>
      <div class="adaptation-box">
        <strong>Coursebook Adaptation:</strong> SB p. 17 Ex 5 & Writing Guide structured into a timed drafting workshop with sentence starters, followed by an "Editor’s Desk" peer review checklist.
      </div>
      <table class="timetable">
        <thead>
          <tr>
            <th style="width: 12%;">Time</th>
            <th style="width: 18%;">Stage</th>
            <th>Teacher Action</th>
            <th>Student Action</th>
            <th style="width: 14%;">Interaction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0–5m (5m)</td>
            <td>Topic Framing & Outline</td>
            <td>Displays prompt: <em>"Should there be stronger age restrictions on social media?"</em> Reviews 4-paragraph plan.</td>
            <td>Review brainstormed points: Para 1: Intro | Para 2: Against | Para 3: For | Para 4: Conclusion.</td>
            <td>Whole Class &rarr; Pair</td>
          </tr>
          <tr>
            <td>5–10m (5m)</td>
            <td>Guided Draft: Intro/End</td>
            <td>Models opening and closing frames: <em>"Nowadays, millions... However..."</em> and <em>"In conclusion, on balance..."</em></td>
            <td>Write Paragraph 1 (Intro) and Paragraph 4 (Conclusion) in notebook using stems.</td>
            <td>Individual Work</td>
          </tr>
          <tr>
            <td>10–22m (12m)</td>
            <td>Silent Writing: Body</td>
            <td>Sets 12m silent writing timer for body paragraphs. Enforces inclusion of 4 linkers. Circulates to assist.</td>
            <td>Write Paragraph 2 (Against) and Paragraph 3 (For). Use: <em>First of all, In addition, On the other hand, However</em>.</td>
            <td>Individual (Silent Focus)</td>
          </tr>
          <tr>
            <td>22–30m (8m)</td>
            <td>"Editor's Desk" Review</td>
            <td>Distributes Peer Checklist. Directs pairs to swap essays and check: 4 paragraphs, 3+ linkers, final opinion.</td>
            <td>Swap notebooks. Check criteria: &#9633; 4 paragraphs, &#9633; linkers + commas, &#9633; opinion. Write 1 praise + 1 tip.</td>
            <td>Pair Work (Peer Review)</td>
          </tr>
          <tr>
            <td>30–33m (3m)</td>
            <td>Author Revisions</td>
            <td>Gives 3 minutes for authors to read peer comments and make edits.</td>
            <td>Read feedback; make 2 immediate pencil corrections to linkers, spelling, or punctuation.</td>
            <td>Individual</td>
          </tr>
          <tr>
            <td>33–35m (2m)</td>
            <td>Wrap-Up & Showcase</td>
            <td>Collects drafts. Invites 1 volunteer to read a strong concluding sentence.</td>
            <td>Volunteer reads conclusion aloud; class gives feedback.</td>
            <td>Whole Class</td>
          </tr>
        </tbody>
      </table>
      <div class="procedure-grid">
        <div class="proc-box">
          <h4>Teacher Procedure</h4>
          "Use this paragraph scaffolding:
          • <em>Para 1:</em> Millions of teens use social media. However, should there be age limits?
          • <em>Para 2:</em> First of all, it helps communication. In addition, it teaches digital skills.
          • <em>Para 3:</em> On the other hand, there are risks. Furthermore, too much screen time harms sleep.
          • <em>Para 4:</em> In conclusion, on balance, my opinion is..."
        </div>
        <div class="proc-box">
          <h4>Student Procedure</h4>
          Draft 4 distinct paragraphs in notebook (80–120 words), swap with partner, evaluate using checklist, and revise.
        </div>
      </div>
      <div class="output-box">
        <strong>Expected Output:</strong> Completed 4-paragraph 'for and against' essay draft with peer review annotations.
      </div>
      <div class="diff-grid">
        <div class="diff-col easier">
          <h5>Easier Tier</h5>
          Provide the cloze essay scaffold where students fill in only arguments and linkers.
        </div>
        <div class="diff-col standard">
          <h5>Standard Tier</h5>
          Draft 4-paragraph essay independently using at least 4 linkers with correct commas.
        </div>
        <div class="diff-col challenge">
          <h5>Challenge Tier</h5>
          Use complex contrast frames: <em>"While it is true that..., it is hard to deny that..."</em>
        </div>
      </div>
    </div>
    <div class="footer-tags">
      <div><strong>Fast Finisher:</strong> Check grammar: Circle present continuous and underline gerunds.</div>
      <div><strong>If Slow:</strong> Write Paras 1, 2, 4 in class; assign Para 3 for homework.</div>
      <div><strong>Assessment:</strong> Peer checklist completed + Teacher collection of drafts.</div>
      <div><strong>Teacher Prep:</strong> Sentence starters on board; peer slips ready.</div>
    </div>
  </div>
</div>

<!-- LESSON 9 -->
<div class="page">
  <div class="lesson-sheet">
    <div>
      <div class="lesson-header">
        <h2>LESSON 9 — Global Goals: Digital Connections & Inequality</h2>
        <div class="lesson-pills">
          <span class="pill pill-main">Main: Reading (Infographics)</span>
          <span class="pill pill-sec">Sec: Speaking / SDG 10</span>
          <span class="pill pill-time">35 Minutes</span>
          <span class="pill pill-page">SB p. 18 / TB pp. 48–49</span>
        </div>
      </div>
      <div class="objective-box">
        <strong>Lesson Objective:</strong> Students will be able to extract statistical data from an infographic on internet connectivity and discuss in small groups how digital tools reduce inequality in education, healthcare, and trade (UN SDG 10).
      </div>
      <div class="adaptation-box">
        <strong>Coursebook Adaptation:</strong> SB p. 18 Ex 1 turned into an interactive "Data Hunt Challenge". SB p. 18 Ex 2 (Cultural Awareness) structured into a 3-part guided group discussion on digital divide solutions.
      </div>
      <table class="timetable">
        <thead>
          <tr>
            <th style="width: 12%;">Time</th>
            <th style="width: 18%;">Stage</th>
            <th>Teacher Action</th>
            <th>Student Action</th>
            <th style="width: 14%;">Interaction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0–5m (5m)</td>
            <td>Visual Hook & SDG 10</td>
            <td>Displays UN SDG 10 logo: "Reduced Inequalities". Asks: <em>"Does everyone have equal internet access?"</em></td>
            <td>Look at infographic header (p. 18). Discuss why internet access is unequal globally.</td>
            <td>Whole Class &rarr; Pair</td>
          </tr>
          <tr>
            <td>5–13m (8m)</td>
            <td>Data Hunt (Ex 1)</td>
            <td>"Data Detective": Sets 4m to scan charts on p. 18 and answer Ex 1 Qs (percentages, urban vs rural).</td>
            <td>Scan infographic. Locate stats: 99% vs 67%; 2x urban; 70% connection; e-commerce, telehealth, digital ID.</td>
            <td>Individual &rarr; Pair</td>
          </tr>
          <tr>
            <td>13–20m (7m)</td>
            <td>Concept Discovery</td>
            <td>Focuses on 4 solution boxes (p. 18): <em>e-commerce, education, telehealth, digital ID</em>. Elicits definitions.</td>
            <td>Match real-world scenarios: remote doctor &rarr; <em>telehealth</em>; village online store &rarr; <em>e-commerce</em>.</td>
            <td>Pair Work</td>
          </tr>
          <tr>
            <td>20–29m (9m)</td>
            <td>Group Debate (Ex 2)</td>
            <td>Puts students in 3s (SB p. 18 Ex 2). Prompt: <em>"Which of the 4 digital tools is most vital for a rural village?"</em></td>
            <td>Discuss in groups. Use: <em>"In our view, telehealth is most important because sick people cannot travel far."</em> Reach consensus.</td>
            <td>Small Group (3s)</td>
          </tr>
          <tr>
            <td>29–33m (4m)</td>
            <td>Group Share-Out</td>
            <td>Invites 1 spokesperson per group to announce chosen tool and rationale.</td>
            <td>Spokesperson shares group consensus with class.</td>
            <td>Whole Class</td>
          </tr>
          <tr>
            <td>33–35m (2m)</td>
            <td>Exit Ticket</td>
            <td>Prompt: <em>"Write 1 way digital technology can reduce inequality in rural areas."</em></td>
            <td>Write 1 data/solution sentence on exit slip.</td>
            <td>Individual</td>
          </tr>
        </tbody>
      </table>
      <div class="procedure-grid">
        <div class="proc-box">
          <h4>Teacher Procedure</h4>
          "Look at the bottom section of page 18: <em>e-commerce, education, telehealth, digital ID</em>. In groups of 3, imagine a remote village far from hospitals and universities. Which digital tool will help them most? You must agree on ONE and give two reasons."
        </div>
        <div class="proc-box">
          <h4>Student Procedure</h4>
          Discuss in groups of 3, evaluate each option, and agree on a consensus choice using: <em>"We believe ______ is the most important because..."</em>
        </div>
      </div>
      <div class="output-box">
        <strong>Expected Output:</strong> Correctly answered infographic data questions; spoken group consensus with 2 supporting reasons.
      </div>
      <div class="diff-grid">
        <div class="diff-col easier">
          <h5>Easier Tier</h5>
          Provide term definitions: <em>telehealth = online doctor; e-commerce = selling online; digital ID = ID proof</em>.
        </div>
        <div class="diff-col standard">
          <h5>Standard Tier</h5>
          Read infographic data independently; actively justify choices in group discussion.
        </div>
        <div class="diff-col challenge">
          <h5>Challenge Tier</h5>
          Discuss why providing devices is not enough (e.g., electricity, digital literacy, network cost).
        </div>
      </div>
    </div>
    <div class="footer-tags">
      <div><strong>Fast Finisher:</strong> Calculate percentage gap between developed/developing; write comparative sentence.</div>
      <div><strong>If Slow:</strong> Skip group consensus debate; have pairs discuss only 1 assigned tool.</div>
      <div><strong>Assessment:</strong> Observation of group debate + exit ticket sentence.</div>
      <div><strong>Teacher Prep:</strong> Display SB p. 18 infographic; check audio/visual setup.</div>
    </div>
  </div>
</div>

<!-- LESSON 10 -->
<div class="page">
  <div class="lesson-sheet">
    <div>
      <div class="lesson-header">
        <h2>LESSON 10 — Video Skills: The Social Media Detox</h2>
        <div class="lesson-pills">
          <span class="pill pill-main">Main: Viewing / Listening</span>
          <span class="pill pill-sec">Sec: Speaking</span>
          <span class="pill pill-time">35 Minutes</span>
          <span class="pill pill-page">SB p. 19 Ex 3–6 / TB pp. 50–51</span>
        </div>
      </div>
      <div class="objective-box">
        <strong>Lesson Objective:</strong> Students will be able to extract specific factual details from video V1.1 <em>"The social media detox"</em> and express personal opinions about whether a 7-day social media fast is beneficial.
      </div>
      <div class="adaptation-box">
        <strong>Coursebook Adaptation:</strong> SB p. 19 Ex 3–4 scaffolded into prediction &rarr; gist check. Ex 5 (sentence completion) completed with targeted video pauses. Ex 6 turned into a "Detox Challenge: Would You Survive?" pair interview.
      </div>
      <table class="timetable">
        <thead>
          <tr>
            <th style="width: 12%;">Time</th>
            <th style="width: 18%;">Stage</th>
            <th>Teacher Action</th>
            <th>Student Action</th>
            <th style="width: 14%;">Interaction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0–5m (5m)</td>
            <td>Pre-Viewing Hook</td>
            <td>Directs to video stills at top of p. 19 (Mon smiling, skiing, embroidery, phone). Asks what detox means.</td>
            <td>Look at stills; predict why Mon gave up social media for a week in pairs.</td>
            <td>Pair &rarr; Whole Class</td>
          </tr>
          <tr>
            <td>5–10m (5m)</td>
            <td>First Viewing (Gist)</td>
            <td>Plays Video V1.1 straight through for gist. Asks: <em>"How long was her detox? Was it easy or difficult?"</em></td>
            <td>Watch globally. Confirm: <em>"She gave up social media for 7 days to see how it affected her mood and life."</em></td>
            <td>Individual &rarr; Class</td>
          </tr>
          <tr>
            <td>10–15m (5m)</td>
            <td>Sentence Prep (Ex 5)</td>
            <td>Reads sentences 1–6 (Ex 5) with class. Clarifies <em>embroidery, Six Degrees</em>.</td>
            <td>Read sentences 1–6. Predict missing words before second viewing (up to 3 words per space).</td>
            <td>Individual &rarr; Class</td>
          </tr>
          <tr>
            <td>15–24m (9m)</td>
            <td>Second Viewing (Detail)</td>
            <td>Plays Video V1.1, pausing at key points. Directs pair check of completed sentences.</td>
            <td>Fill gaps: 1. [1 January, 1983], 2. [social media network], 3. [need for], 4. [world/globe], 5. [inspiration/ideas], 6. [check Instagram]. Check pair.</td>
            <td>Individual &rarr; Pair</td>
          </tr>
          <tr>
            <td>24–31m (7m)</td>
            <td>Speaking: Detox Challenge</td>
            <td>Displays Ex 6 Qs: <em>"Would a detox be good for you? What would be hardest?"</em> Writes starter stems.</td>
            <td>Partner A interviews B (3 min): <em>"What apps would you miss? What offline activities would you do?"</em> Swap roles.</td>
            <td>Pair Work (Timed)</td>
          </tr>
          <tr>
            <td>31–33m (2m)</td>
            <td>Class Poll</td>
            <td>Asks: <em>"Who thinks they could survive 7 days without social media? Who couldn't?"</em></td>
            <td>Show of hands. 2 students explain alternative offline activities.</td>
            <td>Whole Class</td>
          </tr>
          <tr>
            <td>33–35m (2m)</td>
            <td>Exit Ticket</td>
            <td>Prompt: <em>"Write 1 offline activity you would do if you turned off your phone for 24 hours."</em></td>
            <td>Write 1 sentence on exit slip.</td>
            <td>Individual</td>
          </tr>
        </tbody>
      </table>
      <div class="procedure-grid">
        <div class="proc-box">
          <h4>Teacher Procedure</h4>
          "Look at Exercise 6 question 2: <em>'Would a social media detox be good for you?'</em> In pairs, interview each other. You must give at least ONE positive outcome (better sleep, less stress) and ONE difficulty (missing friend chats). Use: <em>'On the one hand, a detox would help me... On the other hand, it would be difficult to...'</em>"
        </div>
        <div class="proc-box">
          <h4>Student Procedure</h4>
          <em>"I think a detox would be good for me because I spend too much time scrolling before bed. But it would be hard because I use WhatsApp for basketball team updates."</em>
        </div>
      </div>
      <div class="output-box">
        <strong>Expected Output:</strong> 6 completed video comprehension sentences; active spoken pair evaluation of digital detoxing.
      </div>
      <div class="diff-grid">
        <div class="diff-col easier">
          <h5>Easier Tier</h5>
          Play video with English closed captions; provide word bank for Ex 5 sentences.
        </div>
        <div class="diff-col standard">
          <h5>Standard Tier</h5>
          Complete Ex 5 without captions during second viewing; engage in pair discussion.
        </div>
        <div class="diff-col challenge">
          <h5>Challenge Tier</h5>
          Analyze Mon's final reaction (<em>"couldn't wait to check Instagram"</em>) and evaluate if detox had permanent impact.
        </div>
      </div>
    </div>
    <div class="footer-tags">
      <div><strong>Fast Finisher:</strong> Write a 3-point "Digital Detox Survival Guide" for middle schoolers.</div>
      <div><strong>If Slow:</strong> Focus second viewing only on sentences 3, 5, and 6.</div>
      <div><strong>Assessment:</strong> Gap-fill accuracy (/6) and spoken interaction observation.</div>
      <div><strong>Teacher Prep:</strong> Check video V1.1 playback and audio levels before class.</div>
    </div>
  </div>
</div>

<!-- LESSON 11 -->
<div class="page">
  <div class="lesson-sheet">
    <div>
      <div class="lesson-header">
        <h2>LESSON 11 — Review Challenge & Mini-Pitches</h2>
        <div class="lesson-pills">
          <span class="pill pill-main">Main: Spoken Interaction</span>
          <span class="pill pill-sec">Sec: Integrated Unit Review</span>
          <span class="pill pill-time">35 Minutes</span>
          <span class="pill pill-page">SB pp. 19–20 / TB pp. 51–53</span>
        </div>
      </div>
      <div class="objective-box">
        <strong>Lesson Objective:</strong> Students will be able to conduct a 10-item "Find Someone Who..." class survey on technology habits using spoken question forms and solve at least 4 communicative review challenges from the Unit 1 Memory Challenge.
      </div>
      <div class="adaptation-box">
        <strong>Coursebook Adaptation:</strong> SB p. 20 Ex 1–2 executed as an active mingling survey. "Challenge your memory!" turned into an interactive Team Challenge Board. SB p. 19 Ex 7 integrated as a 2-minute elevator pitch showcase.
      </div>
      <table class="timetable">
        <thead>
          <tr>
            <th style="width: 12%;">Time</th>
            <th style="width: 18%;">Stage</th>
            <th>Teacher Action</th>
            <th>Student Action</th>
            <th style="width: 14%;">Interaction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0–5m (5m)</td>
            <td>Question Setup (p.20 Ex 1)</td>
            <td>Models transforming survey statements into spoken questions: <em>"Do you spend >5h a day on social media?"</em></td>
            <td>Convert prompts into questions: Q1: <em>"Do you spend...?"</em>, Q2: <em>"Do you enjoy using a fitness app?"</em></td>
            <td>Whole Class</td>
          </tr>
          <tr>
            <td>5–16m (11m)</td>
            <td>Active Survey Mingling</td>
            <td>Signals start of mingling. Monitors for full English questions. Enforces rule: No silent book passing!</td>
            <td>Mingle with classmates. Ask questions. When someone says "Yes", write their name and ask 1 follow-up Q.</td>
            <td>Mingling (Whole Class)</td>
          </tr>
          <tr>
            <td>16–20m (4m)</td>
            <td>Data Synthesis (Ex 2)</td>
            <td>Puts students in pairs to report 2 interesting findings. Elicits 3 class stats.</td>
            <td>Report findings: <em>"Sasha spends more time on his phone than I do... He uses it for 6 hours!"</em></td>
            <td>Pair &rarr; Class</td>
          </tr>
          <tr>
            <td>20–30m (10m)</td>
            <td>Memory Challenge Game</td>
            <td>Divides room into Team A & B. Teams pick challenge bubbles from p. 20 (Mime app, 4 verbs, pros/cons).</td>
            <td>Solve challenge prompts: mime an app, name 4 video verbs (<em>post, share, scroll, tap</em>), state 2 pros/cons.</td>
            <td>Team Competition</td>
          </tr>
          <tr>
            <td>30–33m (3m)</td>
            <td>Project Showcase (p.19 Ex 7)</td>
            <td>Invites 2 volunteer pairs to deliver a 60-second pitch on how digital technology reduces inequality.</td>
            <td>Deliver or listen to mini-pitches on telehealth / digital education in remote areas.</td>
            <td>Whole Class</td>
          </tr>
          <tr>
            <td>33–35m (2m)</td>
            <td>Unit 1 Self-Assessment</td>
            <td>Distributes Unit 1 Self-Assessment Checklist. Collects as final exit ticket.</td>
            <td>Complete 5-point self-assessment scale on Reading, Listening, Speaking, and Writing progress.</td>
            <td>Individual</td>
          </tr>
        </tbody>
      </table>
      <div class="procedure-grid">
        <div class="proc-box">
          <h4>Teacher Procedure</h4>
          "Stand up with book page 20. You have 10 minutes to find a classmate for each item from 1 to 10. You CANNOT just show your book. You MUST ask aloud: <em>'Do you enjoy using a fitness app?'</em> If they say yes, write their name and ask: <em>'Which one?'</em> Stand up and mingle!"
        </div>
        <div class="proc-box">
          <h4>Student Procedure</h4>
          Walk around room, ask full questions, write classmate names on survey grid, and report 2 interesting habits to partner.
        </div>
      </div>
      <div class="output-box">
        <strong>Expected Output:</strong> Completed 10-item survey sheet with names; team points earned for vocabulary and speaking challenges.
      </div>
      <div class="diff-grid">
        <div class="diff-col easier">
          <h5>Easier Tier</h5>
          Students find 5 names; question starters are displayed on board for all 10 items.
        </div>
        <div class="diff-col standard">
          <h5>Standard Tier</h5>
          Mingle independently and complete at least 8 items with names and follow-up notes.
        </div>
        <div class="diff-col challenge">
          <h5>Challenge Tier</h5>
          Complete all 10 items and report summary data using proportions (<em>"Most students...", "Only 2 people..."</em>).
        </div>
      </div>
    </div>
    <div class="footer-tags">
      <div><strong>Fast Finisher:</strong> Solve remaining Challenge Your Memory speech bubbles on p. 20.</div>
      <div><strong>If Slow:</strong> Limit survey to 8 minutes and 5 items; do 3 core memory game prompts.</div>
      <div><strong>Assessment:</strong> Self-assessment checklist + survey fluency observation.</div>
      <div><strong>Teacher Prep:</strong> Scoreboard on whiteboard; copy Unit 1 Self-Assessment slips.</div>
    </div>
  </div>
</div>

<!-- ==================== PAGE 15: ACTIVITY BANK ==================== -->
<div class="page">
  <div class="section-title"><span class="num">6</span> Unit 1 Modular Activity Bank</div>
  <p style="font-size: 7.5pt; color: #475569; margin-bottom: 5px;">This bank contains 9 modular, low-prep activities specifically aligned with Unit 1 themes for extension, fast finishers, or unexpected schedule changes.</p>

  <table>
    <thead>
      <tr>
        <th style="width: 20%;">Activity & Skill</th>
        <th style="width: 8%;">Time</th>
        <th style="width: 12%;">Grouping</th>
        <th style="width: 14%;">Materials</th>
        <th>Procedure & Unit 1 Alignment</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>1. READING:<br>Evidence Race</strong></td>
        <td>5 min</td>
        <td>Pairs</td>
        <td>SB p. 10 (Algorithm text)</td>
        <td>Teacher reads a target fact or keyword (e.g., <em>'95 million', 'echo chamber', 'paragliding'</em>). Pairs race to locate paragraph, stand up, and read the full sentence aloud. First to read wins a point.</td>
      </tr>
      <tr>
        <td><strong>2. LISTENING:<br>App Detective</strong></td>
        <td>5 min</td>
        <td>Pairs</td>
        <td>Audio 1.5 & SB p. 14</td>
        <td>Play 10-second audio snippets of Audio 1.5. Pairs race to identify which of the 5 apps (<em>Olio, Charity Miles, Good On You, Brightest, My Life as a Refugee</em>) is speaking and state its exact purpose.</td>
      </tr>
      <tr>
        <td><strong>3. SPEAKING:<br>Would You Rather? (Tech)</strong></td>
        <td>6 min</td>
        <td>Pairs</td>
        <td>Board with prompts</td>
        <td>Pairs debate choices: <em>"Would you rather delete TikTok forever OR live without Wi-Fi for 1 month?"</em> Must state opinion and give 2 reasons using contrast linkers (<em>whereas, while</em>).</td>
      </tr>
      <tr>
        <td><strong>4. WRITING:<br>Linker Relay</strong></td>
        <td>5 min</td>
        <td>Pairs</td>
        <td>Scrap paper</td>
        <td>Student A writes an argument sentence (<em>"Online gaming improves reflexes."</em>). Student B must add a contrasting sentence starting with <em>However,</em> or <em>On the other hand,</em> with correct punctuation.</td>
      </tr>
      <tr>
        <td><strong>5. VOCABULARY:<br>Mime the Action</strong></td>
        <td>4 min</td>
        <td>Teams / Class</td>
        <td>None</td>
        <td>One student mimes a social media action (<em>scrolling, swiping right, tapping, uploading, streaming</em>). First team to shout the exact Unit 1 verb with correct pronunciation scores.</td>
      </tr>
      <tr>
        <td><strong>6. MIXED SKILLS:<br>Two Truths & An Algorithm</strong></td>
        <td>5 min</td>
        <td>Small Groups</td>
        <td>Board</td>
        <td>Teacher writes 3 statements about their online habits (2 true, 1 false). Students interview teacher using Unit 1 verbs (<em>log on, post, follow</em>) to detect the lie. Students repeat in groups.</td>
      </tr>
      <tr>
        <td><strong>7. WARM-UP:<br>Vocabulary Anagram</strong></td>
        <td>3 min</td>
        <td>Whole Class</td>
        <td>Board</td>
        <td>Teacher writes scrambled words: <em>M O T L A G H I R</em> (Algorithm), <em>P D U O L A</em> (Upload), <em>T E E F F C S</em> (Effects). First 3 students to unscramble write answers on board.</td>
      </tr>
      <tr>
        <td><strong>8. FAST FINISHER:<br>App Categorizer</strong></td>
        <td>3 min</td>
        <td>Individual</td>
        <td>Notebook</td>
        <td>Student selects 6 apps on their phone and classifies each under the 10 official Unit 1 categories from SB p. 15 (e.g., <em>Duolingo &rarr; Education/Reference; Spotify &rarr; Music</em>).</td>
      </tr>
      <tr>
        <td><strong>9. EMERGENCY 5-MIN:<br>30-Sec No-Filler Challenge</strong></td>
        <td>5 min</td>
        <td>Whole Class</td>
        <td>Digital Timer</td>
        <td>A student must speak non-stop for 30 seconds about their favorite app without pausing for more than 2 seconds, using at least 2 target collocations from p. 15.</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- ==================== PAGE 16: PRINTABLES & ASSESSMENT ==================== -->
<div class="page">
  <div class="section-title"><span class="num">7</span> Printable Materials Plan</div>
  <div class="card" style="padding: 6px 10px; margin-bottom: 8px;">
    <p style="font-size: 7.5pt; color: #475569; margin-bottom: 4px;">To maximize teaching efficiency with minimal printing costs, only <strong>3 high-impact printable resources</strong> are recommended for Unit 1:</p>
    
    <div style="font-size: 7.2pt; color: #334155; line-height: 1.25;">
      <p><strong>1. Photo Comparison & "Buying Time" Desk Mat (Lesson 4):</strong> Half-A4 laminated desk mat with 4 speech bubble categories (<em>Comparing, Contrasting, Speculating, Concluding</em>), an emergency "Buying Time" filler box (<em>"Let me see...", "Let me think for a moment..."</em>), and a 60-second peer evaluation checkbox.</p>
      <p><strong>2. 'For and Against' Essay Drafting Scaffold & Peer Review Slip (Lessons 7 & 8):</strong> Double-sided A4. Front: 4-box paragraph outline for <em>"Should there be stronger age restrictions on social media?"</em> with margin cues for linkers. Back: 5-point peer review checklist with comment lines.</p>
      <p><strong>3. Unit 1 Skills Progress & Formative Assessment Slip (Lesson 11):</strong> Quarter-A4 slip featuring a 4-point emoji / traffic-light scale for Reading, Listening, Speaking, Writing, and Vocabulary confidence.</p>
    </div>
  </div>

  <div class="section-title"><span class="num">8</span> Unit 1 Skills Formative Assessment Checklist</div>
  <p style="font-size: 7.5pt; color: #475569; margin-bottom: 5px;">Use this rubric during monitoring to track student mastery across the unit without formal exams:</p>

  <table>
    <thead>
      <tr>
        <th style="width: 18%;">Skill Domain</th>
        <th>Specific Observable Competency</th>
        <th style="width: 10%; text-align: center;">Basic</th>
        <th style="width: 12%; text-align: center;">Achieved</th>
        <th style="width: 10%; text-align: center;">Master</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="3"><strong>1. READING</strong></td>
        <td>Skims for gist and matches heading questions to Q&A paragraphs (p. 10)</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
      </tr>
      <tr>
        <td>Scans infographic charts for statistical facts and data trends (p. 18)</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
      </tr>
      <tr>
        <td>Identifies clue words and eliminates multiple-choice distractors (p. 10)</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
      </tr>
      <tr>
        <td rowspan="3"><strong>2. LISTENING</strong></td>
        <td>Understands overall gist of podcasts and video interviews (pp. 14, 19)</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
      </tr>
      <tr>
        <td>Extracts specific details in multiple-choice podcast audio (Audio 1.5)</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
      </tr>
      <tr>
        <td>Completes factual sentences from documentary video V1.1 (p. 19)</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
      </tr>
      <tr>
        <td rowspan="4"><strong>3. SPEAKING</strong></td>
        <td>Compares & contrasts 2 photos using <em>whereas/while</em> and linkers (p. 13)</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
      </tr>
      <tr>
        <td>Uses 'buying time' filler phrases when formulating thoughts (p. 13)</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
      </tr>
      <tr>
        <td>Actively asks and answers questions in pair interviews (pp. 9, 11, 20)</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
      </tr>
      <tr>
        <td>Formulates an opinion with at least one supporting reason (pp. 9, 11)</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
      </tr>
      <tr>
        <td rowspan="3"><strong>4. WRITING</strong></td>
        <td>Organizes a balanced 4-paragraph 'for and against' essay (p. 17)</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
      </tr>
      <tr>
        <td>Applies sequencing, adding, contrasting, and concluding linkers (p. 17)</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
      </tr>
      <tr>
        <td>Punctuates sentence linkers accurately with following commas (p. 17)</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
      </tr>
      <tr>
        <td rowspan="3"><strong>5. VOCABULARY</strong></td>
        <td>Accurately uses 17 social media action verbs in context (p. 11)</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
      </tr>
      <tr>
        <td>Matches app types to everyday verb-noun collocations (p. 15)</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
      </tr>
      <tr>
        <td>Forms nouns using suffixes (<em>-ing, -tion, -sion, -ment</em>) (p. 14)</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
      </tr>
      <tr>
        <td rowspan="2"><strong>6. PARTICIPATION</strong></td>
        <td>Engages constructively in low-anxiety pair & small group tasks</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
      </tr>
      <tr>
        <td>Contributes actively and politely during class mingling tasks (p. 20)</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
        <td style="text-align: center;">[ &nbsp; ]</td>
      </tr>
    </tbody>
  </table>
</div>

</body>
</html>
`;

async function generatePDF() {
  const outputPath = path.resolve(__dirname, 'Unit_1_Life_Online_Skills_Lesson_Plan.pdf');
  const downloadsPath = 'C:\\Users\\FATİH\\Downloads\\Unit_1_Life_Online_Skills_Lesson_Plan.pdf';
  
  console.log('Launching browser for PDF generation...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

  console.log('Rendering PDF to workspace path...');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    margin: {
      top: '8mm',
      bottom: '8mm',
      left: '8mm',
      right: '8mm'
    },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate: '<div style="width:100%; text-align:right; font-size:6.5pt; color:#94a3b8; padding-right:10mm; font-family:sans-serif;">Unit 1: Life Online | Skills Teaching Plan — Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>'
  });

  console.log('Rendering PDF to Downloads folder...');
  try {
    await page.pdf({
      path: downloadsPath,
      format: 'A4',
      margin: {
        top: '8mm',
        bottom: '8mm',
        left: '8mm',
        right: '8mm'
      },
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: '<div></div>',
      footerTemplate: '<div style="width:100%; text-align:right; font-size:6.5pt; color:#94a3b8; padding-right:10mm; font-family:sans-serif;">Unit 1: Life Online | Skills Teaching Plan — Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>'
    });
  } catch (err) {
    console.error('Could not write directly to Downloads path:', err.message);
  }

  await browser.close();
  console.log('PDF generation complete! File saved at: ' + outputPath);
}

generatePDF().catch(console.error);
