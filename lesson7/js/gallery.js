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


//#region Responsive Navigation Bar
document.querySelector('.bar-icon').addEventListener('click', () => {
    document.querySelector('.navigation').classList.toggle('responsive');
}, false);

window.onresize = () => {
    if (window.innerWidth > 675) document.querySelector('.navigation').classList.remove('responsive')
};
//#endregion 


//#region Copyright Year and Current Date
const date = new Date(Date.now());

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.querySelector("#gallery-current-date").textContent = date.toLocaleDateString('en-UK', options);

document.querySelector("#gallery-copyright-year").textContent = date.getFullYear();
//#endregion 


//#region Local Storage
const daysSinceLastVisit = document.querySelector('#gallery-last-visited');

function setDateLastVisited() {
    localStorage.setItem('dateLastVisited', date);
}

function getDateLastVisited(daysSinceLastVisit) {
    try {
        const milisecondsToDays = 8640000;
        const lastVisit = localStorage.getItem('dateLastVisisted') || date;
        const days = Math.round((lastVisit - date) / milisecondsToDays);

        if (days > 0) {
            daysSinceLastVisit.textContent = days;
        } else {
            daysSinceLastVisit.textContent = 0;
        }
    }
    catch (er) {
        daysSinceLastVisit.textContent = 0;
    }
}

getDateLastVisited(daysSinceLastVisit)
setDateLastVisited()
//#endregion 