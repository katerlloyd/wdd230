//#region Responsive Hero Image
window.onresize = () => {
    if (window.innerWidth > 689) {
        document.querySelector('.hero-img').setAttribute('src', 'images/hero.jpg');
        document.querySelector('.hero-img').setAttribute('height', '400');
        document.querySelector('.hero-img').setAttribute('width', '1375');
    } else if (window.innerWidth <= 689) {
        document.querySelector('.hero-img').setAttribute('src', 'images/hero-small.jpg');
        document.querySelector('.hero-img').setAttribute('height', '400');
        document.querySelector('.hero-img').setAttribute('width', '400');
    }
};
//#endregion