//#region Membership Response
function selectResponse() {
	const selected = document.querySelector('#selected');
	const region = document.querySelector('#membership-level');
	selected.style.display = "block";
	selected.textContent = region.value;
}
//#endregion