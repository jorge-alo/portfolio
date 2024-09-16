const inputOriginal = document.querySelector(".input-original");
const resultado = document.getElementById("resultado");
const inputRange = document.querySelector(".input-range");
const form = document.querySelector(".form");
const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


const palabraMayuscula = ()=>{
    
    let inputMayuscula = [...inputOriginal.value.toUpperCase()];
    cifrador(0,inputMayuscula);
}


const cifrador = (contador, inputMayuscula)=>{
if(contador == inputMayuscula.length)return;
inputOriginal.value = inputOriginal.value.substring(1);
const spanChar = document.createElement("span");
spanChar.style.color = "#0f0";
resultado.appendChild(spanChar);

animacion(spanChar).then(()=> {
    let letra = inputMayuscula[contador];
    spanChar.textContent = alfabeto.includes(letra) ? 
    alfabeto[(alfabeto.indexOf(letra) + parseInt(inputRange.value)) % alfabeto.length]:
    letra
    cifrador(contador + 1, inputMayuscula);
})
}

const animacion = (spanChar) => {
    let cont = 0;
    return new Promise(resolve =>{
        const interval = setInterval(()=>{
            spanChar.textContent = alfabeto[Math.floor(Math.random() * alfabeto.length)];
            cont++;
            if(cont == 3){
                clearInterval(interval);
                resolve();
            }
        }, 50)
    })
}
const submit = e =>{
    e.preventDefault();
    resultado.innerHTML = "";  
    palabraMayuscula();
    
}
form.onsubmit = submit;