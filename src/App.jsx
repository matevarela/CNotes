import { useState } from 'react'
import Principal from './components/Principal.jsx'
import Login from './components/Login.jsx'
import AgregarClase from './components/AgregarClase.jsx';

function App() {

  const [isValid, setIsValid] = useState(false);
  const [chats, setChats] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const [error, setError] = useState(false);
  const [aviso, setAviso] = useState(false);
  

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
          error={error}
          setError={setError}
          aviso={aviso}
          setAviso={setAviso}
        />
      ) : (
        <Login 
          setIsValid={setIsValid}
          error={error}
          setError={setError}
        />
      )}
    </div>

    

  )
}

export default App
