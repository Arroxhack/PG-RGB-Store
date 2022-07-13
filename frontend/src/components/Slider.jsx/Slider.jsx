
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
          <Link to='arma-tu-pc'>
          <img className='w-full lg:h-[23rem] sm:h-32' src={promo1} alt="" />
          </Link>
        </SwiperSlide>
        
        <SwiperSlide  className='w-full lg:h-[23rem] sm:h-32'>
          <Link to='categories?category=all&brand=MSI&page=1'>
          <img src={promo2} className='w-full lg:h-[23rem] sm:h-32 absolute' alt="" />
          
          <div className='absolute h-[2rem] flex flex-col justify-between ml-[10rem] mt-[6rem]  '>
          <h1 className=' text-6xl text-primary-400 font-Open lg:text-7xl tracking-tight font-extrabold cursor-default box-efecto  sm:text-xl'>RGB</h1>
          <h1 className='font-PT text-primary-300 font-normal lg:text-6xl tracking-tight sm:text-xl lg:box-effet shadow-[  rgba(217, 136, 15, 0.600) 5px 5px, rgba(217, 136, 15, 0.5) 10px 10px, rgba(217, 136, 15, 0.4) 15px 15px, rgba(217, 136, 15, 0.3) 20px 20px, rgba(217, 136, 15, 0.2) 25px 25px, rgba(217, 136, 15, 0.1) 30px 30px,
    rgba(217, 136, 15, 0.05) 35px 35px]  '>STORE</h1>
          </div>
  
          </Link>
          </SwiperSlide>
        
        <SwiperSlide  className='w-full lg:h-[23rem] sm:h-32'>
          <Link to='categories?category=all&brand=AMD&page=1'>
          <img src={promo3}  className='w-full lg:h-[23rem] sm:h-32 absolute' alt="" />
          <div className='absolute h-[2rem] flex flex-col justify-between ml-[5rem] mt-[6rem]  '>
          <h1 className=' text-6xl text-primary-400 font-Open lg:text-7xl tracking-tight font-extrabold cursor-default box-efecto  sm:text-xl'>RGB</h1>
          <h1 className='font-PT text-primary-300 font-normal lg:text-6xl tracking-tight sm:text-xl lg:box-effet shadow-[  rgba(217, 136, 15, 0.600) 5px 5px, rgba(217, 136, 15, 0.5) 10px 10px, rgba(217, 136, 15, 0.4) 15px 15px, rgba(217, 136, 15, 0.3) 20px 20px, rgba(217, 136, 15, 0.2) 25px 25px, rgba(217, 136, 15, 0.1) 30px 30px,
    rgba(217, 136, 15, 0.05) 35px 35px]  '>STORE</h1>
          </div>
          </Link>
          </SwiperSlide>

          <SwiperSlide  className='w-full lg:h-[23rem] sm:h-32'>
          <Link to='categories?category=all&brand=AMD&page=1'>
          <img src={promo4}  className='w-full lg:h-[23rem] sm:h-32' alt="" />
          </Link>
          </SwiperSlide>

          <SwiperSlide  className='w-full lg:h-[23rem] sm:h-32'>
          <Link to='categories?category=all&brand=AMD&page=1'>
          <img src={promo5}  className='w-full lg:h-[23rem] sm:h-32' alt="" />
          </Link>
          </SwiperSlide>

          <SwiperSlide  className='w-full lg:h-[23rem] sm:h-32'>
          <Link to='categories?category=all&brand=AMD&page=1'>
          <img src={promo6}  className='w-full lg:h-[23rem] sm:h-32 absolute' alt="" />
          <div className='absolute h-[2rem] flex flex-col justify-between ml-[8rem] mt-[6rem]  '>
          <h1 className=' text-6xl text-primary-400 font-Open lg:text-7xl tracking-tight font-extrabold cursor-default box-efecto  sm:text-xl'>RGB</h1>
          <h1 className='font-PT text-primary-300 font-normal lg:text-6xl tracking-tight sm:text-xl '>STORE</h1>
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

