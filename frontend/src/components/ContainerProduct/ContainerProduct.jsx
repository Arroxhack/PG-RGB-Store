import React from 'react'
import { Link } from "react-router-dom";
import Product from '../Product/Product';
import {useSelector} from 'react-redux'

const ContainerProduct = () => {
  const allProducts = useSelector(state=>state.products)

  return (
    <div className='grid grid-cols-1 gap-5 w-full justify-items-center'>
        {allProducts.map(p=>
                <Link key={p.id} to={`/${p.id}`}>
                    <Product product={p}/>
                </Link>)}
    </div>
  )
}

export default ContainerProduct