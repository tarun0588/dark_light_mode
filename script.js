let body = document.body;
let toggleContainer = document.querySelector("#toggle-container");
let circle = document.querySelector("#circle");

function toggleDarkMode() {
  circle.classList.toggle("slide")
  body.classList.toggle("dark")
}

toggleContainer.addEventListener("click",toggleDarkMode)