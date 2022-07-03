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
    <div className='w-full select-none relative flex fle-col justify-start items-center '>
          <button className='absolute text-secundary-100 ' onClick={()=>handlePrev()}><AiOutlineLeft/></button>
          <img src={images[imagenActual]} alt="promo1" className='w-full object-cover h-80'></img>
          <button className='absolute right-0 text-secundary-100 ' onClick={()=>handleNext()}> <AiOutlineRight/></button>

    </div>
  )
}

export default Slider