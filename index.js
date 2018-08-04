window.onload = () => {
    let shake = new Shake({});
    shake.start();

    let sounds = [
        new Howl({ src: ["./sounds/oofRoblox.mp3"] }),
        new Howl({ src: ["./sounds/oofSteve.mp3"] })
    ];

    let oofCircleDiv = document.getElementById("oof-circle");
    let expandTransition = "expand";

    window.addEventListener("shake", shakeCallback, false);
    function shakeCallback() {
        sounds[getRandomInt(0, sounds.length-1)].play();

        oofCircleDiv.classList.add(expandTransition);
    }
};

// Inclusive
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}