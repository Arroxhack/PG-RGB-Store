import { useDispatch, useSelector } from "react-redux"
import { addCart } from '../../redux/actions'
import { useEffect } from "react"


const Product = ({product}) => {
  const carrito = useSelector(state=>state.cart)
  const dispatch = useDispatch()
  const myStorage = window.localStorage
  const sendProduct = {
    id: product.id,
    name : product.name,
    image : product.image,
    price : product.price,
    count : 1
  }

  const sendCard = (e)=>{
    e.preventDefault()
    myStorage.setItem('carrito',JSON.stringify(sendProduct))
  }

  return (
    <div className='bg-blue-700 w-64 h-84 flex flex-col items-center rounded-md gap-2 hover:shadow-lg hover:shadow-green-700/50'>
        <img src={product.image} alt={`Imagen de ${product.name}`} className='h-72  rounded-t-md'/>
        <div className='flex flex-col items-center p-4'>
        <h3 className='text-xl font-bold text-gray-100'>{`$${product.price}`}</h3>
        <p className='text-l text-gray-300 uppercase'>{product.name}</p>
        <button onClick={sendCard}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product