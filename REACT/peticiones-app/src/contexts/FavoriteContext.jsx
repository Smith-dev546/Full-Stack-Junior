/*  Vamos a declarar 2 cosas a la vez */

import { createContext, useState } from "react";

// Crear el contexto 


export const FavoriteContext = createContext();

//  Proveedor de la informacion del contexto
//  Wrapper -> Contiene otros componentes ->{children}
export const FavoritesDataProvider = ({children}) =>{
    //Creamos el estado de los favoritos
    const [favorites,setFavorites] = useState([]);

    return(
        <FavoriteContext.Provider value={{favorites, setFavorites}}>
            {children}
        </FavoriteContext.Provider>
    )
}