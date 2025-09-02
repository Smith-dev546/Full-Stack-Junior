//Paradigma -> MOdelo de programar
//Que programamos bajo unas regls en especifico
//Codigo reutilizable
//Se basa en el uso de objetos y clases para organizar y estructurar el codigo
//Es un paradigma que esta orientada a clases y objetos
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Animal = /** @class */ (function () {
    //Constructor -> Metodo que se ejecuta al instanciar un objeto de una clase -> NEW
    function Animal(especieParam, edaParam, generoParam, colorParam) {
        this.especie = especieParam;
        this.edad = edaParam;
        this.genero = generoParam;
        this.color = colorParam;
    }
    //Metodos -> Funciones que van a pertenecer a una clase -> Comportamiento
    Animal.prototype.comer = function () {
        return "Estoy comiendo";
    };
    //Getters y Setters     => Abstraccion
    Animal.prototype.getEdad = function () {
        return this.edad;
    };
    Animal.prototype.setEdad = function (edadParam) {
        this.edad = edadParam;
    };
    //Sigue siendo abstraccion
    Animal.prototype.aumentarEdad = function () {
        this.edad += 1;
    };
    return Animal;
}());
var animalito = new Animal("Chucho", 18, "Masculino", "Blanco");
//Accedemos a un atributo del objeto instanciado(Creado en base) de una clase
//console.log(animalito.especie);
//console.log(animalito.Edad);
console.log(animalito.getEdad());
//Herencia
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(especieParam, edaParam, generoParam, colorParam, razaParam, nombreParam) {
        //Traemos la funcionalidad del contructor del padre
        var _this = _super.call(this, especieParam, edaParam, generoParam, colorParam) || this;
        _this.raza = razaParam;
        _this.nombre = nombreParam;
        return _this;
    }
    Perro.prototype.ladrar = function () {
        return "che Wau re wau";
    };
    //Polimorfismo
    Perro.prototype.aumentarEdad = function () {
        this.setEdad(this.getEdad() + 7);
    };
    return Perro;
}(Animal));
var perrito = new Perro("Perro", 10, "Masculino", "Marron", "Aguacatero", "Loki");
