console.log("StopWatch is Ok");
window.onload = function () {
    let seconds = 0;
    let tens = 0;
    let appendTens = document.getElementById("tens");
    let appendSeconds = document.getElementById("seconds");
    const btnStart = document.getElementById("button-start");
    const btnStop = document.getElementById("button-stop");
    const btnReset = document.getElementById("button-reset");
    let Interval;
    btnStart.onclick = function () {

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    btnStop.onclick = function () {
        clearInterval(Interval);
    }
    btnReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }

    function startTimer() {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;

        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

    }


}