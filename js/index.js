let date = new Date;

let currentYear = date.getFullYear();
document.querySelector("#currentYear").innerHTML = currentYear;

let dateLastModified = document.lastModified;
document.getElementById("dateLastUpdated").textContent = dateLastModified;