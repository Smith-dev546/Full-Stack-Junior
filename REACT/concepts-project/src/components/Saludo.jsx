//Crear nuestro primer componente

import { useState } from "react";
import { Chauchis } from "./Chauchis";

//Props -> Propiedades
function Saludo({nombre, apellido}){
  //console.log(nombre);
  //fuction Saludo(props) {}
  /* Destructuring object

  const (nombre, apellido) = props
  */
  //let curso = "FSJ30";    ESTO NO FUNCIONA

  //El reemplazo de las variables para manipular datos en REACT
  //EL ESTADO => Hook -> Funciones PREHECHAS que ya vienen con React
  const[nombreCurso, setNombreCurso] = useState("FSJ30");

  //console.log(nombreCurso)


  return (
  <>
    <h1>Holiwis, {nombre} {apellido}</h1>
    <h2>Curso: {nombreCurso}</h2>
    <button onClick={() => setNombreCurso("Java30")}>Magia</button>   {/*Aqui cambia la vista al dar click al boton (Se activa el RENDER)*/}
    <button onClick={() => setNombreCurso("FSJ30")}>Regresar</button>
    <br />
    <Chauchis nombre={nombre} curso={nombreCurso}/>
  </>)
}

export default Saludo;