import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperclip, faPaperPlane, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import Error from './Error'



const ModalComunicado = ({ comunicadoModal, setComunicadoModal, error, setError }) => {

    const [ titulo, setTitulo] = useState('')
    const [ comunicado, setComunicado] = useState('')

    const validarComunicado = () => {
 
        if(comunicado === '') { // Está vacío
          setError(true)
          setTimeout(() => {
            setError(false)
          }, 3000)
          return;
    
        } else {
            setComunicadoModal(false)
        } 
    
    
        }
    

  return (
    <div className={'w-full text-slate-200 bg-slate-900 relative z-10 top-0 px-5 h-screen overflow-y-scroll pt-32 ' + (comunicadoModal ? "" : "hidden")}>

        <div className='grid grid-cols-12'>
            <h3 className='text-center font-bold text-2xl text-sky-500 grid col-span-11'>Nuevo Comunicado</h3>

            <button onClick={() => setComunicadoModal(false)} className="grid col-span-1">
                <FontAwesomeIcon icon={faCircleXmark} className='text-slate-400 my-auto h-10 mr-5'/>
            </button>
        </div>

        <div className='mt-10 mb-5 flex flex-col'>
            <label htmlFor="tituloComunicado" className='text-xl font-semibold'>Titulo</label>
            <input 
                type="text" 
                value={titulo}
                onChange={e => setTitulo(e.target.value)}
                id="tituloComunicado" 
                placeholder='Ingresar Titulo...' 
                className='bg-slate-900 border-2 border-slate-800 rounded-md p-2 mt-3 outline-none focus:border-sky-500 transition-all'
            />
        </div>
        <div className='flex flex-col'> 
            <label htmlFor="textoComunicado" className='text-xl font-semibold'>Comunicado</label>
            <textarea 
                id="textoComunicado" 
                value={comunicado}
                onChange={e => setComunicado(e.target.value)}
                placeholder='Ingresar Comunicado...' 
                className='bg-slate-900 border-2 border-slate-800 rounded-md p-3 h-36 mt-3 outline-none focus:border-sky-500 transition-all mb-2'>
            </textarea>
            {error && <Error><p>Completar comunicado</p></Error>}
        </div>
        <div className='flex w-full mt-5 items-center justify-end'>
            <div>
                <label htmlFor="archivoCominicado"><FontAwesomeIcon icon={faPaperclip} className='text-slate-200 my-auto h-5 mr-5  '/></label>
                <input type="file" id="archivoCominicado" name='' className='hidden'/>
            </div>

            <button
                className='flex rounded-full bg-sky-500 py-3 px-5'
                onClick={validarComunicado}
                >
                <FontAwesomeIcon icon={faPaperPlane} className='text-slate-900 my-auto mr-2'/>
                <p className='text-slate-900 font-bold'>Enviar</p>
            </button>
        </div>
    </div>
  )
}

export default ModalComunicado