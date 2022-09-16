import { useState } from 'react'
import PerfilFoto from '../img/icon.jpg'

const Perfil = ({ perfilMenu, setPerfilMenu }) => {



  return (
    <div className={'w-full bg-slate-800 top-0 hidden' + (perfilMenu ? "hidden" : "")}>
        <div className='h-screen pt-20'>
          <img src={PerfilFoto} alt="Foto de Perfil" className='rounded-full h-40 mx-auto border-2 p-1 border-slate-200'/>
          <h3 className='text-sky-500 font-bold text-4xl text-center mt-8 mx-5'>Dylan Santillán</h3>
          <h4 className='text-slate-200 font-normal text-2xl text-center mt-3 mx-5'>Instituto Técnico Dr. Emilio Lamarca</h4>
        </div>


        <div className='pb-10 grid md:m-0 md:grid-cols-2 lg:flex lg:flex-col'>
          
        <div>
            <h4 className='text-sky-500 font-semibold text-3xl text-center mx-5 mb-10'>DATOS ESCOLARES</h4>
          <div className='w-full bg-slate-900 rounded-lg h-64 grid grid-rows-2'>
            <p className='text-slate-200 font-semibold text-9xl mx-5 text-center mt-10'>17</p>
            <h6 className='text-slate-500 font-semibold text-2xl mx-5 mt-3 text-center self-end mb-5'>INASISTENCIAS</h6>
          </div>
            <h6 className='text-slate-500 font-semibold text-2xl mx-5 mt-3'>MATERIAS:</h6>
            <p className='text-slate-200 font-semibold text-xl mx-5'>10</p>
            <h6 className='text-slate-500 font-semibold text-2xl mx-5 mt-3'>PREVIAS</h6>
            <p className='text-slate-200 font-semibold text-xl mx-5'>3</p>
            <h6 className='text-slate-500 font-semibold text-2xl mx-5 mt-3'>LLAMADOS DE ATENCIÓN:</h6>
            <p className='text-slate-200 font-semibold text-xl mx-5'>2</p>
            
          </div>

          <div>
            <h4 className='text-sky-500 font-semibold text-3xl text-center mx-5 mb-10'>DATOS PERSONALES</h4>
            <h6 className='text-slate-500 font-semibold text-2xl mx-5 mt-3'>CURSO:</h6>
            <p className='text-slate-200 font-semibold text-xl mx-5'>7MO</p>
            <h6 className='text-slate-500 font-semibold text-2xl mx-5 mt-3'>D.N.I:</h6>
            <p className='text-slate-200 font-semibold text-xl mx-5'>45055096</p>
            <h6 className='text-slate-500 font-semibold text-2xl mx-5 mt-3'>DOMICILIO:</h6>
            <p className='text-slate-200 font-semibold text-xl mx-5'>Arana Goiri 5435</p>
            <h6 className='text-slate-500 font-semibold text-2xl mx-5 mt-3'>TELEFONO:</h6>
            <p className='text-slate-200 font-semibold text-xl mx-5'>1126760232</p>
          </div>

          <div>
            <h4 className='text-sky-500 font-semibold text-3xl text-center mx-5 mt-16 mb-10 md:mt-0 lg:mt-16'>AUTORIDAD DE LA ESCUELA</h4>
            <h6 className='text-slate-500 font-semibold text-2xl mx-5 mt-3'>DIRECTOR/A:</h6>
            <p className='text-slate-200 font-semibold text-xl mx-5'>Jara, natalia andrea</p>
            <h6 className='text-slate-500 font-semibold text-2xl mx-5 mt-3'>VICEDIRECTOR/A</h6>
            <p className='text-slate-200 font-semibold text-xl mx-5'>Sanchez, jose luis</p>
            <h6 className='text-slate-500 font-semibold text-2xl mx-5 mt-3'>SECRETARIO:</h6>
            <p className='text-slate-200 font-semibold text-xl mx-5'>Amaya, juan pablo</p>
            <h6 className='text-slate-500 font-semibold text-2xl mx-5 mt-3'>PRECEPTOR:</h6>
            <p className='text-slate-200 font-semibold text-xl mx-5'>German trapani</p>
          </div>
        </div>
    </div>
  )
}

export default Perfil