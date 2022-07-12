import React from 'react'
import NavBar from '../NavBar/NavBar'
import imgJoa from './images/joa.jpg'
import {AiFillGithub} from 'react-icons/ai'
import {SiLinkedin} from 'react-icons/si'
import {SiGmail} from 'react-icons/si'

export default function Us() {
  return (
    <div className='h-screen w-full bg-primary-200 overflow-auto'>
        <NavBar/>
       <div className='flex flex-col h-full justify-start items-center mt-24  '>
        <div className='h-64 w-2/4  border border-secundary-250 rounded-md shadow-md shadow-primary-300'>
        <div className='w-full h-full flex '>

         <div className='h-28 w-28   ml-8 mt-6'>
            <img src={imgJoa} alt=""  className=' h-28 w-28 rounded-full'/>
         </div>

         <div className='flex flex-col justify-around ml-12 h-full w-3/4'>
            <h1 className='text-2xl font-PT text-primary-400 mb-4'>Joaquin Irazabal</h1>
            <p className='text-lg -mt-8 font-Open text-secundary-100'>Soy una persona que siempre
                quiere impulsar y mejorar sus
                habilidades, estoy dispuesto a
                aprender nuevas tecnologías,
                me gusta trabajar en equipo y
                amoldarme a las diferentes
                metodologías de trabajo.</p>
                <div className='w-full h-8 flex justify-between items-center text-primary-400 '>
                <div className='flex items-center'>
                <a href="https://github.com/Joairazabal" >
                <AiFillGithub className='h-8 w-8 opacity-30 hover:opacity-100'/>
                </a>
                <a href="https://www.linkedin.com/in/joaquin-irazabal/" >
                <SiLinkedin className='h-6 w-8 opacity-30 hover:opacity-100'/>
                </a>
                </div>
                <div>
                    <h1 className='text-base underline opacity-30 mr-2'>joairazabal1@gmail.com</h1>
                </div>
                </div>
         </div>
         
         </div>

        </div>
       </div>



       </div>
  )
}
