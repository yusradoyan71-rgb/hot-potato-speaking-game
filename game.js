// Game Engine for "One Night at Passage"
// Romantic interactive visual novel with chemistry system, branching choices & rich atmospheric audio

class GameEngine {
  constructor() {
    this.data = (typeof window !== "undefined" && (window.GAME_DATA || window.storyData))
      ? (window.GAME_DATA || window.storyData)
      : (typeof GAME_DATA !== "undefined" ? GAME_DATA : (typeof storyData !== "undefined" ? storyData : {}));
    this.audio = (typeof window !== "undefined" && window.audioEngine)
      ? window.audioEngine
      : (typeof AudioEngine !== "undefined" ? new AudioEngine() : null);

    this.state = {
      chemistry: (this.data && this.data.initialChemistry) ? this.data.initialChemistry : 20,
      currentNodeKey: "ch1_start",
      currentBgKey: null,
      currentChapterId: null,
      activeBgLayer: "a",
      isTyping: false,
      typewriterTimer: null,
      feedbackTimer: null,
      fullText: "",
      historyLog: []
    };

    // Cached DOM Elements
    this.dom = {
      appContainer: document.getElementById("app-container"),
      titleScreen: document.getElementById("title-screen"),
      gameScreen: document.getElementById("game-screen"),
      endingScreen: document.getElementById("ending-screen"),
      logModal: document.getElementById("log-modal"),

      // Header
      headerChapterTitle: document.getElementById("header-chapter-title"),
      headerChapterSub: document.getElementById("header-chapter-sub"),
      btnLog: document.getElementById("btn-log"),
      btnSound: document.getElementById("btn-sound"),
      btnRestart: document.getElementById("btn-restart"),

      // Stage & Viewport
      stageViewport: document.getElementById("stage-viewport"),
      dialogueLayer: document.getElementById("dialogue-layer"),
      bgLayerA: document.getElementById("bg-layer-a"),
      bgLayerB: document.getElementById("bg-layer-b"),
      slotLeft: document.getElementById("slot-left"),
      slotRight: document.getElementById("slot-right"),
      imgSlotLeft: document.getElementById("img-slot-left"),
      imgSlotRight: document.getElementById("img-slot-right"),

      // Dialogue & Actions
      dialogueBox: document.getElementById("dialogue-box"),
      speakerBadge: document.getElementById("speaker-badge"),
      speakerName: document.getElementById("speaker-name"),
      dialogueText: document.getElementById("dialogue-text"),
      btnContinue: document.getElementById("btn-continue"),
      feedbackBanner: document.getElementById("choice-feedback-banner"),
      feedbackText: document.getElementById("feedback-text"),
      sceneProgress: document.getElementById("scene-progress"),
      choicesContainer: document.getElementById("choices-container"),

      // Chemistry Meter
      meterFill: document.getElementById("meter-fill"),
      meterPercentText: document.getElementById("meter-percent-text"),
      meterStatus: document.getElementById("meter-status"),
      feedbackAnchor: document.getElementById("feedback-anchor"),
      milestones: [
        document.getElementById("milestone-1"),
        document.getElementById("milestone-2"),
        document.getElementById("milestone-3"),
        document.getElementById("milestone-4")
      ],

      // Ending Screen
      endingHearts: document.getElementById("ending-hearts"),
      endingTitle: document.getElementById("ending-title"),
      endingQuote: document.getElementById("ending-quote"),
      finalChemistryScore: document.getElementById("final-chemistry-score"),
      endingSummary: document.getElementById("ending-summary"),
      btnPlayAgain: document.getElementById("btn-play-again"),
      btnViewLogEnd: document.getElementById("btn-view-log-end"),

      // Log Modal
      logContent: document.getElementById("log-content"),
      btnCloseLog: document.getElementById("btn-close-log"),
      btnFooterCloseLog: document.getElementById("btn-footer-close-log"),
      modalCard: document.getElementById("modal-card"),

      // Buttons
      btnStartGame: document.getElementById("btn-start-game"),
      particleCanvas: document.getElementById("ambient-particles")
    };

    this.initParticles();
    this.bindEvents();
  }

  // --- PARTICLE SYSTEM ---
  initParticles() {
    const canvas = this.dom.particleCanvas;
    if (!canvas || !canvas.getContext) return;
    let ctx;
    try {
      ctx = canvas.getContext("2d");
    } catch (e) {
      return;
    }
    if (!ctx) return;
    let width = (canvas.width = window.innerWidth || 1920);
    let height = (canvas.height = window.innerHeight || 1080);

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth || 1920;
      height = canvas.height = window.innerHeight || 1080;
    });

    const particles = [];
    const count = 38;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 0.8,
        speedY: -(Math.random() * 0.4 + 0.15),
        speedX: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.6 + 0.2,
        color: Math.random() > 0.4 ? "245, 158, 11" : "236, 72, 153" // Gold or Magenta ember
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${p.color}, 0.8)`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }

  // --- EVENT LISTENERS ---
  bindEvents() {
    // Start Game
    if (this.dom.btnStartGame) {
      this.dom.btnStartGame.addEventListener("click", () => {
        try {
          if (this.audio) {
            this.audio.init();
            this.audio.playSFX("ui_click");
          }
        } catch (err) {
          console.warn("Audio start non-blocking error:", err);
        }
        this.startGame();
      });
    }

    // Explicit [ CONTINUE ▶ ] Button
    if (this.dom.btnContinue) {
      this.dom.btnContinue.addEventListener("click", (e) => {
        e.stopPropagation();
        this.handleDialogueAdvance();
      });
    }

    // Dialogue Box click
    if (this.dom.dialogueBox) {
      this.dom.dialogueBox.addEventListener("click", (e) => {
        if (e.target.closest("#choices-container") || e.target.closest("#btn-continue")) return;
        this.handleDialogueAdvance();
      });
    }

    // Viewport / Screen click (natural visual novel advance)
    if (this.dom.stageViewport) {
      this.dom.stageViewport.addEventListener("click", (e) => {
        if (
          e.target.closest("#choices-container") ||
          e.target.closest("#game-header") ||
          e.target.closest("#chemistry-sidebar") ||
          e.target.closest("#log-modal") ||
          e.target.closest("#btn-continue")
        ) {
          return;
        }
        this.handleDialogueAdvance();
      });
    }

    // Sound toggle
    if (this.dom.btnSound) {
      this.dom.btnSound.addEventListener("click", () => {
        const isMuted = this.audio.toggleMute();
        this.dom.btnSound.textContent = isMuted ? "🔇" : "🔊";
        this.dom.btnSound.title = isMuted ? "Sound Off (Click to Enable)" : "Sound On";
      });
    }

    // Log Modal toggles
    if (this.dom.btnLog) {
      this.dom.btnLog.addEventListener("click", () => this.openLogModal());
    }
    if (this.dom.btnCloseLog) {
      this.dom.btnCloseLog.addEventListener("click", () => this.closeLogModal());
    }
    if (this.dom.btnViewLogEnd) {
      this.dom.btnViewLogEnd.addEventListener("click", () => this.openLogModal());
    }
    if (this.dom.btnFooterCloseLog) {
      this.dom.btnFooterCloseLog.addEventListener("click", () => this.closeLogModal());
    }

    // Close log modal if backdrop is clicked
    if (this.dom.logModal) {
      this.dom.logModal.addEventListener("click", (e) => {
        if (e.target === this.dom.logModal) {
          this.closeLogModal();
        }
      });
    }

    // Restart button
    if (this.dom.btnRestart) {
      this.dom.btnRestart.addEventListener("click", () => {
        if (confirm("Restart your night at Passage?")) {
          this.restartGame();
        }
      });
    }

    // Play Again button
    if (this.dom.btnPlayAgain) {
      this.dom.btnPlayAgain.addEventListener("click", () => {
        try {
          this.audio.playSFX("ui_click");
        } catch (e) {}
        this.restartGame();
      });
    }

    // Keyboard support (Space / Enter to advance, Escape to close log)
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" || e.code === "Escape") {
        if (this.dom.logModal && !this.dom.logModal.classList.contains("hidden")) {
          this.closeLogModal();
          return;
        }
      }

      if (e.code === "Space" || e.code === "Enter") {
        if (this.dom.gameScreen && !this.dom.gameScreen.classList.contains("hidden")) {
          if (this.dom.logModal && !this.dom.logModal.classList.contains("hidden")) {
            return;
          }
          // If choices are visible, don't auto-advance with Space
          if (this.dom.choicesContainer && this.dom.choicesContainer.classList.contains("hidden")) {
            this.handleDialogueAdvance();
          }
        }
      }
    });
  }

  startGame() {
    this.closeLogModal();
    this.state.chemistry = this.data.initialChemistry || 20;
    this.state.currentNodeKey = "ch1_start";
    this.state.historyLog = [];

    if (this.dom.titleScreen) this.dom.titleScreen.classList.add("hidden");
    if (this.dom.endingScreen) this.dom.endingScreen.classList.add("hidden");
    if (this.dom.gameScreen) this.dom.gameScreen.classList.remove("hidden");

    this.updateChemistryUI(0, false);
    this.renderNode(this.state.currentNodeKey);
  }

  restartGame() {
    try {
      this.audio.stopMusic();
    } catch (e) {}
    this.startGame();
  }

  // --- RENDER STORY NODE ---
  renderNode(nodeKey) {
    let node = this.data.nodes[nodeKey];
    if (!node) {
      console.warn("Story node not found:", nodeKey, "Attempting fallback recovery.");
      node = this.findFallbackNode(nodeKey);
      if (!node) {
        this.showEndingScreen("friendship");
        return;
      }
    }

    this.state.currentNodeKey = nodeKey;

    // Evaluate ending branch in Chapter 8
    if (node.evalEnding) {
      if (this.state.chemistry >= this.data.targetChemistry) {
        this.renderNode("ch8_high_pre_kiss");
      } else {
        this.renderNode("ch8_low_ending");
      }
      return;
    }

    // Check if this node is an ending resolution
    if (node.endingType) {
      this.showEndingScreen(node.endingType);
      return;
    }

    // Update Background if needed
    if (node.bg && node.bg !== this.state.currentBgKey) {
      this.setBackground(node.bg);
    }

    // Update Chapter Header & Scene Progress
    if (node.chapter && node.chapter !== this.state.currentChapterId) {
      this.setChapter(node.chapter);
    }
    const chap = this.data.chapters.find((c) => c.id === (node.chapter || this.state.currentChapterId));
    if (this.dom.sceneProgress) {
      this.dom.sceneProgress.textContent = chap ? `${chap.title}` : "Passage, Cyprus";
    }

    // Trigger dynamic music
    if (node.music) {
      try {
        this.audio.playMusic(node.music);
      } catch (e) {}
    }

    // Trigger SFX
    if (node.sfx) {
      try {
        this.audio.playSFX(node.sfx);
      } catch (e) {}
    }

    // Setup Characters on Stage
    this.updateCharacterStage(node);

    // Setup Speaker Badge
    this.updateSpeakerBadge(node.speaker);

    // Render Typewriter Text
    this.typewriterText(node.text, () => {
      // Callback after text typing finishes
      if (node.choices && node.choices.length > 0) {
        this.renderChoices(node.choices);
      } else {
        if (this.dom.btnContinue) {
          this.dom.btnContinue.classList.remove("hidden");
          this.dom.btnContinue.innerHTML = '<span>CONTINUE</span> <span class="arrow-pulse">▶</span>';
        }
      }
    });

    // Save to History Log
    const speakerData = this.data.characters[node.speaker] || { name: "Passage" };
    this.state.historyLog.push({
      speaker: speakerData.name,
      text: node.text,
      color: speakerData.color
    });
  }

  // Fallback node finder to ensure player is never blocked
  findFallbackNode(failedKey) {
    const keys = Object.keys(this.data.nodes);
    const index = keys.indexOf(failedKey);
    if (index !== -1 && index + 1 < keys.length) {
      return this.data.nodes[keys[index + 1]];
    }
    return this.data.nodes["ch1_start"];
  }

  // --- CHARACTER STAGE POSITIONS & HIGHLIGHT ---
  updateCharacterStage(node) {
    const leftChar = node.leftSpeaker ? this.data.characters[node.leftSpeaker] : null;
    const rightChar = node.rightSpeaker ? this.data.characters[node.rightSpeaker] : null;

    // Left Slot
    if (this.dom.slotLeft && this.dom.imgSlotLeft) {
      if (leftChar && leftChar.avatar) {
        this.dom.imgSlotLeft.src = leftChar.avatar;
        this.dom.slotLeft.classList.add("visible");
        if (node.speaker === node.leftSpeaker) {
          this.dom.slotLeft.classList.add("speaking");
          this.dom.slotLeft.classList.remove("listening");
        } else {
          this.dom.slotLeft.classList.remove("speaking");
          this.dom.slotLeft.classList.add("listening");
        }
      } else {
        this.dom.slotLeft.classList.remove("visible", "speaking", "listening");
      }
    }

    // Right Slot
    if (this.dom.slotRight && this.dom.imgSlotRight) {
      if (rightChar && rightChar.avatar) {
        this.dom.imgSlotRight.src = rightChar.avatar;
        this.dom.slotRight.classList.add("visible");
        if (node.speaker === node.rightSpeaker) {
          this.dom.slotRight.classList.add("speaking");
          this.dom.slotRight.classList.remove("listening");
        } else {
          this.dom.slotRight.classList.remove("speaking");
          this.dom.slotRight.classList.add("listening");
        }
      } else {
        this.dom.slotRight.classList.remove("visible", "speaking", "listening");
      }
    }

    // If narrator/atmosphere, keep both in soft listening mode
    if (node.speaker === "narrator") {
      if (this.dom.slotLeft) this.dom.slotLeft.classList.remove("speaking");
      if (this.dom.slotRight) this.dom.slotRight.classList.remove("speaking");
    }
  }

  // --- SPEAKER BADGE ---
  updateSpeakerBadge(speakerKey) {
    if (!this.dom.speakerBadge || !this.dom.speakerName) return;
    const char = this.data.characters[speakerKey] || { name: "Passage, Cyprus", color: "#e2e8f0" };
    this.dom.speakerName.textContent = char.name;
    this.dom.speakerBadge.style.color = char.color;
    this.dom.speakerBadge.style.borderColor = char.color;
    this.dom.speakerBadge.style.boxShadow = `0 0 15px ${char.color}33`;
  }

  // --- TYPEWRITER TEXT ---
  typewriterText(text, onComplete) {
    if (this.state.typewriterTimer) {
      clearInterval(this.state.typewriterTimer);
      this.state.typewriterTimer = null;
    }

    this.state.isTyping = true;
    this.state.fullText = text || "";
    if (this.dom.dialogueText) this.dom.dialogueText.textContent = "";

    if (this.dom.choicesContainer) {
      this.dom.choicesContainer.classList.add("hidden");
      this.dom.choicesContainer.innerHTML = "";
    }

    if (this.dom.btnContinue) {
      this.dom.btnContinue.classList.remove("hidden");
      this.dom.btnContinue.innerHTML = '<span>SKIP</span> <span class="arrow-pulse">▶</span>';
    }

    let charIndex = 0;
    const speed = 20; // ms per char

    this.state.typewriterTimer = setInterval(() => {
      if (charIndex < (text || "").length) {
        if (this.dom.dialogueText) {
          this.dom.dialogueText.textContent += text.charAt(charIndex);
        }
        charIndex++;
      } else {
        clearInterval(this.state.typewriterTimer);
        this.state.typewriterTimer = null;
        this.state.isTyping = false;
        if (onComplete) onComplete();
      }
    }, speed);
  }

  // Advance dialogue or fast forward text
  handleDialogueAdvance() {
    if (this.state.isTyping) {
      // Finish typing instantly
      clearInterval(this.state.typewriterTimer);
      this.state.typewriterTimer = null;
      this.state.isTyping = false;
      if (this.dom.dialogueText) {
        this.dom.dialogueText.textContent = this.state.fullText;
      }

      const node = this.data.nodes[this.state.currentNodeKey];
      if (node && node.choices && node.choices.length > 0) {
        this.renderChoices(node.choices);
      } else {
        if (this.dom.btnContinue) {
          this.dom.btnContinue.classList.remove("hidden");
          this.dom.btnContinue.innerHTML = '<span>CONTINUE</span> <span class="arrow-pulse">▶</span>';
        }
      }
    } else {
      // If choices are displayed, player must choose an option
      const node = this.data.nodes[this.state.currentNodeKey];
      if (node && node.choices && node.choices.length > 0) {
        return;
      }

      // Hide feedback banner upon advancing to new line
      if (this.dom.feedbackBanner) {
        this.dom.feedbackBanner.classList.add("hidden");
      }

      if (node && node.next) {
        try {
          this.audio.playSFX("ui_click");
        } catch (e) {}
        this.renderNode(node.next);
      } else if (node && node.evalEnding) {
        if (this.state.chemistry >= this.data.targetChemistry) {
          this.renderNode("ch8_high_pre_kiss");
        } else {
          this.renderNode("ch8_low_ending");
        }
      } else if (node && node.endingType) {
        this.showEndingScreen(node.endingType);
      } else {
        // Fallback advance
        this.fallbackAdvance();
      }
    }
  }

  fallbackAdvance() {
    const keys = Object.keys(this.data.nodes);
    const currIdx = keys.indexOf(this.state.currentNodeKey);
    if (currIdx !== -1 && currIdx + 1 < keys.length) {
      this.renderNode(keys[currIdx + 1]);
    } else {
      this.showEndingScreen("friendship");
    }
  }

  // --- CHOICES RENDERING ---
  renderChoices(choices) {
    if (this.dom.btnContinue) {
      this.dom.btnContinue.classList.add("hidden");
    }
    if (!this.dom.choicesContainer) return;

    this.dom.choicesContainer.innerHTML = "";
    this.dom.choicesContainer.classList.remove("hidden");

    choices.forEach((choice) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.innerHTML = `
        <span>${choice.text}</span>
        <span class="choice-icon">▶</span>
      `;

      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.handleChoiceSelection(choice);
      });

      this.dom.choicesContainer.appendChild(btn);
    });
  }

  handleChoiceSelection(choice) {
    // 1. Apply chemistry change
    if (choice.impact !== undefined) {
      this.state.chemistry = Math.max(0, Math.min(100, this.state.chemistry + choice.impact));
      this.updateChemistryUI(choice.impact, true);
    }

    // 2. Audio feedback
    try {
      if (choice.impact > 0) {
        this.audio.playSFX("heart_gain");
      } else if (choice.impact < 0) {
        this.audio.playSFX("heart_loss");
      } else {
        this.audio.playSFX("ui_click");
      }
    } catch (e) {}

    // 3. Show feedback banner if provided
    if (choice.feedback && this.dom.feedbackBanner && this.dom.feedbackText) {
      this.dom.feedbackText.textContent = choice.feedback;
      this.dom.feedbackBanner.classList.remove("hidden");
    }

    // 4. Save choice to log
    this.state.historyLog.push({
      speaker: "Mehmet's Choice",
      text: `"${choice.text}" (${choice.impact >= 0 ? "+" + choice.impact : choice.impact} ❤️)`,
      color: "#f59e0b"
    });

    if (this.dom.choicesContainer) {
      this.dom.choicesContainer.classList.add("hidden");
    }

    // 5. Load target node
    if (choice.target) {
      this.renderNode(choice.target);
    } else {
      this.handleDialogueAdvance();
    }
  }

  // --- CHEMISTRY METER UPDATES & FLOATING POPUP ---
  updateChemistryUI(delta = 0, showPopup = false) {
    const val = this.state.chemistry;
    if (this.dom.meterFill) this.dom.meterFill.style.width = `${val}%`;
    if (this.dom.meterPercentText) this.dom.meterPercentText.textContent = `${val}%`;

    // Status Pill Text
    let statusText = "Just Friends";
    if (val >= 80) statusText = "Electric Tension ❤️";
    else if (val >= 60) statusText = "Sparks Flying 🔥";
    else if (val >= 40) statusText = "Warm Vibes ✨";
    if (this.dom.meterStatus) this.dom.meterStatus.textContent = statusText;

    // Milestones
    if (this.dom.milestones && this.dom.milestones[0]) {
      if (val >= 20) this.dom.milestones[0].classList.add("achieved");
      else this.dom.milestones[0].classList.remove("achieved");
    }
    if (this.dom.milestones && this.dom.milestones[1]) {
      if (val >= 50) this.dom.milestones[1].classList.add("achieved");
      else this.dom.milestones[1].classList.remove("achieved");
    }
    if (this.dom.milestones && this.dom.milestones[2]) {
      if (val >= 80) this.dom.milestones[2].classList.add("achieved");
      else this.dom.milestones[2].classList.remove("achieved");
    }
    if (this.dom.milestones && this.dom.milestones[3]) {
      if (val >= 100) this.dom.milestones[3].classList.add("achieved");
      else this.dom.milestones[3].classList.remove("achieved");
    }

    // Dynamic Floating Popup (+8 ❤️ or -5 💔)
    if (showPopup && delta !== 0 && this.dom.feedbackAnchor) {
      this.dom.feedbackAnchor.innerHTML = "";
      const popup = document.createElement("div");
      const isPositive = delta > 0;
      popup.className = `floating-feedback ${isPositive ? "positive" : "negative"}`;
      popup.textContent = isPositive ? `❤️ +${delta} Chemistry` : `💔 ${delta} Chemistry`;
      this.dom.feedbackAnchor.appendChild(popup);

      setTimeout(() => {
        if (popup.parentNode) popup.parentNode.removeChild(popup);
      }, 2200);
    }
  }

  // --- BACKGROUND CROSSFADING ---
  setBackground(bgKey) {
    const bgUrl = this.data.backgrounds[bgKey];
    if (!bgUrl) return;

    this.state.currentBgKey = bgKey;

    if (!this.dom.bgLayerA || !this.dom.bgLayerB) return;

    if (this.state.activeBgLayer === "a") {
      this.dom.bgLayerB.style.backgroundImage = `url('${bgUrl}')`;
      this.dom.bgLayerB.classList.add("active");
      this.dom.bgLayerB.classList.remove("inactive");
      this.dom.bgLayerA.classList.add("inactive");
      this.dom.bgLayerA.classList.remove("active");
      this.state.activeBgLayer = "b";
    } else {
      this.dom.bgLayerA.style.backgroundImage = `url('${bgUrl}')`;
      this.dom.bgLayerA.classList.add("active");
      this.dom.bgLayerA.classList.remove("inactive");
      this.dom.bgLayerB.classList.add("inactive");
      this.dom.bgLayerB.classList.remove("active");
      this.state.activeBgLayer = "a";
    }
  }

  // --- CHAPTER HEADER ---
  setChapter(chapterId) {
    this.state.currentChapterId = chapterId;
    const ch = this.data.chapters.find((c) => c.id === chapterId);
    if (ch) {
      if (this.dom.headerChapterTitle) this.dom.headerChapterTitle.textContent = ch.title;
      if (this.dom.headerChapterSub) this.dom.headerChapterSub.textContent = ch.subtitle;
    }
  }

  // --- ENDING SCREEN ---
  showEndingScreen(endingType) {
    if (this.dom.gameScreen) this.dom.gameScreen.classList.add("hidden");
    if (this.dom.endingScreen) this.dom.endingScreen.classList.remove("hidden");

    if (this.dom.finalChemistryScore) {
      this.dom.finalChemistryScore.textContent = `${this.state.chemistry}%`;
    }

    if (endingType === "romantic_win") {
      try {
        this.audio.playMusic("romantic_climax");
        this.audio.playSFX("romantic_kiss");
      } catch (e) {}
      if (this.dom.endingHearts) this.dom.endingHearts.textContent = "❤️ ❤️ ❤️";
      if (this.dom.endingTitle) this.dom.endingTitle.textContent = "A Night to Remember";
      if (this.dom.endingQuote) this.dom.endingQuote.textContent = '"Some nights are worth remembering forever."';
      if (this.dom.endingSummary) {
        this.dom.endingSummary.textContent =
          "Under the starlit Cyprus sky on the Passage terrace, Mehmet and Yüsra shared an unforgettable, sweet romantic kiss. As Can, Selin, Burak, and Ece returned with celebratory cheers, the warmth of the evening turned into something truly special.";
      }
    } else {
      if (this.dom.endingHearts) this.dom.endingHearts.textContent = "🥂 🌟 🍸";
      if (this.dom.endingTitle) this.dom.endingTitle.textContent = "One Fun Night in Cyprus";
      if (this.dom.endingQuote) this.dom.endingQuote.textContent = '"Good friends, great music, and memories made at Passage."';
      if (this.dom.endingSummary) {
        this.dom.endingSummary.textContent =
          "The six friends ended the night laughing and eating street food under the Cyprus moonlight. A truly great evening with close friends—though Mehmet and Yüsra remained comfortable best friends. Try again to explore different choices and unlock their romantic kiss!";
      }
    }
  }

  // --- STORY LOG MODAL ---
  openLogModal() {
    if (!this.dom.logContent || !this.dom.logModal) return;
    this.dom.logContent.innerHTML = "";
    if (this.state.historyLog.length === 0) {
      const emptyMsg = document.createElement("div");
      emptyMsg.className = "log-item";
      emptyMsg.innerHTML = `<div class="log-content" style="font-style: italic; color: #94a3b8;">No dialogues recorded yet. Start your night at Passage to begin your story!</div>`;
      this.dom.logContent.appendChild(emptyMsg);
    } else {
      this.state.historyLog.forEach((item) => {
        const row = document.createElement("div");
        row.className = "log-item";
        if (item.color) {
          row.style.borderLeftColor = item.color;
        }
        row.innerHTML = `
          <div class="log-speaker" style="color: ${item.color || '#f59e0b'}">${item.speaker}</div>
          <div class="log-content">${item.text}</div>
        `;
        this.dom.logContent.appendChild(row);
      });
    }

    this.dom.logModal.classList.remove("hidden");
    this.dom.logModal.style.display = "flex";
    this.dom.logModal.style.pointerEvents = "auto";
    this.dom.logContent.scrollTop = this.dom.logContent.scrollHeight;
  }

  closeLogModal() {
    if (!this.dom.logModal) return;
    this.dom.logModal.classList.add("hidden");
    this.dom.logModal.style.display = "none";
    this.dom.logModal.style.pointerEvents = "none";
  }
}

window.GameEngine = GameEngine;

function initGame() {
  if (!window.game) {
    try {
      window.game = new GameEngine();
      console.log("🍸 ONE NIGHT AT PASSAGE: GameEngine successfully initialized!");
    } catch (err) {
      console.error("GameEngine initialization error:", err);
    }
  }
}

// Ensure game is initialized immediately if elements exist, with event listeners as fallback
if (document.getElementById("btn-start-game") || document.readyState === "complete" || document.readyState === "interactive") {
  initGame();
} else {
  document.addEventListener("DOMContentLoaded", initGame);
  window.addEventListener("load", initGame);
  setTimeout(initGame, 0);
}
