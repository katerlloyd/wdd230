//#region Responsive Layout Buttons
document.querySelector('.grid-button').addEventListener('click', () => {
    document.querySelector('.directory-info').classList.add('grid-layout');
    document.querySelector('.directory-info').classList.remove('list-layout');
}, false);

document.querySelector('.list-button').addEventListener('click', () => {
    document.querySelector('.directory-info').classList.add('list-layout');
    document.querySelector('.directory-info').classList.remove('grid-layout');
}, false);
//#endregion

//#region Create Directory
const directory = 'json/directory.json';

fetch(directory).then((response) => response.json()).then((jsonObject) => {

    //#region Organizations   
    Object.keys(jsonObject.organizations).forEach(i => {
        let div = document.createElement('div');
        div.classList.add('organization-div');

        let name = document.createElement('h3');
        name.textContent = jsonObject.organizations[i].name;
        
        let address = document.createElement('p');
        address.textContent = jsonObject.organizations[i].address;

        let phone = document.createElement('p');
        phone.textContent = jsonObject.organizations[i].phone;

        if (jsonObject.organizations[i].website != "" || jsonObject.organizations[i].website != undefined) {
            let website = document.createElement('a');
            website.setAttribute('href', jsonObject.organizations[i].website);

            div.appendChild(website);
            website.appendChild(name);
        } else {
            div.appendChild(name);
        }

        div.appendChild(address);
        div.appendChild(phone);

        if (jsonObject.organizations[i].logo != "" || jsonObject.organizations[i].website != undefined) {
            let logo = document.createElement('img');
            logo.setAttribute('src', jsonObject.organizations[i].logo);
            logo.setAttribute('alt', `${jsonObject.organizations[i].name} logo`);

            div.appendChild(logo);
        }

        document.querySelector('div.directory-info').appendChild(div);
    })
});
  //#endregion