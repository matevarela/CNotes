import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleXmark, faPersonRays} from '@fortawesome/free-solid-svg-icons'
import Error from './Error'
import { useState } from 'react'
import Aviso from './Aviso'

const AgregarClase = ({setNuevaClase, chats, setChats, error, setError, aviso, setAviso}) => {

  const [codigo, setCodigo] = useState('');

  // Consultando clases
  async function obtenerDatos() {
      const response = await fetch('http://127.0.0.1:5173/src/clases.json')
      const json = await response.text()

      // Consultar si ya está esa clase agregada a los chats
      const repeat = chats.map( chat => chat.contraseña === codigo)
      console.log(repeat.length)
      console.log(repeat)
      
      // Validando nuevo código
      if(repeat.length === 0) { 
        JSON.parse(json).clases.forEach( clase => {  
          if(clase.contraseña === codigo) {
              // Armando objeto de nueva clase
              const nuevoChat = {
                id : clase.id,
                nombre : clase.descripcion,
                profesor : clase.profesor,
                contraseña : clase.contraseña
              }
              setChats([...chats, nuevoChat]) // Agrega nueva clase a los chats
              cerrarModal()
              return;
          } else {
              console.log(`El código no coincide con ${clase.descripcion}`)
          }
        })
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 3000)

      } else {
        setAviso(true)
        setTimeout(() => {
          setAviso(false)
        }, 3000)

      }
  }

  const validarPassword = () => {
    
    if(codigo === '') { // Está vacío
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
      return;

    } else {
        // Validando password
        obtenerDatos()
      }
    }

    const cerrarModal = () => {
      setNuevaClase(false)
      setError(false)
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
            {aviso && <Aviso><p>Clase ya agregada</p></Aviso>}
            <p className='m-5 text-slate-200'>Ingresar Código de Clase:</p>
            <input type="text" className='text-center mx-auto py-2 rounded-md block w-full' placeholder='Ingresar Código' value={codigo} onChange={ e => setCodigo(e.target.value)}  />
            <input type="button" className='bg-sky-500 text-slate-200 font-bold uppercase py-2 w-full my-5 rounded-md hover:cursor-pointer hover:bg-sky-600 transition-colors' value="Agregar Clase" onClick={validarPassword} />
        </div>
    </div>
  )
}

export default AgregarClase