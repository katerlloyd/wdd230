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