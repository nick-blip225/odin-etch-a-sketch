body = document.querySelector("body");
sketchPad = document.createElement("div");
sketchPad.setAttribute("id", "sketchPad");

document.body.appendChild(sketchPad);
//sketchPad.textContent = "Hello World"

for (let index = 0; index < 16; index++) {
    rowDiv = document.createElement("div");
    rowDiv.classList.add("rowDiv");
    sketchPad.appendChild(rowDiv);
    //rowDiv.textContent = "test"
    for (let index = 0; index < 16; index++) {
        columnDiv = document.createElement("div");
        columnDiv.classList.add("columnDiv");
        rowDiv.appendChild(columnDiv);
        //columnDiv.style.backgroundColor = generateRandomHexColor();
        //columnDiv.textContent = "More tests";
    }
}

function generateRandomHexColor() {
  // Generate a random number between 0 and 16777215 (0xFFFFFF)
  const randomNum = Math.floor(Math.random() * 16777215);

  // Convert the number to a hexadecimal string
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
    });
});


//columnDiv.style.backgroundColor = generateRandomHexColor();