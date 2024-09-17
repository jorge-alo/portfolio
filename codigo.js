
//-------------------header section----------------
const icono = document.querySelector(".icono");
const menuDesplegable = document.querySelector(".header-nav");
const itemNav = document.querySelectorAll(".item-nav");
icono.addEventListener("click", ()=>{
    menuDesplegable.classList.toggle("aparecer");
})
itemNav.forEach((item) =>{   
  item.addEventListener("click", ()=>{
  menuDesplegable.classList.toggle("aparecer");
})
})
//------------------carrusel section-----------------

const btnPrev = document.querySelector(".btn-left");
const btnNext = document.querySelector(".btn-rigth");
const track = document.querySelector(".portfolio__carruseles");
const slick = document.querySelectorAll(".carruseles__img");
const slickList = document.querySelector(".portfolio__carrusel");


let currentIndex = 0;
console.log(currentIndex);
btnPrev.onclick = () => move(1); // Mover hacia la izquierda
btnNext.onclick = () => move(2); // Mover hacia la derecha

function move(direction) {
    const slickWidth = slick[0].offsetWidth + 10;
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;
    const maxPosition = trackWidth - listWidth;
    
  
    if (direction === 2 && currentIndex < slick.length - 2) {
        // Mover a la derecha
        currentIndex++;
        console.log(currentIndex);
    }
    if (direction === 1 && currentIndex > 0) {
        // Mover a la izquierda
        console.log(currentIndex);
        if(currentIndex == slick.length -2){
          currentIndex = slick.length -3;
        }
        console.log(currentIndex);
        currentIndex--;
        
    }
    
  updatePosition(slickWidth, maxPosition);
  
}

const updatePosition = (slickWidth,maxPosition)=>{
  const newLeftPosition = -1 * (slickWidth * currentIndex);

  // Asegurarse de que no se desborde
  if (newLeftPosition > -maxPosition) {
      track.style.left = `${newLeftPosition}px`;
  } else {
      track.style.left = `${-maxPosition}px`;
  }
}

window.addEventListener("resize",()=>{
  const slickWidth = slick[0].offsetWidth + 10;
  const trackWidth = track.offsetWidth;
  const listWidth = slickList.offsetWidth;
  const maxPosition = trackWidth - listWidth;

  updatePosition(slickWidth,maxPosition);
})

/*----------------------color de fondo--------------- */
const colorFondo = document.querySelector(".color-fondo");
colorFondo.addEventListener("click",()=>{
  const interruptor = document.querySelector(".claro");
  interruptor.classList.toggle("oscuro")
    if(colorFondo.textContent == "Dark"){
      colorFondo.textContent = "Ligth";
    }else{
      colorFondo.textContent = "Dark";
    }
  const body = document.querySelector("body");
  body.classList.toggle("cambio-variables");
})

