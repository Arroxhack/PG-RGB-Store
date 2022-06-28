import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoxCart from "../Cart/BoxCart";
import NavBar from "../NavBar/NavBar";
import Product from "../Product/Product";
import Amd from "../../images/AMD.png";
import Intel from "../../images/INTEL.png";
import { getAllProducts } from "../../redux/actions";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";


const Card = ({product}) => {
  


  return (
    <button>
    <div className='bg-primary w-56 h-96 flex flex-col items-center rounded-md gap-2 text-primary-200 hover:shadow-lg hover:shadow-primary-200'>
        <div className="flex justify-center h-2/3 bg-secundary-100  rounded-t-md">
        <img src={product.image[0]} alt={`Imagen de ${product.name}`} className='rounded-t-md object-fill object-center '/>
        </div>
        <div className='flex flex-col items-center '>
        <h3 className='text-xl font-bold'>{`$${product.price}`}</h3>
        <p className='text-xs text-center uppercase'>{product.name}</p>
        </div>
    </div>
    </button>
  )
}

function BuildPc() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [build,setBuild]=useState({CPU:{},Motherboard:{},GPU:{},Ram:{},PowerSupply:{},Case:{},SSD:{},HDD:{},SSDM2:{}})
  const [order, setOrder] = useState('')
  const showBrand = searchParams.get('brand') === 'amd' || searchParams.get('brand') === 'intel' ;
  const [visible, setVisible] = useState({brand:true,showBrands:false})
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleClick = (e)=>{
    e.preventDefault();
    setVisible({...visible,[e.target.name]:false});
    setSearchParams({...searchParams,[e.target.name]:e.target.value})
  }
  return (
    <div className="h-screen bg-primary-200 ">
      <NavBar />
      
      
      {
        visible.brand ? <>
        <p>First, choose your socket</p>
        <section className="w-full flex items-center justify-center">
      
            <button onClick={handleClick}>
              <input type='image' className="object-cover" src={Intel} alt="Intel Logo" name='brand' value='intel' />
            </button>
            
            <button onClick={handleClick}>
            <input type='image' className="object-cover" src={Amd} alt="Amd Logo" name='brand'  value='amd' />
            </button>
    
        </section>
        </> : null
       
      }
    {/* DAR FUNCIONALIDAD DE QUE  ONCLICK AGREGUE AL PRODUCTO GLOBAL*/}
      {!visible.showBrands ? null : 
     searchParams.get('brand') === 'amd' ? 

      allProducts.map((p)=>{
        if(p.brand === 'AMD'){
          console.log(p)
        return <Card key={p.id} product={p} onClick={handleClick}/>}})
         :
        allProducts.map((p)=>{ 
          if(p.brand === 'Intel'){
          return <Card key={p.id} product={p} onClick={handleClick}/>}})}


    </div>
      )
}

export default BuildPc;
