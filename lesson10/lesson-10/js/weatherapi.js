const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=c3affef608fbd43350f108a8f72cddac';

fetch(apiURL).then((response) => response.json()).then((jsonObject) => {
    console.log(jsonObject);
    
    const current_temp = document.querySelector('#current-temp');
    current_temp.textContent = jsonObject.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.weather[0].icon + '.png';
    const desc = jsonObject.weather[0].description;  
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);
  });  