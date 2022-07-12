import React from 'react'
import { Link } from 'react-router-dom'
import cases from '../BuildPc/imagesBuild/case.svg'
import cooler from '../BuildPc/imagesBuild/cooler.svg'
import cpu from '../BuildPc/imagesBuild/cpu.svg'
import hdd from '../BuildPc/imagesBuild/hdd.svg'
import m2 from '../BuildPc/imagesBuild/m2.svg'
import mother from '../BuildPc/imagesBuild/mother.svg'
import psu from '../BuildPc/imagesBuild/psu.svg'
import ram from '../BuildPc/imagesBuild/ram.svg'
import ssd from '../BuildPc/imagesBuild/ssd.svg'
import vga from '../BuildPc/imagesBuild/vga.svg'

export default function Componentes() {
  return (
        <div className='w-full lg:flex flex-col justify-center items-center my-24 font-Open text-lg text-primary-400 font-semibold sm:hidden lg:block'>
            <div className='w-11/12 flex flex-col justify-center items-center border-b-4 border-primary-700 mb-10 '>
            <h1 className='text-2xl text-primary-400 uppercase font-open font-semibold' >What are you looking for?</h1>
            </div>
            <div className='w-10/12 h-[22rem] bg-secundary-250 lg:hover:cursor-pointer mt-8 '>
                <div className='w-full h-1/2 border  flex'>
                 <div className='w-1/5 flex flex-col items-center justify-center  border-r border-primary-600 gap-2 hover:transition hover:duration-75 hover:ease-in hover:delay-75  hover:shadow-lg hover:shadow-primary '>
                 <Link to='categories?category=Case&page=1' className='flex flex-col justify-center items-center'>
                 <img src={cases} alt=""className='h-16 w-16' />
                 <p>Cases</p>
                 </Link>
                 </div>  
                 <div className='w-1/5 flex flex-col items-center justify-center border-r border-primary-600 gap-2 hover:transition hover:duration-75 hover:ease-in hover:delay-75  hover:shadow-lg hover:shadow-primary '>
                 <img src={cooler} alt=""className='h-16 w-16' />
                 <p>Coolers</p>
                 </div>  
                 <div className='w-1/5 flex flex-col items-center justify-center border-r border-primary-600 gap-2 hover:transition hover:duration-75 hover:ease-in hover:delay-75  hover:shadow-lg hover:shadow-primary '>
                 <Link to='categories?category=CPU&page=1' className='flex flex-col justify-center items-center'>
                 <img src={cpu} alt=""className='h-16 w-16' />
                 <p>Cpus</p>
                 </Link></div>  
                 <div className='w-1/5 flex flex-col items-center justify-center border-r border-primary-600 gap-2 hover:transition hover:duration-75 hover:ease-in hover:delay-75  hover:shadow-lg hover:shadow-primary  '>
                 <Link to='categories?category=HDD&page=1' className='flex flex-col justify-center items-center'>
                 <img src={hdd} alt=""className='h-16 w-16' />
                 <p>Hdd</p>
                 </Link></div>  
                 <div className='w-1/5 flex flex-col items-center justify-center hover:transition hover:duration-75 hover:ease-in hover:delay-75  hover:shadow-lg hover:shadow-primary '>
                 <Link to='categories?category=SSD+M.2&page=1' className='flex flex-col justify-center items-center'>
                 <img src={m2} alt=""className='h-16 w-16' />
                 <p>SSD M.2</p>
                 </Link>
                 </div>   
                </div>

                <div className='w-full h-1/2  flex'>
                <div className='w-1/5 flex flex-col items-center justify-center border-r border-primary-600  gap-2 hover:transition hover:duration-75 hover:ease-in hover:delay-75  hover:shadow-lg hover:shadow-primary '>
                <Link to='categories?category=Motherboard&page=1' className='flex flex-col justify-center items-center'>
                 <img src={mother} alt=""className='h-16 w-16' />
                 <p>Motherboards</p>
                 </Link>
                 </div>  
                 <div className='w-1/5 flex flex-col items-center justify-center border-r border-primary-600 gap-2 hover:transition hover:duration-75 hover:ease-in hover:delay-75  hover:shadow-lg hover:shadow-primary  '>

                 <Link to='categories?category=Power+Supply&page=1' className='flex flex-col justify-center items-center'>
                 <img src={psu} alt=""className='h-16 w-16' />
                 <p>Power supply</p>
                 </Link></div>  
                 <div className='w-1/5 flex flex-col items-center justify-center border-r border-primary-600 gap-2 hover:transition hover:duration-75 hover:ease-in hover:delay-75  hover:shadow-lg hover:shadow-primary  '>
                 <Link to='categories?category=Ram&page=1' className='flex flex-col justify-center items-center'>
                 <img src={ram} alt=""className='h-16 w-16' />
                 <p>Rams</p>
                 </Link></div>  
                 <div className='w-1/5 flex flex-col items-center justify-center border-r border-primary-600  gap-2 hover:transition hover:duration-75 hover:ease-in hover:delay-75  hover:shadow-lg hover:shadow-primary '>
                 <Link to='categories?category=SSD&page=1' className='flex flex-col justify-center items-center'>
                 <img src={ssd} alt=""className='h-16 w-16' />
                 <p>SSD</p>
                 </Link></div>  
                 <div className='w-1/5 flex flex-col items-center justify-center border-r border-primary-600 gap-2 hover:transition hover:duration-75 hover:ease-in hover:delay-75  hover:shadow-lg hover:shadow-primary '>
                 <Link to='categories?category=GPU&page=1' className='flex flex-col justify-center items-center'>
                 <img src={vga} alt=""className='h-16 w-16' />
                 <p>Gpus</p>
                 </Link></div>  
                </div>

            </div>
        </div>
  )
}
