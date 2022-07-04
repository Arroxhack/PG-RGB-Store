import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import Swal from "sweetalert2";

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
    <div className='bg-primary lg:w-56 lg:h-96 flex flex-col items-center rounded-md gap-2 text-primary-200 
     lg:hover:shadow-lg lg:hover:shadow-primary-300 lg:hover:-translate-y-2 sm:w-28 sm:h-15'>
        <div className="flex justify-center h-2/3 sm:1/4 bg-secundary-100  rounded-t-md">
        <img src={product.image[0]} alt={`Imagen de ${product.name}`} className='rounded-t-md object-fill object-center '/>
        </div>
        <div className='flex flex-col items-center '>
        <h3 className='lg:text-xl font-bold sm:text-xs'>{`$${product.price}`}</h3>
        <p className='lg:text-xs text-center uppercase sm:text-[8px]'>{product.name}</p>
        <button className="bg-primary-300 lg:px-3 lg:py-1 rounded-md lg:mt-2 lg:mb-2 border border-primary-400 hover:border hover:border-primary-100" onClick={sendCard}>Add to Cart</button>
        </div>
    </div>
  );
};

export default Product;
