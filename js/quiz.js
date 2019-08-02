var clock = document.getElementById("clock");
var hexColor = document.getElementById("hex-color");
var dates = document.getElementById("months");

function hexClock() {
    let time = new Date();
    let hours = (time.getHours() % 12).toString();
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();
    let month = time.getMonth();
    let months = '';
    switch (month) {
        case 0:
            months = "January";
            break;
        case 1:
            months = "February";
            break;
        case 2:
            months = "March";
            break;
        case 3:
            months = "April";
            break;
        case 4:
            months = "May";
            break;
        case 5:
            months = "June";
            break;
        case 6:
            months = "July";
            break;
        case 7:
            months = "August";
            break;
        case 8:
            months = "September";
            break;
        case 9:
            months = "October";
            break;
        case 10:
            months = "November";
            break;
        case 11:
            months = "December";
            break;
    }

    let day = time.getDay();
    let days = '';
    switch (day) {
        case 0:
            days = "Sunday";
            break;
        case 1:
            days = "Monday";
            break;
        case 2:
            days = "Tuesday";
            break;
        case 3:
            days = "Wednesday";
            break;
        case 4:
            days = "Thursday";
            break;
        case 5:
            days = "Friday";
            break;
        case 6:
            days = "Saturday";
            break;
    }

    if (hours.length < 2) {
        hours = '0' + hours;
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }

    if (time.getHours() === 12) {
        hours = time.getHours();
    }

    let clockString = hours + " : " + minutes + " : " + seconds;
    dates.innerHTML = days + " /  " + months + " / " + time.getFullYear();

    if (time.getHours() < 12) {
        clock.innerHTML = clockString + " <span​​​​​​​ style='color:orange;'>A<span><span>M</span>";
        hexColor.innerHTML = "Good Morning !";
        document.body.style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../images/bg.jpg') center/cover no-repeat";
    } else {
        clock.innerHTML = clockString + " <span style='color:teal;'>P</span><span>M</span>";
        hexColor.innerHTML = "Good Afternoon!"
        document.body.style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../images/morning.jpg') center/cover no-repeat";
    }

    if (time.getHours() >= 21) {
        clock.innerHTML = clockString + " <span>P</span><span>M</span>";
        hexColor.innerHTML = "Good Night!"
    }

}

setInterval(hexClock, 1000);