import { useEffect } from "react";
import { Link } from "react-router-dom";
import Product from '../Product/Product';
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loading from '../Loading/Loading'
import Swal from "sweetalert2";

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
    <div className="lg:grid lg:grid-cols-4 lg:w-full lg:gap-12 lg:grid-rows-none relative sm:grid-cols-1">
        {allProducts.length>0?allProducts.map(p=>
                <Link key={p.id} to={`/products/${p.id}`}>
                    <Product product={p}/>
                </Link>): <div className="h-screen w-full flex justify-center items-center"><Loading/></div>}
    </div>
  )
}

export default ContainerProduct