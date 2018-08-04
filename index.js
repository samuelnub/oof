window.onload = () => {
    let dropDelay = 1000;

    let shake = new Shake({
        timeout: dropDelay
    });
    shake.start();

    let sounds = [
        new Howl({ src: ["./sounds/oofRoblox.ogg"] }),
        new Howl({ src: ["./sounds/oofSteve.ogg"] })
    ];

    let oofCircleDiv = document.getElementById("oof-circle");
    let expandAnim = "expand";

    // for debugging on desktop
    let oofTextDiv = document.getElementById("oof-text");
    oofTextDiv.addEventListener("click", () => {
        shakeCallback();
    }, false);

    window.addEventListener("shake", shakeCallback, false);
    function shakeCallback() {
        console.log("oof!");
        sounds[getRandomInt(0, sounds.length-1)].play();
        oofCircleDiv.classList.add(expandAnim);
        setTimeout(() => {
            oofCircleDiv.classList.remove(expandAnim);
        }, dropDelay);
    }
};

// Inclusive
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}