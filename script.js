const PASSCODE = "4YONNIE";

let cycleInterval = null;

document.addEventListener("DOMContentLoaded", () => {
    const hour = new Date().getHours();
    if (hour >= 20 || hour < 6) {
        document.body.classList.add("night");
    }
});

const content = {
    stressed: {
        messages: [
            "Take a breath for me. You don't have to solve everything right now.",
            "I know today feels heavy, but you're stronger than the moment you're in.",
            "You handle so much with grace, even when no one else sees it. I see it.",
            "Pause here for a second. You're allowed to rest. You're allowed to breathe",
            "If I were here with you, I'd tell you to sit down and let the world wait."
        ],
        photos: [
            "assets/photos/us7.jpg",
            "assets/photos/us11.jpg",
            "assets/photos/us14.jpg",
            "assets/photos/us16.jpg",
            "assets/photos/us22.jpg"
        ],
        music: [
            "assets/audio/stressed-1.mp3",
            "assets/audio/stressed-2.mp3"
        ]
    },
    miss: {
        messages: [
            "I miss you too. I think about you more than I probably say.",
            "This made me think of you, and I wanted you to know that.",
            "You're never far from my thoughts, even on busy days.",
            "Being with you feels like home in a way I never expected.",
            "I'm really grateful we found each other when we did."
        ],
        photos: [
            "assets/photos/us15.jpg",
            "assets/photos/us17.jpg",
            "assets/photos/us20.jpg",
            "assets/photos/us24.jpg",
            "assets/photos/us28.jpg",
            "assets/photos/us33.jpg"
        ],
        music: [
            "assets/audio/miss-1.mp3",
            "assets/audio/miss-2.mp3"
        ]
    },
    sleep: {
        messages: [
            "You don't need to figure anything out tonight. Tomorrow can handle itself.",
            "Close your eyes for a moment. You're safe right now.",
            "Let your mind rest, I'll be here when you wake up.",
            "Even when you're quiet, even when you're tired, you're enough.",
            "If I were there, I'd pull you a little closer and tell you it's okay."
        ],
        photos: [
            "assets/photos/us4.jpg",
            "assets/photos/us18.jpg"
        ],
        music: [
            "assets/audio/sleep-1.mp3",
            "assets/audio/sleep-2.mp3"
        ]
    },
    smile: {
        messages: [
            "This is me reminding you how incredible you are, just in case you forgot.",
            "You have this way of making everything lighter. I hope you feel that right now.",
            "I really like the person you are. A lot.",
            "You make ordinary moments better just by being you.",
            "If you're smiling right now, that counts as a win."
        ],
        photos: [
            "assets/photos/us2.jpg",
            "assets/photos/us3.jpg",
            "assets/photos/us8.jpg",
            "assets/photos/us13.jpg",
            "assets/photos/us27.jpg",
            "assets/photos/us29.jpg",
            "assets/photos/us30.jpg"
        ],
        music: [
            "assets/audio/smile-1.mp3",
            "assets/audio/smile-2.mp3"
        ]
    }
};

const moodIntervals = {
    stressed: 15000,
    miss: 20000,
    sleep: 25000,
    smile: 12000,
};

let audio;
let musicEnabled = false;
let currentMood = null;

document.addEventListener("DOMContentLoaded", () => {
    audio = document.getElementById("bg-music");
});

function playMoodMusic(mood) {
    if (!audio || !musicEnabled) return;
    if (!content[mood] || !content[mood].music) return;

    const tracks = content[mood].music;
    const track = tracks[Math.floor(Math.random() * tracks.length)];

    audio.src = track;
    audio.loop = true;
    audio.volume = 0;

    audio.play();

    let v = 0;
    const fade = setInterval(() => {
        if (v < 0.25) {
            v += 0.02;
            audio.volume = v;
        } else {
            clearInterval(fade);
        }
    }, 100);
}

function stopMusic() {
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
}

function toggleMusic() {
    musicEnabled = !musicEnabled;
    const btn = document.getElementById("music-btn");

    btn.innerText = `🎵 ${musicEnabled ? "On" : "Off"}`;

    btn.classList.toggle("on", musicEnabled);
    
    if (musicEnabled && currentMood) {
            playMoodMusic(currentMood);
    } else {
            stopMusic();
    }
}

function unlock() {
    const input = document.getElementById("passcode").value;
    if (input === PASSCODE) {
        document.getElementById("lock-screen").classList.add("hidden");
        document.getElementById("home-screen").classList.remove("hidden");
    } else {
        alert("Try again 🙂");
    }
}

function openMood(mood) {
    if (!content[mood]) return;

    currentMood = mood;

    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("mood-screen").classList.remove("hidden");

    const data = content[mood];
    const firstMessage =
        data.messages[Math.floor(Math.random() * data.messages.length)];
    const firstPhoto =
        data.photos[Math.floor(Math.random() * data.photos.length)];   
    
    const textEl = document.getElementById("mood-text");
    const photoEl = document.getElementById("mood-photo");

    textEl.innerText = firstMessage;
    photoEl.src = firstPhoto;

    document.getElementById("mood-screen").classList.remove("fade");
    
    if (musicEnabled) {
        stopMusic();
        playMoodMusic(mood);
    }

    startMoodCycle(mood);
}

function goHome() {
    if (cycleInterval) {
        clearInterval(cycleInterval);
        cycleInterval = null;
    }

    stopMusic();
    currentMood = null;

    document.getElementById("mood-screen").classList.add("hidden");
    document.getElementById("home-screen").classList.remove("hidden");
}

function getNonRepeatingRandom(arr, last) {
    if (arr.length ===  1) return arr[0];

    let next;
    do {
        next = arr[Math.floor(Math.random() * arr.length)];
    } while (next === last);

    return next;
}

function startMoodCycle(mood) {
    const data = content[mood];
    let lastMessage = null;
    let lastPhoto = null;

    if (cycleInterval) clearInterval(cycleInterval);

    cycleInterval = setInterval(() => {
        const msg = getNonRepeatingRandom(data.messages, lastMessage);
        const photo = getNonRepeatingRandom(data.photos, lastPhoto);

        lastMessage = msg;
        lastPhoto = photo;

        document.getElementById("mood-screen").classList.add("fade");

        setTimeout(() => {
            document.getElementById("mood-text").innerText = msg;
            document.getElementById("mood-photo").src = photo;

            document.getElementById("mood-screen").classList.remove("fade");
        }, 400);
    }, moodIntervals[mood] || 15000);
}
