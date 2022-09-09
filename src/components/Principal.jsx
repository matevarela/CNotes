import React from 'react'
import Chats from './Chats.jsx'
import Grupo from './Grupo.jsx'


const Principal = () => {

  let width = window.innerWidth;

  window.addEventListener("resize", function() {
    width = window.innerWidth;
    
    
  });

  return (
    <div className='flex'>
        <Chats />
        { width >= 640 ? <Grupo/> : console.log(false) }
        
    </div>
  )
}

export default Principal