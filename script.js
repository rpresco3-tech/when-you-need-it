const PASSCODE = "4YONNIE";

let cycleInterval = null;
const hour = new Date().getHours();
const isNight = hour >= 20 || hour < 6;

document.addEventListener("DOMContentLoaded", () => {
    const hour = new Date().getHours();
    if (hour >= 20 || hour < 6) {
        isNight = true;
        document.body.classList.add("night");
    }
});

const modeToggle = document.getElementById("mode-toggle");
const metaTheme = document.getElementById("theme-color-meta");

document.body.classList.toggle("night", isNight);
modeToggle.innerText = isNight ? "🌙" : "🌞";
metaTheme.setAttribute('content', isNight ? "#1c0d3a" : "#fdf6fa");

modeToggle.addEventListener("click", () => {
    const isNight = document.body.classList.toggle("night");
    modeToggle.innerText = isNight ? "🌙" : "🌞";
    metaTheme.setAttribute('content', isNight ? "#1c0d3a" : "#fdf6fa");
});

const content = {
    stressed: {
        messages: [
            "I know things feel heavy right now. Just remember you're stronger than this moment, and I'm here rooting for you every step of the way. Take a deep breath. You got this. I love you.",
            "Wishing I could give you the biggest hug. Whatever's stressing you out, it doesn't get to win. You're amazing, and this will pass. I'm here whenever you need me.",
            "I hate that you're stressed and I can't be there right now. But please know I'm sending you all my calm and love across the distance. Take it one step at a time. You're doing better than you think.",
            "Just a reminder: you're one of my favorite people in the world, and nothing that's stressing you out changes how incredible you are. Breathe, be kind to yourself, and text or call me anytime. I love you.",
            "Sending you a virtual hug that lasts as long as you need it. You're not alone in this, I'm always in your corner. Take a little break if you can, sip some water, and remember how much I love you.",
            "Stress doesn't stand a chance against you in the long run. I'm here cheering you on from afar, believing in you completely. Call me whenever you get a chance.",
            "I wish I could take all the stress away, but since I can't be there, just know my heart is with you. You're capable, you're loved, and this rough patch is temporary."
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
            "I know you're missing me right now, and honestly, I'm missing you just as much. You're my favorite part of the day. Close your eyes and feel me there with you in spirit.",
            "The distance sucks and I hate that you're feeling it right now. Just remember: every second we're apart is one second closer to being together. I love you.",
            "I'm sitting here thinking about you and how much I miss your smile, your laugh, your everything. You're my home, and I can't wait to come back to you.",
            "Missing you hits me in waves too Yonnie. If I could, I'd be there in an instant. For now, imagine my arms around you, my voice in your ear telling you how beautiful you are.",
            "I know the missing-me feeling is heavy right now. Just wanted to remind you that you're the best part of my world, and nothing can change that. I love you.",
            "I miss you so deeply it almost hurts. But it's the good kind of hurt because it means I love you that much. Hold on to that thought, and know I'm thinking about you."
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
            "Close your eyes and listen to my voice in your head telling you how much I love you. Let everything else fade away. I'm right here with you in spirit, holding you until you drift off.",
            "I know sleep feels far away right now. Take a slow breath in... and out. Imagine my arms around you, my fingers in your hair. You're safe, you're loved, and your body knows how to rest.",
            "Wish I was there to rub your back and kiss your forehead until you fall asleep. For now, feel me next to you, warm and calm. Breathe with me: in for four, hold for four, out for four. You're going to sleep beautifully.",
            "It's okay if your mind is racing, just let the thoughts float by like clouds. I'm sending you all the peace I have. Snuggle in, feel my love wrapping around you like a blanket. Sleep tight Yonnie.",
            "I hate that you're still awake. Let's do this together: relax your toes, your legs, your tummy, all the way up. Feel the weight melting away. I'm holding your hand across the distance."
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
            "Hey pretty girl, quick reminder: you're my favorite notification, my best laugh, and the reason I grin like an idiot at my phone. Hope this message sneaks a grin onto that pretty face.",
            "If I were there right now, I'd tickle you until you begged for mercy. Since I can't, consider this your official long-distance tickle attack. Smile yet? Good. Mission accomplished.",
            "Quick challenge: try not to smile while reading this. Failed already? Excellent. That's the power of knowing someone out there loves you like crazy.",
            "I just pictured you reading this and hopefully smiling... and now I'm smiling too. Look what you started! Keep it going, you've got the kind of smile that makes the whole world better.",
            "Sending you an emergency dose of happiness: one mental image of you successfully rage-baiting me. There, did the corners of your mouth move upwards? Did you make that devious little smirk? Perfect."
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