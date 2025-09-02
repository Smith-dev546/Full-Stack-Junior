
import './App.css'
import Saludo from './components/Saludo'



function App() {

  return (
    <> {/* Este es el fragment -> No DIBUJA UN CONTENEDOR EN EL HTML */}
      
      <h1>Holiwis</h1>

      {/* Este es el primer componete, jaja saludos */}
      <Saludo nombre='Smith' apellido='Mendez'/>
       <Saludo nombre='Jairo' apellido='Vega'/>
    </>
  )
}

export default App

