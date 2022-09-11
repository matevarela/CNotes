import React from 'react'
import Profe from '../img/profe.jpg'

const Chat = () => {
  return (
    <div className='w-full flex-none sm:flex items-center p-5 shadow-sm'>
        <img src={Profe} className='mr-2 w-12 h-12 rounded-sm' alt="Foto de Perfil" />
        <div>
            <h4 className='text-1xl font-semibold'>Sistemas Operativos 4to</h4>
            <p className='text-xs font-semibold'>JRGUTIERREZ@ITEL.EDU.AR</p>
        </div>
    </div>
  )
}

export default Chat