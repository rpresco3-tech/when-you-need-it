const PASSCODE = "0312";

const content = {
    stressed: {
        messages: [
            "Take a breath for me. You don't have to solve everything right now.",
            "I know today feels heavy, but you're stronger than the moment you're in.",
            "You handle so much with grace, even when no one else sees it. I see it.",
            "Pause here for a second. You're allowed to rest.",
            "If I were here with you, I'd tell you to sit down and let the world wait."
        ],
        photos: [
            "assets/photos/us7.jpg",
            "assets/photos/us11.jpg",
            "assets/photos/us14.jpg",
            "assets/photos/us16.jpg",
            "assets/photos/us22.jpg"
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
        ]
    },
    sleep: {
        messages: [
            "You don't need to figure anything out tonight. Tomorrow can handle itself.",
            "Close your eyes for a moment. You're safe right now.",
            "Let your mind rest, I'll be here when you wake up.",
            "Even when you're quiet, even when you're tired, you're enough.",
            "IF I were there, I'd pull you a little closer and tell you it's okay."
        ],
        photos: [
            "assets/photos/us4.jpg",
            "assets/photos/us18.jpg"
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