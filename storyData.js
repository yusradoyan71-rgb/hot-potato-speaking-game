// Story Script and Game Data for "One Night at Passage"
// Set in Cyprus at the fictionalized bar "Passage"

window.GAME_DATA = {
  title: "ONE NIGHT AT PASSAGE",
  subtitle: "A Romantic Night in Cyprus",
  initialChemistry: 20,
  targetChemistry: 80,

  characters: {
    mehmet: {
      name: "Mehmet",
      role: "Player",
      avatar: "assets/portrait_mehmet.jpg",
      description: "Dark hair, handsome, round glasses, casual nightlife outfit",
      color: "#f59e0b"
    },
    yusra: {
      name: "Yüsra",
      role: "Love Interest",
      avatar: "assets/portrait_yusra.jpg",
      description: "Long brown hair, green eyes, radiant smile, emerald & black top",
      color: "#10b981"
    },
    can: {
      name: "Can",
      role: "Friend",
      avatar: "assets/portrait_can.jpg",
      description: "Charismatic, witty wingman, denim jacket",
      color: "#3b82f6"
    },
    selin: {
      name: "Selin",
      role: "Friend",
      avatar: "assets/portrait_selin.jpg",
      description: "Playful, stylish, wavy auburn hair, burgundy top",
      color: "#ec4899"
    },
    burak: {
      name: "Burak",
      role: "Friend",
      avatar: "assets/portrait_burak.jpg",
      description: "Laid-back, tall, easygoing smile, navy henley",
      color: "#6366f1"
    },
    ece: {
      name: "Ece",
      role: "Friend",
      avatar: "assets/portrait_ece.jpg",
      description: "Chic dark bob haircut, clever, perceptive wingwoman",
      color: "#a855f7"
    },
    stranger: {
      name: "Loud Patron",
      role: "Bar Guest",
      avatar: null,
      description: "Overbearing stranger at the bar counter",
      color: "#ef4444"
    },
    narrator: {
      name: "Passage, Cyprus",
      role: "Atmosphere",
      avatar: null,
      description: "Setting & Inner Thoughts",
      color: "#e2e8f0"
    }
  },

  backgrounds: {
    entrance: "assets/bg_entrance.jpg",
    bar: "assets/bg_bar.jpg",
    lounge: "assets/bg_lounge.jpg",
    dance: "assets/bg_dance.jpg",
    terrace: "assets/bg_terrace.jpg",
    kiss: "assets/bg_kiss.jpg"
  },

  chapters: [
    { id: 1, title: "Chapter 1: Arrival", subtitle: "Cobblestones & Neon Signs", bg: "entrance" },
    { id: 2, title: "Chapter 2: First Drink", subtitle: "Cocktails & First Glances", bg: "bar" },
    { id: 3, title: "Chapter 3: The Group", subtitle: "Banter & Shared Memories", bg: "lounge" },
    { id: 4, title: "Chapter 4: Getting Closer", subtitle: "Warmth in the Night Air", bg: "lounge" },
    { id: 5, title: "Chapter 5: Conflict", subtitle: "Standing Ground", bg: "bar" },
    { id: 6, title: "Chapter 6: The Night Continues", subtitle: "A Tactical Retreat", bg: "dance" },
    { id: 7, title: "Chapter 7: Alone Together", subtitle: "Cyprus Stars & Honest Words", bg: "terrace" },
    { id: 8, title: "Chapter 8: The Ending", subtitle: "Some Nights Are Worth Remembering", bg: "kiss" }
  ],

  nodes: {
    // CHAPTER 1: ARRIVAL
    "ch1_start": {
      chapter: 1,
      bg: "entrance",
      music: "ambient_lounge",
      speaker: "narrator",
      text: "The warm Mediterranean night breeze sweeps through the narrow stone streets of Cyprus. Up ahead, a stylish magenta and amber neon sign illuminates the rustic facade: PASSAGE.",
      next: "ch1_entrance_group"
    },
    "ch1_entrance_group": {
      chapter: 1,
      bg: "entrance",
      speaker: "can",
      leftSpeaker: "can",
      rightSpeaker: "mehmet",
      text: "Alright people, rule number one: tonight, nobody is going home early. We earned this weekend.",
      sfx: "footsteps",
      next: "ch1_yusra_reply"
    },
    "ch1_yusra_reply": {
      chapter: 1,
      bg: "entrance",
      speaker: "yusra",
      leftSpeaker: "yusra",
      rightSpeaker: "mehmet",
      text: "That's exactly what worries me whenever Can is in charge of the schedule.",
      next: "ch1_mehmet_reply"
    },
    "ch1_mehmet_reply": {
      chapter: 1,
      bg: "entrance",
      speaker: "mehmet",
      leftSpeaker: "yusra",
      rightSpeaker: "mehmet",
      text: "Too late to turn back now, Yüsra. We're already here.",
      next: "ch1_yusra_look"
    },
    "ch1_yusra_look": {
      chapter: 1,
      bg: "entrance",
      speaker: "narrator",
      text: "Yüsra turns toward you with a quick smile. Her emerald green outfit catches the neon glow, and for a fleeting moment under the palm shadows, her green eyes lock onto yours.",
      next: "ch1_selin_lead"
    },
    "ch1_selin_lead": {
      chapter: 1,
      bg: "entrance",
      speaker: "selin",
      leftSpeaker: "selin",
      rightSpeaker: "ece",
      text: "Look at the outdoor courtyard! But the music inside is definitely where the party's at. Come on, let's grab a table before it packs up!",
      next: "ch1_walk_in"
    },
    "ch1_walk_in": {
      chapter: 1,
      bg: "lounge",
      speaker: "narrator",
      text: "The six of you step into Passage. The interior wraps around you in velvet tones, glowing amber candlelights, and a lush circular booth near the center.",
      sfx: "bar_ambience",
      next: "ch1_choice_1"
    },
    "ch1_choice_1": {
      chapter: 1,
      bg: "lounge",
      speaker: "narrator",
      text: "The group begins picking seats around the deep emerald velvet booth. Where do you choose to sit?",
      choices: [
        {
          text: "Slide into the booth right next to Yüsra",
          impact: 6,
          feedback: "She smiles warmly and shifts over to make room for you.",
          target: "ch1_seated_beside"
        },
        {
          text: "Take the seat directly across where you can keep eye contact",
          impact: 4,
          feedback: "You catch her eye across the candlelit table.",
          target: "ch1_seated_across"
        },
        {
          text: "Sit at the outer corner near the walkway by yourself",
          impact: -2,
          feedback: "You're a bit detached from her side of the table.",
          target: "ch1_seated_corner"
        }
      ]
    },
    "ch1_seated_beside": {
      chapter: 1,
      bg: "lounge",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "I've wanted to come to Passage forever. It feels even cozier inside than people said.",
      next: "ch1_choice_2"
    },
    "ch1_seated_across": {
      chapter: 1,
      bg: "lounge",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "I've wanted to come to Passage forever. The vibe here is honestly gorgeous.",
      next: "ch1_choice_2"
    },
    "ch1_seated_corner": {
      chapter: 1,
      bg: "lounge",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Hey, Mehmet! Don't sit way out there in exile, you're part of the team tonight!",
      next: "ch1_choice_2"
    },
    "ch1_choice_2": {
      chapter: 1,
      bg: "lounge",
      speaker: "narrator",
      text: "Yüsra takes in the ambient lights, her eyes glowing with genuine excitement. How do you respond to her comment?",
      choices: [
        {
          text: "\"I'm just glad we finally came together. The vibe really suits you.\"",
          impact: 6,
          feedback: "Her cheeks flush with a subtle pink glow beneath the candlelight.",
          target: "ch1_compliment_reaction"
        },
        {
          text: "\"Can basically dragged us all out, but yeah, it's definitely a great spot.\"",
          impact: 2,
          feedback: "She laughs and nods in agreement.",
          target: "ch1_casual_reaction"
        },
        {
          text: "\"It's alright. A bit loud for a casual conversation, though.\"",
          impact: -3,
          feedback: "She looks a bit dampened by the pessimism.",
          target: "ch1_cool_reaction"
        }
      ]
    },
    "ch1_compliment_reaction": {
      chapter: 1,
      bg: "lounge",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Oh really? Careful Mehmet, you're starting the night on dangerous levels of charm.",
      next: "ch2_transition"
    },
    "ch1_casual_reaction": {
      chapter: 1,
      bg: "lounge",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "For once in his life, Can't plan actually paid off. Let's see what the drinks look like.",
      next: "ch2_transition"
    },
    "ch1_cool_reaction": {
      chapter: 1,
      bg: "lounge",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Give it a chance, Mehmet! The night is just getting started.",
      next: "ch2_transition"
    },

    // CHAPTER 2: FIRST DRINK
    "ch2_transition": {
      chapter: 2,
      bg: "bar",
      music: "ambient_lounge",
      speaker: "burak",
      leftSpeaker: "burak",
      rightSpeaker: "can",
      text: "First round is on me and Can! What are we having, team? I'm heading up to the counter.",
      sfx: "glass_clink",
      next: "ch2_ece_interject"
    },
    "ch2_ece_interject": {
      chapter: 2,
      bg: "bar",
      speaker: "ece",
      leftSpeaker: "ece",
      rightSpeaker: "selin",
      text: "Espresso Martini for me, obviously. Selin is doing the Fig Gin Tonic. What about you two?",
      next: "ch2_yusra_browsing"
    },
    "ch2_yusra_browsing": {
      chapter: 2,
      bg: "bar",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Hmm, everything on the Passage signature menu looks so creative. I can't decide between something citrusy or the Pomegranate Smash.",
      next: "ch2_choice_3"
    },
    "ch2_choice_3": {
      chapter: 2,
      bg: "bar",
      speaker: "narrator",
      text: "Yüsra tilts the cocktail menu toward you, tapping her chin with a thoughtful expression. What do you say?",
      choices: [
        {
          text: "\"Get the Pomegranate Fig Smash. If you don't love it, you can take mine.\"",
          impact: 7,
          feedback: "She loves the playful guarantee and trusts your recommendation.",
          target: "ch2_drink_swap_promise"
        },
        {
          text: "\"Let's order the same cocktail so we can compare notes.\"",
          impact: 5,
          feedback: "She smiles at the shared taste.",
          target: "ch2_drink_same"
        },
        {
          text: "\"Still taking ten minutes just to pick a single drink?\"",
          impact: -3,
          feedback: "She pouts playfully but seems slightly annoyed.",
          target: "ch2_drink_tease"
        }
      ]
    },
    "ch2_drink_swap_promise": {
      chapter: 2,
      bg: "bar",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Deal! You're officially locked into that promise, Mehmet. If it's too sweet, you're drinking it.",
      next: "ch2_drinks_arrive"
    },
    "ch2_drink_same": {
      chapter: 2,
      bg: "bar",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Great minds think alike. Let's do two Pomegranate Smashes then!",
      next: "ch2_drinks_arrive"
    },
    "ch2_drink_tease": {
      chapter: 2,
      bg: "bar",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Hey, cocktail curation is a serious art form, okay? Don't rush perfection.",
      next: "ch2_drinks_arrive"
    },
    "ch2_drinks_arrive": {
      chapter: 2,
      bg: "bar",
      speaker: "narrator",
      text: "Burak and Can return carrying glistening crystal glasses filled with crushed ice, rosemary sprigs, and ruby-red infusions. The clink of ice echoes over the ambient house rhythm.",
      sfx: "glass_clink",
      next: "ch2_yusra_sip"
    },
    "ch2_yusra_sip": {
      chapter: 2,
      bg: "bar",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Mmm! Okay, wow... that is incredible. Fresh pomegranate with a hint of Cyprus thyme. Here, try a sip!",
      next: "ch2_choice_4"
    },
    "ch2_choice_4": {
      chapter: 2,
      bg: "bar",
      speaker: "narrator",
      text: "Yüsra holds her glass toward you, her fingers warm near yours on the frosted stem. How do you respond?",
      choices: [
        {
          text: "Lean in close to take a taste, maintaining eye contact: \"To good instincts... and better company.\"",
          impact: 8,
          feedback: "A gentle intimacy sparks between you, causing her breath to hitch slightly.",
          target: "ch2_sip_intimate"
        },
        {
          text: "Clink your glass enthusiastically with hers before calling a toast with everyone",
          impact: 4,
          feedback: "A cheerful, fun group energy fills the table.",
          target: "ch2_sip_group"
        },
        {
          text: "Check your phone screen while absentmindedly touching glasses",
          impact: -5,
          feedback: "She slowly lowers her glass, noticing your distraction.",
          target: "ch2_sip_distracted"
        }
      ]
    },
    "ch2_sip_intimate": {
      chapter: 2,
      bg: "bar",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "You... really know how to make a girl smile, don't you?",
      next: "ch3_transition"
    },
    "ch2_sip_group": {
      chapter: 2,
      bg: "bar",
      speaker: "can",
      leftSpeaker: "can",
      rightSpeaker: "burak",
      text: "Cheers to the six of us! To surviving midterms and conquering Cyprus nightlife!",
      next: "ch3_transition"
    },
    "ch2_sip_distracted": {
      chapter: 2,
      bg: "bar",
      speaker: "selin",
      leftSpeaker: "selin",
      rightSpeaker: "mehmet",
      text: "Phone down, Mehmet! Group policy: no work or scrolling allowed at Passage tonight.",
      next: "ch3_transition"
    },

    // CHAPTER 3: THE GROUP
    "ch3_transition": {
      chapter: 3,
      bg: "lounge",
      music: "ambient_lounge",
      speaker: "narrator",
      text: "Laughter erupts around the lounge booth. Burak is reenacting an epic blunder from last semester's road trip to Kyrenia, while Selin can barely breathe from giggling.",
      next: "ch3_can_tablet"
    },
    "ch3_can_tablet": {
      chapter: 3,
      bg: "lounge",
      speaker: "can",
      leftSpeaker: "can",
      rightSpeaker: "mehmet",
      text: "Guys, Passage has an open lounge jukebox queue on this QR tablet. Who wants to queue the next song?",
      next: "ch3_yusra_whisper"
    },
    "ch3_yusra_whisper": {
      chapter: 3,
      bg: "lounge",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Mehmet, take the tablet! Quick, before Burak queues his six-hour industrial techno playlist again.",
      next: "ch3_choice_5"
    },
    "ch3_choice_5": {
      chapter: 3,
      bg: "lounge",
      speaker: "narrator",
      text: "Can slides the tablet across the table to you. Yüsra looks at you with pleading, amused eyes. What do you select?",
      choices: [
        {
          text: "Select that smooth Mediterranean indie-soul track she listened to on repeat last summer",
          impact: 8,
          feedback: "Her face lights up with astonishment that you remembered!",
          target: "ch3_music_remember"
        },
        {
          text: "Pick a high-energy summer pop-funk track that gets the whole group swaying",
          impact: 4,
          feedback: "The whole booth grooves along happily.",
          target: "ch3_music_popular"
        },
        {
          text: "Let Can pick whatever joke track he wants",
          impact: -2,
          feedback: "Yüsra groans dramatically as elevator jazz starts playing.",
          target: "ch3_music_joke"
        }
      ]
    },
    "ch3_music_remember": {
      chapter: 3,
      bg: "lounge",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Wait... no way! You remembered this song? I thought nobody noticed when I played it in the car back in July!",
      next: "ch3_selin_tease"
    },
    "ch3_music_popular": {
      chapter: 3,
      bg: "lounge",
      speaker: "selin",
      leftSpeaker: "selin",
      rightSpeaker: "ece",
      text: "Yes! Now that's a proper tune. Good call, Mehmet!",
      next: "ch3_selin_tease"
    },
    "ch3_music_joke": {
      chapter: 3,
      bg: "lounge",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "I trusted you, Mehmet. I gave you the tablet and you betrayed me to Can's meme music.",
      next: "ch3_selin_tease"
    },
    "ch3_selin_tease": {
      chapter: 3,
      bg: "lounge",
      speaker: "selin",
      leftSpeaker: "selin",
      rightSpeaker: "mehmet",
      text: "Mehmet always pays way more attention than he lets on. Especially when it comes to certain people at this table.",
      next: "ch3_choice_6"
    },
    "ch3_choice_6": {
      chapter: 3,
      bg: "lounge",
      speaker: "narrator",
      text: "Selin winks playfully across the table. Yüsra looks down at her cocktail glass with a shy smile, waiting to hear your response.",
      choices: [
        {
          text: "\"When someone has great taste and great energy, it's pretty hard not to notice.\"",
          impact: 7,
          feedback: "Ece gives a knowing nod while Yüsra blushes visibly.",
          target: "ch3_reply_romantic"
        },
        {
          text: "\"I just have an photographic memory for good music, that's all!\"",
          impact: 3,
          feedback: "Burak chuckles and claps you on the shoulder.",
          target: "ch3_reply_playful"
        },
        {
          text: "\"I don't know what you're talking about, Selin. Burak, pass the nuts.\"",
          impact: -4,
          feedback: "The moment feels abruptly shut down.",
          target: "ch3_reply_cold"
        }
      ]
    },
    "ch3_reply_romantic": {
      chapter: 3,
      bg: "lounge",
      speaker: "ece",
      leftSpeaker: "ece",
      rightSpeaker: "can",
      text: "Smooth, Mehmet. Very smooth. I'm taking notes.",
      next: "ch4_transition"
    },
    "ch3_reply_playful": {
      chapter: 3,
      bg: "lounge",
      speaker: "can",
      leftSpeaker: "can",
      rightSpeaker: "mehmet",
      text: "Sure you do, buddy. 'Photographic memory for music.' We totally believe you.",
      next: "ch4_transition"
    },
    "ch3_reply_cold": {
      chapter: 3,
      bg: "lounge",
      speaker: "selin",
      leftSpeaker: "selin",
      rightSpeaker: "yusra",
      text: "Alright, mister serious... someone's getting shy.",
      next: "ch4_transition"
    },

    // CHAPTER 4: GETTING CLOSER
    "ch4_transition": {
      chapter: 4,
      bg: "lounge",
      music: "ambient_lounge",
      speaker: "narrator",
      text: "As midnight approaches, the glass doors to the courtyard swing open to let in the cool Cyprus breeze. A sudden draft chills the lounge booth.",
      next: "ch4_yusra_shiver"
    },
    "ch4_yusra_shiver": {
      chapter: 4,
      bg: "lounge",
      speaker: "narrator",
      text: "Yüsra rubs her bare arms gently, letting out a small shiver. Her sleeveless emerald top looks stunning, but she clearly didn't anticipate the late-night island breeze.",
      next: "ch4_choice_7"
    },
    "ch4_choice_7": {
      chapter: 4,
      bg: "lounge",
      speaker: "narrator",
      text: "Yüsra looks slightly cold beside you. What do you do?",
      choices: [
        {
          text: "Take off your dark overshirt / jacket and gently drape it over her shoulders",
          impact: 9,
          feedback: "She clutches the warm fabric close, looking up at you with deep gratitude.",
          target: "ch4_jacket_given"
        },
        {
          text: "Offer to switch seats so you sit between her and the open courtyard breeze",
          impact: 5,
          feedback: "She appreciates your thoughtful gesture.",
          target: "ch4_seat_switch"
        },
        {
          text: "Laugh and say: \"I warned you Cyprus gets windy at night!\"",
          impact: -3,
          feedback: "She crosses her arms with a mock glare.",
          target: "ch4_jacket_mock"
        }
      ]
    },
    "ch4_jacket_given": {
      chapter: 4,
      bg: "lounge",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Oh... thank you, Mehmet. It's so warm... and it smells really nice.",
      next: "ch4_photo_moment"
    },
    "ch4_seat_switch": {
      chapter: 4,
      bg: "lounge",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Thank you, chivalry isn't dead after all. That breeze was freezing.",
      next: "ch4_photo_moment"
    },
    "ch4_jacket_mock": {
      chapter: 4,
      bg: "lounge",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Fashion requires sacrifices, Mehmet! But you could at least offer some sympathy.",
      next: "ch4_photo_moment"
    },
    "ch4_photo_moment": {
      chapter: 4,
      bg: "lounge",
      speaker: "narrator",
      text: "Yüsra pulls her phone out to show you an old candid photo from your first university orientation week. As she angles the screen, she leans in close. Her shoulder presses softly against yours, her brown hair brushing your cheek.",
      next: "ch4_choice_8"
    },
    "ch4_choice_8": {
      chapter: 4,
      bg: "lounge",
      speaker: "narrator",
      text: "Her warm scent of jasmine and vanilla fills the space between you. Her fingertips lightly graze the back of your hand. How do you respond?",
      choices: [
        {
          text: "Lean in closer without pulling away: \"Look at us back then... though honestly, you're even more breathtaking tonight.\"",
          impact: 9,
          feedback: "Her breath catches. Her green eyes sparkle with undeniable affection.",
          target: "ch4_photo_intimate"
        },
        {
          text: "Chuckling at Can's ridiculous haircut in the background of the photo",
          impact: 4,
          feedback: "She giggles happily, sharing the nostalgic laugh.",
          target: "ch4_photo_laugh"
        },
        {
          text: "Quickly pull your hand back and sit up straight awkwardly",
          impact: -5,
          feedback: "She notices the sudden distance and quietly puts her phone down.",
          target: "ch4_photo_flinch"
        }
      ]
    },
    "ch4_photo_intimate": {
      chapter: 4,
      bg: "lounge",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Mehmet... you really shouldn't say things like that unless you mean them.",
      next: "ch4_friends_notice"
    },
    "ch4_photo_laugh": {
      chapter: 4,
      bg: "lounge",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Right?! Can looked like a boyband reject! We've come so far since then.",
      next: "ch4_friends_notice"
    },
    "ch4_photo_flinch": {
      chapter: 4,
      bg: "lounge",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Anyway... yeah. Just thought it was funny.",
      next: "ch4_friends_notice"
    },
    "ch4_friends_notice": {
      chapter: 4,
      bg: "lounge",
      speaker: "ece",
      leftSpeaker: "ece",
      rightSpeaker: "can",
      text: "Hey, are you two always this obvious, or is tonight a special VIP screening for the rest of us?",
      next: "ch4_banter_reaction"
    },
    "ch4_banter_reaction": {
      chapter: 4,
      bg: "lounge",
      speaker: "yusra",
      leftSpeaker: "yusra",
      rightSpeaker: "mehmet",
      text: "What are you talking about, Ece?",
      next: "ch4_mehmet_quip"
    },
    "ch4_mehmet_quip": {
      chapter: 4,
      bg: "lounge",
      speaker: "mehmet",
      leftSpeaker: "yusra",
      rightSpeaker: "mehmet",
      text: "Absolutely nothing. Mind your own cocktails over there.",
      next: "ch5_transition"
    },

    // CHAPTER 5: CONFLICT / PROTECTION
    "ch5_transition": {
      chapter: 5,
      bg: "bar",
      music: "ambient_lounge",
      speaker: "narrator",
      text: "A little later, Yüsra stands up to grab two glasses of sparkling water from the main bar counter. You watch her walk over toward the illuminated liquor wall.",
      next: "ch5_stranger_appears"
    },
    "ch5_stranger_appears": {
      chapter: 5,
      bg: "bar",
      speaker: "narrator",
      text: "At the counter, a loud, intrusive patron leans uncomfortably close to Yüsra, blocking her path back to the booth. He tries to grab her arm to buy her a drink.",
      sfx: "tension_drone",
      next: "ch5_yusra_discomfort"
    },
    "ch5_yusra_discomfort": {
      chapter: 5,
      bg: "bar",
      speaker: "yusra",
      leftSpeaker: "yusra",
      rightSpeaker: null,
      text: "No, thank you. I said I'm with my friends. Please let me pass.",
      next: "ch5_stranger_insist"
    },
    "ch5_stranger_insist": {
      chapter: 5,
      bg: "bar",
      speaker: "stranger",
      leftSpeaker: null,
      rightSpeaker: "stranger",
      text: "Come on, sweetheart, just one drink with me. Your friends won't miss you for five minutes.",
      next: "ch5_choice_9"
    },
    "ch5_choice_9": {
      chapter: 5,
      bg: "bar",
      speaker: "narrator",
      text: "Yüsra steps back, clearly distressed and uncomfortable. Mehmet notices immediately. WHAT DOES MEHMET DO?",
      choices: [
        {
          text: "🥊 CONFRONT FIRMLY: Walk up with calm authority, step beside Yüsra, and state firmly: \"She already gave you her answer. Step back and leave her alone.\"",
          impact: 10,
          feedback: "Your steadfast protection and composure give her immense relief and confidence.",
          target: "ch5_confront_path"
        },
        {
          text: "🚶 TAKE HER AWAY: Walk over smoothly, wrap a gentle protective arm around her shoulder: \"Hey love, our song just started—let's get back to our table.\"",
          impact: 9,
          feedback: "She melts into your side, grateful for your swift, de-escalating grace.",
          target: "ch5_smooth_path"
        },
        {
          text: "Wait and see if she handles it on her own before interfering",
          impact: -6,
          feedback: "Yüsra struggles for another awkward moment before having to push past him herself.",
          target: "ch5_hesitate_path"
        }
      ]
    },
    "ch5_confront_path": {
      chapter: 5,
      bg: "bar",
      speaker: "mehmet",
      leftSpeaker: "mehmet",
      rightSpeaker: "stranger",
      text: "I suggest you take your hands off the counter and find another spot. She's not interested, and we're not repeating ourselves.",
      next: "ch5_confront_resolve"
    },
    "ch5_confront_resolve": {
      chapter: 5,
      bg: "bar",
      speaker: "narrator",
      text: "Faced with your calm, unwavering resolve, the man mutters an excuse and retreats into the crowded corner of the bar.",
      next: "ch5_aftermath"
    },
    "ch5_smooth_path": {
      chapter: 5,
      bg: "bar",
      speaker: "mehmet",
      leftSpeaker: "yusra",
      rightSpeaker: "mehmet",
      text: "Excuse us, mate. We're heading back.",
      next: "ch5_aftermath"
    },
    "ch5_hesitate_path": {
      chapter: 5,
      bg: "bar",
      speaker: "narrator",
      text: "Yüsra manages to firmly slip past him on her own, but she looks visibly shaken and disappointed as she walks back.",
      next: "ch5_aftermath_hesitate"
    },
    "ch5_aftermath": {
      chapter: 5,
      bg: "bar",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Thank you, Mehmet... my heart was racing. I really hated the way he was cornering me.",
      next: "ch5_choice_10"
    },
    "ch5_aftermath_hesitate": {
      chapter: 5,
      bg: "bar",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "That was awful... I wish someone had stepped in sooner.",
      next: "ch5_choice_10"
    },
    "ch5_choice_10": {
      chapter: 5,
      bg: "bar",
      speaker: "narrator",
      text: "Away from the counter, Yüsra takes a deep breath. Her hand trembles slightly as she holds her water glass. How do you comfort her?",
      choices: [
        {
          text: "Gently clasp both her hands in yours: \"I've always got your back, Yüsra. You're safe with me, no matter what.\"",
          impact: 8,
          feedback: "Her trembling stops as she looks up into your eyes with profound tenderness.",
          target: "ch5_comfort_hand"
        },
        {
          text: "\"Don't let one annoying idiot ruin our night. The crew is right over there.\"",
          impact: 4,
          feedback: "She gives a relieved nod and smiles.",
          target: "ch5_comfort_casual"
        },
        {
          text: "\"You should probably just ignore guys like that next time.\"",
          impact: -4,
          feedback: "She pulls her hands back, feeling unheard.",
          target: "ch5_comfort_dismissive"
        }
      ]
    },
    "ch5_comfort_hand": {
      chapter: 5,
      bg: "bar",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "I know you do... Having you here makes me feel so protected.",
      next: "ch6_transition"
    },
    "ch5_comfort_casual": {
      chapter: 5,
      bg: "bar",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "You're right. Let's go back to the others.",
      next: "ch6_transition"
    },
    "ch5_comfort_dismissive": {
      chapter: 5,
      bg: "bar",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "It's not that simple when they block your way, Mehmet.",
      next: "ch6_transition"
    },

    // CHAPTER 6: THE NIGHT CONTINUES
    "ch6_transition": {
      chapter: 6,
      bg: "dance",
      music: "ambient_lounge",
      speaker: "narrator",
      text: "The music at Passage shifts into an irresistible Mediterranean house groove. Beams of neon magenta and cyan slice through the crowd as the dance floor fills with energy.",
      next: "ch6_dance_invitation"
    },
    "ch6_dance_invitation": {
      chapter: 6,
      bg: "dance",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Listen to that beat! Mehmet, come on—you can't just stand on the sidelines all night. Dance with me!",
      next: "ch6_choice_11"
    },
    "ch6_choice_11": {
      chapter: 6,
      bg: "dance",
      speaker: "narrator",
      text: "Yüsra extends both hands toward you under the pulsing neon lights, her eyes dancing with playful joy. How do you respond?",
      choices: [
        {
          text: "Take her hands with a bright grin and pull her onto the floor, moving in sync to the rhythm",
          impact: 9,
          feedback: "The rhythm brings you close, your hands meeting naturally in the pulse of the music.",
          target: "ch6_dance_yes"
        },
        {
          text: "Dance in the middle of the group circle with Can, Selin, Burak, and Ece",
          impact: 4,
          feedback: "The whole friend group jumps and laughs together!",
          target: "ch6_dance_group"
        },
        {
          text: "Shake your head and say you prefer holding down the table",
          impact: -4,
          feedback: "She lowers her hands, looking slightly disappointed.",
          target: "ch6_dance_no"
        }
      ]
    },
    "ch6_dance_yes": {
      chapter: 6,
      bg: "dance",
      speaker: "narrator",
      text: "On the dance floor, the world blurs into neon hues. Yüsra spins, laughing as she catches your arms. For several songs, you move together effortlessly, the electric chemistry impossible to hide.",
      next: "ch6_wingman_plot"
    },
    "ch6_dance_group": {
      chapter: 6,
      bg: "dance",
      speaker: "narrator",
      text: "The six of you form a wild dance circle, singing along to the chorus at the top of your lungs. It's energetic and hilarious.",
      next: "ch6_wingman_plot"
    },
    "ch6_dance_no": {
      chapter: 6,
      bg: "dance",
      speaker: "narrator",
      text: "Yüsra dances near the table for a moment before the others drag her into the crowd. You watch her radiant smile from afar.",
      next: "ch6_wingman_plot"
    },
    "ch6_wingman_plot": {
      chapter: 6,
      bg: "dance",
      speaker: "can",
      leftSpeaker: "can",
      rightSpeaker: "ece",
      text: "Hey! The four of us are gonna go out to the front square to grab some fresh air and snacks.",
      next: "ch6_ece_scheme"
    },
    "ch6_ece_scheme": {
      chapter: 6,
      bg: "dance",
      speaker: "ece",
      leftSpeaker: "ece",
      rightSpeaker: "selin",
      text: "Yeah! Mehmet, Yüsra—you two hold down the fort. We'll be back in... oh, definitely not less than half an hour!",
      next: "ch6_burak_wink"
    },
    "ch6_burak_wink": {
      chapter: 6,
      bg: "dance",
      speaker: "burak",
      leftSpeaker: "burak",
      rightSpeaker: "mehmet",
      text: "Don't miss us too much, lovebirds!",
      next: "ch6_friends_exit"
    },
    "ch6_friends_exit": {
      chapter: 6,
      bg: "dance",
      speaker: "narrator",
      text: "Before either of you can object, the four friends practically sprint out the side door, giggling conspiritually. Silence settles between you and Yüsra amidst the lively club.",
      next: "ch6_choice_12"
    },
    "ch6_choice_12": {
      chapter: 6,
      bg: "dance",
      speaker: "narrator",
      text: "Yüsra tucks a stray strand of chestnut hair behind her ear, laughing warmly. \"They aren't subtle at all, are they?\" What do you say?",
      choices: [
        {
          text: "\"Maybe not... but I'm definitely not complaining about having you all to myself.\"",
          impact: 9,
          feedback: "Her eyes widen softly, captivated by your boldness.",
          target: "ch6_alone_romantic"
        },
        {
          text: "\"Can is officially the least subtle wingman on the island.\"",
          impact: 5,
          feedback: "She bursts out laughing, nodding in agreement.",
          target: "ch6_alone_funny"
        },
        {
          text: "\"They can be so annoying sometimes with these games.\"",
          impact: -3,
          feedback: "She looks slightly self-conscious.",
          target: "ch6_alone_awkward"
        }
      ]
    },
    "ch6_alone_romantic": {
      chapter: 6,
      bg: "dance",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "You know... it's really loud in here. Want to go out to the back balcony terrace? It's so quiet out there.",
      next: "ch7_transition"
    },
    "ch6_alone_funny": {
      chapter: 6,
      bg: "dance",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "He really is! But honestly, let's step out to the balcony. I want to talk without yelling over the bass.",
      next: "ch7_transition"
    },
    "ch6_alone_awkward": {
      chapter: 6,
      bg: "dance",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Well... let's head out to the terrace anyway. The air is nicer out there.",
      next: "ch7_transition"
    },

    // CHAPTER 7: ALONE TOGETHER
    "ch7_transition": {
      chapter: 7,
      bg: "terrace",
      music: "romantic_melody",
      speaker: "narrator",
      text: "You step through the archway onto the secluded stone terrace. The heavy bass softens into a gentle hum. Above you, glowing string fairy lights cast a golden warmth against ancient Mediterranean stone. Below, the harbor lights shimmer against the dark sea under a crystal starry sky.",
      next: "ch7_terrace_view"
    },
    "ch7_terrace_view": {
      chapter: 7,
      bg: "terrace",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Wow... look at this view. You can see the whole coastline from up here.",
      next: "ch7_terrace_talk"
    },
    "ch7_terrace_talk": {
      chapter: 7,
      bg: "terrace",
      speaker: "narrator",
      text: "She leans her forearms against the stone railing, looking out toward the horizon where the moonlight kisses the Mediterranean waters.",
      next: "ch7_choice_13"
    },
    "ch7_choice_13": {
      chapter: 7,
      bg: "terrace",
      speaker: "narrator",
      text: "Yüsra speaks softly without turning: \"Tonight feels so magical... Do you ever feel like time moves way too fast when you're truly happy?\" How do you answer?",
      choices: [
        {
          text: "Step right beside her and look into her eyes: \"Only when I'm with you, Yüsra. Hours feel like seconds.\"",
          impact: 9,
          feedback: "Her gaze locks onto yours. An overwhelming romantic tenderness fills the air.",
          target: "ch7_deep_response"
        },
        {
          text: "\"I think the best nights are the ones where you forget yesterday and don't care about tomorrow.\"",
          impact: 6,
          feedback: "She turns to you with a deep, appreciative smile.",
          target: "ch7_philosophical_response"
        },
        {
          text: "\"Time moves fast because the cocktails here are ten euros each!\"",
          impact: -3,
          feedback: "She sighs playfully, breaking the romantic mood.",
          target: "ch7_joke_response"
        }
      ]
    },
    "ch7_deep_response": {
      chapter: 7,
      bg: "terrace",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Mehmet... you've been looking at me all night in a way you never did before.",
      next: "ch7_turning_point"
    },
    "ch7_philosophical_response": {
      chapter: 7,
      bg: "terrace",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "That's so true. I don't want tonight to end.",
      next: "ch7_turning_point"
    },
    "ch7_joke_response": {
      chapter: 7,
      bg: "terrace",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "You really can't help turning a deep moment into a joke, can you?",
      next: "ch7_turning_point"
    },
    "ch7_turning_point": {
      chapter: 7,
      bg: "terrace",
      speaker: "narrator",
      text: "She turns around completely, resting her back against the railing. Her long hair sways gently in the night breeze. She is standing just inches from you.",
      next: "ch7_choice_14"
    },
    "ch7_choice_14": {
      chapter: 7,
      bg: "terrace",
      speaker: "narrator",
      text: "Her green eyes search your face under the golden fairy lights. \"Mehmet... tell me the truth. What were you really thinking when you saw me arrive at Passage tonight?\"",
      choices: [
        {
          text: "Take a step closer and say softly: \"I thought you looked breathtaking... and I knew I couldn't spend another night pretending you're just a friend.\"",
          impact: 10,
          feedback: "Her heart skips a beat. The chemistry reaches its absolute peak.",
          target: "ch7_confession_pure"
        },
        {
          text: "\"I thought that getting to spend this entire night by your side was the best thing that could happen to me.\"",
          impact: 8,
          feedback: "Her smile radiates with pure warmth and affection.",
          target: "ch7_confession_sweet"
        },
        {
          text: "\"I thought, 'Hey, nice green top, matches your eyes.'\"",
          impact: 2,
          feedback: "She chuckles, though her eyes show a slight longing for more.",
          target: "ch7_confession_safe"
        }
      ]
    },
    "ch7_confession_pure": {
      chapter: 7,
      bg: "terrace",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "You have no idea how long I've waited to hear you say that...",
      next: "ch8_evaluation"
    },
    "ch7_confession_sweet": {
      chapter: 7,
      bg: "terrace",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "You always know how to touch my heart, Mehmet.",
      next: "ch8_evaluation"
    },
    "ch7_confession_safe": {
      chapter: 7,
      bg: "terrace",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Well... thank you. I'm glad you liked it.",
      next: "ch8_evaluation"
    },

    // CHAPTER 8: THE ENDING & CLIMAX
    "ch8_evaluation": {
      chapter: 8,
      bg: "terrace",
      speaker: "narrator",
      text: "A quiet stillness settles over the Cyprus balcony. The distant music fades into the background. The air between you is charged with magnetic anticipation.",
      evalEnding: true
    },

    // HIGH CHEMISTRY BRANCH (>= 80%)
    "ch8_high_pre_kiss": {
      chapter: 8,
      bg: "terrace",
      music: "romantic_climax",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "So... are you going to say something, or are you just going to keep looking at me like that?",
      next: "ch8_high_mehmet_reply"
    },
    "ch8_high_mehmet_reply": {
      chapter: 8,
      bg: "terrace",
      speaker: "mehmet",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "I think you already know.",
      next: "ch8_high_kiss_action"
    },
    "ch8_high_kiss_action": {
      chapter: 8,
      bg: "kiss",
      sfx: "romantic_kiss",
      speaker: "narrator",
      text: "Yüsra smiles softly. You reach out, your fingers gently tracing her cheek as you draw her close. Under the warm golden fairy lights and the starlit Mediterranean sky, your lips meet in a tender, unforgettable kiss.",
      next: "ch8_high_quote"
    },
    "ch8_high_quote": {
      chapter: 8,
      bg: "kiss",
      speaker: "narrator",
      text: "❤️ ❤️ ❤️ CHEMISTRY: 100%\n\n\"Some nights are worth remembering forever.\"",
      next: "ch8_high_friends_return"
    },
    "ch8_high_friends_return": {
      chapter: 8,
      bg: "kiss",
      speaker: "can",
      leftSpeaker: "can",
      rightSpeaker: "selin",
      text: "FINALLY! I KNEW IT!",
      sfx: "cheers",
      next: "ch8_high_selin_reaction"
    },
    "ch8_high_selin_reaction": {
      chapter: 8,
      bg: "kiss",
      speaker: "selin",
      leftSpeaker: "selin",
      rightSpeaker: "burak",
      text: "Pay up, Burak! I told you it would happen before 2 AM!",
      next: "ch8_high_ece_reaction"
    },
    "ch8_high_ece_reaction": {
      chapter: 8,
      bg: "kiss",
      speaker: "ece",
      leftSpeaker: "ece",
      rightSpeaker: "yusra",
      text: "We've been waiting all night for you two! Best night at Passage ever!",
      next: "ch8_high_final_laugh"
    },
    "ch8_high_final_laugh": {
      chapter: 8,
      bg: "kiss",
      speaker: "narrator",
      text: "Mehmet and Yüsra look at each other, hands tightly intertwined, laughing together under the Cyprus moon. The night is only the beginning.",
      endingType: "romantic_win"
    },

    // LOW/MID CHEMISTRY BRANCH (< 80%)
    "ch8_low_ending": {
      chapter: 8,
      bg: "terrace",
      music: "ambient_lounge",
      speaker: "yusra",
      leftSpeaker: "mehmet",
      rightSpeaker: "yusra",
      text: "Thank you for such a fun night, Mehmet. Having you as one of my closest friends in Cyprus means the world to me.",
      next: "ch8_low_hug"
    },
    "ch8_low_hug": {
      chapter: 8,
      bg: "terrace",
      speaker: "narrator",
      text: "Yüsra wraps her arms around you in a warm, gentle embrace. A comfortable warmth lingers under the stars.",
      next: "ch8_low_friends_return"
    },
    "ch8_low_friends_return": {
      chapter: 8,
      bg: "terrace",
      speaker: "can",
      leftSpeaker: "can",
      rightSpeaker: "burak",
      text: "Hey! We brought souvlaki skewers from the square! Group toast to Passage!",
      next: "ch8_low_final"
    },
    "ch8_low_final": {
      chapter: 8,
      bg: "terrace",
      speaker: "narrator",
      text: "A wonderful night with great friends in Cyprus... but maybe on another night, Mehmet and Yüsra might discover something even deeper together.",
      endingType: "friendship"
    }
  }
};

if (typeof window !== "undefined") {
  window.storyData = window.GAME_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = (typeof window !== "undefined" && window.GAME_DATA) ? window.GAME_DATA : {};
}
