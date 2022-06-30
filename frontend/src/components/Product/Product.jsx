import { useContext } from "react"
import { CartContext } from "../Cart/CartContext"

const Product = ({product}) => {
  

  const {addProductToCart, resetProductCart} = useContext(CartContext)

  const sendCard = (e)=>{
    e.preventDefault()
    addProductToCart(product)
    // resetProductCart()
  }

  return (
    <div className='bg-primary w-56 h-96 flex flex-col items-center rounded-md gap-2 text-primary-200 lg:hover:shadow-lg lg:hover:shadow-primary-300 lg:hover:-translate-y-2'>
        <div className="flex justify-center h-2/3 bg-secundary-100 rounded-t-md">
        <img src={product.image[0]} alt={`Imagen de ${product.name}`} className='m-6 relative'/>
        </div>
        <div className='flex flex-col items-center '>
        <h3 className='text-xl font-bold'>{`$${product.price}`}</h3>
        <p className='text-xs text-center uppercase'>{product.name}</p>
        <button className="bg-primary-300 px-3 py-1 rounded-md mt-2 mb-2 border border-primary-400 hover:border hover:border-primary-100" onClick={sendCard}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product