const visor = document.querySelector(".visor");
const btn = document.querySelectorAll(".btn");
let tamañoVisor = 13;

//-------funcion tocarNumero--------------------
const tocarNumero = (e)=>{  
    let num = e.target; 

    if(visor.textContent.length<12 || num.classList.contains("accion")){
    
//---------------agregar numero al visor----------    
        if(num.classList.contains("btn") && !num.classList.contains("accion")){
        visor.textContent += num.textContent;
    }
//----------limpiar el visor---------------------
    if(num.classList.contains("recet")){
        visor.textContent = "";
    }

//------------borrar el ultimo numero-----------

    //--------------borrado deficiente
    /*if(num.classList.contains("borrar")) {
        visor.textContent = visor.textContent.slice(0, -1);
    }*/

    //-------------borrado mejorado
    if(num.classList.contains("borrar")) {
        visor.textContent = visor.textContent.slice(0, -1);
    }
    
    if(num.classList.contains("igual")){
        try {
            visor.textContent = eval(visor.textContent);
        }catch (error){
            visor.textContent = "Error";
        }
    }
}
}
   
btn.forEach(boton=>{
boton.addEventListener("click", tocarNumero);
})