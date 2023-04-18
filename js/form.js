import { cantidadCaracteres } from "./helpers.js";
document.getElementById("formulario").addEventListener("submit", comentar);

function comentar(event){
    event.preventDefault();
    let fechaActual = new Date();
    let dia = fechaActual.getDate();
    let año = fechaActual.getFullYear();
    let mes = fechaActual.getMonth()+1;
    let hora = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    if (minutos < 10) {
        minutos = '0' + minutos;
      } 
    let nombre = document.getElementById("email_input").value;
    let comentario = document.getElementById("txt-tarea").value;
    if (cantidadCaracteres(nombre, 4, 80)==true && cantidadCaracteres(comentario, 4, 100)==true){
        console.log("Cargando comentario...");
        let comentarioSection = document.getElementById("comentarios");
        let nuevoComentario = document.createElement("article"); 
        nuevoComentario.innerHTML = "<strong>" + nombre + `</strong> ${dia}/${mes}/${año} a las ${hora}:${minutos}<br>` + comentario + `<hr>`;
        comentarioSection.appendChild(nuevoComentario); 
        document.getElementById("formulario").reset();
    } else {
        alert("Las cantidades de caracteres no son correctas");
    }

}



/* let boton = document.getElementById("botonEnviar");
boton.addEventListener("click", comentar);
let sector = document.getElementById("sector");

function comentar(){
    let nombre = document.getElementById("nombre_input").value;
    let nNombre = document.createElement("p");
    nNombre.innerHTML = `${nombre}`;
    console.log(nNombre);
    sector.insertBefore(nNombre, boton);
} */

