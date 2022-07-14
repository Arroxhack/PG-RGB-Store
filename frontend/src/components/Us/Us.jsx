import React from 'react'
import NavBar from '../NavBar/NavBar'
import imgJoa from './images/joa.jpg'
import {AiFillGithub} from 'react-icons/ai'
import {SiLinkedin} from 'react-icons/si'
import nacho  from './images/nacho.jpeg'
import gio  from './images/gio.jpeg'
import tino from './images/tino.jpeg'
import juli from './images/juli.jpeg'
import david from './images/david.jpeg'

export default function Us() {
  return (
    <div className='h-screen w-full bg-primary-200 overflow-auto'>
        <NavBar/>
       <div className='flex flex-col h-full justify-start items-center w-full lg:mt-16 sm:mt-4 '>
        <div className='lg:w-2/4 flex flex-col justify-center items-center sm:w-2/4'>
          <h1 className='text-4xl font-Open text-primary-400'>Our team</h1>
          <p className='lg:mt-6 lg:text-lg font-Open text-secundary-100 sm:mt2 sm:text-center text-sm md:mt-2'>We are a group of students from soyHenry and this is our final project. We hope you like it.</p>
       
        </div>
        <div className='w-4/5 h-screen lg:flex lg:justify-center lg:gap-12 sm:grid sm:grid-cols-1'>
          
          
          <div className='lg:w-1/3 lg:h-3/4 lg:my-12 sm:mt-11 '>

          <div className='lg:h-1/4 border border-primary-400 rounded-lg flex justify-between sm:h-1/3' >
          <div className='w-1/4 h-full flex justify-center items-center'>
            <img src={imgJoa} alt="" className='lg:h-3/4 lg:w-3/4 sm:h-2/4 sm:w-2/4 rounded-full md:h-24 md:w-24'/>
          </div>
          <div className='w-9/12 flex flex-col justify-around '>
            <h1 className='lg:text-xl text-primary-300 sm:mt-2 md:text-xl'> Joaquin Irazabal</h1>
            <h2 className='text-sm text-secundary-250 lg:-mt-4 sm:-mt-2 md:-mt-6 md:text-base'>Full stack developer - Front-end oriented</h2>
            <div className='w-full flex justify-end items-center '>
              <div className='flex mr-4 text-primary-300 gap-2 lg-mt-11 items-center'>
          <a href="https://github.com/Joairazabal" target='_blanck' className='lg:hover:opacity-80 lg:opacity-30 '>
          <AiFillGithub className='md:h-8 md:w-8 lg:h-6.5 lg:w-6'/>
          </a>
          <a href="https://www.linkedin.com/in/joaquin-irazabal/" target='_blanck' className='lg:hover:opacity-80 lg:opacity-30 '>
          <SiLinkedin className='md:h-7 md:w-7 lg:h-5 lg:w-5'/>
          </a>
          </div>
        </div>
          </div>
          </div>
          
          <div className='lg:h-1/4 border border-primary-400 rounded-lg flex justify-between sm:h-1/3 my-4' >
          <div className='w-1/4 h-full flex justify-center items-center'>
            <img src={nacho} alt="" className='lg:h-3/4 lg:w-3/4 sm:h-2/4 sm:w-2/4 rounded-full md:h-24 md:w-24'/>
          </div>
          <div className='w-9/12 flex flex-col justify-around '>
            <h1 className='lg:text-xl text-primary-300 sm:mt-2 md:text-xl  '>Ignacio Nazar</h1>
            <h2 className='text-sm text-secundary-250 lg:-mt-4 sm:-mt-2 md:-mt-6 md:text-base'>Full stack developer - Back-end oriented</h2>
            <div className='w-full flex justify-end items-center '>
              <div className='flex mr-4 text-primary-300 gap-2 lg-mt-11 items-center'>
              <a href="https://github.com/NachooNazar" target='_blanck' className='lg:hover:opacity-80 lg:opacity-30 '>
          <AiFillGithub className='md:h-8 md:w-8 lg:h-6.5 lg:w-6'/>
          </a>
          <a href="https://www.linkedin.com/in/ignacio-nazar-7b741a223/" target='_blanck' className='lg:hover:opacity-80 lg:opacity-30 '>
          <SiLinkedin className='md:h-7 md:w-7 lg:h-5 lg:w-5'/>
          </a>
          </div>
        </div>
          </div>
          </div>

          
          <div className='lg:h-1/4 border border-primary-400 rounded-lg flex justify-between sm:h-1/3' >
          <div className='w-1/4 h-full flex justify-center items-center'>
            <img src={tino} alt="" className='lg:h-3/4 lg:w-3/4 sm:h-2/4 sm:w-2/4 rounded-full md:h-24 md:w-24'/>
          </div>
          <div className='w-9/12 flex flex-col justify-around '>
            <h1 className='lg:text-xl text-primary-300 sm:mt-2 md:text-xl  '>Valentino Russo</h1>
            <h2 className='text-sm text-secundary-250 lg:-mt-4 sm:-mt-2 md:-mt-6 md:text-base'>Full stack developer - Back-end oriented</h2>
            <div className='w-full flex justify-end items-center '>
              <div className='flex mr-4 text-primary-300 gap-2 lg-mt-11 items-center'>
              <a href="https://github.com/tinorusso1012" target='_blanck' className='lg:hover:opacity-80 lg:opacity-30 '>
          <AiFillGithub className='md:h-8 md:w-8 lg:h-6.5 lg:w-6'/>
          </a>
          <a href="https://www.linkedin.com/in/valentino-russo-543399236/" target='_blanck' className='lg:hover:opacity-80 lg:opacity-30 '>
          <SiLinkedin className='md:h-7 md:w-7 lg:h-5 lg:w-5'/>
          </a>
          </div>
        </div>
          </div>
          </div>
          
          </div>



          <div className='lg:w-1/3 lg:h-3/4 lg:my-12 mt-12'>

          <div className='lg:h-1/4 border border-primary-400 rounded-lg flex justify-between sm:h-1/3' >
          <div className='w-1/4 h-full flex justify-center items-center'>
            <img src={gio} alt="" className='lg:h-3/4 lg:w-3/4 sm:h-2/4 sm:w-2/4 rounded-full md:h-24 md:w-24'/>
          </div>
          <div className='w-9/12 flex flex-col justify-around '>
            <h1 className='lg:text-xl text-primary-300 sm:mt-2 md:text-xl  '>Giovanna Antonucci</h1>
            <h2 className='text-sm text-secundary-250 lg:-mt-4 sm:-mt-2 md:-mt-6 md:text-base'>Full stack developer - Front-end oriented</h2>
            <div className='w-full flex justify-end items-center '>
              <div className='flex mr-4 text-primary-300 gap-2 lg-mt-11 items-center'>
          <a href="https://github.com/gioantonucci" target='_blanck' className='lg:hover:opacity-80 lg:opacity-30 '>
          <AiFillGithub className='md:h-8 md:w-8 lg:h-6.5 lg:w-6'/>
          </a>
          <a href="https://www.linkedin.com/in/giovanna-antonucci/" target='_blanck' className='lg:hover:opacity-80 lg:opacity-30 '>
          <SiLinkedin className='md:h-7 md:w-7 lg:h-5 lg:w-5'/>
          </a>
          </div>
        </div>
          </div>
          </div>


          <div className='lg:h-1/4 border border-primary-400 rounded-lg flex justify-between sm:h-1/3 my-4' >
          <div className='w-1/4 h-full flex justify-center items-center'>
            <img src={juli} alt="" className='lg:h-3/4 lg:w-3/4 sm:h-2/4 sm:w-2/4 rounded-full md:h-24 md:w-24'/>
          </div>
          <div className='w-9/12 flex flex-col justify-around '>
            <h1 className='lg:text-xl text-primary-300 sm:mt-2 md:text-xl  '>Julian Pardeiro</h1>
            <h2 className='text-sm text-secundary-250 lg:-mt-4 sm:-mt-2 md:-mt-6 md:text-base'>Full stack developer</h2>
            <div className='w-full flex justify-end items-center '>
              <div className='flex mr-4 text-primary-300 gap-2 lg-mt-11 items-center'>
              <a href="https://github.com/Arroxhack" target='_blanck' className='lg:hover:opacity-80 lg:opacity-30 '>
          <AiFillGithub className='md:h-8 md:w-8 lg:h-6.5 lg:w-6'/>
          </a>
          <a href="https://www.linkedin.com/in/julian-pardeiro-20b8b268/" target='_blanck' className='lg:hover:opacity-80 lg:opacity-30 '>
          <SiLinkedin className='md:h-7 md:w-7 lg:h-5 lg:w-5'/>
          </a>
          </div>
        </div>
          </div>
          </div>

          <div className='lg:h-1/4 border border-primary-400 rounded-lg flex justify-between sm:h-1/3' >
          <div className='w-1/4 h-full flex justify-center items-center'>
            <img src={david} alt="" className='lg:h-3/4 lg:w-3/4 sm:h-2/4 sm:w-2/4 rounded-full md:h-24 md:w-24'/>
          </div>
          <div className='w-9/12 flex flex-col justify-around '>
            <h1 className='lg:text-xl text-primary-300 sm:mt-2 md:text-xl  '>David Barrios</h1>
            <h2 className='text-sm text-secundary-250 lg:-mt-4 sm:-mt-2 md:-mt-6 md:text-base'>Full stack developer</h2>
            <div className='w-full flex justify-end items-center '>
              <div className='flex mr-4 text-primary-300 gap-2 lg-mt-11 items-center'>
              <a href="https://github.com/dabarrio" target='_blanck' className='lg:hover:opacity-80 lg:opacity-30 ' >
          <AiFillGithub className='md:h-8 md:w-8 lg:h-6.5 lg:w-6'/>
          </a>
          <a href="https://www.linkedin.com/in/david-barrios-57964521b/" target='_blanck' className='lg:hover:opacity-80 lg:opacity-30 '>
          <SiLinkedin className='md:h-7 md:w-7 lg:h-5 lg:w-5'/>
          </a>
          </div>
        </div>
          </div>
          </div>

          </div>

        </div>

       </div>



       </div>
  )
}
