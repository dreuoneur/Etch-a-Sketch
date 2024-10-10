console.log("I'm the best")
let container = document.querySelector("#container")

for (let i=1; i<=256; i++) {
let div = document.createElement("div")
div.classList.add("mi-div")
container.appendChild(div)
}
const buttons = document.querySelectorAll("div");


buttons.forEach((button) => {

  button.addEventListener("click", function(e) {
   
   
  if (e.target.style.backgroundColor === "blue") {
    e.target.style.backgroundColor = "lightcoral";
  } else {
    e.target.style.backgroundColor = "blue";
  }
  e.stopPropagation(button);

}

)
}
);

