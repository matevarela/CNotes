import { useState, useEffect } from 'react'
import React from 'react'
import 'animate.css'
import Logo from '../img/logo.png';
import Error from './Error';

const Login = ( {setIsValid} ) => {
const [error, setError] = useState(false);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = e => {
    e.preventDefault();
    
    // Validación del formulario
    if([email].includes('')) {
        console.log('El campo de Correo es obligatorio');
    
        setError(true);
        setTimeout(() => {
            setError(false)
        }, 3000);
        return;
    } else {
        setIsValid(true)
    }
}    

    // Iniciando sesión
    const usuario = {
        email,
        password
    }

  return (

    <div className='md:w-2/3 lg:w-2/5 mx-auto px-5'>
        <img src={Logo} className='mx-auto mb-10' alt="Logo" />
        <h1 className='text-sky-600 font-black text-6xl capitalize text-center'>
        Inicia Sesión y Accede a tus {''}
            <span className='text-slate-700'>clases!</span>
        </h1>

        <form 
            className='my-10 bg-white shadow rounded-lg p-10'
            onSubmit={handleSubmit}
        >
        {error && <Error><p>El campo de Correo es obligatorio</p></Error>}
            <div className='my-5'>
                <label 
                    className='uppercase text-gray-600 block text-xl font-bold'
                    htmlFor='email'
                >Email
                </label>
                <input 
                    type="email"
                    placeholder='Email de Registro'
                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                    id='email'
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                />
            </div>

            <div className='my-5'>
                <label 
                    className='uppercase text-gray-600 block text-xl font-bold'
                    htmlFor='password'
                >Password de Admin
                </label>
                <input 
                    type="password"
                    placeholder='Password'
                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                    id='password'
                    value={password}
                    onChange={ (e) => setPassword(e.target.value)}
                />
            </div>

            {/* <div className='my-5'>
                <label 
                    className='uppercase text-gray-600 block text-xl font-bold'
                    htmlFor='rol'
                >Rol
                </label>
                <select name='categoria' className='w-full mt-3 p-3 border rounded-xl bg-gray-50'>
                    <option value="">-- Seleccionar --</option>
                    <option value="administrador">Administrador</option>
                    <option value="vendedor">Vendedor</option>
                    <option value="rt">Comprador</option>
                </select>
            </div> */}

            <input
                type='submit'
                value='Iniciar Sesión'
                className='bg-sky-700 mb-5  w-full py-3 text-white uppercase font-bold rounded 
                hover:cursor-pointer hover:bg-sky-800 transition-colors' 
            />
        </form>
    </div>
  )
}

export default Login