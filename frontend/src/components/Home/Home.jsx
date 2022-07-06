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
      <div className="lg:flex lg:flex-col lg:items-center lg:justify-center mt-4 lg:w-full ">
      <div className="sm:mt-8 lg:w-11/12">
      <h1 className="fornt-open font-semibold text-primary-400 text-2xl w-14 ">Motherboards</h1>
      <Promo
      left={true}
      img={'https://www.aorus.com/image/gallery/gallery-1615431112.jpg'}
      products={mothers}
      />
      </div>
      <div className="sm:mt-8 lg:w-11/12" >
      <h1 className="fornt-open font-semibold text-primary-400 text-2xl titles w-28 ">the best of asus</h1>
      <Promo
      left={false}
      img={'https://concepto.de/wp-content/uploads/2018/08/placa-madre4-e1534448782751.jpg'}
      products={asus}
      />
      </div>
      <div className=" sm:mt-8 lg:w-11/12">
      <h1 className="fornt-open font-semibold text-primary-400 text-2xl border-b-2 w-8">Cases</h1>
        <Promo
      left={false}
      img={'https://concepto.de/wp-content/uploads/2018/08/placa-madre4-e1534448782751.jpg'}
      products={cpu}
      />
      </div>
      </div>
      <div>
        <a id="whatsapp" title="Whatsapp" href="https://wa.me/543434720830?text=" target="_blank">
          <img className='fixed bottom-2 right-2 w-20 m-5' src="https://storage.googleapis.com/m-infra.appspot.com/public/whatsapp/Whatsapp_logo.svg"/>
        </a>
      </div>
    </div>
  );
}

export default Home;
