import React, { useState } from 'react'
import AgregarClase from './AgregarClase.jsx'
import Chats from './Chats.jsx'
import Grupo from './Grupo.jsx'

const Principal = ({chats, setChats, error, setError, usuario, setUsuario}) => {
  const [nuevaClase, setNuevaClase] = useState(false)

  return (
    <div className='relative'>
        <div className='flex'>
          <Chats 
            setNuevaClase={setNuevaClase}
            chats={chats}
            setChats={setChats}
          />
          <Grupo 
              error={error}
              setError={setError}
          />
          {nuevaClase && 
          <AgregarClase
              setNuevaClase={setNuevaClase}
              chats={chats}
              setChats={setChats}
              error={error}
              setError={setError}
          /> }
        </div>

    </div>
  )
}

export default Principal