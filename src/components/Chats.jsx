import { useState } from 'react'
import React from 'react'
import Logo from '../img/logoLetras.png'
import PerfilFoto from '../img/fotoPerfil.jpg'
import Options from '../img/options.svg'
import Chat from './Chat'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import Buscador from './Buscador'
import Perfil from './Perfil'
import axios from 'axios';
import { render } from 'react-dom'



const Chats = ({setNuevaClase, chats, setChats}) => {
  const [perfilMenu, setPerfilMenu] = useState(false);
  const [data, setData] = useState();
  const url = '/obtenerClases.php';

  fetch(url)
    .then(respuesta => {
      console.log(respuesta.url)
      return respuesta.text()
    })
    .then( datos => {
      console.log(datos)
    })
    .catch( error => {
      console.log(error)
    })

  const botonNuevaClase = () => {
    setNuevaClase(true);
   }
   
  return (
    <div className='w-full lg:w-1/3'>
        <div className=' w-full flex items-center justify-between p-5 shadow-md lg:w-1/3 fixed z-10 bg-slate-900'>
          <button>
            <img 
              src={PerfilFoto} 
              alt="Imagen de Perfil" 
              className='h-12 rounded-full'
              onClick={() => setPerfilMenu(!perfilMenu)}
            />
          </button>
          <img src={Logo} className="h-30" alt="Imagen de Logotipo" />
          <a 
            className='grid items-center hover:cursor-pointer text-4xl font-semibold'
            onClick={botonNuevaClase}>
            <FontAwesomeIcon icon={faPlus} className='text-slate-200'/>
          </a>
        </div>
        <div className="h-screen overflow-y-scroll  pt-24 bg-slate-800">
          <Perfil
          perfilMenu={perfilMenu}
          setPerfilMenu={setPerfilMenu}
          />
          <div className={(perfilMenu ? "hidden" : "")}>
          <Buscador/>
          {/* { data.length > 0 ? 
              data.map( (chat, index) => 
                (<Chat 
                  key={index}
                  chat={chat}
                />)
            ) :
              <h3 className="uppercase text-center font-bold text-2xl pt-10 text-slate-200">Acá Aparecerán tus Clases.</h3> 
              }
       */}

          </div>
        </div>
    </div>
  );
} // Component

export default Chats