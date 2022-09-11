import React from 'react'
import Profe from '../img/profe.jpg'

const Chat = () => {
  return (
          <a>
            <div className='w-full flex items-center p-5 shadow-sm hover:cursor-pointer hover:bg-slate-700 transition-colors '>
              <img src={Profe} className='mr-4 w-12 h-12 rounded-full' alt="Foto de Perfil" />
              <div>
                <div className='flex flex-col'>
                  <h4 className='text-1xl font-semibold'>Sistemas Operativos 4to</h4>
                  <p className='text-xs'>JRGUTIERREZ@ITEL.EDU.AR</p>
                </div>
              </div>
            </div>
          </a>
        
  )
}

export default Chat