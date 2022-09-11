import { useState } from 'react'
import React from 'react'
import Logo from '../img/logoLetras.png'
import Perfil from '../img/icon.jpg'
import Options from '../img/options.svg'
import Chat from './Chat'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import Buscador from './Buscador'

const Chats = ({setNuevaClase}) => {
  
  const botonNuevaClase = () => {
   setNuevaClase(true);
  }

  return (
    <div className='w-full md:w-1/3'>
        {/* ----- bloque ----- */}
        <div className='flex items-center justify-between p-5 shadow-md md:w-1/3 fixed z-10 bg-slate-900'>
          {/* perfil */}
          <a href="">
            <img src={Perfil} alt="Imagen de Perfil" className='h-12 rounded-full'/>
          </a>
          {/* logo */}
          <img src={Logo} className="h-30" alt="Imagen de Logotipo" />
          {/* plus */}
          <a 
            className='grid items-center hover:cursor-pointer text-4xl font-semibold'
            onClick={botonNuevaClase}>
            <FontAwesomeIcon icon={faPlus} className='text-slate-200'/>
          </a>
        </div>
        {/* ----- bloque ----- */}
        <div className='h-screen overflow-y-scroll px-5 pt-24 bg-slate-800'>
          {/* buscador */}
          <Buscador/>
          {/* clases */}
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
        </div>
    </div>
  )
}

export default Chats