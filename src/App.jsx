import { useState } from 'react'
import Principal from './components/Principal.jsx'
import Login from './components/Login.jsx'
import AgregarClase from './components/AgregarClase.jsx';

function App() {

  const [isValid, setIsValid] = useState(false);
  const [chats, setChats] = useState([]);
  const [usuario, setUsuario] = useState([]);

  const clases = {
    matematica : {
      password : 'matematica',
      nombre : 'Matemáticas',
      profesor : 'profematematica@gmail.com'
    },

    fisica : {
      password : 'fisica',
      nombre : 'Física',
      profesor : 'profefisica@gmail.com'
    },

    literatura : {
      password : 'literatura',
      nombre : 'Literatura',
      profesor : 'profeliteratura@gmail.com'
    },

    artistica : {
      password : 'artistica',
      nombre : 'Artística',
      profesor : 'profeartistica@gmail.com'
    },

    ciudadania : {
      password : 'ciudadania',
      nombre : 'Ciudadanía',
      profesor : 'profeciudadania@gmail.com'
    },
  }

  return (
    <div>
      {/* {!isValid && 
          <Login
            setIsValid={setIsValid}
          />} */}

      {isValid ? (
        <Principal
          chats={chats}
          setChats={setChats}
        />
      ) : (
        <Login 
          setIsValid={setIsValid}
          setUsuario={setUsuario}  
        />
      )}
    </div>

    

  )
}

export default App
