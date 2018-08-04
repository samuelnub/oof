window.onload = () => {
    let shake = new Shake({});
    shake.start();

    let sounds = [
        new Howl({ src: ["./sounds/oofRoblox.wav"] }),
        new Howl({ src: ["./sounds/oofSteve.mp3"] })
    ];

    window.addEventListener("shake", shakeCallback, false);
    function shakeCallback() {
        sounds[getRandomInt(0, sounds.length-1)].play();


    }
};

// Inclusive
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}