import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, cleanFilter } from "../../redux/actions/index";
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
  
  
    useEffect(() => {
      if(!products.length) dispatch(getAllProducts())
      dispatch(clean())
      dispatch(cleanFilter());
    }, [dispatch]);


  return (
    <div className=" w-full bg-gradient-to-t h-screen bg-primary-200  flex flex-col ">
      
      <div className="relative z-25">
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
