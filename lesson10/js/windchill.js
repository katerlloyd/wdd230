const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=c3affef608fbd43350f108a8f72cddac';

fetch(apiURL).then((response) => response.json()).then((jsonObject) => {
    console.log(jsonObject);
    
    const temperature = document.querySelector('.temperature');
    temperature.textContent = jsonObject.main.temp;

    const currently = document.querySelector('.currently');
    currently.textContent = jsonObject.weather[0].description;

    const windspeed = document.querySelector('.windspeed');
    windspeed.textContent = jsonObject.wind.speed;

    const humidity = document.querySelector('.humidity');
    humidity.textContent = jsonObject.main.humidity;

    let windchill_factor = 'N/A';

    if ((temperature <= 50) && (windspeed > 3)) {
        windchill_factor = Math.round(35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, 0.16)) + ((0.4275 * temperature) * Math.pow(windspeed, 0.16))) + '\&#176;F';
    } 
    
    document.querySelector('.windchill').textContent = windchill_factor;
  });