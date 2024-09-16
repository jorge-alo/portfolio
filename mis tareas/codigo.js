const input = document.querySelector("input");
const boton = document.querySelector(".crear");
const listaTarea = document.querySelector(".container-tarea");



const agregarElementos = ()=>{
    if(input.value){
        //-------------Crear contenendor
        const contenedorTareas = document.createElement("div");
        contenedorTareas.classList.add("tarea");

        //-------------Texto ingresado por el usuario 
        const parrafo = document.createElement("p");
        parrafo.textContent = input.value;

       //---------crear contenedor de iconos
        const iconos = document.createElement("div");
        iconos.classList.add("iconos");


        //----------Crear elemento i(iconos)
        const check = document.createElement("i");
        check.classList.add("fa-solid", "fa-circle-check","icono-completar", "no-tachado");
        const eliminar = document.createElement("i");
        eliminar.classList.add("fa-regular", "fa-trash-can", "icono-eliminar");

        //------------agregar elementos i a contenedor de iconos
        iconos.appendChild(check);
        iconos.appendChild(eliminar);

        //agregar parrafo y contenedores de iconos a contenedor de tareas
        contenedorTareas.appendChild(parrafo);
        contenedorTareas.appendChild(iconos);
        
        //agregar contenedor de tareas a lista de tareas
        listaTarea.appendChild(contenedorTareas);
        
        //poner en blanco el input
        input.value = "";

        //---------------llamador de eventos
        check.addEventListener("click",()=>{            
    
                if(check.classList.contains("no-tachado")){
                    parrafo.classList.add("tachar");
                    check.classList.remove("no-tachado");
                    check.classList.add("tachado");
                    contenedorTareas.style.backgroundColor = "#000";
                }else{
                    parrafo.classList.remove("tachar");
                    check.classList.remove("tachado");
                    check.classList.add("no-tachado");
                    contenedorTareas.style.backgroundColor = "#3456ff"
                }
            
        });

        eliminar.addEventListener("click",()=>{
            const respuesta = confirm("¿Estas sefuro que quieres elimenar la tarea?");
            if(respuesta){
                listaTarea.removeChild(contenedorTareas);
            }
        })
}
}

boton.addEventListener("click",agregarElementos)


