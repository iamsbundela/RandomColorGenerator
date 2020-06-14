const colorStrips = document.querySelectorAll('.color-strip');
const colorCode = document.querySelectorAll('.color-code');
const locks = document.querySelectorAll('.lock');
const resetBtn = document.querySelector('.change-color');

function randomCode() {
    let color = Math.floor(Math.random() * 255) + 1;
    return color;
}

function randomColorGen() {
    let r, g, b;
    r = randomCode();
    g = randomCode();
    b = randomCode();
    return (`rgb(${r}, ${g}, ${b})`);
}

function stripColorChanger() {
    colorStrips.forEach((strip, index) => {
        if (strip.classList.contains('unlocked')) {
            let color = randomColorGen();
            strip.style.backgroundColor = color;
            colorCode[index].textContent = color;
        }
    });
}

function lockStatusChanger() {
    colorStrips.forEach((strip) => {
        strip.addEventListener('click', () => {
            if (strip.classList.contains('locked')) {
                strip.classList.remove('locked');
                strip.classList.add('unlocked');
            } else {
                strip.classList.remove('unlocked');
                strip.classList.add('locked');
            }
        });
    });
}

function buttonAction() {
    resetBtn.addEventListener('click', () => {
        resetBtn.style.backgroundColor = randomColorGen();
        stripColorChanger();
    });
}

stripColorChanger();
buttonAction();
lockStatusChanger();