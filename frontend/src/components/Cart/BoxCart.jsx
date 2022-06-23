import React, {useContext} from 'react'
import { CartContext } from './CartContext'

const BoxCart = ({onClick}) => {
    const {products, deleteProductCart,resetProductCart} = useContext(CartContext)



    let total = 0
    products.forEach(p=>total+=p.amount*p.price)

  return (
    <div className='h-auto w-auto absolute bg-primary-100 ml-36'>
        <span onClick={onClick}>x</span>
        <div>
            {
                products.length <=0 ? <p>No hay productos</p>:
                <div className='flex flex-col gap-5'>
                    {products.map(p=>{
                        return(
                            <div key={p.id} className='flex flex-row gap-1'>
                            {/* <img src={p.image} alt='Imagen' width='50px' height='50px'/> */}
                            <p>{p.name}</p>
                            <p>{p.price}</p><span>{`x ${p.amount}`}</span>
                            <p>{`$ ${(p.price * p.amount).toFixed(2)}`}</p>
                            <button onClick={(e)=>deleteProductCart(p)}>x</button>
                            </div>
                        )
                    })}
                    <div className='flex justify-end'>
                    <p>{`Total a pagar: ${total.toFixed(2)}`}</p>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default BoxCart