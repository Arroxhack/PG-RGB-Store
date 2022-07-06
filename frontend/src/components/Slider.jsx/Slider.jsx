
import promo1 from '../../images/hyperx.jpg'
import promo2 from '../../images/logitech.gif'
import promo3 from '../../images/redragon.jpg'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

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
        <SwiperSlide className='w-full h-96'><img className='w-full h-80' src={promo1} alt="" />
        </SwiperSlide>
        <SwiperSlide  className='w-full h-96'><img src={promo2}  className='w-full h-80' alt="" /></SwiperSlide>
        <SwiperSlide  className='w-full h-96'><img src={promo3}  className='w-full h-80' alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}

