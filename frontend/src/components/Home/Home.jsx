import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import { getAllProducts } from "../../redux/actions/index";
import { clean } from "../../redux/actions/index";
import Nav from "../NavBar/Nav";
import NavBar from "../NavBar/NavBar";
import Product from "../Product/Product";
import ContainerProduct from "../ContainerProduct/ContainerProduct";
import Slider from "../Slider.jsx/Slider";
import Promo from "./PromLeft";
import {SiWhatsapp} from 'react-icons/si'
import Marcas from './Marcas'
import Footer from "../Footer/Footer";
import MarcasAnimated from "./MarcasAnimated";
import { Link } from "react-router-dom";
import promo1 from "../../images/promo1.jpg"
import promo2 from "../../images/promo2.png"
import promo3 from "../../images/promo3.jpg"
import Componentes from "./Componentes";
import banner from './Banner/BANNER.png'

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  //promo de mothers
  let mothers = products.filter(m=>m.category.includes("Motherboard"))

  //promo de cpu
  let cases =products.filter(m=>m.category.includes("Case"))

  //promo de asus
  let asus=products.filter(m=>m.brand === "ASUS" )
 
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(clean())
  }, [dispatch]);


  return (
    <div className="lg:bg-gradient-to-t bg-primary-200 lg:w-full ">
      
      <NavBar/>
      <Slider/>
      <div className="flex flex-col items-center justify-center mt-4 w-full ">
      <div className="sm:mt-8 w-11/12 flex flex-col items-center justify-center">

      <div className="w-full flex items-center justify-center border-b-4 border-primary-700 sm:w-9/12">
      <h1 className="font-open font-semibold text-primary-400 text-2xl titles w-30 uppercase">Motherboards</h1>
      </div>
      <Promo
      left={true}
      img={promo1}
      products={mothers}
      params={'categories?category=Motherboard&page=1'}
      />
      </div>
      <div className="sm:mt-8 w-11/12 flex flex-col items-center justify-center" >
      <div className="w-full flex items-center justify-center border-b-4 border-primary-700 sm:w-9/12">
      <h1 className="font-open font-semibold text-primary-400 text-2xl titles w-30 uppercase">the best of asus</h1>
      </div>
      <Promo
      left={false}
      img={promo2}
      products={asus}
      params={'categories?category=all&brand=ASUS&page=1'}
      />
      </div>
      <div className=" sm:mt-8 w-11/12 flex flex-col items-center justify-center">
        <div className="w-full items-center justify-center flex border-b-4 border-primary-700 sm:w-9/12">
      <span className=" w-11/12 flex flex-col items-center justify-center font-open font-semibold text-primary-400 text-2xl titles w-30 uppercase ">Cases</span>
      </div>
        <Promo
      left={true}
      img={promo3}
      products={cases}
      params={'categories?category=Case&page=1'}
      />
      </div>
      </div>
      <Componentes/>
      <Marcas/>
      <div className="">
        <img src={banner} alt="compra" className="w-full sm:h-24 lg:h-52  "/>
      </div>
      <div className="w-full">
        <button  className="fixed bottom-2  sm:w-9  lg:h-12 lg:w-full md:w-full  flex items-center justify-end  rounded-2xl
         gap-1  sm:right-2">
       
        <a id="whatsapp" title="Whatsapp" href="https://wa.me/543434720830?text=" target="_blank" className="flex w-[20rem] justify-end " >
        <p className="text-xl text-primary-400 font-Open sm:hidden lg:block  md:block w-[15rem] -mr-[2rem]  ">Live chat support</p>
        < SiWhatsapp className="h-7 w-9 relative text-primary-400 "/>
        </a>
        </button>
      </div>
      <MarcasAnimated/>
      
      <Footer/>
    </div>
  );
}

export default Home;
