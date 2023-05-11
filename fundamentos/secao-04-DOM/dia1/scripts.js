const header = document.getElementById("header-container");
header.style.background = "lightgreen";

const emergency = document.getElementsByClassName("emergency-tasks")[0];
emergency.style.background = "lightpink";


const titles = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < titles.length; index += 1)
    titles[index].style.background = "purple";

const noEmergency = document.getElementsByClassName("no-emergency-tasks")[0];
noEmergency.style.background = "yellow";

const titleNo = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < titleNo.length; index += 1){
    titleNo[index].style.backgroundColor = "grey";
}
const footer = document.getElementById("footer-container");
footer.style.background = "darkgreen";