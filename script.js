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
        //columnDiv.textContent = "More tests";
    }
}