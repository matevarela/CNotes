import React from 'react'

const Mensaje = ({ mensajeTexto, setMensajeTexto }) => {
  return (
    <div className='bg-slate-900 mt-7 mx-5 rounded-md p-5'>
        <h5 className='text-sky-500'><span className='text-slate-500'>Profesor: </span>Gutierrez</h5>
        <p className='text-slate-200'>
            {mensajeTexto}
        </p>
        <p className='text-slate-500 text-sm text-right'>14:34</p>
    </div>
  )
}

export default Mensaje