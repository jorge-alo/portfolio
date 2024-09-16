const container = document.querySelector(".flex-container");
const color = document.querySelector(".color");
const boton = document.querySelector("button");


const num = "0123456789ABCDEF"; 
let nuevoColor = "#";
boton.addEventListener("click",()=>{
    let nuevoColor = "#";
    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random()*16);
       nuevoColor +=  num[random];
    }

    color.textContent = nuevoColor;
    container.style.backgroundColor = nuevoColor;
})