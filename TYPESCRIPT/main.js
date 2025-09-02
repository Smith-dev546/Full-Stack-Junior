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
var numero = 1;
var nombre = "Smith";
var activo = true;
var vacio = null;
//TIPOS DE DATOS QUE VAMOS A ROGAR, REZAR, INTENTAR, JURAR Y PROMETER NO USAR
var nose = "PUEDO SER CUALQUIER COSA";
var noDefinido = undefined;
console.log(numero);
function saludar(nombreParam) {
    return "Holiwis, ".concat(nombreParam);
}
console.log(saludar("Smith"));
