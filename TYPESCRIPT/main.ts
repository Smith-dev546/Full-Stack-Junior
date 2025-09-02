//Diferencias entre JS y TS

/*JS

- Flexible
- Facil de aprender 
- Forma de programar sea a traves de funciones
- WEB -> Navegador (Interpretado)

*/

/*  TS

- TIpado duro -> YA NO ES TAAN FLEXIBLE
- POO -> Forma de prgramar -> Los pilares estan COMPLETOS
- Un poco mas dificilde aprender
- Lenguaje compilado (TSC) -> TRADUCIR EL CODIGO DE TS A JS

*/

//Declaracion de variables
//Datos primitivos

let numero:number = 1;
let nombre:string = "Smith";
let activo:boolean = true;
let vacio:null = null;


//TIPOS DE DATOS QUE VAMOS A ROGAR, REZAR, INTENTAR, JURAR Y PROMETER NO USAR

let nose:any = "PUEDO SER CUALQUIER COSA";
let noDefinido:undefined = undefined;


console.log(numero);

//Declaracion de funciones

function saludar (nombreParam:string):string{
    return`Holiwis, ${nombreParam}`
}

console.log(saludar("Smith"));

//Estructura de datos
//ARRAY 
//Vamos a guardar un array de numeros O un array de STRING

let arraycito : number[]|string[] = [1,2,3,4];
arraycito =["as"];

//Vamos a guardar dentro de EL ARRAY, numeros o string
let arraycitoDobleDato: (number|string)[] = [123, "numero de la suerte",2555]

//arraycito.push("Hola")       ESTO NO FUNCIONA

//Tupla
let arrayEspecifico : [number,string,string] = [18,"Smith","otro string"];

//Podemos llegar a tener 2 tipos de datos
//VARIABLE: 1TIPO | 2TIPO

let dosTiposDeDatos:null|string = null;

dosTiposDeDatos = "";

//Tipo de dato personalizado

type Persona = {
    name: string,
    age: number
}

let programador: Persona = {name: "Smith", age: 18};

let fsj30: Persona[] = [{name: "Smith", age: 18},{name: "Jairo", age: 27}]
