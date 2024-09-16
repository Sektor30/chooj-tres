
const buscador = document.querySelector('.busqueda');
const textoBusqueda = document.querySelector('#busqueda');
const container = document.querySelector('#container');



function filtrar (e){
    e.preventDefault()

    container.innerHTML = ""

    let filtro = peliculas

    
        
    if(textoBusqueda.value){
        filtro = filtro.filter(peliculas => peliculas.nombre.toLowerCase().includes(textoBusqueda.value.toLowerCase()) );
        mostrarResults(filtro)
    }
    else{
        mostrarResults(filtro)
    }

    textoBusqueda.value = ""


}

buscador.addEventListener('submit' ,filtrar)