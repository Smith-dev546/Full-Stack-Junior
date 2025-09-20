<?php 
//Arrays
//Declaracion
//Array indexado
$array =[1, 2, 3, 4, 5];
$arra2 = array();
$array3 = new ArrayObject();

//Array asociativo
$arrayasociativo = [
    "nombre" => "Smith",
    "edad" => 30,
    "departamento" => "Morazan"
];

print_r($arrayasociativo["nombre"] . "\n");

//Array propiedades y metodos

//Saber el largo del array
echo count($array) . "\n";

//Agregar un elemento al final del array
array_push($array, 6);
$array[] = 7;

//Agregar un elemento al inicio del array
array_unshift($array, 0);

print_r($array);

//Eliminar el ultimo elemento del array
array_pop($array);
print_r($array);

//Eliminar el primer elemento del array
array_shift($array);
print_r($array);

//Recorrer un array
foreach ($array as $valor) {
    echo "Valor: {$valor}\n";
}

//Arrays multidimensionales
$arraymultidimensional = [
    "nombre" => "Smith",
    "edad" => 30,
    "hobbies" => ["Programar", "Leer", "Correr", "otros" => ["Jugar jueguitos" => ["GTA", "FIFA", "Call of Duty"]]]
];

print_r($arraymultidimensional);


//Clases y objetos

class Persona {
    //Atributos o propiedades
   private $nombre;
   private $edad;

   //Constructor
   function __construst($nombreParam, $edadParam){
         $this->nombre = $nombreParam;
         $this->edad = $edadParam;
   }

   //Metodos o funciones

    public function getEdad(){
         return $this->edad;
    }

   /**
    * Get the value of nombre
    *@
    */ 
   public function getNombre()
   {
      return $this->nombre;
   }

   /**
    * Set the value of nombre
    * @param string $nombre
    * @return  self
    */ 
   public function setNombre($nombre)
   {
      $this->nombre = $nombre;

      return $this;
   }

   /**
    * Set the value of edad
    * @param int $edad
    * @return  self
    */ 
   public function setEdad($edad)
   {
      $this->edad = $edad;

      return $this;
   }
}

//Crerar un objeto
$persona1 = new Persona("Smith", 30);

//Acceder a los metodos del objeto
echo $persona1->getNombre() . "\n";

//LIFO -> Stack -> Last In First Out

class Stack {
    private $data;

    //Constructor con parametros OPCIONALES
    function __construct($dataParams = []){
        $this->data = $dataParams;
    }

    //Agregar un elemeto
    function add($element){
        array_push($this->data, $element);
        //$this->data[] = $element;
    }

    //Eliminar un elemento
    function remove(){
        return array_pop($this->data);
    }
}

$stacito = new Stack([1, 2, 3]);

//FIFO -> Queue -> First In First Out

class Queue {
    private $data;

    //Constructor con parametros OPCIONALES
    function __construct($dataParams = []){
        $this->data = $dataParams;
    }
    //Agregar un elemeto
    function add($element){
        array_push($this->data, $element);
        //$this->data[] = $element;
    }   
    //Eliminar un elemento
    function remove(){
        return array_shift($this->data);
    }
}

class Node{
    private $value;
    private $next;

    function __construct($valueParam){
        $this->value = $valueParam;
        $this->next = null;
    }

    public function getValue(){
        return $this->value;
    }

    public function getNext(){
        return $this->next;
    }

    public function setNext($nextParam){
        $this->next = $nextParam;
    }


}
class LinkedList{
    private $head;

    function __construct(){
        $this->head = null;
    }

    function add($value){
        //Creamos un nuevo nodo
        $newNode = new Node($value);

        if($this->head === null) {
            $this->head = $newNode;
        }else{
            $current = $this->head;

            //Recorremos la lista mientras el siguiente no sea nulo
            while($current->getNext() !== null){
                $current =  $current->getNext();
            }
            //Cundo encontramos el final, agregamos el nuevo nodo
           $current->setNext($newNode);
        }
    }
}

$listita = new LinkedList();
$listita->add(3);
$listita->add(1);
$listita->add(5);
print_r($listita);
?>