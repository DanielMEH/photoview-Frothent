  import React,{useRef} from 'react'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBars } from '@fortawesome/free-solid-svg-icons'
  import logo from '../assets/image/mockup.png'
  import "../assets/css/style.css"


  export const Header = () => {
  return (
    <>
      
      <div className='flex justify-between 
     p-2 items-center 0  max-w-7xl mx-auto'>
      <div className='font-bold text-slate-900 text-blue-500  text-[2.30rem] ' ><h1>Photoviews</h1></div>
    <div>
      <ul className='flex'>
        <li className='text-[1.2rem] mx-4'><a href='/ruta'>Quienes somos</a></li>
        <li className='text-[1.2rem] mx-4'><a href='/ruta'>Nuestra empresa</a></li>
        <li className='text-[1.2rem] mx-4'><a href='/ruta'>Ayuda</a></li>
      </ul>
    </div>
    <div className='flex items-center text-[1.2rem]  text-black'><span className='mx-1
    '><a href='/registrarse'>Registrarse</a></span> <span className='mx-1 
    text- p-1 rounded rounded-2 border border-blue-500 hover:text-white
    duration-300
    hover:bg-blue-500 text-[1.2rem]'><a href='/registrarse'>Iniciar sesión</a></span>
    </div>
    </div>
    
    </>
  )
}
