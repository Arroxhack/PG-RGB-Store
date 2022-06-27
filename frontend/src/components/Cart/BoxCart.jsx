import React, {useContext} from 'react'
import { CartContext } from './CartContext'

const BoxCart = ({onClick}) => {
    const {products, deleteProductCart,resetProductCart} = useContext(CartContext)



    let total = 0
    products.forEach(p=>total+=p.amount*p.price)

  return (
    <div className='h-auto w-[520px] px-5 bg-primary rounded mt-10 -ml-80 absolute border-2 border-primary-200'>
        <div className='flex flex-row-reverse pr-2'>
        </div>
        <div>
            {
                products.length <=0 ? <p className='text-center pt-16 pb-16'>No hay productos ☹️</p>:
                <div className='flex flex-col gap-4 mt-5'>
                    {products.map(p=>{
                        return(
                            <div key={p.id} className='grid grid-cols-[2fr_8fr_1fr_3fr_4fr_1fr] gap-1 items-center'>
                            <img src={p.image[0]} alt='Imagen' width='50px' height='50px'/>
                            <p>{p.name}</p>
                            <p>{`$${p.price}`}</p><span>{`x ${p.amount}`}</span>
                            <p>{`$ ${(p.price * p.amount).toFixed(2)}`}</p>
                            <button onClick={(e)=>deleteProductCart(p)}>❌</button>
                            <span className='col-start-1 col-end-8 bg-secundary h-[1px] mt-2 w-auto'></span>
                            </div>
                        )
                    })}
                    <div className='flex justify-end mr-10 mb-5'>
                    <p>{`Total a pagar: $${total.toFixed(2)}`}</p>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default BoxCart