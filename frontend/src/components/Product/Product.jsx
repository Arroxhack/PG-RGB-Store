import { useContext, useState,useEffect } from "react";
import { CartContext } from "../Cart/CartContext";
import Swal from "sweetalert2";
import {TiShoppingCart} from 'react-icons/ti'
import BoxFav from "../Favoritos/BoxFav";
import {MdOutlineFavoriteBorder,MdOutlineFavorite} from 'react-icons/md'

const Product = ({ product}) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 2000,
  });
  const { addProductToCart, resetProductCart } = useContext(CartContext);

  const sendCard = (e) => {
    e.preventDefault();
    Toast.fire({
      icon: "success",
      title: "Product added to cart",
    });
    //console.log("product", product);
    addProductToCart(product);
    // resetProductCart()
  };

  return (
    <div className='bg-primary-500 lg:w-64 lg:h-[22rem] flex flex-col items-center rounded-sm gap-2 text-primary-200 
     lg:hover:shadow-lg lg:hover:shadow-primary-400 lg:hover:-translate-y-0.1 sm:w-44 sm:h-38 sm:mt-6  md:h-72 md:w-54 '>
       
        <div className="flex flex-col justify-center items-center lg:h-2/3  bg-secundary-100 w-full  rounded-t-sm sm:h-36 md:h-[18rem]">
        <div className="w-full flex justify-end items-end">
        <BoxFav id={product.id}/>
        </div>
        <img src={product.image[0]} alt={`Imagen de ${product.name}`} className='lg:rounded-t-md lg:object-fill lg:object-center sm:w-28 sm:h-28 md:h-36 md:w-40  lg:-mt-10 sm:-mt-16'/>
        </div>
        <div className="flex flex-col justify-center items-center lg:h-1/3  w-full  rounded-t-sm sm:h-26 md:h-40  ">
        <h3 className='lg:text-xl font-bold sm:text-base md:text-lg'>{`$${product.price}`}</h3>
        <p className='lg:text-base text-center font-Open uppercase sm:text-xs md:text-xs'>{product.name}</p>        
        </div>

       

        <button className="bg-primary-300 lg:px-3 lg:py-1 rounded-sm lg:mb-2  border-primary-400 lg:hover:border lg:hover:border-primary-100  md:px-1 md:py-0 md:rounded-sm flex items-center sm:py-1 sm:px-2 sm:mb-2 "
         onClick={sendCard}><TiShoppingCart className="md:h-8 md:w-6"/> Add to cart</button>

    </div>
  );
};

export default Product;
// <BoxFav id={product.id}/>