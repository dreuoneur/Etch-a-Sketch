console.log("I'm the best")
let container = document.querySelector("#container")

for (let i=1; i<=256; i++) {
let div = document.createElement("div")
div.classList.add("mi-div")
container.appendChild(div)
}


