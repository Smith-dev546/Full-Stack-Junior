//Paradigma -> MOdelo de programar
//Que programamos bajo unas regls en especifico
//Codigo reutilizable
//Se basa en el uso de objetos y clases para organizar y estructurar el codigo
//Es un paradigma que esta orientada a clases y objetos

/*
    POO -> Es una forma de ver y pensar el codigo y las soluciones de implementaciones de software
    Vamos a imaginar moldes paraa poder estandarizar las cosas -> Clases
    Utilizar los moldes para crear funcionalidad en nuestra app -> Objetos
*/

/*  PILARES DE POO
    -Herencia    -->Obtener las caracteristicas y comportamientos del padre   
    -Polimorfismo  -->Podemos cambiar el funcionamiento de los comportamientos del hijo frente al padre

    -Encapsulamiento    --> Limitar el acceso a la informaccion
    *Modificadores de acceso : Public, Protected, Private
    -Abstraccion     --> Nos da herramientas (metodos) para aceder a informacion limitada

*/
class Animal {
    //Atributos o propiedades -> Caracteristicas de esta clase
    public especie : string;
    private edad  : number;
    genero : string;
    color : string;

    //Constructor -> Metodo que se ejecuta al instanciar un objeto de una clase -> NEW
    constructor(especieParam:string,edaParam:number,generoParam:string,colorParam:string){
        this.especie = especieParam;
        this.edad = edaParam;
        this.genero = generoParam;
        this.color = colorParam;
    }

    //Metodos -> Funciones que van a pertenecer a una clase -> Comportamiento
comer():string{
    return "Estoy comiendo"
    }

    //Getters y Setters     => Abstraccion
    getEdad():number{
        return this.edad;
    }

    setEdad(edadParam:number){
        this.edad = edadParam;
    }


    //Sigue siendo abstraccion
    aumentarEdad(){
        this.edad += 1;
       
    }

    
}

const animalito = new Animal("Chucho",18,"Masculino","Blanco");
//Accedemos a un atributo del objeto instanciado(Creado en base) de una clase
//console.log(animalito.especie);
//console.log(animalito.Edad);
console.log(animalito.getEdad());


//Herencia
class Perro extends Animal{
    private raza:string;
    private nombre:string;

    constructor(especieParam:string,edaParam:number,generoParam:string,colorParam:string,razaParam,nombreParam){
        //Traemos la funcionalidad del contructor del padre
        super(especieParam,edaParam,generoParam,colorParam)
        this.raza = razaParam;
        this.nombre = nombreParam;
    }

    ladrar():string{
        return "che Wau re wau"
    }

    //Polimorfismo
    aumentarEdad(): void {
        this.setEdad(this.getEdad()+7)
    }
}

const perrito = new Perro("Perro",10,"Masculino","Marron","Aguacatero","Loki");


//Tipo personalizado

type User = {
    name : string,
    email : string,
    password : string,
    rol : string
}

let usuarito2:User ={
    name:"Smith",
    email:"smith@kpo.com",
    password:"123456789",
    rol:"Admin"
}

interface IUser {
     name : string,
    email : string,
    password : string,
    rol : string
    
   // login():string;       Esto es adicional
}

let usuarito3:IUser ={
    name:"Smith",
    email:"smith@kpo.com",
    password:"123456789",
    rol:"Admin"
    /*login() {
        return "Me loguee"
    },*/ //Esto tambien es adicional
}



