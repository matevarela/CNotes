import React from 'react'
import Profe from '../img/profe.jpg'

const Chat = () => {
  return (
    <div className='w-full flex-none sm:flex items-center py-5 shadow-sm border-b-[1px] border-gray-900'>
        <img src={Profe} className='mr-3 w-12 h-12 rounded-full' alt="Foto de Perfil" />
        <div>
            <h4 className='text-1xl font-semibold text-slate-200'>Sistemas Operativos 4to</h4>
            <p className='text-xs font-normal lowercase text-slate-500'>JRGUTIERREZ@ITEL.EDU.AR</p>
        </div>
    </div>
  )
}

export default Chat