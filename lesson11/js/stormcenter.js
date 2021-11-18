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
