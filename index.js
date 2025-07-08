const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "#343a40";
const DEFAULT_ACTIVE_BUTTON = document.querySelector("#colorMode");
let currentColor = DEFAULT_COLOR;
let gridSize = DEFAULT_SIZE;

function setActive(button) {
  if (currentActiveButton != null) {
    currentActiveButton.classList.remove("active");
  }
  
  button.classList.add("active");
  currentActiveButton = button;
}

function setMode() {
  switch (currentActiveButton) {
    case value:
      
      break;
  
    default:
      break;
  }
}

let currentActiveButton = document.querySelector(".active");
const buttonsList = document.querySelectorAll("button");
buttonsList.forEach(button => button.addEventListener("click", () => {
  setActive(button);
}));

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  clearGrid();
  generateGrid();
  setActive(DEFAULT_ACTIVE_BUTTON);
});

const colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener("input", (e) => {
  currentColor = e.target.value;
})

const grid = document.querySelector("#grid");
document.querySelector('#gridSize').addEventListener("input", (e) => {
  const output = document.querySelector("#sizeValue");
  gridSize = e.target.value;
  output.textContent = gridSize + " x " + gridSize;

  generateGrid();
}); 

function clearGrid() {
  grid.innerHTML = "";
}

function generateGrid() {
  clearGrid();

  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplaterows = `repeat(${gridSize}, 1fr)`;
  
  for (let i = 0; i < gridSize * gridSize; i++) {
    let newDiv = document.createElement(("div"));
    newDiv.classList.add("grid-element");
    grid.appendChild(newDiv);

    newDiv.addEventListener("mousedown", () =>{
      newDiv.style.backgroundColor = currentColor;
    });
  }
}

window.onload = () => {
  generateGrid();
};