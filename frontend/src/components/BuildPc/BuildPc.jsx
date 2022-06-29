import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Amd from "../../images/AMD.png";
import Intel from "../../images/INTEL.png";
import { getAllProducts } from "../../redux/actions";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import CheckProduct from "./CheckProduct";

function BuildPc() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams({});
  const [build,setBuild]=useState({CPU:{},Motherboard:{},GPU:{},Ram:{},PowerSupply:{},Case:{},SSD:{},HDD:{},SSDM2:{}})
  const showBrand = searchParams.get('brand') === 'amd' || searchParams.get('brand') === 'intel' ;
  let brandSelected;
  const showCpu = searchParams.get('CPU');
  const [visible, setVisible] = useState({brand:true})
  const allProducts = useSelector((state) => state.allProducts);
  

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleClickBrand = (e)=>{
    e.preventDefault();
    setVisible({...visible,[e.target.name]:false});
    setSearchParams({
      ...searchParams,
      [e.target.name]:e.target.value
    })
    brandSelected = searchParams.get('brand')
  }

  const handleClickComponents = (e)=>{
   
    setBuild({
      ...build,
      [e.target.name]:e.target.value
      
    })  
   
    setSearchParams({
      ...searchParams,
      [e.target.name]:e.target.value
    })
    
  }
  console.log(showCpu, 'syoy la marca')
  console.log(searchParams.get('brand'), 'BRAND')
  console.log(searchParams.get('CPU'), 'cvpu')
  
  return (
    <div className="h-screen bg-primary-200 ">
      <NavBar />
      
      
      {
        visible.brand ? <>
        <p>First, choose your socket</p>
        <section className="w-full flex items-center justify-center">
      
            <button onClick={handleClickBrand}>
              <input type='image' className="object-cover" src={Intel} alt="Intel Logo" name='brand' value='intel' />
            </button>
            
            <button onClick={handleClickBrand}>
            <input type='image' className="object-cover" src={Amd} alt="Amd Logo" name='brand'  value='amd' />
            </button>
    
        </section>
        </> : null
       
      }
    {/* DAR FUNCIONALIDAD DE QUE  ONCLICK AGREGUE AL PRODUCTO GLOBAL*/}
      {!showBrand ? null : 
     searchParams.get('brand') === 'amd' ? 

      allProducts.map((p)=>{
        if(p.brand === 'AMD'){
        return <CheckProduct key={p.id} product={p} onClick={(e)=>handleClickComponents(e)}
        name='CPU' value={p.id}/>}})
         :
        allProducts.map((p)=>{ 
          if(p.brand === 'Intel'){
          return <CheckProduct key={p.id} product={p} onClick={(e)=>handleClickComponents(e)} 
          name='CPU' value={p.id}/>}})}

        {
          showCpu !== null ? null : allProducts.map((p)=>{ 
            if(p.category.includes('Motherboard') &&  p.compatibilityBrands.toLowerCase() === brandSelected?.toLowerCase()){
              
              return <CheckProduct key={p.id} product={p} onClick={(e)=>handleClickComponents(e)}
              name='Motherboard' value={p.id}/>
            }})

        }

    </div>
      )
}

export default BuildPc;
