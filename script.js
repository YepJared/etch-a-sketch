const gridContainer = document.querySelector(".container");

function createGridSquare() {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.addEventListener("mouseover", () => { 
        square.style.backgroundColor = "red";
    });
    return square;
}

function makeSquares() {
    for (let length = 0; length < 16; length++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");
        for (let width = 0; width < 16; width++) {
            const square = createGridSquare();
            row.appendChild(square);
        }
        gridContainer.appendChild(row);
    }
}

makeSquares();