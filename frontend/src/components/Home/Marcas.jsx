import React from 'react'
import {Link} from 'react-router-dom'

export default function Marcas() {      
  return (
    <div className='h-5/6 w-full flex flex-col items-center justify-center lg:mt-28 sm:mt-11 mb-11 '>
    <div className='flex w-3/4 flex-col justify-center items-center h-4/6 '>
    <div className=' flex lg:w-[55%] sm:w-[90%] items-center justify-between '>
    <div className='h-full w-[32%] rounded-lg '>
    <Link to='categories?category=all&brand=Intel&page=1'>
    <img src="https://s3-symbol-logo.tradingview.com/intel--600.png" alt="" className='max-h-max   object-fill lg:h-64 sm:h-32 w-full rounded-lg lg:hover:opacity-80 lg:hover:cursor-pointer ' />
    </Link>
    </div>
    <div className='h-full w-[32%] rounded-lg'>
      <Link to='categories?category=all&brand=ASUS&page=1'>
    <img src="https://fanaticosdelhardware.com/wp-content/uploads/2017/05/asus-logo.jpg" className='lg:h-64 sm:h-32 object-fill w-full rounded-lg lg:hover:opacity-80 lg:hover:cursor-pointer' alt="" />
    </Link>
    </div>
    <div className='h-full w-[32%]  '>
      <Link to='categories?category=all&brand=Western+Digital&page=1'>
    <img src="https://s3-symbol-logo.tradingview.com/western-digital--600.png" className='max-h-max object-fill lg:h-64 sm:h-32 w-full rounded-lg lg:hover:opacity-80 lg:hover:cursor-pointer' alt="" />
    </Link>
    </div>
    </div>
   
    <div></div>
    <div className='lg:w-[55%] sm:w-[90%] lg:h-1/4 sm:h-20  flex justify-center mt-4'>
      <Link to='categories?category=all&brand=Corsair&page=1'>
        <img src="https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/7/AmazonStores/ATVPDKIKX0DER/10875704cb6eba9470b16ed795439592.w3000.h600.jpg"   alt=""
        className='w-full rounded-lg lg:hover:opacity-80 lg:hover:cursor-pointer h-3/4' />
        </Link>
    </div>
    </div>
    </div>
  )
}
