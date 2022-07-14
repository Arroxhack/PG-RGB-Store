
import promo1 from '../../images/asusbanner.jpg'
import promo2 from '../../images/aurus.jpg'
import promo3 from '../../images/intel.jpg'
import promo4 from '../../images/msi.jpg'
import promo5 from '../../images/banner-intel.jpg'
import promo6 from '../../images/banner-mother.jpg'
import promo7 from '../../images/builder pc.jpg'
import React, { useRef, useState } from "react";
import '../../components/Loading/Loading.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';
import './Slider.css'

export default function Slider() {
  return (
    <>
      <Swiper
   
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='w-full lg:h-[23rem] sm:h-32'>
          <Link to='acategories?category=all&page=1&brand=ASUS'>
          <img className='w-full lg:h-[23rem] sm:h-32' src={promo1} alt="" />
          </Link>
        </SwiperSlide>
        
        <SwiperSlide  className='w-full lg:h-[23rem] sm:h-32'>
          <Link to='categories?category=Desktop&page=1'>
          <img src={promo2} className='w-full lg:h-[23rem] sm:h-32 absolute' alt="" />
          
          <div className='absolute h-[2rem] flex flex-col justify-between lg:ml-[10rem] lg:mt-[6rem] sm:ml-2 sm:m-2  '>
          <h1 className=' text-6xl text-primary-400 font-Open lg:text-7xl tracking-tight font-extrabold cursor-default box-efecto  sm:text-2xl'>RGB</h1>
          <h1 className='font-PT text-primary-300 font-normal lg:text-6xl tracking-tight sm:text-xl lg:box-effet shadow-[  rgba(217, 136, 15, 0.600) 5px 5px, rgba(217, 136, 15, 0.5) 10px 10px, rgba(217, 136, 15, 0.4) 15px 15px, rgba(217, 136, 15, 0.3) 20px 20px, rgba(217, 136, 15, 0.2) 25px 25px, rgba(217, 136, 15, 0.1) 30px 30px,
    rgba(217, 136, 15, 0.05) 35px 35px]  '>STORE</h1>
          </div>
  
          </Link>
          </SwiperSlide>
        
        <SwiperSlide  className='w-full lg:h-[23rem] sm:h-32'>
          <Link to='categories?category=Ram&page=1'>
          <img src={promo3}  className='w-full lg:h-[23rem] sm:h-32 absolute' alt="" />
          <div className='absolute h-[2rem] flex flex-col justify-between lg:ml-[5rem] lg:mt-[6rem] sm:ml-2  '>
          <h1 className=' text-6xl text-primary-400 font-Open lg:text-7xl tracking-tight font-extrabold cursor-default box-efecto  sm:text-2xl'>RGB</h1>
          <h1 className='font-PT text-primary-300 font-normal lg:text-6xl tracking-tight sm:text-xl lg:box-effet shadow-[  rgba(217, 136, 15, 0.600) 5px 5px, rgba(217, 136, 15, 0.5) 10px 10px, rgba(217, 136, 15, 0.4) 15px 15px, rgba(217, 136, 15, 0.3) 20px 20px, rgba(217, 136, 15, 0.2) 25px 25px, rgba(217, 136, 15, 0.1) 30px 30px,
    rgba(217, 136, 15, 0.05) 35px 35px]  '>STORE</h1>
          </div>
          </Link>
          </SwiperSlide>

          <SwiperSlide  className='w-full lg:h-[23rem] sm:h-32'>
          <Link to='categories?category=GPU&page=1'>
          <img src={promo4}  className='w-full lg:h-[23rem] sm:h-32' alt="" />
          </Link>
          </SwiperSlide>
        
          <SwiperSlide  className='w-full lg:h-[23rem] sm:h-32'>
          <Link to='categories?category=Motherboard&page=1'>
          <img src={promo5}  className='w-full lg:h-[23rem] sm:h-32' alt="" />
          </Link>
          </SwiperSlide>

          <SwiperSlide  className='w-full lg:h-[23rem] sm:h-32'>
          <Link to='categories?category=Motherboard&page=1'>
          <img src={promo6}  className='w-full lg:h-[23rem] sm:h-32 absolute' alt="" />
          <div className='absolute h-[2rem] flex flex-col justify-between lg:ml-[5rem] lg:mt-[6rem] sm:ml-2  '>
          <h1 className=' text-6xl text-primary-400 font-Open lg:text-7xl tracking-tight font-extrabold cursor-default box-efecto  sm:text-2xl'>RGB</h1>
          <h1 className='font-PT text-primary-300 font-normal lg:text-6xl tracking-tight sm:text-xl lg:box-effet shadow-[  rgba(217, 136, 15, 0.600) 5px 5px, rgba(217, 136, 15, 0.5) 10px 10px, rgba(217, 136, 15, 0.4) 15px 15px, rgba(217, 136, 15, 0.3) 20px 20px, rgba(217, 136, 15, 0.2) 25px 25px, rgba(217, 136, 15, 0.1) 30px 30px,
    rgba(217, 136, 15, 0.05) 35px 35px]  '>STORE</h1>
          </div>
          </Link>
          </SwiperSlide>

          <SwiperSlide  className='w-full lg:h-[23rem] sm:h-32'>
          <Link to='categories?category=all&brand=AMD&page=1'>
          <img src={promo7}  className='w-full lg:h-[23rem] sm:h-32' alt="" />
          </Link>
          </SwiperSlide>
       
       
      </Swiper>
    </>
  );
}

