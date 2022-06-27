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
import ContainerProduct from '../ContainerProduct/ContainerProduct'

export default function Categories() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
  
    console.log(products,'asd')
  return (
    <div className="bg-gradient-to-t  h-screen from-primary-300 to-primary flex flex-col p-0 ">
      <NavBar/>
      <fragment className='w-full flex justify-end '>
      <Ordenamientos/>
      </fragment>
    <fragment className='w-full h-screen relative flex'>
      <fragment className='mt-32 bg-primary-200 h-screen'>
    <SideBar/>
    </fragment>
    <div>
    <ContainerProduct/>
    </div>
      </fragment>
    </div>
  )
}
