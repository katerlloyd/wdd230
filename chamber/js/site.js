//#region Responsive Navigation Bar
document.querySelector('.bar-icon').addEventListener('click', () => {
    document.querySelector('.navigation').classList.toggle('responsive');
}, false);

window.onresize = () => {
    if (window.innerWidth > 675) document.querySelector('.navigation').classList.remove('responsive')
};
//#endregion

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

//#region Copyright Year and Last Modified Date
const date = new Date();

document.querySelector("#copyright-year").textContent = date.getFullYear();

document.getElementById("last-modified-date").textContent = document.lastModified;
//#endregion