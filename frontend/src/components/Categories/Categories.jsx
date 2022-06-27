import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/index";
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
    }, [dispatch]);


  return (
    <div className="h-max w-full bg-gradient-to-t  from-primary-300 to-primary  flex flex-col p-0 ">
  
      <NavBar/>
      <fragment className='w-full flex justify-between '>
        <div className="bg-primary-200 w-64"></div>
      <Ordenamientos/>
      </fragment>
    <fragment className='w-full flex justify-between '>
      <fragment className='pt-32 bg-primary-200 '>
    <SideBar/>
    </fragment>
    <div className="pr-20 pt-8">
    <ContainerProduct/>
    </div>
      </fragment>

    </div>
  )
}
