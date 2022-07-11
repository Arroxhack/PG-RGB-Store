import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Product from '../Product/Product';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from '../Loading/Loading'
import Swal from "sweetalert2";
import { cleanFilter, filterPrice, getAllProducts } from "../../redux/actions";

const ContainerProduct = () => {
  const allProducts = useSelector(state=>state.products)

  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false);

  useEffect(()=>{},[allProducts])

  return (
    <div  className="lg:grid lg:grid-cols-4 lg:w-full lg:gap-12 lg:grid-rows-none relative sm:flex sm:flex-col sm:w-full sm:justify-center sm:items-center md:grid md:grid-cols-2 md:justify-items-center md:gap-4">
      {
      allProducts && allProducts.map(p=>
        <Link key={p.id} to={`/products/${p.id}`}>
          <Product product={p}/>
        </Link>)
      }
    </div>
  )
}

export default ContainerProduct