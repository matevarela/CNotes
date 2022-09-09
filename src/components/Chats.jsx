import React from 'react'
import Logo from '../img/logoCnotes.png'
import Perfil from '../img/icon.jpg'
import Options from '../img/options.svg'
import Chat from './Chat'



const Chats = () => {
  return (
    <div className='w-full md:w-1/3 bg-slate-800 h-screen overflow-y-scroll'>
        <div className='flex items-center justify-between py-10 shadow-md'>
          <a href=""><img src={Perfil} alt="Imagen de Perfil" className='w-10 rounded-full ml-5'  /></a>
          <img src={Logo} className="w-40" alt="Imagen de Logotipo" />
          <a className='grid items-center hover:cursor-pointer text-4xl mr-5 font-semibold'>+</a>
        </div>
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
  )
}

export default Chats