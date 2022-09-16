import React from 'react'
import { useState } from 'react'
import Barra from './Barra.jsx'
import EnviarMensaje from './EnviarMensaje.jsx'

const Grupo = () => {
    const [grupo, setGrupo] = useState('Sistemas Operativos 4to');
    const [profesor, setProfesor] = useState('jrgutierrez@itel.edu.ar');
    
  return (
    <div className='mx-auto w-0 hidden lg:block lg:w-2/3 z-10 bg-slate-800 border-l-2 border-slate-900'>
      <Barra
        grupo={grupo} 
        profesor={profesor}
      />
      <h1 className='uppercase text-center font-bold text-2xl pt-10 px-5 text-slate-200'>Tu profesor no ha publicado nada aún.</h1>
      <EnviarMensaje/>
    </div>
  )
}

export default Grupo