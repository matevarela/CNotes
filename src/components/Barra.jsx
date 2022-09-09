import React from 'react'
import Perfil from '../img/profe.jpg'

const Barra = ({grupo, profesor}) => {
  return (
    <div className='flex items-center py-10 px-5 shadow-md'>
        <img src={Perfil} className='w-10 h-10 mr-5 rounded-full' alt="Perfil" />
            <div className=''>
                <p className='uppercase font-bold'>{grupo}</p>
                <p className='uppercase font-semibold'>{profesor}</p>
            </div>
    </div>
  )
}

export default Barra