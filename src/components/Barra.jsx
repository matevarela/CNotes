import React from 'react'
import Perfil from '../img/profe.jpg'

const Barra = ({grupo, profesor}) => {
  return (
    <div className='fixed w-full z-20'>
      <div className='flex items-center py-5 px-5 shadow-md bg-slate-900'>
        <img src={Perfil} className='h-12 mr-5 rounded-full' alt="Perfil" />
            <div className=''>
                <p className='uppercase font-semibold text-slate-200'>{grupo}</p>
                <p className='lowercase font-normal text-slate-500'>{profesor}</p>
            </div>
      </div>
    </div>
  )
}

export default Barra