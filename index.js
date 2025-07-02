function setActive(button) {
  if (currentActiveButton != null) {
    currentActiveButton.classList.remove("active");
  }
  
  button.classList.add("active");
  currentActiveButton = button;
}

let currentActiveButton = document.querySelector(".active");
const buttonsList = document.querySelectorAll("button");
buttonsList.forEach(button => button.addEventListener("click", () => {
  setActive(button);
}));

function generateGrid() {

}