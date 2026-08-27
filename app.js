/**
 * FORMULA ENGLISH - Grand Prix Classroom Racing Controller
 * Designed specifically for ONE 35-MINUTE classroom lesson.
 * Manages game state, turn fairness, 35-min adaptive pacing, question presentation,
 * racing mechanics (Turbo, Overtaking, Pit Stops, Events, Shortcuts), and persistence.
 */

class FormulaApp {
  constructor() {
    this.state = {
      phase: "SETUP", // SETUP, STARTING_GRID, LIGHTS_COUNTDOWN, RACING, PIT_STOP, EVENT, SHORTCUT, FINAL_LAP, PODIUM
      totalLaps: 10,
      stepsPerLap: 1, // 1 Move = 1 Lap (+2 on Turbo, +2 on Double, +3 on Critical)
      activeTeamIndex: 0,
      activeTeamId: null,
      teams: [],
      questionIndex: 0,
      questionQueue: [],
      currentQuestion: null,
      selectedOptionIndex: null,
      isAnswerRevealed: false,
      isTurboActiveThisTurn: false,
      isDoubleMoveActive: false,
      isDrsActiveThisTurn: false,
      isWetTrack: false,
      turnCount: 0,
      eventsTriggeredCount: 0,
      maxEvents: 4,
      timerSeconds: 35 * 60, // 35:00 minutes
      isTimerRunning: false,
      timerInterval: null,
      pacingMultiplier: 1.0, // Escalates at 10m, 5m, 2m
      isProjectorMode: false,
      pendingChoice: null,
      eventData: null,
      finishedTeams: [],
      hasTriggeredFinalLapAlert: false,
      matchStartTime: null,
      matchEndTime: null
    };

    this.init();
  }

  init() {
    // Check saved state in localStorage
    const savedState = this.loadSavedState();
    if (savedState) {
      this.promptResumeDialog(savedState);
    } else {
      this.initDefaultSetup();
    }

    this.bindEvents();
    this.bindKeyboardShortcuts();
    this.updateAudioButtonUI();
  }

  // ==========================================
  // STORAGE & PERSISTENCE
  // ==========================================
  saveState() {
    try {
      const stateToSave = {
        phase: this.state.phase,
        totalLaps: this.state.totalLaps,
        activeTeamIndex: this.state.activeTeamIndex,
        activeTeamId: this.state.activeTeamId,
        teams: this.state.teams,
        questionIndex: this.state.questionIndex,
        turnCount: this.state.turnCount,
        eventsTriggeredCount: this.state.eventsTriggeredCount,
        timerSeconds: this.state.timerSeconds,
        isWetTrack: this.state.isWetTrack,
        pacingMultiplier: this.state.pacingMultiplier,
        finishedTeams: this.state.finishedTeams,
        isProjectorMode: this.state.isProjectorMode
      };
      localStorage.setItem("formula_english_state", JSON.stringify(stateToSave));
    } catch (e) {
      console.warn("Storage save error", e);
    }
  }

  loadSavedState() {
    try {
      const raw = localStorage.getItem("formula_english_state");
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      return null;
    }
    return null;
  }

  clearSavedState() {
    try {
      localStorage.removeItem("formula_english_state");
    } catch (e) {}
  }

  promptResumeDialog(savedState) {
    const modal = document.getElementById("resume-modal");
    if (modal) {
      modal.classList.add("active");
      const lapText = document.getElementById("resume-info-text");
      if (lapText && savedState.teams) {
        lapText.textContent = `A saved race with ${savedState.teams.length} teams is in progress (Timer: ${this.formatTime(savedState.timerSeconds)}).`;
      }
    }
  }

  resumeRace(savedState) {
    Object.assign(this.state, savedState);
    this.shuffleQuestions();
    
    // Close modal
    const modal = document.getElementById("resume-modal");
    if (modal) modal.classList.remove("active");

    // Apply Projector Mode if saved
    if (this.state.isProjectorMode) {
      document.body.classList.add("projector-mode");
    }

    // Switch view
    if (this.state.phase === "PODIUM") {
      this.renderPodium();
    } else {
      this.state.phase = "RACING";
      this.showScreen("race-screen");
      FormulaTrack.init();
      this.startTimer();
      this.nextTurn(false);
    }
  }

  // ==========================================
  // SETUP & STARTING GRID
  // ==========================================
  initDefaultSetup() {
    this.state.teams = JSON.parse(JSON.stringify(DEFAULT_TEAMS.slice(0, 4))); // Default 4 teams
    this.renderSetupTeams();
  }

  setTeamCount(count) {
    const num = parseInt(count, 10);
    if (num < 2 || num > 6) return;

    if (num === 2) {
      this.state.totalLaps = 10;
    } else if (num <= 4) {
      this.state.totalLaps = 10;
    } else {
      this.state.totalLaps = 10;
    }

    this.state.teams = JSON.parse(JSON.stringify(DEFAULT_TEAMS.slice(0, num)));
    this.renderSetupTeams();
  }

  renderSetupTeams() {
    const list = document.getElementById("setup-teams-list");
    if (!list) return;

    list.innerHTML = "";
    this.state.teams.forEach((team, index) => {
      const card = document.createElement("div");
      card.className = "team-setup-card";
      card.style.borderColor = team.primaryColor;
      card.style.boxShadow = `0 4px 15px ${team.glowColor}`;

      card.innerHTML = `
        <div class="team-card-header">
          <span class="team-badge" style="background: ${team.primaryColor}">P${index + 1}</span>
          <span class="team-car-icon">${team.icon}</span>
        </div>
        <div class="team-card-body">
          <label for="team-name-input-${index}" class="team-input-label">TEAM ${index + 1} NAME</label>
          <input type="text" id="team-name-input-${index}" class="team-name-input" 
                 value="${team.name}" maxlength="16" 
                 style="border-color: ${team.primaryColor}" />
          <div class="team-driver-tag" style="color: ${team.secondaryColor}">Car #${team.number} • ${team.motto}</div>
        </div>
      `;

      // Input listener
      const input = card.querySelector(`#team-name-input-${index}`);
      if (input) {
        input.addEventListener("input", (e) => {
          this.state.teams[index].name = e.target.value.trim() || `Team ${index + 1}`;
        });
      }

      list.appendChild(card);
    });

    // Update team count active buttons
    document.querySelectorAll(".btn-team-count").forEach(btn => {
      const cnt = parseInt(btn.dataset.count, 10);
      btn.classList.toggle("active", cnt === this.state.teams.length);
    });
  }

  startStartingGrid() {
    // Read names from inputs
    this.state.teams.forEach((team, index) => {
      const input = document.getElementById(`team-name-input-${index}`);
      if (input && input.value.trim()) {
        team.name = input.value.trim();
      }
      // Initialize race telemetry for each team
      team.currentLap = 1;
      team.stepInLap = 0;
      team.stepsPerLap = this.state.stepsPerLap;
      team.totalMoves = 0;
      team.turbosAvailable = 1; // Start with 1 free Turbo!
      team.isTurboActive = false;
      team.speedBonusActive = false;
      team.correctAnswers = 0;
      team.wrongAnswers = 0;
      team.turbosUsed = 0;
      team.overtakesCount = 0;
      team.pitStopsCount = 0;
      team.position = index + 1;
      team.finished = false;
      team.finishRank = null;
    });

    // Shuffle questions
    this.shuffleQuestions();

    this.state.phase = "STARTING_GRID";
    this.showScreen("starting-grid-screen");
    this.renderStartingGridList();
    FormulaAudio.playClick();
  }

  renderStartingGridList() {
    const gridContainer = document.getElementById("starting-grid-slots");
    if (!gridContainer) return;

    gridContainer.innerHTML = "";
    this.state.teams.forEach((team, index) => {
      const row = document.createElement("div");
      row.className = "grid-slot-row";
      row.style.borderLeftColor = team.primaryColor;

      row.innerHTML = `
        <div class="grid-pos" style="background: ${team.primaryColor}">P${index + 1}</div>
        <div class="grid-car-preview">${team.icon} <strong>${team.name.toUpperCase()}</strong></div>
        <div class="grid-car-number">CAR #${team.number}</div>
        <div class="grid-turbo-indicator">⚡ 1x Turbo Charged</div>
      `;
      gridContainer.appendChild(row);
    });
  }

  // 🔴🔴🔴🔴🔴 -> 🟢🟢🟢🟢🟢 5-Red-Lights Sequence
  launchStartingCountdown() {
    this.state.phase = "LIGHTS_COUNTDOWN";
    const overlay = document.getElementById("lights-countdown-overlay");
    if (overlay) overlay.classList.add("active");

    const lights = [
      document.getElementById("light-1"),
      document.getElementById("light-2"),
      document.getElementById("light-3"),
      document.getElementById("light-4"),
      document.getElementById("light-5")
    ];

    lights.forEach(l => {
      if (l) l.className = "f1-light off";
    });

    const banner = document.getElementById("lights-banner-text");
    if (banner) banner.textContent = "ENGINES STARTING...";

    // 1-by-1 red lights countdown
    let step = 0;
    const lightInterval = setInterval(() => {
      if (step < 5) {
        if (lights[step]) lights[step].className = "f1-light red";
        FormulaAudio.playStartLight(false);
        step++;
      } else {
        clearInterval(lightInterval);
        if (banner) banner.textContent = "WAIT FOR LIGHTS OUT...";
        
        // Random pause between 1.2s and 2.4s
        const randomHold = 1200 + Math.random() * 1200;
        setTimeout(() => {
          // LIGHTS OUT & AWAY WE GO!
          lights.forEach(l => {
            if (l) l.className = "f1-light green";
          });
          if (banner) banner.textContent = "🟢 LIGHTS OUT AND AWAY WE GO! 🏁";
          FormulaAudio.playStartLight(true);

          setTimeout(() => {
            if (overlay) overlay.classList.remove("active");
            this.startMainRace();
          }, 1400);
        }, randomHold);
      }
    }, 800);
  }

  startMainRace() {
    this.state.phase = "RACING";
    this.state.matchStartTime = Date.now();
    this.state.activeTeamIndex = 0;
    this.state.activeTeamId = this.state.teams[0].id;
    this.showScreen("race-screen");
    FormulaTrack.init();
    this.startTimer();
    this.nextTurn(false);
  }

  // ==========================================
  // QUESTIONS & SHUFFLE
  // ==========================================
  shuffleQuestions() {
    const questions = typeof FORMULA_QUESTIONS !== "undefined" ? FORMULA_QUESTIONS : [];
    // Fisher-Yates shuffle
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    this.state.questionQueue = shuffled;
    this.state.questionIndex = 0;
  }

  getNextQuestion() {
    if (this.state.questionQueue.length === 0 || this.state.questionIndex >= this.state.questionQueue.length) {
      this.shuffleQuestions();
    }
    const q = this.state.questionQueue[this.state.questionIndex];
    this.state.questionIndex++;
    return q;
  }

  // ==========================================
  // 35-MINUTE TIMER & ADAPTIVE PACING
  // ==========================================
  startTimer() {
    if (this.state.timerInterval) clearInterval(this.state.timerInterval);
    this.state.isTimerRunning = true;
    this.updateTimerDisplay();

    this.state.timerInterval = setInterval(() => {
      if (this.state.isTimerRunning && this.state.timerSeconds > 0) {
        this.state.timerSeconds--;
        this.updateTimerDisplay();
        this.checkPacingMilestones();
      }
    }, 1000);
  }

  pauseTimer() {
    this.state.isTimerRunning = false;
    this.updateTimerDisplay();
  }

  resumeTimer() {
    this.state.isTimerRunning = true;
    this.updateTimerDisplay();
  }

  toggleTimerPause() {
    this.state.isTimerRunning = !this.state.isTimerRunning;
    this.updateTimerDisplay();
    FormulaAudio.playClick();
  }

  adjustTimer(secondsDelta) {
    this.state.timerSeconds = Math.max(0, this.state.timerSeconds + secondsDelta);
    this.updateTimerDisplay();
    FormulaAudio.playClick();
  }

  formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  updateTimerDisplay() {
    const digits = document.getElementById("timer-digits");
    const pauseBtn = document.getElementById("timer-pause-btn");
    const modeBadge = document.getElementById("timer-mode-badge");

    if (digits) {
      digits.textContent = this.formatTime(this.state.timerSeconds);
      if (this.state.timerSeconds <= 300) {
        digits.classList.add("danger-pulse");
      } else if (this.state.timerSeconds <= 600) {
        digits.classList.add("warning-pulse");
      } else {
        digits.classList.remove("danger-pulse", "warning-pulse");
      }
    }

    if (pauseBtn) {
      pauseBtn.textContent = this.state.isTimerRunning ? "⏸" : "▶";
      pauseBtn.title = this.state.isTimerRunning ? "Pause Timer (P)" : "Resume Timer (P)";
    }

    if (modeBadge) {
      if (this.state.pacingMultiplier >= 2.5) {
        modeBadge.textContent = "⚡ FINAL SPRINT BOOST";
        modeBadge.className = "timer-mode-badge sprint";
      } else if (this.state.pacingMultiplier >= 1.5) {
        modeBadge.textContent = "🔥 DOUBLE ACCELERATION";
        modeBadge.className = "timer-mode-badge accelerated";
      } else {
        modeBadge.textContent = "35m Standard Mode";
        modeBadge.className = "timer-mode-badge";
      }
    }
  }

  checkPacingMilestones() {
    const s = this.state.timerSeconds;
    // Milestone 1: 10 minutes left (600s)
    if (s === 600) {
      this.triggerPacingAlert("⚠️ 10 MINUTES REMAINING — FINAL SECTORS APPROACHING! (+1 Move Speed Bonus Active)");
      this.state.pacingMultiplier = 1.5;
      FormulaAudio.playWarning();
    }
    // Milestone 2: 5 minutes left (300s)
    if (s === 300) {
      this.triggerPacingAlert("🚨 5 MINUTES REMAINING — FINAL LAP PHASE ACTIVATED! (Double Movement on All Answers)");
      this.state.pacingMultiplier = 2.0;
      FormulaAudio.playFinalLap();
    }
    // Milestone 3: 2 minutes left (120s)
    if (s === 120) {
      this.triggerPacingAlert("🏁 2 MINUTES REMAINING — FINAL SPRINT! ALL TEAMS RECEIVE EMERGENCY TURBO!");
      this.state.pacingMultiplier = 3.0;
      // Free Turbos to all active teams
      this.state.teams.forEach(t => t.turbosAvailable = Math.max(t.turbosAvailable, 2));
      FormulaAudio.playTurbo();
    }
  }

  triggerPacingAlert(msg) {
    const banner = document.getElementById("race-broadcast-banner");
    if (banner) {
      banner.innerHTML = `<span class="alert-pulse">${msg}</span>`;
      banner.classList.add("visible");
      setTimeout(() => banner.classList.remove("visible"), 5000);
    }
  }

  // Teacher manual pace boost button
  boostPace() {
    this.state.teams.forEach(team => {
      if (!team.finished) {
        team.currentLap = Math.min(this.state.totalLaps, team.currentLap + 1);
        team.totalMoves += this.state.stepsPerLap;
      }
    });
    this.updateLeaderboard();
    FormulaTrack.updateCars(this.state.teams, this.state.activeTeamId, this.state.totalLaps);
    this.triggerPacingAlert("⏩ TEACHER ACCELERATION: +1 LAP APPLIED TO ENTIRE FIELD!");
    FormulaAudio.playEngineRev(1.4);
    FormulaAudio.playClick();
  }

  // ==========================================
  // TURN CYCLE & QUESTION PRESENTATION
  // ==========================================
  getActiveTeam() {
    return this.state.teams[this.state.activeTeamIndex];
  }

  nextTurn(advanceTeam = true) {
    // If advancing team index
    if (advanceTeam) {
      let attempts = 0;
      do {
        this.state.activeTeamIndex = (this.state.activeTeamIndex + 1) % this.state.teams.length;
        attempts++;
      } while (this.state.teams[this.state.activeTeamIndex].finished && attempts < this.state.teams.length);

      // Check if all teams are finished
      const unfinishedCount = this.state.teams.filter(t => !t.finished).length;
      if (unfinishedCount === 0) {
        this.endRace();
        return;
      }
    }

    const currentTeam = this.getActiveTeam();
    this.state.activeTeamId = currentTeam.id;
    this.state.isTurboActiveThisTurn = false;
    this.state.isDoubleMoveActive = false;
    this.state.isAnswerRevealed = false;
    this.state.selectedOptionIndex = null;
    this.state.turnCount++;

    // Check for random Pit Stop / Race Event / Shortcut triggers
    if (this.maybeTriggerRaceMechanic(currentTeam)) {
      return;
    }

    // Load next question
    this.state.currentQuestion = this.getNextQuestion();
    this.renderQuestionCard(currentTeam, this.state.currentQuestion);
    this.updateLeaderboard();
    FormulaTrack.updateCars(this.state.teams, this.state.activeTeamId, this.state.totalLaps);
    this.saveState();
  }

  // Random Mechanic Decision (Pit Stop, Event, Shortcut)
  maybeTriggerRaceMechanic(currentTeam) {
    // Check if team is on final straight (>= totalLaps and step == 2)
    if (currentTeam.currentLap >= this.state.totalLaps && currentTeam.stepInLap >= this.state.stepsPerLap - 1) {
      this.triggerFinalStraightChallenge(currentTeam);
      return true;
    }

    // 1. Pit Stop Window (every ~8 turns or if strategy calls for it)
    if (this.state.turnCount > 3 && this.state.turnCount % 9 === 0) {
      this.triggerPitStopModal(currentTeam);
      return true;
    }

    // 2. Race Events (max 4 per game, spaced out)
    if (this.state.eventsTriggeredCount < this.state.maxEvents && this.state.turnCount > 4 && this.state.turnCount % 11 === 0) {
      this.triggerRandomRaceEvent();
      return true;
    }

    // 3. Shortcut Decision (occasional fork)
    if (this.state.turnCount > 5 && this.state.turnCount % 7 === 0) {
      this.triggerShortcutModal(currentTeam);
      return true;
    }

    return false;
  }

  // ==========================================
  // QUESTION CARD RENDERING & TEACHER CONTROLS
  // ==========================================
  renderQuestionCard(team, question) {
    const card = document.getElementById("question-display-card");
    if (!card) return;

    // Header updates
    const teamBadge = document.getElementById("active-team-badge");
    const lapIndicator = document.getElementById("current-lap-indicator");
    const turboBtn = document.getElementById("use-turbo-btn");
    const turboCountBadge = document.getElementById("team-turbo-count");

    if (teamBadge) {
      teamBadge.style.background = team.primaryColor;
      teamBadge.style.boxShadow = `0 0 15px ${team.glowColor}`;
      teamBadge.innerHTML = `
        <span class="active-team-icon">${team.icon}</span>
        <span class="active-team-name">${team.name.toUpperCase()}</span>
        <span class="active-team-rank">P${team.position || 1}</span>
      `;
    }

    if (lapIndicator) {
      lapIndicator.innerHTML = `🏁 <strong>LAP ${team.currentLap}</strong> / ${this.state.totalLaps} <span class="sector-tag">• SECTOR ${team.stepInLap + 1}</span>`;
    }

    // Turbo Button status
    if (turboBtn) {
      const hasTurbo = team.turbosAvailable > 0;
      turboBtn.disabled = !hasTurbo;
      turboBtn.classList.toggle("ready", hasTurbo);
      if (turboCountBadge) {
        turboCountBadge.textContent = `(${team.turbosAvailable})`;
      }
    }

    // Category & Type Badges
    const categoryBadge = document.getElementById("question-category-badge");
    const typeBadge = document.getElementById("question-type-badge");
    if (categoryBadge) {
      categoryBadge.textContent = `${question.category} [${question.level}]`;
    }
    if (typeBadge) {
      if (question.type === "turbo") {
        typeBadge.textContent = "⚡ TURBO REWARD QUESTION";
        typeBadge.className = "q-badge type-turbo";
      } else if (question.type === "double") {
        typeBadge.textContent = "🔥 DOUBLE MOVE QUESTION (+2)";
        typeBadge.className = "q-badge type-double";
      } else if (question.type === "critical") {
        typeBadge.textContent = "💥 CRITICAL LAP QUESTION (+3)";
        typeBadge.className = "q-badge type-critical";
      } else {
        typeBadge.textContent = "🏎️ RACE QUESTION (+1)";
        typeBadge.className = "q-badge type-standard";
      }
    }

    // Question Text
    const qText = document.getElementById("question-text");
    if (qText) {
      qText.textContent = question.question;
    }

    // Options (A, B, C, D)
    const optionsContainer = document.getElementById("question-options-grid");
    if (optionsContainer) {
      optionsContainer.innerHTML = "";
      const letters = ["A", "B", "C", "D"];
      question.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option-btn";
        btn.id = `option-btn-${idx}`;
        btn.innerHTML = `<span class="opt-letter">${letters[idx]}</span> <span class="opt-text">${opt}</span>`;
        
        btn.addEventListener("click", () => {
          this.selectOption(idx);
        });

        optionsContainer.appendChild(btn);
      });
    }

    // Reset Explanation
    const expBox = document.getElementById("question-explanation-box");
    if (expBox) {
      expBox.classList.remove("visible");
      expBox.innerHTML = "";
    }

    // Reset Teacher Judgement Buttons
    const judgeCorrectBtn = document.getElementById("judge-correct-btn");
    const judgeWrongBtn = document.getElementById("judge-wrong-btn");
    if (judgeCorrectBtn) judgeCorrectBtn.disabled = false;
    if (judgeWrongBtn) judgeWrongBtn.disabled = false;
  }

  selectOption(idx) {
    this.state.selectedOptionIndex = idx;
    document.querySelectorAll(".option-btn").forEach((btn, i) => {
      btn.classList.toggle("selected", i === idx);
    });
    FormulaAudio.playClick();
  }

  // ⚡ USE TURBO BUTTON
  activateTurbo() {
    const team = this.getActiveTeam();
    if (!team || team.turbosAvailable <= 0 || this.state.isTurboActiveThisTurn) return;

    team.turbosAvailable--;
    team.turbosUsed++;
    team.isTurboActive = true;
    this.state.isTurboActiveThisTurn = true;

    // Trigger visual & sound FX
    FormulaAudio.playTurbo();
    FormulaTrack.triggerTurboFX(team);
    FormulaTrack.updateCars(this.state.teams, this.state.activeTeamId, this.state.totalLaps);

    const turboBtn = document.getElementById("use-turbo-btn");
    if (turboBtn) {
      turboBtn.disabled = true;
      turboBtn.classList.add("turbo-deployed");
    }
    const turboCountBadge = document.getElementById("team-turbo-count");
    if (turboCountBadge) {
      turboCountBadge.textContent = `(${team.turbosAvailable})`;
    }

    this.triggerPacingAlert(`⚡ ${team.name.toUpperCase()} DEPLOYED TURBO BOOST! (+2 MOVES)`);
    this.saveState();
  }

  // 👁️ REVEAL ANSWER & EXPLANATION
  revealAnswer() {
    this.state.isAnswerRevealed = true;
    const q = this.state.currentQuestion;
    if (!q) return;

    document.querySelectorAll(".option-btn").forEach((btn, idx) => {
      if (idx === q.correctIndex) {
        btn.classList.add("revealed-correct");
      } else {
        btn.classList.add("revealed-dim");
      }
    });

    const expBox = document.getElementById("question-explanation-box");
    if (expBox) {
      expBox.innerHTML = `<strong>💡 EXPLANATION:</strong> ${q.explanation}`;
      expBox.classList.add("visible");
    }
    FormulaAudio.playClick();
  }

  // ✅ TEACHER MARKS CORRECT (Key 'C')
  markCorrect() {
    const team = this.getActiveTeam();
    const q = this.state.currentQuestion;
    if (!team || !q) return;

    team.correctAnswers++;
    FormulaAudio.playCorrect();
    this.revealAnswer();

    // Calculate movement amount
    let moves = 1; // base move

    // Question type bonus
    if (q.type === "double" || this.state.isDoubleMoveActive) moves += 1;
    if (q.type === "critical") moves += 2;
    if (q.type === "turbo") {
      team.turbosAvailable = Math.min(3, team.turbosAvailable + 1);
      this.triggerPacingAlert(`⚡ +1 TURBO CANISTER AWARDED TO ${team.name.toUpperCase()}!`);
    }

    // Active Turbo Bonus (+2)
    if (this.state.isTurboActiveThisTurn) {
      moves += 2;
    }

    // Active Speed Bonus from Pit Stop
    if (team.speedBonusActive) {
      moves += 1;
      team.speedBonusActive = false;
    }

    // Active DRS Bonus
    if (this.state.isDrsActiveThisTurn) {
      moves += 1;
      this.state.isDrsActiveThisTurn = false;
    }

    // Adaptive Pacing Multiplier
    if (this.state.pacingMultiplier >= 2.0) {
      moves = Math.round(moves * 1.5);
    }

    // Apply movement
    this.advanceTeam(team, moves);

    // Disable buttons temporarily
    const judgeCorrectBtn = document.getElementById("judge-correct-btn");
    const judgeWrongBtn = document.getElementById("judge-wrong-btn");
    if (judgeCorrectBtn) judgeCorrectBtn.disabled = true;
    if (judgeWrongBtn) judgeWrongBtn.disabled = true;

    // Proceed to next turn after brief celebration
    setTimeout(() => {
      this.nextTurn(true);
    }, 1800);
  }

  // ❌ TEACHER MARKS INCORRECT (Key 'X')
  markIncorrect() {
    const team = this.getActiveTeam();
    if (!team) return;

    team.wrongAnswers++;
    team.isTurboActive = false;
    FormulaAudio.playWrong();
    this.revealAnswer();

    // Disable buttons temporarily
    const judgeCorrectBtn = document.getElementById("judge-correct-btn");
    const judgeWrongBtn = document.getElementById("judge-wrong-btn");
    if (judgeCorrectBtn) judgeCorrectBtn.disabled = true;
    if (judgeWrongBtn) judgeWrongBtn.disabled = true;

    // Rubber-band: If team is in last place, grant them a 50% chance of a pity Turbo recharge!
    if (team.position === this.state.teams.length && team.turbosAvailable === 0) {
      team.turbosAvailable = 1;
      this.triggerPacingAlert(`⚡ RUBBER-BAND BOOST: ${team.name.toUpperCase()} RECHARGED 1 TURBO!`);
    }

    // Proceed to next turn
    setTimeout(() => {
      this.nextTurn(true);
    }, 1800);
  }

  // Advance team along track laps and steps
  advanceTeam(team, moveAmount) {
    const oldPosition = team.position;
    team.totalMoves += moveAmount;
    team.currentLap = Math.min(this.state.totalLaps, team.totalMoves + 1);

    FormulaAudio.playEngineRev(1.2);

    // Check for Final Lap Alert
    if (team.currentLap >= this.state.totalLaps && !this.state.hasTriggeredFinalLapAlert) {
      this.state.hasTriggeredFinalLapAlert = true;
      this.triggerFinalLapAnnouncement(team);
    }

    // Check if team finished
    if (team.totalMoves >= this.state.totalLaps) {
      this.recordTeamFinish(team);
    }

    // Check Overtakes
    this.updateLeaderboard();
    const newPosition = team.position;
    if (newPosition < oldPosition) {
      team.overtakesCount += (oldPosition - newPosition);
      const overtaken = this.state.teams.find(t => t.position === oldPosition);
      if (overtaken) {
        FormulaAudio.playOvertake();
        FormulaTrack.triggerOvertakeFX(team, overtaken);
      }
    }

    FormulaTrack.updateCars(this.state.teams, this.state.activeTeamId, this.state.totalLaps);
    this.saveState();
  }

  // ==========================================
  // FINAL LAP & FINISH LINE
  // ==========================================
  triggerFinalLapAnnouncement(leadingTeam) {
    const banner = document.getElementById("race-broadcast-banner");
    if (banner) {
      banner.innerHTML = `🚨 <strong style="color:#ff0055">FINAL LAP!</strong> ${leadingTeam.name.toUpperCase()} LEADS THE RACE! 🏁`;
      banner.classList.add("visible");
      setTimeout(() => banner.classList.remove("visible"), 4500);
    }
    FormulaAudio.playFinalLap();
  }

  triggerFinalStraightChallenge(team) {
    this.state.phase = "FINAL_LAP";
    const finalQ = {
      id: "final-straight-001",
      category: "Championship Grammar Master",
      level: "B1",
      question: "🏁 FINAL STRAIGHT CHALLENGE: Choose the sentence that is 100% grammatically correct:",
      options: [
        "If our team wins today, we will celebrate on the podium.",
        "If our team will win today, we celebrate on the podium.",
        "If our team win today, we would celebrate on the podium.",
        "If our team won today, we will celebrated on the podium."
      ],
      correctIndex: 0,
      explanation: "First Conditional Rule: If + Present Simple (wins), will + base verb (celebrate).",
      type: "critical"
    };

    this.state.currentQuestion = finalQ;
    this.renderQuestionCard(team, finalQ);
    this.triggerPacingAlert(`🏁 FINAL STRAIGHT CHALLENGE FOR ${team.name.toUpperCase()}! FULL SPEED TO VICTORY!`);
  }

  recordTeamFinish(team) {
    if (team.finished) return;
    team.finished = true;
    const rank = this.state.finishedTeams.length + 1;
    team.finishRank = rank;
    this.state.finishedTeams.push(team);

    FormulaAudio.playVictory();
    this.triggerPacingAlert(`🎉 FINISH! 🏁 ${team.name.toUpperCase()} CROSSES THE LINE IN P${rank}! 🏆`);

    // If top 3 or all teams finished
    if (this.state.finishedTeams.length >= Math.min(3, this.state.teams.length)) {
      setTimeout(() => {
        this.endRace();
      }, 3000);
    }
  }

  // ==========================================
  // LEADERBOARD & TIMING TOWER
  // ==========================================
  updateLeaderboard() {
    // Sort teams by totalMoves descending
    const sorted = [...this.state.teams].sort((a, b) => {
      if (a.finished && b.finished) return a.finishRank - b.finishRank;
      if (a.finished) return -1;
      if (b.finished) return 1;
      return b.totalMoves - a.totalMoves;
    });

    sorted.forEach((team, idx) => {
      team.position = idx + 1;
    });

    const tower = document.getElementById("timing-tower-list");
    if (!tower) return;

    tower.innerHTML = "";
    sorted.forEach((team) => {
      const row = document.createElement("div");
      const isActive = team.id === this.state.activeTeamId;
      row.className = `timing-row ${isActive ? 'active-turn' : ''} ${team.finished ? 'finished' : ''}`;
      row.style.borderLeftColor = team.primaryColor;

      // Delta calculation
      let deltaText = "LDR";
      if (team.position > 1) {
        const leaderMoves = sorted[0].totalMoves;
        const diff = leaderMoves - team.totalMoves;
        deltaText = `+${(diff * 0.45).toFixed(1)}s`;
      }
      if (team.finished) {
        deltaText = `🏁 P${team.finishRank}`;
      }

      row.innerHTML = `
        <span class="tower-pos" style="background: ${team.primaryColor}">P${team.position}</span>
        <span class="tower-car-icon">${team.icon}</span>
        <span class="tower-name">${team.name.toUpperCase()}</span>
        <span class="tower-lap">L${team.currentLap}</span>
        <span class="tower-turbos" title="Turbos Available">⚡${team.turbosAvailable}</span>
        <span class="tower-delta">${deltaText}</span>
      `;

      tower.appendChild(row);
    });
  }

  // ==========================================
  // PIT STOP MODAL & CHOICES
  // ==========================================
  triggerPitStopModal(team) {
    this.state.phase = "PIT_STOP";
    const modal = document.getElementById("pit-stop-modal");
    if (!modal) return;

    FormulaAudio.playPitStop();
    modal.classList.add("active");

    const header = document.getElementById("pit-stop-header-team");
    if (header) {
      header.textContent = `${team.name.toUpperCase()}`;
      header.style.color = team.primaryColor;
    }

    // Set buttons
    const btnTires = document.getElementById("pit-choice-tires");
    const btnFuel = document.getElementById("pit-choice-fuel");
    const btnRepair = document.getElementById("pit-choice-repair");

    if (btnTires) {
      btnTires.onclick = () => this.resolvePitStop(team, "TIRES");
    }
    if (btnFuel) {
      btnFuel.onclick = () => this.resolvePitStop(team, "FUEL");
    }
    if (btnRepair) {
      btnRepair.onclick = () => this.resolvePitStop(team, "REPAIR");
    }
  }

  resolvePitStop(team, choice) {
    team.pitStopsCount++;
    const modal = document.getElementById("pit-stop-modal");
    if (modal) modal.classList.remove("active");

    FormulaAudio.playPitStop();

    if (choice === "TIRES") {
      team.speedBonusActive = true;
      this.triggerPacingAlert(`⚡ ${team.name.toUpperCase()} FITTED SOFT TIRES! (+1 Speed Bonus Next Turn)`);
    } else if (choice === "FUEL") {
      team.turbosAvailable = Math.min(3, team.turbosAvailable + 1);
      this.triggerPacingAlert(`⛽ ${team.name.toUpperCase()} REFUELED! (+1 TURBO CANISTER STORED)`);
    } else if (choice === "REPAIR") {
      this.advanceTeam(team, 1);
      this.triggerPacingAlert(`🛠️ ${team.name.toUpperCase()} COMPLETED AERO TUNING! (+1 INSTANT MOVE)`);
    }

    setTimeout(() => {
      this.state.phase = "RACING";
      this.state.currentQuestion = this.getNextQuestion();
      this.renderQuestionCard(team, this.state.currentQuestion);
    }, 1200);
  }

  // ==========================================
  // SHORTCUT SYSTEM MODAL
  // ==========================================
  triggerShortcutModal(team) {
    this.state.phase = "SHORTCUT";
    const modal = document.getElementById("shortcut-modal");
    if (!modal) return;

    modal.classList.add("active");
    const teamTitle = document.getElementById("shortcut-team-name");
    if (teamTitle) {
      teamTitle.textContent = team.name.toUpperCase();
      teamTitle.style.color = team.primaryColor;
    }

    const btnMain = document.getElementById("shortcut-choice-main");
    const btnCut = document.getElementById("shortcut-choice-cut");

    if (btnMain) {
      btnMain.onclick = () => {
        modal.classList.remove("active");
        this.state.isDoubleMoveActive = false;
        this.state.phase = "RACING";
        this.state.currentQuestion = this.getNextQuestion();
        this.renderQuestionCard(team, this.state.currentQuestion);
        FormulaAudio.playClick();
      };
    }

    if (btnCut) {
      btnCut.onclick = () => {
        modal.classList.remove("active");
        this.state.isDoubleMoveActive = true; // High reward!
        this.state.phase = "RACING";
        this.state.currentQuestion = this.getNextQuestion();
        this.triggerPacingAlert(`🛣️ ${team.name.toUpperCase()} TOOK THE SHORTCUT! (Double Move on Correct Answer)`);
        this.renderQuestionCard(team, this.state.currentQuestion);
        FormulaAudio.playTurbo();
      };
    }
  }

  // ==========================================
  // RACE EVENTS (Rain, Safety Car, DRS, Crash)
  // ==========================================
  triggerRandomRaceEvent() {
    this.state.phase = "EVENT";
    this.state.eventsTriggeredCount++;
    const modal = document.getElementById("race-event-modal");
    if (!modal) return;

    const events = [
      {
        id: "event-rain",
        icon: "🌧️",
        title: "RAIN DOWNPOUR AT THE CIRCUIT!",
        desc: "Dark clouds burst open over Sector 2 and 3! Track surface is now wet.",
        options: [
          { text: "🌧️ Fit Wet Weather Tires (Safe Grip)", action: "WET_TIRES" },
          { text: "🏎️ Brave Slicks (Gamble for Speed)", action: "SLICKS" }
        ]
      },
      {
        id: "event-safety-car",
        icon: "🚨",
        title: "SAFETY CAR DEPLOYED!",
        desc: "Debris on track! All race cars bunch up closely. Trailing teams close the gap!",
        options: [
          { text: "🏎️ Follow Safety Car Delta", action: "SAFETY_CAR" }
        ]
      },
      {
        id: "event-drs",
        icon: "⚡",
        title: "DRS ZONE ACTIVATED!",
        desc: "Race Stewards enable the rear wing DRS flaps! Next team with a correct answer gets +1 extra move.",
        options: [
          { text: "⚡ Open DRS Flap", action: "DRS_ENABLE" }
        ]
      },
      {
        id: "event-crash",
        icon: "💥",
        title: "BARRIER INCIDENT IN SECTOR 2!",
        desc: "Yellow flags waving in the hairpin! Drivers must navigate with care.",
        options: [
          { text: "🛠️ Safe Sector Passage", action: "SAFE_PASS" }
        ]
      }
    ];

    const currentEvent = events[this.state.eventsTriggeredCount % events.length];
    this.state.eventData = currentEvent;

    FormulaAudio.playWarning();
    modal.classList.add("active");

    const iconEl = document.getElementById("event-modal-icon");
    const titleEl = document.getElementById("event-modal-title");
    const descEl = document.getElementById("event-modal-desc");
    const actionsEl = document.getElementById("event-modal-actions");

    if (iconEl) iconEl.textContent = currentEvent.icon;
    if (titleEl) titleEl.textContent = currentEvent.title;
    if (descEl) descEl.textContent = currentEvent.desc;

    if (actionsEl) {
      actionsEl.innerHTML = "";
      currentEvent.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "btn-event-choice";
        btn.textContent = opt.text;
        btn.onclick = () => this.resolveRaceEvent(opt.action);
        actionsEl.appendChild(btn);
      });
    }
  }

  resolveRaceEvent(action) {
    const modal = document.getElementById("race-event-modal");
    if (modal) modal.classList.remove("active");

    if (action === "WET_TIRES") {
      this.state.isWetTrack = true;
      FormulaTrack.setTrackCondition("🌧️ WET TRACK", true);
      this.triggerPacingAlert("🌧️ ALL CARS EQUIPPED WITH INTERMEDIATE RAIN TIRES!");
    } else if (action === "SAFETY_CAR") {
      // Bunch up trailing teams (close gap by +1 move)
      this.state.teams.forEach(t => {
        if (t.position > 1) {
          this.advanceTeam(t, 1);
        }
      });
      this.triggerPacingAlert("🚨 SAFETY CAR BUNCHED THE FIELD! PACK IS TIGHT!");
      FormulaAudio.playWarning();
    } else if (action === "DRS_ENABLE") {
      this.state.isDrsActiveThisTurn = true;
      this.triggerPacingAlert("⚡ DRS REAR WING FLAP OPEN! (+1 MOVE BONUS READY)");
      FormulaAudio.playTurbo();
    } else {
      this.triggerPacingAlert("🟢 GREEN FLAG! FULL RACING RESUMES!");
      FormulaAudio.playEngineRev(1.2);
    }

    setTimeout(() => {
      this.state.phase = "RACING";
      const team = this.getActiveTeam();
      this.state.currentQuestion = this.getNextQuestion();
      this.renderQuestionCard(team, this.state.currentQuestion);
    }, 1200);
  }

  skipCurrentEvent() {
    const modal = document.getElementById("race-event-modal");
    const pitModal = document.getElementById("pit-stop-modal");
    const shortcutModal = document.getElementById("shortcut-modal");

    if (modal) modal.classList.remove("active");
    if (pitModal) pitModal.classList.remove("active");
    if (shortcutModal) shortcutModal.classList.remove("active");

    this.state.phase = "RACING";
    const team = this.getActiveTeam();
    this.state.currentQuestion = this.getNextQuestion();
    this.renderQuestionCard(team, this.state.currentQuestion);
    FormulaAudio.playClick();
  }

  // ==========================================
  // PODIUM CEREMONY & STATISTICS
  // ==========================================
  endRace() {
    this.state.phase = "PODIUM";
    this.pauseTimer();
    this.state.matchEndTime = Date.now();
    this.showScreen("podium-screen");
    FormulaAudio.playVictory();
    this.renderPodium();
    this.triggerConfetti();
    this.clearSavedState();
  }

  renderPodium() {
    const sorted = [...this.state.teams].sort((a, b) => {
      if (a.finishRank && b.finishRank) return a.finishRank - b.finishRank;
      return b.totalMoves - a.totalMoves;
    });

    const p1 = sorted[0] || {};
    const p2 = sorted[1] || {};
    const p3 = sorted[2] || {};

    // 1st Place Gold
    const p1Name = document.getElementById("podium-p1-name");
    const p1Car = document.getElementById("podium-p1-car");
    if (p1Name) p1Name.textContent = p1.name ? p1.name.toUpperCase() : "TIGERS";
    if (p1Car) p1Car.textContent = p1.icon || "🏎️";

    // 2nd Place Silver
    const p2Name = document.getElementById("podium-p2-name");
    const p2Car = document.getElementById("podium-p2-car");
    if (p2Name) p2Name.textContent = p2.name ? p2.name.toUpperCase() : "LIONS";
    if (p2Car) p2Car.textContent = p2.icon || "🏎️";

    // 3rd Place Bronze
    const p3Name = document.getElementById("podium-p3-name");
    const p3Car = document.getElementById("podium-p3-car");
    if (p3Name) p3Name.textContent = p3.name ? p3.name.toUpperCase() : "EAGLES";
    if (p3Car) p3Car.textContent = p3.icon || "🏎️";

    // Awards
    // 1. Driver of the Day (highest accuracy %)
    const accuracySorted = [...sorted].sort((a, b) => {
      const accA = a.correctAnswers / Math.max(1, a.correctAnswers + a.wrongAnswers);
      const accB = b.correctAnswers / Math.max(1, b.correctAnswers + b.wrongAnswers);
      return accB - accA;
    });
    const dotdEl = document.getElementById("award-dotd-team");
    if (dotdEl && accuracySorted[0]) {
      dotdEl.textContent = `${accuracySorted[0].icon} ${accuracySorted[0].name}`;
    }

    // 2. Turbo King (most turbos used)
    const turboSorted = [...sorted].sort((a, b) => b.turbosUsed - a.turbosUsed);
    const turboEl = document.getElementById("award-turbo-team");
    if (turboEl && turboSorted[0]) {
      turboEl.textContent = `${turboSorted[0].icon} ${turboSorted[0].name} (${turboSorted[0].turbosUsed} Turbos)`;
    }

    // 3. Overtake Master (most overtakes)
    const overtakeSorted = [...sorted].sort((a, b) => b.overtakesCount - a.overtakesCount);
    const overtakeEl = document.getElementById("award-overtake-team");
    if (overtakeEl && overtakeSorted[0]) {
      overtakeEl.textContent = `${overtakeSorted[0].icon} ${overtakeSorted[0].name} (${overtakeSorted[0].overtakesCount} Overtakes)`;
    }

    // Telemetry Statistics Table
    const tableBody = document.getElementById("podium-telemetry-tbody");
    if (tableBody) {
      tableBody.innerHTML = "";
      sorted.forEach((team, idx) => {
        const total = team.correctAnswers + team.wrongAnswers;
        const acc = total > 0 ? Math.round((team.correctAnswers / total) * 100) : 100;
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><strong>P${idx + 1}</strong></td>
          <td style="color: ${team.primaryColor}"><strong>${team.icon} ${team.name}</strong></td>
          <td>${team.correctAnswers} / ${total} (${acc}%)</td>
          <td>${team.turbosUsed}</td>
          <td>${team.overtakesCount}</td>
          <td>${team.pitStopsCount}</td>
          <td><strong>${team.finishRank ? `Finished P${team.finishRank}` : `Lap ${team.currentLap}`}</strong></td>
        `;
        tableBody.appendChild(tr);
      });
    }
  }

  // ==========================================
  // CONFETTI CANNON CANVAS
  // ==========================================
  triggerConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ["#ff0055", "#00f2fe", "#ffbb00", "#00ff88", "#7928ca", "#ffffff"];

    for (let i = 0; i < 160; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 4 + 3,
        rot: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 8
      });
    }

    let frame = 0;
    const animate = () => {
      if (frame > 220) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vRot;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });
      frame++;
      if (typeof window !== "undefined" && typeof window.requestAnimationFrame === "function") {
        window.requestAnimationFrame(animate);
      } else if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(animate);
      }
    };
    animate();
  }

  // ==========================================
  // UI & NAVIGATION HELPERS
  // ==========================================
  showScreen(screenId) {
    document.querySelectorAll(".game-screen").forEach(s => {
      s.classList.remove("active");
    });
    const target = document.getElementById(screenId);
    if (target) target.classList.add("active");
  }

  toggleProjectorMode() {
    this.state.isProjectorMode = !this.state.isProjectorMode;
    document.body.classList.toggle("projector-mode", this.state.isProjectorMode);
    const btn = document.getElementById("toggle-projector-btn");
    if (btn) {
      btn.classList.toggle("active", this.state.isProjectorMode);
      btn.textContent = this.state.isProjectorMode ? "📽️ Projector: ON" : "📽️ Projector: OFF";
    }
    FormulaAudio.playClick();
    this.saveState();
  }

  toggleAudio() {
    const isEnabled = FormulaAudio.toggleSound();
    this.updateAudioButtonUI();
  }

  updateAudioButtonUI() {
    const btn = document.getElementById("toggle-sound-btn");
    if (btn) {
      const enabled = FormulaAudio.isSoundEnabled();
      btn.innerHTML = enabled ? "🔊 SOUND ON" : "🔇 SOUND OFF";
      btn.classList.toggle("muted", !enabled);
    }
  }

  // ==========================================
  // EVENT LISTENERS & KEYBOARD SHORTCUTS
  // ==========================================
  bindEvents() {
    // Team Count buttons
    document.querySelectorAll(".btn-team-count").forEach(btn => {
      btn.addEventListener("click", (e) => {
        this.setTeamCount(e.target.dataset.count);
        FormulaAudio.playClick();
      });
    });

    // Start Grid Formation Button
    const startGridBtn = document.getElementById("btn-goto-grid");
    if (startGridBtn) {
      startGridBtn.addEventListener("click", () => this.startStartingGrid());
    }

    // Launch 5-Red-Lights Countdown Button
    const launchLightsBtn = document.getElementById("btn-start-countdown");
    if (launchLightsBtn) {
      launchLightsBtn.addEventListener("click", () => this.launchStartingCountdown());
    }

    // Back to Setup
    const backSetupBtn = document.getElementById("btn-back-to-setup");
    if (backSetupBtn) {
      backSetupBtn.addEventListener("click", () => {
        this.showScreen("setup-screen");
        FormulaAudio.playClick();
      });
    }

    // Teacher Judgement Buttons
    const judgeCorrectBtn = document.getElementById("judge-correct-btn");
    if (judgeCorrectBtn) {
      judgeCorrectBtn.addEventListener("click", () => this.markCorrect());
    }

    const judgeWrongBtn = document.getElementById("judge-wrong-btn");
    if (judgeWrongBtn) {
      judgeWrongBtn.addEventListener("click", () => this.markIncorrect());
    }

    const turboBtn = document.getElementById("use-turbo-btn");
    if (turboBtn) {
      turboBtn.addEventListener("click", () => this.activateTurbo());
    }

    const revealBtn = document.getElementById("reveal-answer-btn");
    if (revealBtn) {
      revealBtn.addEventListener("click", () => this.revealAnswer());
    }

    const skipQuestionBtn = document.getElementById("skip-question-btn");
    if (skipQuestionBtn) {
      skipQuestionBtn.addEventListener("click", () => {
        this.nextTurn(true);
        FormulaAudio.playClick();
      });
    }

    // Timer Controls
    const timerPauseBtn = document.getElementById("timer-pause-btn");
    if (timerPauseBtn) {
      timerPauseBtn.addEventListener("click", () => this.toggleTimerPause());
    }
    const timerMinusBtn = document.getElementById("timer-minus-btn");
    if (timerMinusBtn) {
      timerMinusBtn.addEventListener("click", () => this.adjustTimer(-60));
    }
    const timerPlusBtn = document.getElementById("timer-plus-btn");
    if (timerPlusBtn) {
      timerPlusBtn.addEventListener("click", () => this.adjustTimer(60));
    }
    const timerBoostBtn = document.getElementById("timer-skip-btn");
    if (timerBoostBtn) {
      timerBoostBtn.addEventListener("click", () => this.boostPace());
    }

    // Global Header Buttons
    const soundToggleBtn = document.getElementById("toggle-sound-btn");
    if (soundToggleBtn) {
      soundToggleBtn.addEventListener("click", () => this.toggleAudio());
    }

    const projToggleBtn = document.getElementById("toggle-projector-btn");
    if (projToggleBtn) {
      projToggleBtn.addEventListener("click", () => this.toggleProjectorMode());
    }

    const fullscreenBtn = document.getElementById("toggle-fullscreen-btn");
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener("click", () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });
    }

    // Modal Skip Event Buttons
    const skipEventBtn = document.getElementById("event-modal-skip-btn");
    if (skipEventBtn) {
      skipEventBtn.addEventListener("click", () => this.skipCurrentEvent());
    }

    // Play Again / Restart Game Buttons
    const restartBtn = document.getElementById("podium-restart-btn");
    if (restartBtn) {
      restartBtn.addEventListener("click", () => {
        this.clearSavedState();
        window.location.reload();
      });
    }

    // Resume Modal Actions
    const resumeYesBtn = document.getElementById("btn-resume-yes");
    if (resumeYesBtn) {
      resumeYesBtn.addEventListener("click", () => {
        const saved = this.loadSavedState();
        if (saved) this.resumeRace(saved);
      });
    }
    const resumeNoBtn = document.getElementById("btn-resume-no");
    if (resumeNoBtn) {
      resumeNoBtn.addEventListener("click", () => {
        this.clearSavedState();
        const modal = document.getElementById("resume-modal");
        if (modal) modal.classList.remove("active");
        this.initDefaultSetup();
      });
    }
  }

  // Keyboard Shortcuts: C = Correct, X = Incorrect, T = Turbo, N = Next, P = Pause, S = Skip, F = Fullscreen
  bindKeyboardShortcuts() {
    window.addEventListener("keydown", (e) => {
      // Don't trigger if typing in an input
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

      const key = e.key.toUpperCase();

      if (key === "C") {
        if (this.state.phase === "RACING" || this.state.phase === "FINAL_LAP") {
          this.markCorrect();
        }
      } else if (key === "X") {
        if (this.state.phase === "RACING" || this.state.phase === "FINAL_LAP") {
          this.markIncorrect();
        }
      } else if (key === "T") {
        if (this.state.phase === "RACING") {
          this.activateTurbo();
        }
      } else if (key === "N") {
        if (this.state.phase === "RACING") {
          this.nextTurn(true);
        }
      } else if (key === "P") {
        this.toggleTimerPause();
      } else if (key === "S") {
        this.skipCurrentEvent();
      } else if (key === "1" || key === "A") {
        this.selectOption(0);
      } else if (key === "2" || key === "B") {
        this.selectOption(1);
      } else if (key === "3" || key === "C_ALT") {
        this.selectOption(2);
      } else if (key === "4" || key === "D") {
        this.selectOption(3);
      }
    });
  }
}

// Global App Instance
if (typeof window !== "undefined") {
  window.FormulaApp = FormulaApp;
  const initApp = () => {
    if (!window.FormulaGame) {
      window.FormulaGame = new FormulaApp();
    }
  };
  if (document.readyState === "complete" || document.readyState === "interactive") {
    initApp();
  } else {
    window.addEventListener("DOMContentLoaded", initApp);
  }
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FormulaApp };
}
