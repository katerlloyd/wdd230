//#region Town Events API Request
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL).then(function (response) {return response.json();}).then(function (jsonObject) {
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name === "Soda Springs") {
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

                town.appendChild(h3);
                town.appendChild(img);
                towncontainer.appendChild(town);

                document.querySelector('div.event-grid').appendChild(towncontainer);
            }
        }
    }
});
//#endregion