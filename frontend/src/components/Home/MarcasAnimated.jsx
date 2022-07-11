
import amd from '../../images/amd-logo.png'
import aerocool from '../../images/aerocool.png'
import corsair from '../../images/corsair-logo.png'
import evga from '../../images/evga.png'
import gigabyte from '../../images/gigabyte-logo.png'
import intell from '../../images/logo intel.png'
import kingston from '../../images/kingston-logo.png'
import klipartz from '../../images/klipartz.png'
import asus from '../../images/asus.png'
import msi from '../../images/msi-logo.png'
import crucial from '../../images/crucial.png'
import sandisk from '../../images/sandisk.png'
import tforce from '../../images/t-force.png'
import thermaltake from '../../images/Thermaltake_logo.png'
import zotac from '../../images/zotac.png'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";



export default function MarcasAnimated() {
  return (
    <div className='w-full h-80 flex justify-center items-center'>
    <Swiper
      
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        centeredSlides={true}
        breakpoints={{
          340: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
           
          },
          980: {
            slidesPerView: 6,
            
          },

        }}
        modules={[Autoplay]}
        className=' flex justify-center items-center
        w-5/6 '
      >
    
        <SwiperSlide ><img src={intell} alt="" className='h-20 w-28' /></SwiperSlide>
        <SwiperSlide><img src={amd} alt="" className='h- w-28'/></SwiperSlide>
        <SwiperSlide><img src={aerocool} alt="" className='h-20'/></SwiperSlide>
        <SwiperSlide><img src={corsair} alt="" className='h-20 w-28'/></SwiperSlide>
        <SwiperSlide><img src={evga} alt="" className='h-14 w-28'/></SwiperSlide>
        <SwiperSlide><img src={gigabyte} alt="" className='h-14 w-28'/></SwiperSlide>
        <SwiperSlide><img src={kingston} alt="" className='h-14 w-28'/></SwiperSlide>
        <SwiperSlide><img src={klipartz} alt=""className='h-20 w-28'/></SwiperSlide>
        <SwiperSlide><img src={asus} alt="" className='h-20 w-28'/></SwiperSlide>
        <SwiperSlide><img src={msi} alt="" className='h-20 w-28'/></SwiperSlide>
        <SwiperSlide><img src={crucial} alt="" className='h-14 w-28'/></SwiperSlide>
        <SwiperSlide><img src={sandisk} alt="" className='h-20 w-28'/></SwiperSlide>
        <SwiperSlide><img src={tforce} alt="" className='h-20 w-28'/></SwiperSlide>
        <SwiperSlide><img src={thermaltake} alt=""className='h-20 w-28'/></SwiperSlide>
        

    
    </Swiper>

    </div>
  )
}
