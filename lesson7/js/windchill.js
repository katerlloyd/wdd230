let t = document.querySelector(".temperature").textContent;
let s = document.querySelector(".windspeed").textContent;
let windchill_factor = 'N/A';

if ((t <= 50) && (s > 3)) {
    windchill_factor = Math.round(35.74 + (0.6215 * t ) - (35.75 * Math.pow(s, 0.16)) + ((0.4275 * t) * Math.pow(s, 0.16)));
} 

document.querySelector(".windchill").textContent = windchill_factor;