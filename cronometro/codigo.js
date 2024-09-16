const cronometro = document.querySelector(".cronometro");
const playStop = document.querySelector(".iniciar");
const actualizar = document.querySelector(".actualizar");
const pausar = document.querySelector(".pausar");

let [horas, minutos, segundos] = [0,0,0];
let intervaloTiempo;
let estadoCronometro = "pausado";

const tiempo = ()=>{
    segundos++;
   
    if(segundos/60 == 1){
        minutos++;
        segundos = 0;      
    }
    if(minutos/60 == 1){
        horas++;
        minutos =0;      
    }
    let formatoSegundos = cambiarFormato(segundos);
    let formatoMinutos = cambiarFormato(minutos);
    let formatoHoras = cambiarFormato(horas);

    cronometro.textContent = `⏱${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;

}

const cambiarFormato = (intervalo)=>{
    if(intervalo<10){
       return intervaloTiempo = `0${intervalo}`;
    }else{
        return intervaloTiempo = intervalo;
    }
    
}
let frenar;
playStop.addEventListener("click", ()=>{
    if(estadoCronometro == "pausado"){
     frenar = setInterval(tiempo,1000);
    playStop.classList.remove("iniciar");
    playStop.classList.add("pausar");
    playStop.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    estadoCronometro = "andando";
    }else{
       clearInterval(frenar);
        playStop.classList.remove("pausar");
        playStop.classList.add("iniciar");
        playStop.innerHTML = `<i class="fa-solid fa-play"></i>`;
        estadoCronometro = "pausado";
    }
})

actualizar.addEventListener("click",()=>{
    clearInterval(frenar);
    segundos = 0;
    minutos = 0;
    horas = 0;
    cronometro.textContent = "⏱00:00:00"
      
    playStop.innerHTML = `<i class="fa-solid fa-play"></i>`;            
           playStop.classList.remove("pausar");
           playStop.classList.add("iniciar");           
           estadoCronometro = "pausado";
           
    })


