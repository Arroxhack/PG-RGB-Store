import { useEffect } from "react";
import { Link } from "react-router-dom";
import Product from '../Product/Product';
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loading from '../Loading/Loading'

const ContainerProduct = () => {
  const allProducts = useSelector(state=>state.products)

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (
    <div  className="lg:grid lg:grid-cols-4 lg:w-full lg:gap-12 lg:grid-rows-none relative sm:flex sm:flex-col sm:w-full sm:justify-center sm:items-center md:grid md:grid-cols-2 md:justify-items-center md:gap-4" >
        {allProducts.length>0?allProducts.map(p=>
                <Link key={p.id} to={`/products/${p.id}`}>
                    <Product product={p}/>
                </Link>): <div className="h-screen w-full flex justify-center items-center"><Loading/></div>}
    </div>
  )
}

export default ContainerProduct