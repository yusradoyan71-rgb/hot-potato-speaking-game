// Web Audio Engine for "One Night at Passage"
// Fully synthesized ambient soundscapes, dynamic lounge & romantic music, and SFX

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.volume = 0.65;
    this.currentTrack = null;
    this.musicTimer = null;
    this.ambienceNode = null;
    this.isInitialized = false;
  }

  init() {
    if (this.isInitialized) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime || 0);
      this.masterGain.connect(this.ctx.destination);
      this.isInitialized = true;
      this.startAmbience();
    } catch (e) {
      console.warn("AudioContext init non-blocking error:", e);
    }
  }

  resume() {
    try {
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    } catch (e) {}
  }

  setMute(mute) {
    this.isMuted = mute;
    try {
      if (this.masterGain && this.ctx) {
        const target = this.isMuted ? 0 : this.volume;
        this.masterGain.gain.linearRampToValueAtTime(target, (this.ctx.currentTime || 0) + 0.1);
      }
    } catch (e) {}
    return this.isMuted;
  }

  toggleMute() {
    return this.setMute(!this.isMuted);
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    try {
      if (this.masterGain && this.ctx && !this.isMuted) {
        this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime || 0);
      }
    } catch (e) {}
  }

  // --- PROCEDURAL AMBIENCE ---
  startAmbience() {
    try {
      if (!this.ctx || this.ambienceNode || !this.ctx.createBuffer) return;
      
      const bufferSize = (this.ctx.sampleRate || 44100) * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate || 44100);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.03;
        b6 = white * 0.115926;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(450, this.ctx.currentTime || 0);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime || 0);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      whiteNoise.start(0);
      this.ambienceNode = { source: whiteNoise, gain: gain };
    } catch (e) {
      console.warn("Ambience start non-blocking error:", e);
    }
  }

  playMusic(trackName) {
    try {
      if (this.currentTrack === trackName) return;
      this.currentTrack = trackName;
      this.stopMusic();

      if (!this.ctx) return;
      this.resume();

      if (trackName === "ambient_lounge") {
        this.startLoungeMusic();
      } else if (trackName === "romantic_melody") {
        this.startRomanticMelody();
      } else if (trackName === "romantic_climax") {
        this.startRomanticClimax();
      }
    } catch (e) {
      console.warn("playMusic non-blocking error:", e);
    }
  }

  stopMusic() {
    if (this.musicTimer) {
      clearInterval(this.musicTimer);
      this.musicTimer = null;
    }
  }

  startLoungeMusic() {
    try {
      const chords = [
        [261.63, 329.63, 392.00, 493.88], // Cmaj7
        [220.00, 261.63, 329.63, 392.00], // Am7
        [174.61, 220.00, 261.63, 329.63], // Fmaj7
        [196.00, 246.94, 293.66, 349.23]  // G7
      ];
      let step = 0;

      const playChord = () => {
        try {
          if (!this.ctx || this.currentTrack !== "ambient_lounge") return;
          const currentChord = chords[step % chords.length];
          const now = this.ctx.currentTime || 0;

          currentChord.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const filter = this.ctx.createBiquadFilter();

            osc.type = idx === 0 ? "sine" : "triangle";
            osc.frequency.setValueAtTime(freq, now);

            filter.type = "lowpass";
            filter.frequency.setValueAtTime(600 + Math.sin(step) * 200, now);

            gain.gain.setValueAtTime(0, now);
            gain.gain.linearRampToValueAtTime(0.04, now + 0.4);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 3.8);

            osc.connect(filter);
            filter.connect(gain);
            gain.connect(this.masterGain);

            osc.start(now);
            osc.stop(now + 4);
          });

          // Bass
          const bassOsc = this.ctx.createOscillator();
          const bassGain = this.ctx.createGain();
          bassOsc.type = "sine";
          bassOsc.frequency.setValueAtTime(currentChord[0] / 2, now);
          bassGain.gain.setValueAtTime(0, now);
          bassGain.gain.linearRampToValueAtTime(0.07, now + 0.1);
          bassGain.gain.exponentialRampToValueAtTime(0.001, now + 3.5);

          bassOsc.connect(bassGain);
          bassGain.connect(this.masterGain);
          bassOsc.start(now);
          bassOsc.stop(now + 3.6);

          step++;
        } catch (err) {}
      };

      playChord();
      this.musicTimer = setInterval(playChord, 3900);
    } catch (e) {}
  }

  startRomanticMelody() {
    try {
      const melodyNotes = [
        329.63, 392.00, 493.88, 587.33,
        293.66, 370.00, 440.00, 587.33,
        261.63, 329.63, 392.00, 523.25,
        246.94, 293.66, 370.00, 493.88
      ];
      let noteIndex = 0;

      const playNote = () => {
        try {
          if (!this.ctx || this.currentTrack !== "romantic_melody") return;
          const now = this.ctx.currentTime || 0;
          const freq = melodyNotes[noteIndex % melodyNotes.length];

          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const filter = this.ctx.createBiquadFilter();

          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now);

          filter.type = "lowpass";
          filter.frequency.setValueAtTime(1200, now);

          gain.gain.setValueAtTime(0, now);
          gain.gain.linearRampToValueAtTime(0.05, now + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(this.masterGain);

          osc.start(now);
          osc.stop(now + 1.7);

          noteIndex++;
        } catch (err) {}
      };

      playNote();
      this.musicTimer = setInterval(playNote, 750);
    } catch (e) {}
  }

  startRomanticClimax() {
    try {
      const climaxChords = [
        [261.63, 329.63, 392.00, 523.25, 659.25],
        [349.23, 440.00, 523.25, 659.25, 783.99],
        [293.66, 370.00, 440.00, 587.33, 740.00]
      ];
      let step = 0;

      const playClimax = () => {
        try {
          if (!this.ctx || this.currentTrack !== "romantic_climax") return;
          const currentChord = climaxChords[step % climaxChords.length];
          const now = this.ctx.currentTime || 0;

          currentChord.forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = i % 2 === 0 ? "sine" : "triangle";
            osc.frequency.setValueAtTime(freq, now);

            gain.gain.setValueAtTime(0, now);
            gain.gain.linearRampToValueAtTime(0.05, now + 1.0);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 5.0);

            osc.connect(gain);
            gain.connect(this.masterGain);

            osc.start(now);
            osc.stop(now + 5.2);
          });

          step++;
        } catch (err) {}
      };

      playClimax();
      this.musicTimer = setInterval(playClimax, 4800);
    } catch (e) {}
  }

  playSFX(type) {
    try {
      if (!this.ctx) return;
      this.resume();
      const now = this.ctx.currentTime || 0;

      switch (type) {
        case "ui_click":
          this.synthTone(800, 0.05, "sine", 0.04, now);
          break;

        case "heart_gain":
          [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
            this.synthTone(freq, 0.35, "triangle", 0.05, now + idx * 0.08);
          });
          break;

        case "heart_loss":
          [659.25, 587.33, 493.88].forEach((freq, idx) => {
            this.synthTone(freq, 0.4, "sine", 0.04, now + idx * 0.12);
          });
          break;

        case "glass_clink": {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(2400, now);
          osc.frequency.exponentialRampToValueAtTime(1800, now + 0.3);

          gain.gain.setValueAtTime(0.08, now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);

          osc.connect(gain);
          gain.connect(this.masterGain);
          osc.start(now);
          osc.stop(now + 0.45);
          break;
        }

        case "tension_drone": {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(95, now);

          const filter = this.ctx.createBiquadFilter();
          filter.type = "lowpass";
          filter.frequency.setValueAtTime(220, now);

          gain.gain.setValueAtTime(0, now);
          gain.gain.linearRampToValueAtTime(0.09, now + 0.5);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(this.masterGain);
          osc.start(now);
          osc.stop(now + 3.0);
          break;
        }

        case "romantic_kiss": {
          const freqs = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
          freqs.forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, now + i * 0.07);

            gain.gain.setValueAtTime(0, now + i * 0.07);
            gain.gain.linearRampToValueAtTime(0.06, now + i * 0.07 + 0.04);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.07 + 2.2);

            osc.connect(gain);
            gain.connect(this.masterGain);
            osc.start(now + i * 0.07);
            osc.stop(now + i * 0.07 + 2.3);
          });
          break;
        }

        case "cheers": {
          [392.00, 493.88, 587.33, 783.99].forEach((freq, idx) => {
            this.synthTone(freq, 0.8, "triangle", 0.05, now + idx * 0.04);
          });
          break;
        }

        case "footsteps":
          this.synthTone(120, 0.06, "sine", 0.03, now);
          this.synthTone(110, 0.06, "sine", 0.03, now + 0.18);
          break;
      }
    } catch (e) {
      console.warn("playSFX non-blocking error:", e);
    }
  }

  synthTone(freq, duration, waveType = "sine", gainAmount = 0.05, startTime = null) {
    try {
      if (!this.ctx) return;
      const now = startTime || this.ctx.currentTime || 0;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = waveType;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(gainAmount, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + duration + 0.05);
    } catch (e) {}
  }
}

window.AudioEngine = AudioEngine;
window.audioEngine = new AudioEngine();
