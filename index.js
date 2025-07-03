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


const grid = document.querySelector("#grid");
let gridSize = 16;

grid.style.display = "grid";

document.querySelector('#gridSize').addEventListener("input", (e) => {
  const output = document.querySelector("#sizeValue");
  gridSize = e.target.value;
  output.textContent = gridSize + " x " + gridSize;
  generateGrid()
});

function clearGrid() {
  grid.innerHTML = "";
}

function generateGrid() {
  clearGrid();
  for (let i = 0; i < gridSize; i++) {
    let newDiv = document.createElement(("div"));
    newDiv.style.background = "Red";
    grid.appendChild(newDiv);
  }
}