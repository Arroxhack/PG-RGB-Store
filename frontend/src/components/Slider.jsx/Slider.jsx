
import promo1 from '../../images/armatupc.jpg'
import promo2 from '../../images/msi.jpg'
import promo3 from '../../images/ryzen.jpg'
import React, { useRef, useState } from "react";
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
        <SwiperSlide className='w-full lg:h-96 sm:h-52'>
          <Link to='arma-tu-pc'>
          <img className='w-full lg:h-80 sm:h-52' src={promo1} alt="" />
          </Link>
        </SwiperSlide>
        
        <SwiperSlide  className='w-full lg:h-96 sm:h-52'>
          <Link to='categories?category=all&brand=MSI'>
          <img src={promo2} className='w-full lg:h-80 sm:h-52' alt="" />
          </Link>
          </SwiperSlide>
        
        <SwiperSlide  className='w-full lg:h-96 sm:h-52'>
          <Link to='categories?category=all&brand=AMD'>
          <img src={promo3}  className='w-full lg:h-80 sm:h-52' alt="" />
          </Link>
          </SwiperSlide>
       
      </Swiper>
    </>
  );
}

