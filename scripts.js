
// Countdown Timer
const weddingDate = new Date("May 13, 2025 12:00:00").getTime();

const countdownTimer = setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML = days + " Tage " + hours + " Stunden "
        + minutes + " Minuten " + seconds + " Sekunden ";

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown-timer").innerHTML = "Der große Tag ist da!";
    }
}, 1000);
