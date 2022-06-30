import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import { getAllProducts, getAllCategories } from "../../redux/actions";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import CheckProduct from "./CheckProduct";

//imagenes de componentes de pc
import cpu from ".//imagesBuild/cpu.svg"
import mother from './/imagesBuild/mother.svg'
import ram from './/imagesBuild/ram.svg'
import gpu from './/imagesBuild/vga.svg'
import casee from './/imagesBuild/case.svg'
import psu from './/imagesBuild/psu.svg'
import ssd from './/imagesBuild/ssd.svg'
import m2 from './/imagesBuild/m2.svg'
import hdd from './/imagesBuild/hdd.svg'

function BuildPc() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams({});
  const [build,setBuild]=useState({CPU:{},Motherboard:{},GPU:{},Ram:{},PowerSupply:{},Case:{},SSD:{},HDD:{},SSDM2:{}});
  const [cpus, setCpu] = useState([]);//PROCESADORES
  const [mothers, setMother] = useState([]);//MOTHERS
  const [rams, setRam] = useState([]);//RAMS
  const [gpus, setGpu] = useState([]);//GRAFICAS
  const [cases, setCase] = useState([]);//GABINETES
  const [psus, setPsu] = useState([]);//FUENTES
  const [ssds, setSsd] = useState([]);
  const [m2s, setM2] = useState([]);
  const [hdds, setHdd] = useState([]);




  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, [dispatch]);






  const allProducts = useSelector((state) => state.allProducts);
  // const [cpus, setCpu] = useState([]);
  // const showBrand = searchParams.get('brand') === 'amd' || searchParams.get('brand') === 'intel' ;
  // const showCpu = searchParams.get('CPU');
  // const [visible, setVisible] = useState({brand:true})
  
  
  
  
 

  const handleClickBrand = (e)=>{
    e.preventDefault();
    // setVisible({...visible,[e.target.name]:false});
    setSearchParams({
      [e.target.name]:e.target.value
    })

    setBuild.brand = e.target.value;
    
    if(e.target.value){
      const auxCpu = allProducts.filter((el)=>el.brand === e.target.value);
      setCpu(auxCpu);
    

   
      const auxMother = allProducts.filter(el=> {
        if(el.category.includes('Motherboard')){
          if(el.compatibilityBrands){
            if(el.compatibilityBrands === e.target.value){
              return el;
            }
          }
      }})
      setMother(auxMother);

      const auxRam = allProducts.filter(el=>el.category.includes('Ram') && el);
      setRam(auxRam);

      const auxGpu = allProducts.filter(el=>el.category.includes('GPU') && el);
      setGpu(auxGpu);

      const auxCase = allProducts.filter(el=>el.category.includes('Case') && el);
      setCase(auxCase);

      const auxPsu = allProducts.filter(el=>el.category.includes('Power Supply')&&el); /// BORRRAR EL ESPACIO DE POWER SUPPLY -> NUEVA API NO LO TIENE
      setPsu(auxPsu);
    
      const auxSsd = allProducts.filter(el=>el.category.includes('SSD') && el)
      setSsd(auxSsd);
      
      const auxM2 = allProducts.filter(el=>el.category.includes('SSDM2') && el)
      setSsd(auxM2);

      const auxHdd = allProducts.filter(el=>el.category.includes('HDD') && el)
      setSsd(auxHdd);
    }



  }

  // const [ssds, setSsd] = useState([])
  // const [m2s, setM2] = useState([])
  // const [hdds, setHdd] = useState([])
  // const [rams, setRam] = useState([]);//RAMS
  // const [gpus, setGpu] = useState([]);//GRAFICAS
  // const [cases, setCase] = useState([]);//GABINETES
  // const [psus, setPsu] = useState([])
  ///const categoria = useSelector(state=>state.categories);
  console.log(psus)
  console.log(rams)

  const handleSelect = (e)=>{
    e.preventDefault();

    setBuild({
      ...build,
      [e.target.name]:e.target.value
    })
    setSearchParams({
      [e.target.name]:e.target.value
    })
    console.log(e.target.value[0])
  }

  const handleClickComponents = (e)=>{
   
    setBuild({
      ...build,
      [e.target.name]:e.target.value
      
    })  
   
    setSearchParams({
      [e.target.name]:e.target.value
    })
    
  }

  return (
    // container de toda la pagina
    <div className="h-screen bg-primary-300 ">
      <NavBar />
      <button onClick={handleClickBrand} name='brand' value='AMD'>AMD</button>
      <button onClick={handleClickBrand} name='brand' value='Intel'>Intel</button>
        {/* CONTAINER DE FOTOS y SELECT*/}
      <div>
           {
            cpus.length > 0 ?
            <div>
              <img src={cpu} alt="cpu" width='100px' heigth='100px'/>
              <select onChange={handleSelect} name='CPU'>{cpus.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
            </div> :null
          }

           {
            mothers.length > 0 ?
            <div>
              <img src={mother} alt="mother" width='100px' heigth='100px'/>
              <select onChange={handleSelect} name='Motherboard'>{mothers.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
            </div> :null
          } 
         
         {
            rams.length > 0 ?
            <div>
              <img src={ram} alt="ram" width='100px' heigth='100px'/>
              <select onChange={handleSelect} name='Ram'>{rams.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
            </div> :null
          } 

          {
            gpus.length > 0 ?
            <div>
              <img src={gpu} alt="gpu" width='100px' heigth='100px'/>
              <select onChange={handleSelect} name='GPU'>{gpus.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
            </div> :null
          } 

          {
            cases.length > 0 ?
            <div>
              <img src={casee} alt="case" width='100px' heigth='100px'/>
              <select onChange={handleSelect} name='Case'>{cases.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
            </div> :null
          }   

          { 
            psus.length > 0 ?
            <div>
              <img src={psu} alt="PowerSupply" width='100px' heigth='100px'/>
              <select onChange={handleSelect} name='PowerSupply'>{psus.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
            </div> :null
          }   

{ 
            ssds.length > 0 ?
            <div>
              <img src={ssd} alt="ssd" width='100px' heigth='100px'/>
              <select onChange={handleSelect} name='SSD'>{ssds.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
            </div> :null
          }   

          
{ 
            m2s.length > 0 ?
            <div>
              <img src={m2} alt="ssdm.2" width='100px' heigth='100px'/>
              <select onChange={handleSelect} name='SSDM2'>{m2s.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
            </div> :null
          }   

          
{ 
            hdds.length > 0 ?
            <div>
              <img src={hdd} alt="hdd" width='100px' heigth='100px'/>
              <select onChange={handleSelect} name='HDD'>{hdds.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
            </div> :null
          }   
      </div>
          {console.log(build)}
    </div>
      )
}

export default BuildPc;