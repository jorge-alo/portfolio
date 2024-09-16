const principal = document.querySelector(".container-principal");
const rgbRojo = document.getElementById("rojo");
const rgbVerde = document.getElementById("verde");
const rgbAzul = document.getElementById("azul");
const parrafoRojo = document.querySelector(".parrafo-rojo");
const parrafoVerde = document.querySelector(".parrafo-verde");
const parrafoAzul = document.querySelector(".parrafo-azul");

let rojo = rgbRojo.value;
let verde = rgbVerde.value;
let azul = rgbAzul.value;

parrafoRojo.textContent = rojo;
parrafoVerde.textContent = verde;
parrafoAzul.textContent = azul;

const rgb = (rojo,verde,azul)=>{
    principal.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}


rgbRojo.addEventListener("change",(e)=>{
    rojo = e.target.value;
    parrafoRojo.textContent = rojo;
    rgb(rojo, verde, azul);
    
})

rgbVerde.addEventListener("change",(e)=>{
    verde = e.target.value;
    parrafoVerde.textContent = verde;
    rgb(rojo, verde, azul);
    
})
rgbAzul.addEventListener("change",(e)=>{
    azul = e.target.value;
    parrafoAzul.textContent = azul;
    rgb(rojo, verde, azul);
    
})