const PASSCODE = "0312";

const content = {
    stressed: {
        messages: [
            "Take a breath. You're doing better than you think.",
            "I wish I could hug you right now."
        ],
        photos: [
            "assets/photos/us1.jpg",
            "assets/photos/us2.jpg"
        ]
    },
    miss: {
        messages: [
            "I miss you too. More than you know.",
            "This made me think of you."
        ],
        photos: [
            "assets/photos/us3.jpg"
        ]
    },
    sleep: {
        messages: [
            "Close your eyes. Tomorrow can wait.",
            "You're safe. You're loved."
        ],
        photos: [
            "assets/photos/us4.jpg"
        ]
    },
    smile: {
        messages: [
            "You have the best smile. Don't forget that.",
            "This is me reminding you you're amazing."
        ],
        photos: [
            "assets/photos/us5.jpg"
        ]
    }
};

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
    const data = content[mood];

    const msg =
        data.messages[Math.floor(Math.random() * data.messages.length)];
    const photo =
        data.photos[Math.floor(Math.random() * data.photos.length)];
    
        document.getElementById("mood-text").innerText = msg;
        document.getElementById("mood-photo").src = photo;

        document.getElementById("home-screen").classList.add("hidden");
        document.getElementById("mood-screen").classList.remove("hidden");
}

function goHome() {
    document.getElementById("mood-screen").classList.add("hidden");
    document.getElementById("home-screen").classList.remove("hidden");
}