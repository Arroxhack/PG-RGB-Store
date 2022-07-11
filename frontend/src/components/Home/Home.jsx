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
      <h1 className="font-open font-semibold text-primary-400 text-2xl titles w-30 uppercase">Motherboards</h1>
      <Promo
      left={true}
      img={promo1}
      products={mothers}
      params={'categories?category=Motherboard'}
      />
      </div>
      <div className="sm:mt-8 w-11/12 flex flex-col items-center justify-center" >
      <h1 className="font-open font-semibold text-primary-400 text-2xl titles w-30 uppercase">the best of asus</h1>
      <Promo
      left={false}
      img={promo2}
      products={asus}
      params={'categories?category=all&brand=ASUS'}
      />
      </div>

      <Marcas/>
      <div className="  w-11/12 flex flex-col items-center justify-center">
      <h1 className=" w-11/12 flex flex-col items-center justify-center font-open font-semibold text-primary-400 text-2xl titles w-30 uppercase">Cases</h1>
        <Promo
      left={false}
      img={promo3}
      products={cases}
      params={'categories?category=Case'}
      />
      </div>
      </div>
      <div className="mt-20">
        <img src="https://compudel.com.pe/img/cms/BANNERS/BANNER%20EMPRESAS%20ANTEFINAL.png" alt="compra" className="w-full sm:h-24 lg:h-52  "/>
      </div>
      <div>
        <button  className="fixed bottom-2 right-2 w-28 m-5 lg:h-12 lg:w-36 bg-primary-400 flex items-center justify-center j rounded-2xl
         gap-1 transform hover:scale-110 opacity-40 hover:opacity-100">
        <p className="text-lg text-secundary-500 font-Open">chat with us</p>
        <a id="whatsapp" title="Whatsapp" href="https://wa.me/543434720830?text=" target="_blank" >
        < SiWhatsapp className="h-7 w-9 relative"/>
        </a>
        </button>
      </div>
      <MarcasAnimated/>
      <Footer/>
    </div>
  );
}

export default Home;
