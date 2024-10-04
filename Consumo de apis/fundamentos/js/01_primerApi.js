'use strict'



//Consumo de api para mostrar un gato aleatorio
/*
fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img =document.querySelector('img');
        img.src=data[0].url
    })
*/

function obtenerUrlFoto(){
    const URL="https://api.thecatapi.com/v1/images/search";
    var rutaImagen="";
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img =document.querySelector('img');
        img.src=data[0].url
    })
}

//Obteniendo un gato por medio de un boton
var btnGenerar =document.getElementById('btnGeneraGato');
btnGenerar.addEventListener('click',e=>{
    obtenerUrlFoto();
})