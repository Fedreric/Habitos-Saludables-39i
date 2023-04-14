const articulo = document.getElementById('articulo');
console.log(articulo);

function agregarSponsor(){
    let contenedor = document.createElement('div');

    let sponsor = `
    <div class="my-5">
    <img class= "img-fluid" src="../img/Sponsor.png">
    </div>`
    
    contenedor.innerHTML = sponsor;

    articulo.appendChild(contenedor);
}

setTimeout(agregarSponsor,4000);