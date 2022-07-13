import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Product from '../Product/Product';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from '../Loading/Loading'
import Swal from "sweetalert2";
import { cleanFilter, cleanProducts, filterPrice, getAllProducts } from "../../redux/actions";
import Paginado from "./Paginado";

const ContainerProduct = () => {
  let allProducts = useSelector(state=>state.products)
  const page = useSelector(state=>state.pageContainer)

  const dispatch = useDispatch()

  const porPage = 12;
  const start = ((page-1)*porPage)
  const end = start + porPage
  const max = Math.ceil(allProducts.length/porPage)
  allProducts = allProducts.slice(start, end)
  const [params, setParams] = useSearchParams()

  useEffect(()=>{},[allProducts, dispatch])

  return (
    <div className="flex flex-col items-center gap-10">
          <div  className="lg:grid lg:grid-cols-4 lg:w-full lg:gap-12 lg:grid-rows-none relative sm:flex sm:flex-col sm:w-full sm:justify-center sm:items-center md:grid md:grid-cols-2 md:justify-items-center md:gap-4">
      {
      allProducts && allProducts.map(p=>
        <Link key={p.id} to={`/products/${p.id}`}>
          <Product product={p}/>
        </Link>)
      }
    </div>
    <Paginado max={max}/>
    </div>

  )
}

export default ContainerProduct