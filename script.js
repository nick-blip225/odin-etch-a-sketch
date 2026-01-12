body = document.querySelector("body");
sketchPad = document.createElement("div");
sketchPad.setAttribute("id", "sketchPad");
gridResetButton = document.createElement("button");

document.body.appendChild(gridResetButton);
document.body.appendChild(sketchPad);

let gridNum = getGridNum();

function getGridNum() {
    let num = 1;
    do {
        num = prompt("Please enter a number less than 100. ")
    } while (isNaN(num) || num > 100 || num <= 0);
    return num;
};

gridResetButton.textContent = "Click to change the number of cells";
gridResetButton.addEventListener("click", () => {
    window.location.reload();
});

for (let index = 0; index < gridNum; index++) {
    rowDiv = document.createElement("div");
    rowDiv.classList.add("rowDiv");
    sketchPad.appendChild(rowDiv);
    for (let index = 0; index < gridNum; index++) {
        columnDiv = document.createElement("div");
        columnDiv.classList.add("columnDiv");
        columnDiv.style.opacity = "0.0"
        rowDiv.appendChild(columnDiv);
    }
}

function generateRandomHexColor() {
  const randomNum = Math.floor(Math.random() * 16777215);

  let hexColor = randomNum.toString(16);

  // Pad the string with leading zeros if it's too short (must be 6 characters)
  // `padStart(6, '0')` ensures a length of 6 characters, using '0' for padding
  hexColor = hexColor.padStart(6, '0');

  // Prepend the hash symbol
  return `#${hexColor.toUpperCase()}`;
}

const cells = document.querySelectorAll(".columnDiv");

cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = generateRandomHexColor();
        cell.style.opacity = Math.min(parseFloat(cell.style.opacity) + 0.1, 1.0)
    });
});


//columnDiv.style.backgroundColor = generateRandomHexColor();