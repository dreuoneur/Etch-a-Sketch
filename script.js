console.log("I'm the best")
let container = document.querySelector("#container")

for (let i=1; i<=256; i++) {
let div = document.createElement("div")
div.classList.add("mi-div")
container.appendChild(div)
}
  let isMouseDown = false;
  document.addEventListener('mousedown', function(event) {
  if (event.button === 0) {
    isMouseDown = true;
    }
    });
    document.addEventListener('mouseup', function() {
  isMouseDown = false;
    });
    const buttons = document.querySelectorAll("div");
    buttons.forEach((button) => {

  button.addEventListener("mouseover", function(e) {
   if (isMouseDown) {
   
  if (e.target.style.backgroundColor === "green") {
    e.target.style.backgroundColor = "lightgoldenrodyellow";
  } else {
    e.target.style.backgroundColor = "green";
  }}
  e.stopPropagation(button);

}

)
}
);




const boton = document.getElementById("boton");
let numero;

boton.addEventListener("click", function(e) {
  
  numero = prompt("Tu cuadricula es de 16*16, si quieres hacerla más grande elige un número (hasta 100)");

  let numDivs = Number(numero);
  
  if (!isNaN(numDivs) && numDivs > 0 && numDivs <= 100) {
    alterarNumeroCuadriculas(numDivs); 
  } else {
    alert("Por favor, ingresa un número válido entre 1 y 100.");
  }
});

function alterarNumeroCuadriculas(numDivs) {
  const container = document.getElementById('container');
  
 
  container.innerHTML = '';


  for (let i = 1; i <= numDivs * numDivs; i++) {
    let div2 = document.createElement("div2");
    div2.classList.add("mi-div2");
    container.appendChild(div2);
  }


  container.style.display = 'grid';
  container.style.gridTemplateColumns = `repeat(${numDivs}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${numDivs}, 1fr)`;
}
