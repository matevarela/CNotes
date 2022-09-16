import { useState } from 'react'
import PerfilFoto from '../img/icon.jpg'

const Perfil = ({ perfilMenu, setPerfilMenu }) => {



  return (
    <div className={'w-full bg-slate-800 top-0 hidden' + (perfilMenu ? "hidden" : "")}>
        <div className='pt-20 items-center my-10'>
          <img src={PerfilFoto} alt="Foto de Perfil" className='rounded-full h-40 mx-auto border-2 p-1 border-slate-200'/>
          <h3 className='text-sky-500 font-bold text-4xl text-center mt-8 mx-5'>Dylan Santillán</h3>
          <h4 className='text-slate-200 font-normal text-2xl text-center mt-3 mx-5'>Instituto Técnico Dr. Emilio Lamarca</h4>
        </div>
<<<<<<< HEAD
        <div className='grid md:m-0 md:grid-cols-2 lg:flex lg:flex-col'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 text-center'>
            <div className='p-5 bg-slate-400 rounded-md'>
              <p className='text-center font-bold text-3xl'>7</p>
              <p className="">Inasistencias</p>
            </div>
            <div className='p-5 bg-slate-400 rounded-md'>
              <p className='text-center font-bold text-3xl'>10</p>
              <p className="">Clases</p>
            </div>
            <div className='p-5 bg-slate-400 rounded-md'>
              <p className='text-center font-bold text-3xl'>7</p>
              <p className="">Inasistencias</p>
            </div>
            <div className='p-5 bg-slate-400 rounded-md'>
              <p className='text-center font-bold text-3xl'>7</p>
              <p className="">Inasistencias</p>
            </div>
=======


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
            
>>>>>>> 97c03b99ee9fcb8352605471ef3321294994c4cc
          </div>

          <div>
            <h4 className='text-sky-500 font-semibold text-3xl text-center mx-5 my-10 '>DATOS PERSONALES</h4>
            <h6 className='text-slate-500 font-semibold text-2xl mx-5 mt-3'>CURSO:</h6>
            <p className='text-slate-200 font-semibold text-xl mx-5'>7MO</p>
            <h6 className='text-slate-500 font-semibold text-2xl mx-5 mt-3'>D.N.I:</h6>
            <p className='text-slate-200 font-semibold text-xl mx-5'>45055096</p>
            <h6 className='text-slate-500 font-semibold text-2xl mx-5 mt-3'>DOMICILIO:</h6>
            <p className='text-slate-200 font-semibold text-xl mx-5'>Arana Goiri 5435</p>
            <h6 className='text-slate-500 font-semibold text-2xl mx-5 mt-3'>TELÉFONO:</h6>
            <p className='text-slate-200 font-semibold text-xl mx-5'>1126760232</p>
          </div>

          <div>
            <h4 className='text-sky-500 font-semibold text-3xl text-center mx-5 mt-16 mb-10 md:mt-0 lg:mt-16'>AUTORIDAD DE LA ESCUELA</h4>
            <h6 className='text-slate-500 font-semibold text-2xl mx-5 mt-3'>DIRECTOR/A:</h6>
            <p className='text-slate-200 font-semibold text-xl mx-5'>Jara, Natalia Andrea</p>
            <h6 className='text-slate-500 font-semibold text-2xl mx-5 mt-3'>VICEDIRECTOR/A</h6>
            <p className='text-slate-200 font-semibold text-xl mx-5'>Sanchez, Jose Luis</p>
            <h6 className='text-slate-500 font-semibold text-2xl mx-5 mt-3'>SECRETARIO:</h6>
            <p className='text-slate-200 font-semibold text-xl mx-5'>Amaya, Juan Pablo</p>
            <h6 className='text-slate-500 font-semibold text-2xl mx-5 mt-3'>PRECEPTOR:</h6>
            <p className='text-slate-200 font-semibold text-xl mx-5'>Germán Trapani</p>
          </div>
        </div>
    </div>
  )
}

export default Perfil