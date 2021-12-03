//#region Weather API
const weatherapiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=43.6228&lon=-116.3092&units=imperial&appid=c3affef608fbd43350f108a8f72cddac';

fetch(weatherapiURL).then((response) => response.json()).then((jsonObject) => {
    
    const temperature = document.querySelector('.temperature');
    temperature.textContent = Math.round(jsonObject.current.temp);

    const condition = document.querySelector('.condition');
    condition.textContent = jsonObject.current.weather[0].description;

    const humidity = document.querySelector('.humidity');
    humidity.textContent = jsonObject.current.humidity;

    //#region Forecast
    for (let i = 0; i < 3; i++) {
        
        let forecastdate = new Date(jsonObject.daily[i].dt * 1000);

        let flexcol = document.createElement('div');
        flexcol.classList.add('flex-col');

        let col_head_span = document.createElement('span');
        col_head_span.classList.add('col-head');
        col_head_span.textContent = forecastdate.toLocaleString("default", {weekday: "short"});
        flexcol.appendChild(col_head_span);

        let weather_info_div = document.createElement('div');
        weather_info_div.classList.add('weather-info');
        flexcol.appendChild(weather_info_div);

        let img = document.createElement('img');
        img.setAttribute("src", `images/${jsonObject.daily[i].weather[0].icon}.png`);
        img.setAttribute("alt", `Icon depicting ${jsonObject.daily[i].weather[0].description} in Boise, Idaho`);
        img.setAttribute('loading', 'lazy');
        weather_info_div.appendChild(img);

        let data_span = document.createElement('span');
        data_span.classList.add('data');
        data_span.innerHTML = `${Math.round(jsonObject.daily[i].temp.day)}&#176;F`;
        weather_info_div.appendChild(data_span);            

        document.querySelector('div.flex').appendChild(flexcol);
    }
    //#endregion

    //#region Weather Alerts
    for (let i = 0; i < jsonObject.alerts.length; i++) {

        if (jsonObject.alerts) {
            let banner = document.createElement('div');
            banner.classList.add('weather-alert');

            let button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.innerHTML = "&#10799;";
            button.classList.add('close-button');
            button.addEventListener("click", () => {
                banner.remove('weather-alert');
            })

            let title = document.createElement('h2');
            title.textContent = jsonObject.alerts[i].event;

            let description = document.createElement('p');
            description.textContent = jsonObject.alerts[i].description;

            banner.appendChild(button);
            banner.appendChild(title);
            banner.appendChild(description);
        
            const body = document.querySelector('body');
            body.prepend(banner);

        } else {
            bannerClass = document.querySelector('weather-alert');
            if (bannerClass != null) {
                banner.remove('weather-alert');
            }
        }
    }
    //#endregion
  });
  //#endregion