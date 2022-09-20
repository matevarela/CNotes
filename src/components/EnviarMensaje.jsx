import { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperclip, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const EnviarMensaje = ({ mensajeTexto, setMensajeTexto }) => {
  
  const botonEnviar = () => {
    console.log('Enviando...')
  }

  return (
    <div>
        <div className='flex items-center mx-auto text-slate-200 fixed bottom-0 w-full bg-slate-900 py-3 px-10'>
            <FontAwesomeIcon icon={faPaperclip} className='mr-5 h-5'/>

            <div className='bg-slate-800 rounded-full h-10 flex content-between items-center w-7/12'>
                <input 
                  type="text" 
                  id="mensajeTexto" 
                  placeholder='Escribir Mensaje' 
                  className='ml-5 w-full mr-5 bg-slate-800 outline-none'
                  onChange={(e) => setMensajeTexto(e.target.value)}
                  />
                <button 
                  type='button' 
                  className='bg-sky-500 h-full w-20 flex items-center rounded-full hover:cursor-pointer '
                  onClick={botonEnviar}
                  >
                    <FontAwesomeIcon icon={faEnvelope} className='h-5 m-auto'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default EnviarMensaje