import React from 'react'
import { useState } from 'react'
import Barra from './Barra.jsx'

const Grupo = ({grupo, profesor}) => {

    
  return (
    <div className='hidden sm:visible mx-auto rounded-xl h-screen sm:w-2/3 -z-10'>
        <Barra
          grupo={grupo} 
          profesor={profesor}
        />

        <h1 className='uppercase text-center font-bold text-2xl pt-10'>Tu profesor no ha publicado nada aún.</h1>
    </div>
  )
}

export default Grupo