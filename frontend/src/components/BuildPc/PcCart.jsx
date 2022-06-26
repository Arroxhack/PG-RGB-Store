import React, {useContext} from 'react'
import { CartContext } from '../Cart/CartContext'

import X from '../SVG/X'

const PcCart = ({onClick}) => {
    const {products, deleteProductCart,resetProductCart} = useContext(CartContext)



    let total = 0
    products.forEach(p=>total+=p.amount*p.price)

  return (
    <div className='h-auto w-72  bg-primary-100 mt-10 '>
        <div className='flex flex-row-reverse pr-2'>
        </div>
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
                    <div className='flex '>
                    <p>{`Total a pagar: ${total.toFixed(2)}`}</p>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}


export default PcCart