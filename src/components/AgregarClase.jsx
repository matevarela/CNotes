import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleXmark, faPersonRays} from '@fortawesome/free-solid-svg-icons'
import Error from './Error'
import { useState } from 'react'

const AgregarClase = ({setNuevaClase, chats, setChats, error, setError}) => {

  const[codigo, setCodigo] = useState('');
  const[nombre, setNombre] = useState('');
  const[profesor, setProfesor] = useState();

  const clases = [ 

    {
      password :'matematica',
      nombre : 'Matemáticas',
      profesor :'profematematica@gmail.com'
    },

    {
      password :'fisica',
      nombre :'Física',
      profesor :'profefisica@gmail.com'
    },

    {
      password :'literatura',
      nombre : 'Literatura',
      profesor :'profeliteratura@gmail.com'
    },

    {
      password :'artistica',
      nombre : 'Artística',
      profesor :'profeartistica@gmail.com'
    },

    {
      password :'ciudadania',
      nombre : 'Ciudadanía',
      profesor :'profeciudadania@gmail.com'
    },
  ]

  const validarPassword = () => {

    // Creando array de passwords
    const passwords = clases.map( clase => {
      const valores = Object.values(clase);
      console.log(valores[0])
    })
    

    if(codigo === '') { // Está vacío
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
      return;

    } else {
        console.log('hola')
      
    } 


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
              <FontAwesomeIcon icon={faCircleXmark} className='h-10 text-slate-500 hover:text-slate-400 cursor-pointer transition-colors mb-5'/>
            </a>
            {error && <Error><p>Código incorrecto</p></Error>}
            <p className='m-5 text-slate-200'>Ingresar Código de Clase:</p>
            <input type="text" className='text-center mx-auto py-2 rounded-md block w-full' placeholder='Ingresar Código' value={codigo} onChange={ e => setCodigo(e.target.value)}  />
            <input type="button" className='bg-sky-500 text-slate-200 font-bold uppercase py-2 w-full my-5 rounded-md hover:cursor-pointer hover:bg-sky-600 transition-colors' value="Agregar Clase" onClick={validarPassword} />
        </div>
    </div>
  )
}

export default AgregarClase