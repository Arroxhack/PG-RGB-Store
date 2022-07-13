
import promo1 from '../../images/asusbanner.jpg'
import promo2 from '../../images/aurus.jpg'
import promo3 from '../../images/intel.jpg'
import promo4 from '../../images/msi.jpg'
import promo5 from '../../images/banner-intel.jpg'
import promo6 from '../../images/banner-mother.jpg'
import promo7 from '../../images/builder pc.jpg'
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
        <SwiperSlide className='w-full lg:h-[23rem] sm:h-32'>
          <Link to='arma-tu-pc'>
          <img className='w-full lg:h-[23rem] sm:h-32' src={promo1} alt="" />
          </Link>
        </SwiperSlide>
        
        <SwiperSlide  className='w-full lg:h-[23rem] sm:h-32'>
          <Link to='categories?category=all&brand=MSI&page=1'>
          <img src={promo2} className='w-full lg:h-[23rem] sm:h-32' alt="" />
          </Link>
          </SwiperSlide>
        
        <SwiperSlide  className='w-full lg:h-[23rem] sm:h-32'>
          <Link to='categories?category=all&brand=AMD&page=1'>
          <img src={promo3}  className='w-full lg:h-[23rem] sm:h-32' alt="" />
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
          <img src={promo6}  className='w-full lg:h-[23rem] sm:h-32' alt="" />
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

