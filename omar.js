/* ==================================================
   SELECT ELEMENTS
================================================== */

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

/* ==================================================
   UEFA CHAMPIONS LEAGUE KICKOFF DATE
================================================== */

/*
   Official Kickoff Date
   Update this date whenever a new season starts.
*/

const kickoffDate = new Date("September 16, 2026 21:00:00").getTime();

/* ==================================================
   UPDATE COUNTDOWN
================================================== */

function updateCountdown() {

    const currentDate = new Date().getTime();

    const difference = kickoffDate - currentDate;

    if (difference <= 0) {

        clearInterval(timer);

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        return;

    }

    const d = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const m = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const s = Math.floor(
        (difference % (1000 * 60)) / 1000
    );

    days.textContent = String(d).padStart(2, "0");
    hours.textContent = String(h).padStart(2, "0");
    minutes.textContent = String(m).padStart(2, "0");
    seconds.textContent = String(s).padStart(2, "0");

}

/* ==================================================
   START COUNTDOWN
================================================== */

updateCountdown();

const timer = setInterval(updateCountdown, 1000);

/* ==================================================
   RIPPLE EFFECT
================================================== */

document.body.addEventListener("click", function (event) {

    const ripple = document.createElement("span");

    ripple.classList.add("ripple");

    ripple.style.left = event.clientX + "px";
    ripple.style.top = event.clientY + "px";

    document.body.appendChild(ripple);

    setTimeout(function () {

        ripple.remove();

    }, 500);

});