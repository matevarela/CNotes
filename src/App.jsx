import { useState } from 'react'
import Principal from './components/Principal.jsx'
import Login from './components/Login.jsx'
import AgregarClase from './components/AgregarClase.jsx';

function App() {

  const [isValid, setIsValid] = useState(false);
  const [chats, setChats] = useState([]);
  const [usuario, setUsuario] = useState([]);


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
          setIsValid={setIsValid}/>
      )}
    </div>

    

  )
}

export default App
