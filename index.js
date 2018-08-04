window.onload = () => {
    let dropDelay = 1000;

    let shake = new Shake({
        timeout: dropDelay
    });
    shake.start();

    let sounds = [
        new Howl({ src: ["./sounds/oofRoblox.ogg", "./sounds/oofRoblox.mp3"] }),
        new Howl({ src: ["./sounds/oofSteve.ogg", "./sounds/oofSteve.mp3"] })
    ];

    let oofs = 0;

    let headerDiv = document.getElementById("header");
    let headerOgText = headerDiv.innerHTML; // not really needed but hey

    let oofCircleDiv = document.getElementById("oof-circle");
    let expandAnim = "expand";

    // for debugging on desktop
    let oofTextDiv = document.getElementById("oof-text");
    oofTextDiv.addEventListener("click", () => {
        shakeCallback();
    }, false);

    let oofCounterPrefix = "You have oof'd ";
    let oofCounterSuffix = ".";
    window.addEventListener("shake", shakeCallback, false);
    function shakeCallback() {
        oofs += 1;
        console.log("oof! " + oofs);
        sounds[getRandomInt(0, sounds.length-1)].play();
        oofCircleDiv.classList.add(expandAnim);
        setTimeout(() => {
            oofCircleDiv.classList.remove(expandAnim);
        }, dropDelay);

        setTimeout(() => {
            if(oofs >= 1) {
                headerDiv.innerHTML = oofCounterPrefix + writtenNumber(oofs) + (oofs === 1? " time" : " times") + oofCounterSuffix;
            }
        }, 200); // the peak of the animation where the whole screen is red (sorry for magic number :(( )))
    }
};

// Inclusive
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}