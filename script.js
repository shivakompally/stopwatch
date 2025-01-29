let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');
let lapBtn = document.getElementById('lapBtn');
let display = document.getElementById('display');
let laps = document.getElementById('laps');

let hours = 0, minutes = 0, seconds = 0;
let timer;
let running = false;

function updateDisplay() {
    let hrs = String(hours).padStart(2, '0');
    let mins = String(minutes).padStart(2, '0');
    let secs = String(seconds).padStart(2, '0');
    display.textContent = `${hrs}:${mins}:${secs}`;
}

function startTimer() {
    if (!running) {
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
        running = true;
    }
}

function stopTimer() {
    if (running) {
        clearInterval(timer);
        running = false;
    }
}

function resetTimer() {
    clearInterval(timer);
    hours = 0; minutes = 0; seconds = 0;
    updateDisplay();
    laps.innerHTML = '';
    running = false;
}

function lapTimer() {
    if (running) {
        let lapTime = display.textContent;
        let lapItem = document.createElement('div');
        lapItem.textContent = `Lap: ${lapTime}`;
        laps.appendChild(lapItem);
    }
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', lapTimer);

updateDisplay();
