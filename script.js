/* VARIEBLES */

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

/* FUNCTIONS*/

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function defaultColor() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function randomColor () {
  const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
  const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
  body.style.background = "linear-gradient(to right, " + "#" + randomColor1 + ", " + "#" + randomColor2 + ")";
  
}


window.onload = defaultColor();



/* EVENTS*/
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomColor);




