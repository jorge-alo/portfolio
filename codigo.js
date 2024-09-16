
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






/*

const btnNext = document.querySelector(".btn-rigth");
const btnPrev = document.querySelector(".btn-left");
const track = document.querySelector(".portfolio__carruseles");
const slick = document.querySelectorAll(".carruseles__img");
const slickList = document.querySelector(".portfolio__carrusel");

const slickWidth = slick[0].offsetWidth;
btnPrev.onclick = ()=> move(1);
btnNext.onclick = ()=> move(2);
let currentIndex = 0;
let leftPosition;
function move(value) {
  const trackWidth = track.offsetWidth;
  const listWidth = slickList.offsetWidth;
  const maxPosition = trackWidth - listWidth;
  track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2) * -1);

  if(leftPosition < (trackWidth - listWidth) && value == 2) {
    console.log(leftPosition);
    console.log(trackWidth - listWidth);
    track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    currentIndex++;
  } if(leftPosition > 0 && value == 1){
    track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    currentIndex--;
  }

  const newLeftPosition = -1 * (slickWidth * currentIndex);

    // Asegurarse de que no se desborde
    if (newLeftPosition > -maxPosition) {
        track.style.left = `${newLeftPosition}px`;
    } else {
        track.style.left = `${-maxPosition}px`;
    }
}
*/

/*---------------------------carrusel------------------------ */


/*
    const btnPrev = document.getElementById("button-prev");
    const btnNext = document.getElementById("button-next");
    const slickList = document.getElementById("slick-list");
    const track = document.getElementById("track");
    const slick = document.getElementById('.slick');

    const slickWidth = slick[0].offsetWidth;

    btnPrev.onclick = ()=> move(1);
    btnNext.onclick = ()=> move(2);

    move(value) {
      const trackWidth = track.offsetWidth;
      const listWidth = slickList.offsetWidth;

      track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2) * -1);

      if(leftPosition < (trackWidth - listWidth) && value == 2) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
      }else if(leftPosition > 0 && value == 1){
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
      }
    }*/