console.log("Holiwis")

// Obtenemos un elemento del frontend (HTML)

let elementoDOM = document.getElementById('textoSaludo');
console.log(elementoDOM);

let contenidoDOM = document.querySelector('#contenido');
console.log(contenidoDOM);


const btnApretable = document.querySelector('#botonMagico');

const btnArraycito = document.getElementById('btnArraycito');

//Propiedades de los elementos
//InnerHTML -> Obtiene todo el contenido HTML del elemento
// InnerText -> Obtiene solo el texto del elemento

console.log(elementoDOM.innerHTML);
console.log(elementoDOM.innerText);

elementoDOM.innerHTML = "<h2>Chauchis</h2>"

contenidoDOM.innerHTML = "<h3>Este texto esta inyectado con JS</h3>"

//Metodos de los elementos
btnApretable.addEventListener('click', () => {
    alert('Holiwis');
    console.log("Funciono el boton")

    let dato = prompt("Ingresame tu nombre. No preguntes para que")
    console.log(dato);

    elementoDOM.style.fontFamily = "sans-serif"; 
    elementoDOM.style.color = "red"; //PARA LA TAREA
    elementoDOM.style.marginLeft = "2rem";

})

//Metodo de JS
// Almacenar datos en local para el usuario
let arraycito = [1,2,3];
console.log(arraycito)

//localStorage --> Almacenamiento local en el navegador de usuario
//LocalStorage --> Esta diseniado para guardar OBJETOS  
localStorage.setItem('arraycito',JSON.stringify(arraycito));
let datita = localStorage.getItem('arraycito');

//Mostramos los datos del locaalStorage     QUE SON UN STRING
console.log(datita);

//devolver la data a su tipo Original
let datitaArray = JSON.parse(datita);
console.log(datitaArray)

btnArraycito.addEventListener('click', () => {
    console.log("Estoy andando");
    arraycito.push(4);
    console.log(arraycito);

    localStorage.setItem('arraycito',JSON.stringify(arraycito));
    console.log(localStorage.getItem('arraycito'));

})



