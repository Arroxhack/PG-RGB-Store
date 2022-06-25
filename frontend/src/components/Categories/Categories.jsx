import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../redux/actions/index";
import { clean } from "../../redux/actions/index";
import Product from "../Product/Product";
import SideBar from "../SideBar/SideBar";
import Ordenamientos from "../Ordenamientos/Ordenamientos";
import NavBar from '../NavBar/NavBar'

export default function () {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.allProducts);
    const products = useSelector((state) => state.products);
    const filters= useSelector(state=>state.filtros)
  
    useEffect(() => {
      dispatch(getAllProducts());
      dispatch(clean())
    }, [dispatch]);


  return (
    <div className="bg-primary-200 flex flex-col p-0 ">
      <NavBar/>
      <fragment className='w-full flex justify-end p-8'>
      <Ordenamientos/>
      </fragment>
    <fragment className='w-full relative flex'>
      <fragment>
    <SideBar/>
    </fragment>
    <div className="grid grid-cols-4 w-full gap-12 grid-rows-none relative">
    {products.map((product) => {
        return (
          <Link to={`/products/${product.id}`}>
            <Product key={product.id} product={product} />
          </Link>
        );
      })}
      </div>
      </fragment>
    </div>
  )
}
