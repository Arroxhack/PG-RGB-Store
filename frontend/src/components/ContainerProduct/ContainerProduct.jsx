import React from 'react'
import { Link } from "react-router-dom";
import Product from '../Product/Product';
import {useSelector} from 'react-redux'

const ContainerProduct = () => {
  const allProducts = useSelector(state=>state.products)

  return (
    <div className="grid grid-cols-4 w-full gap-12 grid-rows-none relative">
        {allProducts.map(p=>
                <Link key={p.id} to={`/products/${p.id}`}>
                    <Product product={p}/>
                </Link>)}
    </div>
  )
}

export default ContainerProduct