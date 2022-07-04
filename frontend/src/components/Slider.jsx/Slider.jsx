import React,{useState} from 'react'
import promo1 from '../../images/hyperx.jpg'
import promo2 from '../../images/logitech.gif'
import promo3 from '../../images/redragon.jpg'
import {AiOutlineLeft} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'


const images=[promo1,promo2,promo3]
let count=0
const Slider = () => {

  const [imagenActual, setImagenActual]= useState(0)

  
  const handleNext=()=>{
    count=(count + 1) % images.length
    setImagenActual(count)

  }
  const handlePrev=()=>{
    let promosLength= images.length;
    count= (imagenActual + promosLength - 1) % promosLength;
    setImagenActual(count)

   
  }
  return (
    <div className='w-full select-none relative flex  justify-start items-center lg:hover:text-primary-300 '>
          <button className='absolute lg:text-transparent lg:ml-11 sm:text-primary-300 ' onClick={()=>handlePrev()}><AiOutlineLeft className='lg:h-10 lg:w-10  '/></button>
          <img src={images[imagenActual]} alt="promo1" className='w-full object-cover lg:h-80 sm:h-50 sm:h-24 '></img>
          <button className='absolute right-0 lg:text-transparent lg:mr-11 sm:text-primary-300 ' onClick={()=>handleNext()}> <AiOutlineRight className='lg:h-10 lg:w-10   lg:hover:text-primary-500'/></button>

    </div>
  )
}

export default Slider