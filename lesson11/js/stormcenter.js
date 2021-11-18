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
document.querySelector("#stormcenter-current-date").textContent = date.toLocaleDateString('en-UK', options);

document.querySelector("#stormcenter-copyright-year").textContent = date.getFullYear();
//#endregion 

//#region Storm Severity
function toggleRating(rating) {
    document.getElementById("value").innerHTML = rating;
}
//#endregion

//#region Region Response
function selectResponse() {
	const selected = document.querySelector('#selected');
	const region = document.querySelector('#storm-region');
	selected.style.display = "block";
	selected.textContent = region.value;
}
//#endregion
