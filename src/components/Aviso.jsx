import React from 'react'

const Aviso = ({children}) => {
  return (
    <div className='bg-green-300 animate__animated animate__fadeIn text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
        {children}
    </div>
  )
}

export default Aviso