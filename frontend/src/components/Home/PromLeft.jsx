import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../Product/Product'

const Promo = ({left, img, products}) => {
  return (
    <div className={left ? 'flex flex-row gap-2 h-48 w-36 items-center mt-10 mb-10 justify-center' : 'flex flex-row-reverse gap-2 h-48 w-36 items-center mt-10 mb-10 justify-center'}>
        <img src={img} alt='img promo' className='bg-center bg-cover h-48 w-36 '/>
        {products.map(p=>{
            return (
                <Link to={`/${p.id}`}>
                <Product product={p}/>
                </Link>
            )
        })}
    </div>
  )
}

export default Promo