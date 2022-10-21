import React from 'react'
import Mensaje from './Mensaje'

const ListadoMensajes = ({mensajeTexto}) => {
  return (
    <div>
        <h5>Aún no hay Mensajes</h5>
        {mensajeTexto.map(mensaje => (
            <Mensaje
                key={mensaje.id}
                mensaje={mensaje}
            />
        ))}
    </div>
  ) 
}

export default ListadoMensajes