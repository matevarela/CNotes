import React, { useState } from 'react'
import AgregarClase from './AgregarClase.jsx'
import Chats from './Chats.jsx'
import Grupo from './Grupo.jsx'

const Principal = () => {
  const [nuevaClase, setNuevaClase] = useState(false)

  return (
    <div className='relative'>
        <div className='flex'>
          <Chats 
            setNuevaClase={setNuevaClase}
          />
          <Grupo />
          {nuevaClase && 
          <AgregarClase
              setNuevaClase={setNuevaClase}
          /> }
        </div>

    </div>
  )
}

export default Principal