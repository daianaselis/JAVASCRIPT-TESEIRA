let pagina = 1; //aqui declaro una variable que se llama pagina que funciona como contador que se puede ir incrementando o decrementando dependiendo si va hacia adelante o hacia atras
const btnAnterior = document.getElementById('btnAnterior');//aqui declaro una constante llamada botonAnterior para que yo pueda acceder a el desde aqui js al html con el document.getelementById
const btnSiguiente = document.getElementById('btnSiguiente');//Aqui lo mismo pero para delante jaja

btnSiguiente.addEventListener('click', () => {//aqui uso el addevelistener  con una funcion de flecha que esta esperando que haga click en el boton para ir hacia adelante
	if(pagina < 1000){
		pagina += 1;
		cargarPeliculas();
	}
});
btnAnterior.addEventListener('click', () => {//aqui uso el addevelistener  junto con una funcion de flecha que esta esperando que haga click en el boton para ir hacia atras
	if(pagina > 1){
		pagina -= 1;
		cargarPeliculas();
	}
});

const cargarPeliculas = async() => { //aqui uso una funcion de flecha asincrona con un try catch 
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`); //aqui declaro una constante y dentro de ella llamo un fetch para traer lo que yo necesito de la api 

		console.log(respuesta);

		// Si la respuesta es correcta me devuelve un status 200 que significa que todo esta correcto
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			let peliculas = '';
			for(let pelicula of datos.results){
				peliculas += `
					<a href="pelicula.html?pelicula=${pelicula.id}">
						<div class="pelicula" id="${pelicula.id}">
							<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
							<h3 class="titulo">${pelicula.title}</h3>
						</div>
					</a>
				`;
			}

			document.getElementById('contenedor').innerHTML = peliculas;

		} else if(respuesta.status === 401){
			console.log('Pusiste la llave mal');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso. El status es: ' + respuesta.status);
		}

	} catch(error){
		console.log(error);
	}

}

cargarPeliculas();