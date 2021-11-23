//#region Friday Banner
const currentdate = new Date(Date.now());

if (currentdate.getDay() === 5) {
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
//#endregion

//#region Town Events API Request
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL).then(function (response) {return response.json();}).then(function (jsonObject) {
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name === "Preston") {
            const event = towns[i].events
            for (let j = 0; j < event.length; j++ ) {
                let towncontainer = document.createElement('div');
                towncontainer.classList.add('town-event');
                let town = document.createElement('section');
                town.classList.add('event-data');
                let h3 = document.createElement('h3');
                let img = document.createElement('img');

                h3.textContent = event[j];
                img.setAttribute('src', `images/${j}${towns[i].photo}`);
                img.setAttribute('alt', `${towns[i].name} ${event[j]} Event`);
                img.setAttribute('loading', 'lazy');

                town.appendChild(h3);
                town.appendChild(img);
                towncontainer.appendChild(town);

                document.querySelector('div.event-grid').appendChild(towncontainer);
            }
        }
    }
});
//#endregion