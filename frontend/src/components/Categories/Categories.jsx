import React from "react";
import { useEffect, useState, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, cleanFilter, cleanFilterBrands, cleanFilterPrice, cleanOrder } from "../../redux/actions/index";
import { clean } from "../../redux/actions/index";
import SideBar from "../SideBar/SideBar";
import Ordenamientos from "../Ordenamientos/Ordenamientos";
import NavBar from '../NavBar/NavBar'
import ContainerProduct from '../ContainerProduct/ContainerProduct'
import { useSearchParams } from "react-router-dom";


export default function Categories () {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.allProducts);
    const products = useSelector((state) => state.products);
    const filters= useSelector(state=>state.filtros)
    const filterOrder= useSelector(state=> state.filterOrder)
    const [params, setParams] = useSearchParams()

    const catQuery = params.get('category')
    const searchFilter = params.get('name')

    useEffect(() => {
      if(!catQuery && !searchFilter){
        params.set('category', 'all')
        setParams(params)
      }
      dispatch(clean())
    }, []);


  return (
    <div className=" w-full h-screen bg-primary-200  flex flex-col ">
      
      
      <NavBar/>
      
      
      
    <div className='w-full flex justify-between   '>
      <div className=' bg-primary-200'>
    <SideBar/>
    </div>
    <div className="my-0 mx-auto w-screen bg-primary-200 ">

    <ContainerProduct/>
    </div>
      </div>

    </div>
    
  )
}
