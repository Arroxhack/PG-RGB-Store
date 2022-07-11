import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
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

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  //promo de mothers
  let mothers = products.filter(m=>m.category.includes("Motherboard"))

  //promo de cpu
  let cpu=products.filter(m=>m.category.includes("CPU"))

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
      img={'https://www.aorus.com/image/gallery/gallery-1615431112.jpg'}
      products={mothers}
      />
      </div>
      <div className="sm:mt-8 w-11/12 flex flex-col items-center justify-center" >
      <h1 className="font-open font-semibold text-primary-400 text-2xl titles w-30 uppercase">the best of asus</h1>
      <Promo
      left={false}
      img={'https://concepto.de/wp-content/uploads/2018/08/placa-madre4-e1534448782751.jpg'}
      products={asus}
      />

      <div className="flex justify-center w-full">
        <img className="w-11/12 lg:cursor-pointer" src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/armado-pc-home/arma-tu-compu-new.webp" alt="" />
      </div>
      </div>

      <Marcas/>
      <div className=" sm:mt-8 w-11/12 flex flex-col items-center justify-center">
      <h1 className="sm:mt-8 w-11/12 flex flex-col items-center justify-center font-open font-semibold text-primary-400 text-2xl titles w-30 uppercase">Cases</h1>
        <Promo
      left={false}
      img={'https://concepto.de/wp-content/uploads/2018/08/placa-madre4-e1534448782751.jpg'}
      products={cpu}
      />
      </div>
      </div>
      <div>
        <img src="https://compudel.com.pe/img/cms/BANNERS/BANNER%20EMPRESAS%20ANTEFINAL.png" alt="compra" className="w-full lg:cursor-pointer "/>
      </div>
      <div>
        <a id="whatsapp" title="Whatsapp" href="https://wa.me/543434720830?text=" target="_blank">
        < SiWhatsapp className="fixed bottom-2 right-2 w-20 m-5 lg:h-11 lg:w-14 text-primary-400 lg:hover:"/>
        </a>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
