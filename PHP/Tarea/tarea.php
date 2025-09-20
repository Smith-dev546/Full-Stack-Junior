<?php 
/*
1.       Problema de Lista Invertida:
Escribe un programa que tome un array de números y devuelva una nueva lista que contenga los mismos elementos en orden inverso.

2.       Problema de Suma de Números Pares:
Crea un script que sume todos los números pares en un array de números enteros.

3.       Problema de Frecuencia de Caracteres:
Implementa una función que tome una cadena de texto y devuelva un array asociativo que muestre la frecuencia de cada carácter en la cadena.

4.       Problema de Bucle Anidado:
Escribe un programa que utilice bucles anidados para imprimir un patrón de asteriscos en forma de pirámide.
 */

//1. SOLUCION RAPIDA => array_reverse();

function invertirlista($array){
$arraycitoNuevo = [];

    for ($i = count($array)-1; $i >= 0; $i--){
        $arraycitoNuevo[] = $array[$i];
    }

    return $arraycitoNuevo;
}

//2.

function sumarParesArray($array){
    $total = 0;

    foreach($array as $numero){

        //Si tenemos numero pares
        if($numero % 2 === 0){
            $total += $numero;
        }
    }

    return $total;
}

//3.

function contarFrecuenciaCaracteres($StringParam){
    $frecuenciaCaracter = [];

    //Cortar el String en caracteres -> str_split

    $caracteres = str_split($StringParam);

//    print_r($caracteres);

    foreach($caracteres as $caracter){
        
        //isset -> DETERMINA UN VALOREXISTE, SI ESO PASA NOS DA UN TRUE
        if(isset($frecuenciaCaracter[$caracter])){
            $frecuenciaCaracter[$caracter]++;
        }else {
            $frecuenciaCaracter[$caracter] = 1;
        }
    }
    return $frecuenciaCaracter;
}

print_r(contarFrecuenciaCaracteres("Holiwis?"));

//4.

function imprimirPiramide(){

    $filas = 5;

    //1er bucle es para la ALTURA
    //Por eso empiza en 1 y se repite hasta la caantidad de altura que queremos que tenga
    for($i = 1; $i <= $filas; $i++){

        //2do bucle controla los espacios en blanco antes de dibujar los asteriscos
        for($espacios = 1; $espacios <= $filas -$i; $espacios++){
           echo " ";
        }

        //3er bucle controlar los aasteriscos por fila
        //formula para saber cuantos asteriscos necesitamos es ( 2 * $i - 1)

        for ($asteriscos = 1; $asteriscos <= (2 *$i -1); $asteriscos++){
            echo "*";
        }

        echo "\n";
    }
}

imprimirPiramide();
?>