document.querySelector('.bar-icon').addEventListener('click', () => {
    document.querySelector('.navigation').classList.toggle('responsive');
}, false);

window.onresize = () => {
    if (window.innerWidth > 675) document.querySelector('.navigation').classList.remove('responsive')
};

const date = new Date(Date.now());

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.querySelector("#current-date").textContent = date.toLocaleDateString('en-UK', options);

document.querySelector("#preston-copyright-year").textContent = date.getFullYear();

if (date.getDay() === 5) {
    let banner = document.createElement('div');
    banner.classList.add('friday-banner');
    banner.textContent = '🥞 Saturday | Preston Pancakes in the Park! 9:00 AM Saturday at the city park pavilion.';

    const main = document.querySelector('body');
    main.prepend(banner);
} else {
    bannerClass = document.querySelector('friday-banner');
    if (bannerClass != null) {
        banner.remove('friday-banner');
    }
}

const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=c3affef608fbd43350f108a8f72cddac';

fetch(apiURL2).then((response) => response.json()).then((jsonObject) => {
    console.log(jsonObject);
    let forecast = jsonObject.list;

    for (let i = 0; i < forecast.length; i++) {
        
        let forecastdate_string = forecast[i].dt_txt;
        let dt = forecastdate_string.substring(11, 24);
        let forecastdate = new Date(forecastdate_string);
        
        if (dt === '18:00:00') {

            let flexcol = document.createElement('div');
            flexcol.classList.add('flex-col');

            let col_head_span = document.createElement('span');
            col_head_span.classList.add('col-head');
            col_head_span.textContent = forecastdate.toLocaleString("default", {weekday: "long"});
            flexcol.appendChild(col_head_span);

            let weather_info_div = document.createElement('div');
            weather_info_div.classList.add('weather-info');
            flexcol.appendChild(weather_info_div);

            let img = document.createElement('img');
            img.setAttribute("src", `http://openweathermap.org/img/wn/${forecast[i].weather["0"].icon}@2x.png`);
            img.setAttribute("alt", `Icon depicting ${forecast[i].weather["0"].description} in Preston, Idaho`);
            weather_info_div.appendChild(img);

            let data_span = document.createElement('span');
            data_span.classList.add('data');
            data_span.textContent = Math.round(forecast[i].main.temp) + '\&#176;F';
            weather_info_div.appendChild(data_span);            
    
            document.querySelector('div.flex').appendChild(flexcol);
        }
    }
  });