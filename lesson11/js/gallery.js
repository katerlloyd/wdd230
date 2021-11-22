//#region Lazy Loading
const images = document.querySelectorAll('img[data-src]');

const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

function loadImages(image) {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {(image.removeAttribute('data-src'))};
}

if('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imageOptions);

    images.forEach((img) => { 
        imageObserver.observe(img); 
    });
} else {
    images.forEach((img) => { 
        loadImages(img); 
    });
}
//#endregion 

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