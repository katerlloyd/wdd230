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
        console.log(jsonObject.organizations[i]);
        let div = document.createElement('div');
        div.classList.add('organization-div');

        let name = document.createElement('h3');

        if (jsonObject.organizations[i].logo != "") {
            let logo = document.createElement('img');
            logo.classList.add('directory-logo');
            logo.setAttribute('src', `images/${jsonObject.organizations[i].logo}`);
            logo.setAttribute('alt', `${jsonObject.organizations[i].name} logo`);
            logo.setAttribute('height', '65');
            logo.setAttribute('width', '65');

            div.appendChild(logo);
        } else {
            let placementdiv = document.createElement('div');
            placementdiv.classList.add('directory-logo');

            div.appendChild(placementdiv);
        }
        
        let address = document.createElement('p');
        address.textContent = jsonObject.organizations[i].address;

        let phone = document.createElement('p');
        phone.textContent = jsonObject.organizations[i].phone;

        if (jsonObject.organizations[i].website != "") {
            let website = document.createElement('a');
            website.setAttribute('href', jsonObject.organizations[i].website);
            website.textContent = jsonObject.organizations[i].name;

            name.appendChild(website);
            div.appendChild(name);
        } else {
            div.appendChild(name);
        }
        
        div.appendChild(address);
        div.appendChild(phone);

        document.querySelector('div.directory-info').appendChild(div);
    })
});
  //#endregion