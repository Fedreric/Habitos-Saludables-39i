const articulo = document.getElementById('articulo');
const contenedor = document.createElement('div');

function agregarSponsor(){
    contenedor.setAttribute('onclick','quitarSponsor()')
    let sponsor = `
    <div class="my-5 text-end">
    <button type="button" class="btn bi bi-x-square-fill text-danger fs-4" id="cerrarPublicidad"></button>
    <img class= "img-fluid" src="../img/Sponsor.png">
    </div>`
    
    contenedor.innerHTML = sponsor;

    articulo.appendChild(contenedor);
}

setTimeout(agregarSponsor,4000);

function quitarSponsor(){
    const quitarSponsor = document.getElementById('cerrarPublicidad');
    quitarSponsor.addEventListener('click',articulo.removeChild(contenedor))
}