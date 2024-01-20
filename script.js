let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;

function pad(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

function start() {
    interval = setInterval(() => {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }

        document.getElementById('hours').textContent = pad(hours);
        document.getElementById('minutes').textContent = pad(minutes);
        document.getElementById('seconds').textContent = pad(seconds);
    }, 1000);
}

function stop() {
    clearInterval(interval);
}

function reset() {
    stop();
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById('hours').textContent = pad(hours);
    document.getElementById('minutes').textContent = pad(minutes);
    document.getElementById('seconds').textContent = pad(seconds);
}

document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);
document.getElementById('reset').addEventListener('click', reset);