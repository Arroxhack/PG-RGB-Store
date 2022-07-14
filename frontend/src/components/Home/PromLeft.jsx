import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom'
import Product from '../Product/Product'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";




const Promo = ({left, img, products,params}) => {

  

  return (
    <div className={left ? ' w-11/12 lg:flex flex-row  lg:items-center lg:mt-10 lg:mb-10 bg-primary-200  rounded-xl lg:my-32' 
    : 'lg:flex lg:flex-row-reverse  justify-center items-center lg:mt-10 lg:mb-10  bg-primary-200  rounded-xl w-11/12 lg:my-32  '}>
       <Link to={params}>
       <img src={img} alt="" className={ left?'ease-out duration-300 object-cover lg:h-96 lg:w-72 sm:h-40 sm:w-20 mt-6 rounded-bl-2xl rounded-tl-2xl transform hover:scale-110 sm:hidden lg:block lg:relative' : ' object-cover lg:h-96 lg:w-72 sm:h-40 sm:w-20 mt-6 rounded-br-2xl rounded-tr-2xl hover:translate-y-2 transform hover:scale-110 ease-out duration-300 sm:hidden lg:block lg:relative '} />
       </Link>
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
        className=' flex justify-center
        w-3/4 '
      >
        {products.map(p=>{ 
          
            return (
              <SwiperSlide key={p.id} className="sm:flex sm:justify-center ">
                <Link key={p.id} to={`/products/${p.id}`}>
                  <div className="px-8">
                <Product product={p}/>
                </div>
                </Link>
                </SwiperSlide>
                
            )
        })}
        </Swiper>
    </div>
  )
  
}

export default Promo