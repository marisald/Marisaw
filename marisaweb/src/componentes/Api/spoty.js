/*const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/search/',
  params: {
    q: '<REQUIRED>',
    type: 'multi',
    offset: '0',
    limit: '10',
    numberOfTopResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': 'e0420519c3mshb8f67dd95afb7adp1ac4abjsn235a09d91c07',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}*/
/*
const btnAnterior=document.getElementById("btnAnterior");
const btnSiguiente=document.getElementById("btnSiguiente");
let pagina=1; //Variable inicial de la pagina y no me traiga negativas
//evaluamos con el valor 200 si esta todo ok con la api
const cargarPeliculas=async()=>{
try{
const repuesta=await fetch("spotify23.p.rapidapi.comMX&page=${pagina}");
}
catch (error){
    console.log(error.message)
}// que pasa con ese error que hago*/
const url = 'https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e0420519c3mshb8f67dd95afb7adp1ac4abjsn235a09d91c07',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}