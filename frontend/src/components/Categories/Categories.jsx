import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, cleanFilter, cleanFilterBrands, cleanFilterPrice, cleanOrder } from "../../redux/actions/index";
import { clean } from "../../redux/actions/index";
import SideBar from "../SideBar/SideBar";
import Ordenamientos from "../Ordenamientos/Ordenamientos";
import NavBar from '../NavBar/NavBar'
import ContainerProduct from '../ContainerProduct/ContainerProduct'

export default function Categories () {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.allProducts);
    const products = useSelector((state) => state.products);
    const filters= useSelector(state=>state.filtros)
    const filterOrder= useSelector(state=> state.filterOrder)
  
  
    useEffect(() => {
      if(!products.length) dispatch(getAllProducts())
      dispatch(clean())
    }, [dispatch]);


  return (
    <div className=" w-full bg-gradient-to-t bg-primary-200  flex flex-col ">
      
      <div className="sticky top-0 z-50">
      <NavBar/>
      </div>
      
      
    <div className='w-full flex justify-between  bg-primary-200 '>
      <div className=' bg-primary-200'>
    <SideBar/>
    </div>
    <div className="my-0 mx-auto  bg-primary-200 ">
    <div className="w-full flex justify-end mb-7 mt-7">
    <Ordenamientos/>
    </div>
    <ContainerProduct/>
    </div>
      </div>

    </div>
    
  )
}
