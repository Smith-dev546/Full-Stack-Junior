//rafc => snippet para crear el componente funcional con Flecha

import { useContext, useEffect, useState } from "react"
import { CardCharacter } from "../../components/CardCharacter"
import { FavoriteContext } from "../../contexts/FavoriteContext"

export const ListCharacters = () => {
    //Siempre que yo necesitw una caja para GUARDAR ALGO voy hacer un ESTADO
    const [ListPjs, setListPjs] = useState([])

    // Utilizamos el useContext -> Hook para utilizar un contexto previamente creado
    //Sintaxis paara cuando tenemos 1 SOLO VALOR EN EL CONTEXTO
    //let valorContexto = useContext(FavoriteContext)
    //console.log(valorContexto)
    const {favorites,setFavorites} = useContext(FavoriteContext)
    //console.log(favorites)
    //console.log(setFavorites)
      //Las funciones adentro de un componente declarenla con camelCase
  const peticionApi = ()=>{
    //Peticion a una API
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        //console.log(data.results);
        //Necesito sacar esa data de aca dentro
        setListPjs(data.results);

    })
    .catch(error => console.error(error))
  }

  //console.log(ListPjs)

  //ESta es otra forma de llamar API
  //Async fuction peticionApiAA
  /*
  const peticionApiAA= async() =>{
    //Bloque de manejo de errores
    try{
    //Reemplazo al primer .then
    let response = await fetch('https://rickandmortyapi.com/api/character')
    //console.log(response.json());
    //Reemplazo para el segundo .then
    let data = await response.json();
    console.log(data)
    }catch(error) {
      console.error(error)}
  }
*/

//useEffect -> Cuando necesito cargar datos apenas se vaya a montar el componente

useEffect( () => {
    peticionApi()

},[] )

  return (
    <div className="row">
       
    {/*Recorrer el array para mostrar los datos -> Mapear los datos para pintarlos*/}

    {ListPjs.map( (character) => {
      return <section key={character.id} className="col-md-3 col-sm-12">
        <CardCharacter
        id={character.id}
          name={character.name}
          image={character.image}
          status={character.status}
          listFavorites={favorites}
          changeFavorites={setFavorites}
        />
      </section>
    })}
    </div>
  )
}
