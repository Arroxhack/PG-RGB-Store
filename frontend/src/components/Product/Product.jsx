import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import Swal from "sweetalert2";
import {TiShoppingCart} from 'react-icons/ti'
import {AiOutlineStar,AiFillStar} from 'react-icons/ai'
import {IoIosStarOutline} from 'react-icons/io'


const Product = ({ product }) => {
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
      title: "Producto agregado al carrito",
    });
    addProductToCart(product);
    // resetProductCart()
  };

  return (
    <div className='bg-primary-500 lg:w-64 lg:h-96 flex flex-col items-center rounded-sm gap-2 text-primary-200 
     lg:hover:shadow-lg lg:hover:shadow-primary-400 lg:hover:-translate-y-0.1 sm:w-52 sm:h-38 sm:mt-6  md:h-80 md:w-64 '>
           <div className="ml-48 mt-2 absolute">
        <button className="absolut text-primary-200 hover:translate-y-1 transform hover:scale-115 ease-out duration-300 "><IoIosStarOutline className="h-8 w-8"/></button>
        </div>
        <div className="flex justify-center items-center lg:h-2/3  bg-secundary-100 w-full  rounded-t-sm sm:h-32 md:h-40">
        <img src={product.image[0]} alt={`Imagen de ${product.name}`} className='lg:rounded-t-md lg:object-fill lg:object-center sm:w-28 sm:h-28 md:h-36 md:w-40'/>
        </div>
        <div className='flex flex-col items-center lg:h-1/6 md:h-1/4 md:w-2/3 lg:w-2/3'>
        <h3 className='lg:text-xl font-bold sm:text-base md:text-xl'>{`$${product.price}`}</h3>
        <p className='lg:text-xs text-center uppercase sm:text-xs md:text-base'>{product.name}</p>        
        </div>
        <button className=" text-primary bg-primary-200 lg:px-3 lg:py-1 rounded-sm lg:mb-2  border-primary-400  md:px-6 md:py-2 md:rounded-sm flex items-center sm:py-1 sm:px-2 sm:mb-2 lg:hover:bg-secundary-250 lg:hover:text-primary-200 lg:transform "
         onClick={sendCard}><TiShoppingCart className="md:h-8 md:w-6 "/> Add to cart</button>
    </div>
  );
};

export default Product;
