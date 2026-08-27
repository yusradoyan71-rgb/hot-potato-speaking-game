# 💣 HOT POTATO — TEAM EDITION
### *The High-Energy Classroom English Speaking Game for 7th & 8th Graders*

> **"Speak before the bomb goes BOOM!"** 🔥

---

## 🎮 Overview

**HOT POTATO: TEAM EDITION** is a real-time, team-based English speaking party game built specifically for middle school English classrooms (Grades 7 & 8, CEFR levels **A1–A2** with introductory **B1** prompts).

Unlike traditional elimination games where quieter students are quickly knocked out and stop practicing, **in this Team Edition NO PLAYER IS EVER ELIMINATED**. Teams collaborate, pass a ticking cartoon bomb, rotate speakers, and rack up points while practicing fluency, spontaneity, and creative speaking!

---

## 🚀 Key Features

- **🎓 Pedagogically Calibrated**: 210+ curated speaking prompts across 16 thematic categories tailored for 7th and 8th graders (Daily Life, School, Food, Opinions, Would You Rather, Imagination, Funny, Story Situations, etc.).
- **🔥🔥 Chaos Rounds**: Every 5 rounds brings an explosive Chaos Challenge (Robot voice, Pop star singing, Superhero pose, Speed speaking, Alien explanation) worth **+2 points**!
- **⚡ Special Team Events**: Random surprise rounds (Speed 10s Timer, Double Points, Team Help Allowed, Solo Warrior, Mystery Question).
- **⏱️ 15-Second Animated Bomb**: Dynamic SVG bomb with breathing idle, burning spark, shrinking fuse, 5-second warning glow, 3-second critical vibration, and explosive visual shockwave.
- **🔊 100% Offline Procedural Audio**: Uses the browser **Web Audio API** to synthesize clock ticking, urgent beeps, success chords, explosion booms, and victory fanfares in real time—**no audio files or internet required!**
- **👥 Fair Rotation Tracking**: Shows previous turns per student so teachers and teams can easily ensure every student speaks.
- **👩‍🏫 Teacher Controls & Keyboard Shortcuts**: Instant hotkeys for operating the game from a laptop or wireless remote clicker.
- **🏆 Comprehensive Post-Game Analytics**: Podium celebration with confetti, Top Speaker & Best Team Player MVP awards, and full classroom statistics table.

---

## 🕹️ How to Play

1. **Setup**:
   - Choose the number of teams (**2, 3, or 4 teams**).
   - Choose students per team (**2 to 6 students**).
   - Choose game length (**10, 15, 20 [Default], or 30 rounds**).
   - Enter student names (or click **"✨ Auto-Fill Fun Names"** for instant demo play).
2. **Turn Flow**:
   - The active team receives the bomb: `🔥 THE TIGERS HAVE THE BOMB!`.
   - The team selects which teammate will answer.
   - The **15-second countdown timer starts ONLY after the student is chosen**.
   - The student speaks aloud to answer the speaking prompt before time expires.
3. **Scoring**:
   - 🟢 **ANSWERED! (+1 Point / +2 in Chaos)**: Teacher clicks button or presses `Space`/`A`. Team gains points, success animation plays, bomb passes to the next team.
   - 🔴 **BOOM! (+0 Points)**: If time runs out or teacher presses `B`, the bomb explodes with screen shake and sound. No points awarded, but the player is **NOT** eliminated. Bomb passes to next team.
   - 🔄 **SKIP**: If the student needs a different prompt, teacher presses `S`. A new prompt appears for the same student with a fresh timer.
4. **Winning**:
   - The team with the highest point total after the chosen number of rounds wins the championship!

---

## ⌨️ Teacher Keyboard Shortcuts

| Shortcut | Action | Description |
|---|---|---|
| <kbd>Space</kbd> or <kbd>A</kbd> | **ANSWERED!** | Confirms correct answer, awards points (+1 or +2), and advances to next team |
| <kbd>B</kbd> or <kbd>X</kbd> | **BOOM!** | Triggers bomb explosion (+0 points) and passes bomb to next team |
| <kbd>S</kbd> | **SKIP QUESTION** | Generates a new prompt for the same student with reset timer |
| <kbd>P</kbd> | **PAUSE / RESUME** | Halts the timer and audio; opens pause overlay |
| <kbd>M</kbd> | **MUTE / UNMUTE** | Toggles Web Audio sound effects ON or OFF |
| <kbd>1</kbd> – <kbd>6</kbd> | **SELECT SPEAKER** | Quick-selects player 1 to 6 during the speaker choice phase |

---

## 📂 File Structure

```
├── index.html       # Semantic HTML5 markup, SVG bomb, modals & views
├── style.css        # Projector-optimized dark party design, CSS variables & animations
├── script.js        # Game engine, Web Audio synthesizer, 210+ question bank & stats
└── README.md        # Comprehensive documentation & teacher guide
```

---

## 🌐 Running Locally & Offline

No installation, build step, or Node.js server is required.

1. Double-click `index.html` to open directly in any modern browser (Chrome, Edge, Firefox, Safari).
2. Or serve locally with any HTTP server (e.g. `npx serve .` or `node server.js`).
3. Works completely offline once loaded!
