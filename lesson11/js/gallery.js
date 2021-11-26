//#region Local Storage
const gallerydate = Date.now();

function setDateLastVisited() {
    localStorage.setItem('dateLastVisited', gallerydate);
}

function getDateLastVisited() {
    const daysSinceLastVisit = document.querySelector('#gallery-last-visited');
    try {
        const milisecondsToDays = 8640000;
        const lastVisit = localStorage.getItem('dateLastVisited');
        
        if (lastVisit === null) {
            daysSinceLastVisit.textContent = "Welcome!";
        } else {
            const days = Math.round((gallerydate - lastVisit) / milisecondsToDays);
            if (days > 0) {
                daysSinceLastVisit.textContent = days;
            } else {
                daysSinceLastVisit.textContent = 0;
            }
        }
    }
    catch (er) {
        daysSinceLastVisit.textContent = 0;
    }
}

getDateLastVisited()
setDateLastVisited()
//#endregion 