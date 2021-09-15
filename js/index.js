let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let date = new Date;
let currentMonthName = monthNames[date.getMonth()];
let currentYear = date.getFullYear();

let fullDate = currentMonthName + " " + date.getDate() + ", " + currentYear;

document.getElementById("currentYear").textContent = currentYear;