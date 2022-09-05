import { useState } from 'react'
import Grupo from './components/Grupo';
import Login from './components/Login';



function App() {
const [isValid, setIsValid] = useState(false);


  return (
    <div className='container mx-auto mt-10'>
      {/* {!isValid && 
          <Login
            setIsValid={setIsValid}
          />} */}

      {isValid ? (
        <Grupo />
      ) : (
        <Login 
          setIsValid={setIsValid}/>
      )}
    </div>

    

  )
}

export default App
