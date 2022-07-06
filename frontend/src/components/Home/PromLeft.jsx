import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom'
import Product from '../Product/Product'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

const Promo = ({left, img, products}) => {




  return (
    <div className={left ? ' lg:flex flex-row lg:gap-5 lg:items-center lg:mt-10 lg:mb-10 lg:justify-center bg-primary-200 lg:px-16 lg:py-5 rounded-xl' 
    : 'lg:flex lg:flex-row-reverse  lg:gap-5  lg:items-center lg:mt-10 lg:mb-10 lg:justify-center bg-primary-200  rounded-xl  '}>
       <img src={img} alt="" className={ left?'ease-out duration-300 object-cover lg:h-96 lg:w-72 sm:h-40 sm:w-20 mt-6 rounded-bl-2xl rounded-tl-2xl transform hover:scale-110 sm:hidden lg:block' : ' object-cover lg:h-96 lg:w-72 sm:h-40 sm:w-20 mt-6 rounded-br-2xl rounded-tr-2xl hover:translate-y-2 transform hover:scale-110 ease-out duration-300 sm:hidden lg:block'} />
       <Swiper
        slidesPerView={3}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
           
          },
          980: {
            slidesPerView: 3,
            
          },
        }}
        className='sm:w-3/4 sm:flex sm:justify-center
        lg:w-3/4 lg:flex lg:justify-center'
      >
        {products.map(p=>{ 
          
            return (
              <SwiperSlide className="sm:flex sm:justify-center ">
                <Link key={p.id} to={`/products/${p.id}`}>
                <Product product={p}/>
                </Link>
                </SwiperSlide>
                
            )
        })}
        </Swiper>
    </div>
  )
}

export default Promo