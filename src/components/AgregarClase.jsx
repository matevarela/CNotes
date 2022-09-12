import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'

const AgregarClase = ({setNuevaClase, chats, setChats}) => {

  const clases = {
    matematica : {
      password : 'matematica',
      nombre : 'Matemáticas',
      profesor : 'profematematica@gmail.com'
    },

    fisica : {
      password : 'fisica',
      nombre : 'Física',
      profesor : 'profefisica@gmail.com'
    },

    literatura : {
      password : 'literatura',
      nombre : 'Literatura',
      profesor : 'profeliteratura@gmail.com'
    },

    artistica : {
      password : 'artistica',
      nombre : 'Artística',
      profesor : 'profeartistica@gmail.com'
    },

    ciudadania : {
      password : 'ciudadania',
      nombre : 'Ciudadanía',
      profesor : 'profeciudadania@gmail.com'
    },
  }

  const validarPassword = e => {
  //  Validando password
    clases.forEach( clase => {
      if(e === clase.password ) {
        console.log('Agregando nueva clase');
      } else {
        console.log('contraseña incorrecta');
      }
    })
  }

  const cerrarModal = () => {
    setNuevaClase(false)
  }

  return (
    <div className='h-screen w-full bg-black flex bg-opacity-40 justify-center items-center z-10 text-center absolute transition ease-in-out delay-150'>
        <div className='bg-slate-800 py-5 px-8 rounded-lg'>
            <a
              onClick={cerrarModal}
            >
              <FontAwesomeIcon icon={faCircleXmark} className='h-10 text-slate-500 hover:text-slate-400 cursor-pointer transition-colors'/>
            </a>
            <p className='m-5 text-slate-200'>Ingresar Código de Clase:</p>
            <input type="text" className='text-center mx-auto py-2 rounded-md block w-full' placeholder='Ingresar Código' />
            <input type="button" className='bg-sky-500 text-slate-200 font-bold uppercase py-2 w-full my-5 rounded-md hover:cursor-pointer hover:bg-sky-600 transition-colors' value="Agregar Clase" onClick={ e => validarPassword(e.target.value)} />
        </div>
    </div>
  )
}

export default AgregarClase