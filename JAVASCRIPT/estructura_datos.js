// Estructura de datos

//Datos Primitivos --> string, integer, float, double, bool, null
// UNDIFINED --> VACIO PARA EL SISTEMA
let vacio;
console.log(vacio)

vacio = "string re standadr";
console.log(vacio)


// Objetos
// Objetos literaales
//Ejemplo: Formulario con daros de Usuario

let perro = {
    //Clave : valor
    nombre: "Chochan",
    edad: 4
}

let perro2 = {
    //Clave : valor
    nombre: "Pepito",
    edad: 18
}
// Mostrar una caracteristica del perro
console.log(perro.nombre);

//POO --> Programacion Orientada a Objetos
//Forma de escribir el codigo --> Reutilizable

//  Clases y objeto
//Clase --> Molde
// Objeto --> Instancia de una clase *Creamos algo en base a

class Persona {
    //Caracteristicas de esa clase --> Atributos / Propiedades
    //Constructor --> METODOS PARA CREAR OBJETOS a travez de este molde
    constructor(nombreParam, edadParam) {
        //this --> APUNTAMOS A ESTA CLASE
        this.nombre = nombreParam;
        this.edad = edadParam;
    }

    //Metodos --> Funciones, cosas que hace esta clase
    correr() {
        console.log("Estoy Corriendo");
        return "Estoy corriendo";
    }
}


//Urilizar el constructor de persona -->INSTANCIAR OBJETOS
let personita = new Persona("Smith", 18);
let personita2 = new Persona("Alejandro", 22);
console.log(personita)
console.log(personita2)

//Acceder a algo de un objeto
personita.correr()

//PILARES DE LA POO --> OOP
// Existen para asegurarnos un codigo mas escalaable, fleible y seguro
//4 Pilares

//PILARES QUE SI SE PUEDEN UTILIZAR EN JAVASCRIPT
// Herencia --> Una clase hija de otra, copia el comportamiento del padre
//Polimorfismo --> Cambiar el comportamiento de un metodo del padre con respecto a su hijo

//Herencia
class Programador extends Persona {

    //Caracteristicas propias de Programador
    constructor(nombreParam, edadParam, lenguajesParam) {
        //Seguir usando las propiedades/caracteristicas del padre Persona
        //Super() Recibe en sus parentesis, los parametros del constructor del padre
        super(nombreParam, edadParam)
        this.lenguajesParam = lenguajesParam
    }

    //Metodo propio de Programador
    codear() {
        console.log("Estoy codeando");
    }

    //Polimorfismo
    //Sobreescritura de metodos
    correr() {
        super.correr();
        console.log("Pero, no corro tan rapido, pero puedo trotar.");
    }
}

//Crear un programador
let programador = new Programador("Jose", 18, "JavaScript");
console.log(programador);
programador.nombre = "Luz";
console.log(programador);
programador.correr();

//PILARES QUE NO SE PUEDEN UTILIZAR CON JAVASCRIPT
//Encapsulamiento --> LIMITAR EL ACCESO A LA INFORMACION DE UNA CLASE --> MODIFICADORES DE ACCESO
//Abstraccion --> Nos da herramientas y metodos para acceder a informacion encapsulada

//ARRAYS

//Array indexado --> Ordena en indice 0 en adelante
let arraycitoIdx = [18, 19, 25, 33];

console.log(arraycitoIdx[0]);

//"Array asocitivo" --> Guardamos en clave valor
let arrayAsociativo = {
    nombre : "Jairo"
}

console.log(arrayAsociativo['nombre'])
    
// Array multidimensional
//Creamos un array con varias dimensiones (Array dentro de Array)
let arraycitoMulti = [ [1,2], [{nombre : "Smith"}]];
console.log(arraycitoMulti[1][0].nombre);

//Accedemos a la posicion 0 -> ES LA PRIMERA DEL ARRAY
let cajaDeIndiceCero = arraycitoMulti[0];
//Imprimir el 2
console.log(cajaDeIndiceCero[1]);

//Accedemos al indice 1
let cajaDeIndiceUno = arraycitoMulti[1];
//Accedemos a la caja para poder ver su contenido
console.log(cajaDeIndiceUno);
console.log(cajaDeIndiceUno[0].nombre);

//Estos console log muestran el nombre
console.log(cajaDeIndiceUno[0].nombree);
console.log(arraycitoMulti[1][2].nombre);

//Metodos para arrays

//let nombres = ["Darwin", "Luz", "Alejandra", "Kevin"];

//DAr vuelta a un array
//console.log(nombres.reverse());
let nombresAlReves = nombres.reverse();

//Recorre arrays
//Foreach --> Recorre el array y nos deja utilizar, la posicion y el indice del array
nombres.forEach( (value, index) => {
    console.log(index);
    console.log(value);
})

//Foreach que recibe el array completo

let arrayNum = [1,2,3,4,6];

arrayNum.forEach( (value,index,array) => {
    arrayNum.pop();
    console.log(array)
})

/*
for ( let nombre of nombres){
    console.log(nombre);
}
    */

//Metodos Utiles
//Map --> Recorre el array y nos retorn algo por cada posicion --> Transformar valores

let nombres = ["Darwin", "Luz", "Alejandra", "Kevin"];

const nombresMayus = nombres.map((value) => {
    return value.toUpperCase();
})
console.log(nombresMayus);

let numeritos = [1,3,5,7];

let numeritosPorDOs = numeritos.map((value) => {
    return value*2;
})

console.log(numeritosPorDOs);


//Filtar la Informacion
//Filter --> Filtramos la info y la retornamos en base a una condicion

const usuarios = [{
    nombre : "Smith",
    edad : 18 
}, {
    nombre : "Jairo",
    edad : 27
}, {
    nombre : "Jorge",
    edad : 28 
}]

    // array.filter( (apodoValorDeCadaPosicion ) => {return CONDICIONA CUMPLIR } )
const mayoresDe21 = usuarios.filter( (pepitoFuentes) => {return pepitoFuentes.edad >21})
console.log(mayoresDe21);

// Find =>  Busacamos y retornamos un solo dato

const usuarioJorge = usuarios.find(  usuario => usuario.nombre === "Jorge")
console.log(usuarioJorge)

//Metodos OBLIGATORIOS
let array = []
// Agregar datos al ARAY
//AL FINAL
array.push(2);

//EN PRIMERA POSICION
array.unshift(1);


//Eliminar datos al ARRAY

//AL FINAL
array.pop();

//AL PRINCIPIO
array.shift();

console.log(array)


//Obtener el largo de un array

let largor = array.length;
console.log(largor);

//Strings
// La propiedad length sirve tambien para string, que feliz que soy con JS

console.log("Holiwis Smith ".length);

//Metodo pra eliminar los espacios al principio y al final
let sinEspacios = "Holiwis Smith ".trim();
console.log(sinEspacios.length);