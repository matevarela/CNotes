import React, { useState } from 'react'
import AgregarClase from './AgregarClase.jsx'
import Chats from './Chats.jsx'
import Grupo from './Grupo.jsx'

const Principal = ({chats, setChats}) => {
  const [nuevaClase, setNuevaClase] = useState(false)
  const [grupo, setGrupo] = useState('Sistemas Operativos 4to');
  const [profesor, setProfesor] = useState('jrgutierrez@itel.edu.ar');

  return (
    <div className='relative'>
        <div className='flex'>
          <Chats 
            setNuevaClase={setNuevaClase}
            chats={chats}
            setChats={setChats}
          />
          <Grupo
            grupo={grupo}
            profesor={profesor}
          />
          {nuevaClase && 
          <AgregarClase
              setNuevaClase={setNuevaClase}
              chats={chats}
              setChats={setChats}
          /> }
        </div>

    </div>
  )
}

export default Principal