import React from 'react'

const AgregarClase = ({setNuevaClase}) => {

  const cerrarModal = () => {
    setNuevaClase(false)
  }


  

  return (
    <div className='h-screen w-full bg-black flex bg-opacity-20 justify-center items-center z-10 text-center absolute'>
        <div className='bg-gray-700 py-5 px-8 rounded-sm'>
            <a
              onClick={cerrarModal}
            >
              <p className='text-right py-2 px-4 bg-gray-600 inline-block rounded-full hover:bg-gray-500 hover:cursor-pointer transition-colors font-bold'>X</p>
            </a>
            <p className='m-5'>Ingresar Código de Clase:</p>
            <input type="text" className='text-center mx-auto py-2 rounded-sm block w-full' placeholder='Ingresar Código' />
            <input type="button" className='bg-blue-600 py-2 w-full my-5 rounded-sm hover:cursor-pointer hover:bg-blue-500 transition-colors font-semibold' value="Agregar Clase" />
        </div>
    </div>
  )
}

export default AgregarClase