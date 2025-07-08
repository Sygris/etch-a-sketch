const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "#343a40";
const DEFAULT_ACTIVE_BUTTON = document.querySelector("#colorMode");
let currentColor = DEFAULT_COLOR;
let gridSize = DEFAULT_SIZE;

const MODES = {
  COLOR: "color",
  RAINBOW: "rainbow",
  ERASER: "eraser"
}

let currentMode = MODES.COLOR;

let isMouseDown = false;
document.body.onmousedown = () => (isMouseDown = true);
document.body.onmouseup = () => (isMouseDown = false);

function setActive(button) {
  if (currentActiveButton != null) {
    currentActiveButton.classList.remove("active");
  }

  button.classList.add("active");
  currentActiveButton = button;
}

function setMode() {
  switch (currentActiveButton.id) {
    case MODES.COLOR:
      currentMode = MODES.COLOR;
      break;
    case MODES.RAINBOW:
      currentMode = MODES.RAINBOW;
      break;
    case MODES.ERASER:
      currentMode = MODES.ERASER;
      break;
    default:
      break;
  }
}

let currentActiveButton = document.querySelector(".active");
const buttonsList = document.querySelectorAll(".colorMode");
buttonsList.forEach(button => button.addEventListener("click", () => {
  setActive(button);
  setMode();
}));

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  clearGrid();
  generateGrid();
});

let isBorderOn = true;
const borderCheckbox = document.querySelector("#border");
borderCheckbox.addEventListener("click", toggleBorder);

function toggleBorder() {
  isBorderOn = !isBorderOn;

  const listOfChildren = grid.children;
  const arrayOfChildren = [...listOfChildren];

  if (isBorderOn) {
    arrayOfChildren.forEach(element => element.classList.add("border"));
  }
  else {
    arrayOfChildren.forEach(element => element.classList.remove("border"));
  }
}

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
    
    newDiv.addEventListener("mousedown", paintGridElement);
    newDiv.addEventListener("mouseover", paintGridElement);

    grid.appendChild(newDiv);
  }
}

function paintGridElement(event) {
  if (event.type === "mouseover" && !isMouseDown) 
    return;

  switch (currentMode) {
    case MODES.COLOR:
      event.target.style.backgroundColor = currentColor;
      break;
    case MODES.RAINBOW:
      event.target.style.backgroundColor = `rgb(${generateRandomColor()})`;
      break;
    case MODES.ERASER:
      event.target.style.backgroundColor = "#FEFEFE";
    default:
      break;
  }
}

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return r + ", " + g + ", " + b;
}

window.onload = () => {
  generateGrid();
};