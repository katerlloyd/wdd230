//#region Responsive Navigation Bar
document.querySelector('.bar-icon').addEventListener('click', () => {
    document.querySelector('.navigation').classList.toggle('responsive');
}, false);

window.onresize = () => {
    if (window.innerWidth > 675) document.querySelector('.navigation').classList.remove('responsive')
};
//#endregion

//#region Copyright Year and Last Modified Date
const date = new Date();

document.querySelector("#copyright-year").textContent = date.getFullYear();

document.getElementById("last-modified-date").textContent = document.lastModified;
//#endregion