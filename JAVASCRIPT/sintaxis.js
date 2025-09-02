// comentarios -- Deshabilitar lineas

/*

Multilineas

*/

// Impresiones en consolas

console.log("Holiwis")

//Variables y constantes

let variable = "Smith";
//var variablecita = "SM";

const numero = 3.1416
console.log(numero)

//concatenacion -- Suma de algo a un STRING

console.log("Hola" + variable)

console.log("5"+ 5)

// Cambiar los tipos de valores o variables
//Parse

let cinco = parseInt ("5");
console.log(cinco+ 5);

//Operadores Matemáticos

let suma = 5 + 5;
let resta = 10 - 5;
let division = 4 / 2;
let multiplicacion = 2 * 2;
let residuo = 10 % 2;

//Operdores Logicos
//OR || AND &&  NOT !

//Operdadores de comparacion
//Igualdad, desigual
let igualdad = "5" == 5;
console.log(igualdad)

let igualdadestricta = "5" ===5;
console.log(igualdadestricta)

let desigual = "5" != 5;
let desigualdadEstricta = "5" !== 5

// Operadores de comparacion numericas
let mayorQue = 5>3;
let menorQue = 5 < 3;
let mayorIgual = 5 >= 3;
let menorIgual = 5 <= 3;


//Estructuras de COntrol o condicionales

if(false) {
    console.log("Esto Funciona");
}else if (true){
    console.log("Aca no llega");
}

switch(opcion){
    case 1:
        console.log("Sen comunico con Administracion")
        break;
        default:
            console.log("No es una opcion que manejemos")
}

//Ternario

condicion ? "caso true" : "caso false";

//Estructuras Repititivas o bucles (loops)


while(contador < 5 && contador > 0){
    console.log(contador);
    contador++;
}

contador = 0;
do{
    console.log(contador);
    contador++;
} while(contador <5 && contador > 0);




for (let i = 0; i < 5; i++){
    console.log(i)
}

//Funciones
function saludar (){
    console.log("Holiwis");
}

//Funciones anonimas

const funcioncita = function () {console.log("Soy aanonima")

}

funcioncita();

//Fat Arrow Functions Funciones Flechas

const funcionFlecha = () => { console.log("Soy anonima") };
funcionFlecha();