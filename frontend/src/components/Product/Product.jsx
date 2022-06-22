import { useContext } from "react"
import { CartContext } from "../Cart/CartContext"

const Product = ({product}) => {
  

  const {addProductToCart, resetProductCart} = useContext(CartContext)

  const sendCard = (e)=>{
    e.preventDefault()
    addProductToCart(product)
  }

  const reset = (e)=>{
    e.preventDefault()
    resetProductCart()
  }

  return (
    <div className='bg-primary w-36 h-56 flex flex-col items-center rounded-md gap-2 text-primary-200 hover:shadow-lg hover:shadow-primary-200'>
        <img src={product.image} alt={`Imagen de ${product.name}`} className='rounded-t-md h-full w-full'/>
        <div className='flex flex-col items-center p-4'>
        <h3 className='text-xl font-bold'>{`$${product.price}`}</h3>
        <p className='text-l uppercase'>{product.name}</p>
        <button className="bg-primary-300 px-3 py-1 rounded-md mt-2 mb-2 hover:border" onClick={sendCard}>Add to Cart</button>
        {/* <button className="bg-primary-300 px-3 py-1 rounded-md mt-2 mb-2 hover:border" onClick={resetProductCart}>NO TOCAR</button> */}
        </div>
    </div>
  )
}

export default Product