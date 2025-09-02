import './App.css'
import {ListCharacters} from './views/listCharacter/ListCharacters'
import { FavoritesDataProvider } from './contexts/FavoriteContext'
import {BrowserRouter, Link,Route, Routes} from 'react-router'
import { Session } from './views/session/Session'
import { LoginComponent } from './views/session/components/LoginComponent'
//Asincronismo -> MAnejar codigo que tarda en completarse como solicitudes a un servidor o lecturas
//Promesas -> La esperanza de una posible respuesta a eso que va a tardar
function App() {

  return (
    <>
      <FavoritesDataProvider>
        {/* Activamos React Router */}
      <BrowserRouter>
       <Link to="/session"className='btn btn-success mb-2'>Register</Link>
       <Link to="/LoginComponent"className='btn btn-success mb-2'>Login</Link>
      <Routes>
        <Route path='/' element={<ListCharacters />}/>
        <Route path='/session' element={<Session />}/>
         <Route path='/LoginComponent' element={<LoginComponent />}/>

      </Routes>
      </BrowserRouter>

    </FavoritesDataProvider>
    </>
  )
}

export default App
