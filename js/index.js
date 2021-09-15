let date = new Date;

let currentYear = date.getFullYear();
document.getElementById("currentYear").textContent = currentYear;

let dateLastModified = document.lastModified;
document.getElementById("dateLastUpdated").textContent = dateLastModified;