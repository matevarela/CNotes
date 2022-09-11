import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const Buscador = () => {
  return (
    <div>
        <label className='bg-slate-900 w-full flex content-center py-5 px-10 rounded-full'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-slate-700 my-auto mr-5 mx-0'/>
            <input type="text" id="buscar" placeholder='Buscar Clase' className='w-full bg-slate-900 text-slate-200'/>
        </label>
    </div>
  )
}

export default Buscador