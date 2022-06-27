import { useEffect } from "react";
import { Link } from "react-router-dom";
import Product from '../Product/Product';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from '../Loading/Loading'

const ContainerProduct = () => {
  const allProducts = useSelector(state=>state.products)

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);


  return (
    <div className="grid grid-cols-5 w-full gap-12 grid-rows-none relative">
        {allProducts.length>0?allProducts.map(p=>
                <Link key={p.id} to={`/products/${p.id}`}>
                    <Product product={p}/>
                </Link>): <Loading/>}
    </div>
  )
}

export default ContainerProduct