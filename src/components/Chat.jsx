import React from 'react'
import Profe from '../img/profe.jpg'

const Chat = ({chat}) => {
  const {nombre, profesor} = chat;

  return (
    <a href="" className=''>
      <div className='w-full items-center flex py-5 shadow-sm border-b-[1px] border-gray-900 hover:cursor-pointer hover:bg-slate-700 transition-colors'>
          <img src={Profe} className='mr-3 w-12 h-12 rounded-full' alt="Foto de Perfil" />
          <div>
              <h4 className='text-1xl font-semibold text-slate-200'>{nombre}</h4>
              <p className='text-xs font-normal lowercase text-slate-500'>{profesor}</p>
          </div>
      </div>
    </a>
  )
}

export default Chat