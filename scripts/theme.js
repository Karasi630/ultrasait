const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const btn__menu = document.querySelector(".btn__menu");

function choiceLight(){
	header.style.background = "white";
	footer.style.background = "white";
    btn__menu .style.background = "white";
	header.style.transition = "1s ease-out 0.5s";
	footer.style.transition = "1s ease-out 0.5s";
    btn__menu.style.transition = "1s ease-out 0.5s";
}
function choiceDark(){
	header.style.background = "black";
	footer.style.background = "black";
    btn__menu.style.background = "black";
    header.style.transition = "1s ease-out 0.5s";
    footer.style.transition = "1s ease-out 0.5s";
    btn__menu.style.transition = "1s ease-out 0.5s";
}