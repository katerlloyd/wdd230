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
        let dt = forecast[i].dt_txt;
        dt = dt.substring(11, 24);
        console.log(dt);
        // if (dt === '18:00:00') {

        //     let flexcol = document.createElement('div');
        //     flexcol.classList.add('flex-col');
    
    
    
        //     document.querySelector('div.flex').appendChild(flexcol);
        // }
    }
  });



/* <div class="flex-col">
                        <span class="col-head">Wednesday</span>
                        <div class="weather-info">
                            <img src="images/partly-cloudy.png" alt="Sun behind clouds">
                            <span class="data">39&#176;F</span>
                        </div>
                    </div> */