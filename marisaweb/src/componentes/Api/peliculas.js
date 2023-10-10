const btnAnterior=document.getElementById("btnAnterior");
const btnSiguiente=document.getElementById("btnSiguiente");
let pagina=1; //Variable inicial de la pagina y no me traiga negativas
//evaluamos con el valor 200 si esta todo ok con la api
btnAnterior.addEventListener("click",()=>{
    if (pagina>1){
        pagina-=1;
        cargarPeliculas();
    }

});
btnSiguiente.addEventListener("click",()=>{
    if (pagina<1000) {
        pagina+=1;
        cargarPeliculas();
    }

});


const cargarPeliculas=async()=>{
try{
const repuesta=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=${pagina}`);
if (repuesta.status===200){
    const datos=await repuesta.json(); //covertir metodo jason la api trae 20 peliuclas por pagina y son  1000 datos maso menos
    let peliculas="";//peliculas nos almacena todas las peliculas almacenando todas las cajitas pelicula es la variable de iteraccion del for each
    datos.results.forEach(pelicula =>{
        peliculas +=`<div class="pelicula">
         <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
        <h3 class="titulo">${pelicula.title}</h3>
        <p>${pelicula.overview}</p>
        </div>
        `;
    }) //conectar la info de la api  y recorrer 
    // aca selecciono contenedor y mando la informacion
document.getElementById("contenedor").innerHTML=peliculas;
}
}
catch (error){
    console.log(error.message)
}// que pasa con ese error que hago
}
cargarPeliculas();