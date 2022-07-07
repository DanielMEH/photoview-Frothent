import React from 'react'
import logo from '../assets/image/mockup.png'
import imagelaptor from '../assets/image/laptor.png'
import that from '../assets/image/that1.png'
import image from '../assets/image/Image.png'
import mack from '../assets/image/mack.png'
import iphone from '../assets/image/Screen.png'
import windows from '../assets/image/windows.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {Slider} from './Slider'
AOS.init({
  duration:1500
});
export const Main = () => {
  return (
    <main>
    <div className='grid grid-cols-1 w-4/5 m-auto max-w-7xl mx-auto'>
   <div >
   <h2 className=' text-black mt-12 text-5xl font-bold mb-2 
   text-center mt-24 max-w-3xl mx-auto '>
    Guarda y comparte fácilmente
lo que realmente te importa crea 
<ul className='typing '>
  <li><span>Historias</span></li>
  <li><span>Albums</span></li>
  <li><span>Recuerdos</span></li>
  <li><span>Colecciones</span></li>
  </ul> 
  </h2>
      <p className='text-black text-tart
      text-center'>Crea tu album y comparte con amigos y familiares</p>
   </div>
   <div>
    <img  id='scrolImage' src={logo} alt='logo' />
   </div>
    </div>

    <div  className='max-w-7xl mx-auto '>
      <div className='gd'>
        <div>
          <article data-aos="fade-right">
          <h2 className='  mt-12 text-5xl font-bold mb-2 
    mt-24  text-blue-600'>
            cuenta con una gran cantidad de funcionalidades
          </h2>
          <p>
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet
          </p>
          <a href='/login' className='border rounded border-blue-600
          text-blue-500 text-xl p-3 mt-3 inline-block
          hover:bg-blue-500 hover:text-white duration-300'> Crear cuenta</a>
          </article>


        </div>
        <div>
          <figure className='w-[60rem] '>
          <img src={imagelaptor} alt='laptor' className='w-full' />
          </figure>
        </div>
        
      </div>

    </div>
    <div  className='max-w-7xl mx-auto '>
      <div className='grid grid-cols-2'>
        <div>
          <article className='max-w-xl'data-aos="fade-right">
          <h2 className='  mt-12 text-5xl font-bold mb-2 
    mt-24  text-blue-600'>
            cuenta con una gran cantidad de funcionalidades
          </h2>
          <p>
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet
          </p>
          <a href='/login' className='border rounded border-blue-600
          text-blue-500 text-xl p-3 mt-3 inline-block
          hover:bg-blue-500 hover:text-white duration-300'> Crear cuenta</a>
          </article>


        </div>
        <div>
          <figure className='  flex justify-center m-2'>
          <img src={that} alt='laptor' className='drop-shadow-2xl
          rounded-[1rem]' />
          </figure>
        </div>
        
      </div>

    </div>
    <div  className='max-w-7xl mx-auto mt-[10rem]'>
      <div className='grid grid-cols-2'>
        <div>
          <article className='max-w-xl'data-aos="fade-right">
          <h2 className='  mt-12 text-5xl font-bold mb-2 
    mt-24  text-blue-600'>
            cuenta con una gran cantidad de funcionalidades
          </h2>
          <p>
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet
          </p>
          <a href='/login' className='border rounded border-blue-600
          text-blue-500 text-xl p-3 mt-3 inline-block
          hover:bg-blue-500 hover:text-white duration-300'> Crear cuenta</a>
          </article>


        </div>
        <div>
          <figure className='  flex justify-center m-2'>
          <img src={image} alt='laptor' className='drop-shadow-2xl
          rounded-[2rem] ' />
          </figure>
        </div>
        
      </div>

    </div>
    <div>
      <h3 className='text-center mt-20 text-5xl font-bold'>Personaliza Tu sitio a tu gusto</h3>
    </div>
    <div className='max-w-7xl mx-auto mt-[3rem] mb-[3rem]'>
      <picture className='relative'>
        <figure className='relative' data-aos="fade-right">
          <img src={mack} alt='laptor' className='w-full
          rounded-[2rem] drop-shadow-2xl'  />
        </figure>
        <figure className='absolute top-32 left-[66rem] z-100 w-[96rem]' data-aos="fade-up"
     data-aos-anchor-placement="bottom-center">
          <img src={iphone} alt='laptor' className=''/>
        </figure>
      </picture>
    </div>
    <div className='grid grid-cols-5 gap-4 p-2'>
      <section className=" inline-flex items-center 
        shadow-2xl rounded-[1rem] ">
        <div className=''>
          <picture >
            <figure className='relative w-28 p-2' >
              <img src={windows} alt='laptor' className='w-full'/>
            </figure>
          </picture>
        </div>
        <div>
          <p  className='p-2 w-56'>
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
          </p>
        </div>

      </section>
      <section className=" inline-flex items-center 
        shadow-2xl rounded-[1rem] ">
        <div className=''>
          <picture >
            <figure className='relative w-28 p-2' >
              <img src={windows} alt='laptor' className='w-full'/>
            </figure>
          </picture>
        </div>
        <div>
          <p  className='p-2 w-56'>
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
          </p>
        </div>

      </section>
      <section className=" inline-flex items-center 
        shadow-2xl rounded-[1rem] ">
        <div className=''>
          <picture >
            <figure className='relative w-28 p-2' >
              <img src={windows} alt='laptor' className='w-full'/>
            </figure>
          </picture>
        </div>
        <div>
          <p  className='p-2 w-56'>
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
          </p>
        </div>

      </section>
      <section className=" inline-flex items-center 
        shadow-2xl rounded-[1rem] ">
        <div className=''>
          <picture >
            <figure className='relative w-28 p-2' >
              <img src={windows} alt='laptor' className='w-full'/>
            </figure>
          </picture>
        </div>
        <div>
          <p  className='p-2 w-56'>
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
          </p>
        </div>

      </section>
      <section className=" inline-flex items-center 
        shadow-2xl rounded-[1rem] ">
        <div className=''>
          <picture >
            <figure className='relative w-28 p-2' >
              <img src={windows} alt='laptor' className='w-full'/>
            </figure>
          </picture>
        </div>
        <div>
          <p  className='p-2 w-56'>
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
          </p>
        </div>

      </section>
   
    </div>


    <div className='grid grid-cols-4 gap-4 p-2'>
      
      <section className=" inline-flex items-center 
        shadow-2xl rounded-[1rem] ">
        <div className=''>
          <picture >
            <figure className='relative w-28 p-2' >
              <img src={windows} alt='laptor' className='w-full'/>
            </figure>
          </picture>
        </div>
        <div>
          <p  className='p-2 w-56'>
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
          </p>
        </div>

      </section>
      
      <section className=" inline-flex items-center 
        shadow-2xl rounded-[1rem] ">
        <div className=''>
          <picture >
            <figure className='relative w-28 p-2' >
              <img src={windows} alt='laptor' className='w-full'/>
            </figure>
          </picture>
        </div>
        <div>
          <p  className='p-2 w-56'>
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
          </p>
        </div>

      </section>
      <section className=" inline-flex items-center 
        shadow-2xl rounded-[1rem] ">
        <div className=''>
          <picture >
            <figure className='relative w-28 p-2' >
              <img src={windows} alt='laptor' className='w-full'/>
            </figure>
          </picture>
        </div>
        <div>
          <p  className='p-2 w-56'>
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
          </p>
        </div>

      </section>
      <section className=" inline-flex items-center 
        shadow-2xl rounded-[1rem] ">
        <div className=''>
          <picture >
            <figure className='relative w-28 p-2' >
              <img src={windows} alt='laptor' className='w-full'/>
            </figure>
          </picture>
        </div>
        <div>
          <p  className='p-2 w-56'>
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
          </p>
        </div>

      </section>
   
    </div>
    <div>

    </div>
    < Slider/>
    </main>
  )
}
