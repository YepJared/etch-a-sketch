const DEFAULT_GRID_SIZE = 16;
const MIN_GRID_SIZE = 1;
const MAX_GRID_SIZE = 100;

const gridContainer = document.querySelector(".container");

function createGridSquare() {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "red";
    });
    return square;
}

function makeSquares(size = DEFAULT_GRID_SIZE) {
    for (let length = 0; length < size; length++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");

        for (let width = 0; width < size; width++) {
            const square = createGridSquare();
            row.appendChild(square);
        }

        gridContainer.appendChild(row);
    }
}

function addButtonListener() {
    const resetButton = document.querySelector(".reset");

    resetButton.addEventListener("click", () => {
        const newSize = Number(prompt("Pick a new size for the grid."));
        console.log(newSize)

        if (MIN_GRID_SIZE <= newSize && newSize <= MAX_GRID_SIZE) {
            gridContainer.replaceChildren();
            makeSquares(newSize);
        } else {
            alert(`Please pick a grid size between ${MIN_GRID_SIZE} and ${MAX_GRID_SIZE}.`)
        }
    });
}

function init() {
    makeSquares();
    addButtonListener();
}

init();
