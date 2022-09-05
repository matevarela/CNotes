import React from 'react'
import { useState } from 'react'

const Grupo = () => {
    const [grupo, setGrupo] = useState('Sistemas Operativos 4to');
    const [profesor, setProfesor] = useState('jrgutierrez@itel.edu.ar');
    
  return (
    <div className='bg-slate-700 mx-auto rounded-xl h-screen my-10'>
        <div className='py-10 bg-slate-500 px-10'>
            <p className='uppercase'>{grupo}</p>
            <p className='uppercase'>{profesor}</p>
        </div>
    
        <h1 className='uppercase text-center font-bold text-2xl pt-10'>Tu profesor no ha publicado nada aún.</h1>
    </div>
  )
}

export default Grupo