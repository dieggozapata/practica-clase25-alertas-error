import './App.css'
import React from 'react'
import Dog from './Dog'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {

  return (
    <div className="App">
      <ToastContainer />
      {/* SUGERENCIA: use ErrorBoundary como elemento principal de los demás componentes */}
        <Dog breed={"husky"} /> {/* Lo que debería mostrar en caso de que se acceda a la API */}
        {/* <Dog breed={"ruffles"} /> */} {/* Lo que debería mostrar en caso de que haya algún error */}

      {/* SUGERENCIA: vea la lista completa de razas de la API: https://dog.ceo/dog-api/breeds-list */}
    </div>
  )
}

export default App;