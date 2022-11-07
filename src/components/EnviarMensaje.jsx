import { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

const EnviarMensaje = ({ mensajeTexto, setMensajeTexto, comunicadoModal, setComunicadoModal }) => {

  return (
    <div>
        <button
          onClick={() => setComunicadoModal(!comunicadoModal)}
          className='flex items-center mx-auto  fixed bottom-2 right-2 w-auto rounded-full bg-sky-500 py-3 px-5 hover:cursor-pointer hover:bg-sky-600 transition-colors'
          >
          <FontAwesomeIcon icon={faEnvelope} className='text-slate-900 my-auto mr-2'/>
          <p className='text-slate-900 font-bold'>Comunicado</p>
        </button>
    </div>
  )
}

export default EnviarMensaje