import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../redux/actions/index";
import Product from "../Product/Product";
import SideBar from "../SideBar/SideBar";
import Ordenamientos from "../Ordenamientos/Ordenamientos";

export default function () {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.allProducts);
    const products = useSelector((state) => state.products);
  
    useEffect(() => {
      dispatch(getAllProducts());
    }, [dispatch]);


  return (
    <div className="bg-primary-200 flex p-0 ">
    <fragment className='w-1/4'>
    <Ordenamientos/>
    <SideBar/>
    </fragment>
    

    <div className="grid grid-cols-3 gap-12 grid-rows-none">
    {products.map((product) => {
        return (
          <Link to={`/products/${product.id}`}>
            <Product key={product.id} product={product} />
          </Link>
        );
      })}
      </div>
    </div>
  )
}
