const articulos = ["disciplina", "ejercitacion", "habitos", "journaling", "mindfulness"];
const contenedorArticulos = document.getElementById("contenedorArticulos");

function filterArray() {
    const searchTerm = document.getElementById("buscador").value.toLowerCase();
    const arrayFiltrado = articulos.filter(item =>
        item.toLowerCase().includes(searchTerm)
    );
    renderList(arrayFiltrado);
}

function renderList(arrayFiltrado) {
    console.log('array desde renderlist: '+ arrayFiltrado);
    contenedorArticulos.innerHTML = '';
    
    if(arrayFiltrado.length > 0) {
        arrayFiltrado.forEach(item => {
            contenedorArticulos.innerHTML += `
        <aside class="col-md-6 col-lg-4 card text-bg-light my-3 p-0">
            <a href="pages/${item}.html">
            <img src="img/${item}.png" alt="banner1" class="w-auto">
            <div class="card-img-overlay tituloCard ">
              <h5 class="card-title">${item.toUpperCase()}</h5>
            </div>
        </aside>`;
        });
    }else{
        contenedorArticulos.innerHTML = `<p class="text-center fs-2 fw-light fst-italic">No se encontraron articulos asociados con: ${document.getElementById("buscador").value}</p>`;
    }

}