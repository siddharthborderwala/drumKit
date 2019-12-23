document.querySelectorAll('button').forEach((elem) => {
    elem.addEventListener("click", clickSound);
});

function clickSound() {
    let instrument = this.innerHTML;
    playSound(instrument);
}

document.addEventListener("keypress", function(event) {
    let keyPressed = event.key;
    playSound(keyPressed);
});

function playSound(key) {
    let url = `sounds/${key}.mp3`;
    animation(key);
    new Audio(url).play();
}

function animation(key) {
    document.querySelector(`.${key}`).classList.toggle('pressed');

    setTimeout(function() {
        document.querySelector(`.${key}`).classList.toggle('pressed');
    }, 100);
}