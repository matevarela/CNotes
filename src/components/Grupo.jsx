import React from 'react'
import { useState } from 'react'
import Barra from './Barra.jsx'

const Grupo = () => {
    const [grupo, setGrupo] = useState('Sistemas Operativos 4to');
    const [profesor, setProfesor] = useState('jrgutierrez@itel.edu.ar');
    
  return (
    <div className='mx-auto rounded-xl h-screen md:w-2/3 '>
    <Barra
      grupo={grupo} 
      profesor={profesor}
    />

        <h1 className='uppercase text-center font-bold text-2xl pt-10'>Tu profesor no ha publicado nada aún.</h1>
    </div>
  )
}

export default Grupo