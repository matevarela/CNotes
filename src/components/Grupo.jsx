import React from 'react'
import { useState } from 'react'
import Barra from './Barra.jsx'
import EnviarMensaje from './EnviarMensaje.jsx'
import Mensaje from './Mensaje.jsx'

const Grupo = () => {
    const [grupo, setGrupo] = useState('Sistemas Operativos 4to');
    const [profesor, setProfesor] = useState('jrgutierrez@itel.edu.ar');
    const [mensajeTexto, setMensajeTexto] = useState('')
    
  return (
    <div className='mx-auto w-0 hidden lg:block lg:w-2/3 z-10 bg-slate-800 border-l-2 border-slate-900'>
      <Barra
        grupo={grupo} 
        profesor={profesor}
      />

        <Mensaje 
          mensajeTexto={mensajeTexto}
          setMensajeTexto={setMensajeTexto}
        />
        <EnviarMensaje
          mensajeTexto={mensajeTexto}
          setMensajeTexto={setMensajeTexto}
        />
    </div>
  )
}

export default Grupo