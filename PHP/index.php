
<?php 
//Diferencias vs JaavaScript
//1. PHP es un lenguaje compilado (se interpreta por apache)
//2. PHP en un lenguaje de tipado debil pero con tipado obligatorio
//3. PHP no es case sensitive (no distingue entre mayusculas y minusculas) en variables y funciones
//4. PHP vamos aa utilizar una POO con todos los pilares
//Delimitadores

/*Comentario
multilinea*/

//Salto de linea /n
//La concatenacion va a ser con el punto .
echo "Holiwis"."\n";
print "Holiwis con print \n";
echo "Chauchis";

//Variables
//let nombre = "Smith"

$nombre = "Smith";

//Constantes
define("PI", 3.1416);

//Template string
$templateString = "Hola, mi nombre es {$nombre}";
echo $templateString . "\n";

//Operadores matematicos
$suma = 2 + 2;
$resta = 2 - 2;
$multiplicacion = 2 * 2;
$division = 2 / 2;
$modulo = 10 % 3;   //Resto de la division
$exponente = 2 ** 3; //2^3

//Operadores de comparacion
$igual = (2 == 2);
$igualdadEstricta = (2 === "2"); //Revisa tipo y valor
$diferente = (2 != 3);
$diferenteEstricta = (2 !== "2");
$mayor = (3 > 2);
$menor = (2 < 3);
$mayorIgual = (3 >= 2);
$menorIgual = (2 <= 3);

//Operadores logicos AND (&&), OR (||), NOT (!)
$y = (2 > 3 && 3 <= 2);
$o = (3 > 5 || 2 <= 5);
$no = !true;

//Funciones
//Funcion expresada
function saludar($nombre) {
    return "Hola, {$nombre}";
}

echo saludar("Smith") . "\n";

//Funciones anonimas
$despedirse = function($nombre) {
    return "Chauchis, {$nombre}";
};

echo $despedirse("Smith") . "\n";

//Funciones flecha (PHP 7.4+)
$gritar = fn($nombre) => "AAAAHH, {$nombre}!";

echo $gritar("Smith") . "\n";

//Estructuras condicionales
//IF ELSEIF ELSE
$edad = 20;
if ($edad < 18) {
    echo "Menor de edad\n";
} elseif ($edad >= 18 && $edad < 65) {
    echo "Adulto\n";
} else {
    echo "Adulto mayor\n";
}

//SWITCH CASE
$dia = 3;
switch ($dia) {
    case 1:
        echo "Lunes\n";
        break;
    case 2:
        echo "Martes\n";
        break;
    case 3:
        echo "Miércoles\n";
        break;
    default:
        echo "Es otro dia que no tenemos clases\n";
        break;
}

//Ternario
$mensaje = ($edad >= 18) ? "Eres mayor de edad\n" : "Eres menor de edad\n";
echo $mensaje."\n";

//Estructuras repititivas
//While
$contador = 0;
while ($contador < 5) {
    echo "Contador: {$contador}\n";
    $contador++;
};

//Do While
$contador = 0;
do {
    echo "Contador Do While: {$contador}\n";
    $contador++;
} while ($contador < 5);

//For
for ($i = 0; $i < 5; $i++) {
    echo "Contador For: {$i}\n";
}


?>