import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import { getAllProducts, getAllCategories,buildPc } from "../../redux/actions";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [build,setBuild]=useState({});
  //{CPU:{},Motherboard:{},GPU:{},Ram:{},'Power Supply':{},Case:{},SSD:{},HDD:{},'SSD M.2':{}}
  //algo asi se tendria que ver el build

  const [cpus, setCpu] = useState([]);//PROCESADORES
  const [mothers, setMother] = useState([]);//MOTHERS
  const [rams, setRam] = useState([]);//RAMS
  const [gpus, setGpu] = useState([]);//GRAFICAS
  const [cases, setCase] = useState([]);//GABINETES
  const [psus, setPsu] = useState([]);//FUENTES
  const [ssds, setSsd] = useState([]);
  const [m2s, setM2] = useState([]);
  const [hdds, setHdd] = useState([]);
  
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.allProducts);
  
 /*
  FALTA:
  QUE BOTON AMD E INTEL DESAPAREZCAN.
  CAMBIAS PARA TRAER LOS COMPONENTES DEL BACK.
  QUE ELIMINE LOS PRODUCTOS CON OPTION DE SLECT EN NOTHING.
  SUMAR LAS COSAS AL CARRITO.
  QUE MUESTRE LAS FOTOS DE LOS PRODUCTOS.
  VER TEMA COMPATIBILIDAD
  */

  const handleClickBrand = (e)=>{
    e.preventDefault();
    
    searchParams.set(e.target.name,e.target.value);
    setSearchParams(searchParams);
    // setSearchParams({
    //   [e.target.name]:e.target.value
    // })

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

      const auxPsu = allProducts.filter(el=>el.category.includes('Power Supply')&&el);
      setPsu(auxPsu);
    
      const auxSsd = allProducts.filter(el=>el.category.includes('SSD') && el)
      setSsd(auxSsd);
      
      const auxM2 = allProducts.filter(el=>el.category.includes('SSD M.2') && el)
      setM2(auxM2);

      const auxHdd = allProducts.filter(el=>el.category.includes('HDD') && el)
      setHdd(auxHdd);
    }
  }

  const handleSelect = (e)=>{
    e.preventDefault();
    searchParams.set(e.target.name,e.target.value);
    setSearchParams(searchParams);
    //CHECKAMOS QUE HAYA ELEGIDO ALGO
    if(e.target.value !== 'nothing'){
      setBuild({
        ...build,
        [e.target.name]:e.target.value
      })
    }
    //SI VALUE ES NOTHING Y BUILD LO INCLUYE, LO BORRAMOS
    if(e.target.value){
      for(const val in build){
        if(build[val] === 'nothing'){
          delete build[val];
        }
      }
    }
  }

  return (
    // container de toda la pagina
    <section className="h-full bg-primary-200 ">
    <div>
      <NavBar />
      <button onClick={handleClickBrand} name='brand' value='AMD'>AMD</button>
      <button onClick={handleClickBrand} name='brand' value='Intel'>Intel</button>
        {/* CONTAINER DE FOTOS y SELECT*/}
      <div>
           {
            cpus.length > 0 ?
            <div>
              <img src={cpu} alt="cpu" width='100px' heigth='100px'/>
              <select onChange={handleSelect} name='CPU'>
              <option value='none' disabled selected >Choose your cpu</option>
              <option value='nothing'>Nothing</option>
                {cpus.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
            </div> :null
          }

           {
            mothers.length > 0 ?
            <div>
              <img src={mother} alt="mother" width='100px' heigth='100px'/>
              <select onChange={handleSelect} name='Motherboard'>
                <option value='none' disabled selected >Choose your Motherboard</option>
                <option value='nothing'>Nothing</option>
              {mothers.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
            </div> :null
          } 
         
         {
            rams.length > 0 ?
            <div>
              <img src={ram} alt="ram" width='100px' heigth='100px'/>
              <select onChange={handleSelect} name='Ram'>
              <option value='none' disabled selected >Choose your Ram</option>
              <option value='nothing'>Nothing</option>
                {rams.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
            </div> :null
          } 

          {
            gpus.length > 0 ?
            <div>
              <img src={gpu} alt="gpu" width='100px' heigth='100px'/>
              <select onChange={handleSelect} name='GPU'>
              <option value='' disabled selected >Choose your GPU</option>
              <option value='nothing'>Nothing</option>
                {gpus.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
            </div> :null
          } 

          {
            cases.length > 0 ?
            <div>
              <img src={casee} alt="case" width='100px' heigth='100px'/>
              <select onChange={handleSelect} name='Case'>
              <option value='' disabled selected >Choose your Case</option>
              <option value='nothing'>Nothing</option>
                {cases.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
            </div> :null
          }   

          { 
            psus.length > 0 ?
            <div>
              <img src={psu} alt="PowerSupply" width='100px' heigth='100px'/>
              <select onChange={handleSelect} name='Power Supply'>
              <option value='' disabled selected >Choose your Power Supply</option>
              <option value='nothing'>Nothing</option>
                {psus.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
            </div> :null
          }   

          { 
            ssds.length > 0 ?
            <div>
              <img src={ssd} alt="ssd" width='100px' heigth='100px'/>
              <select onChange={handleSelect} name='SSD'>
              <option value='' disabled selected >Choose your SSD</option>
              <option value='nothing'>Nothing</option>
                {ssds.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
            </div> :null
          }   

          
          { 
            m2s.length > 0 ?
            <div>
              <img src={m2} alt="ssdm.2" width='100px' heigth='100px'/>
              <select onChange={handleSelect} name='SSD M.2'>
              <option value='' disabled selected >Choose your SSD M.2</option>
              <option value='nothing'>Nothing</option>
                {m2s.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
            </div> :null
          }   

          
          { 
            hdds.length > 0 ?
            <div>
              <img src={hdd} alt="hdd" width='100px' heigth='100px'/>
              <select onChange={handleSelect} name='HDD'>
              <option value='' disabled selected >Choose your HDD</option>
              <option value='nothing'>Nothing</option>
                {hdds.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
            </div> :null
          }

          <button onClick={()=>{dispatch(buildPc(build)); navigate('/cart')}}>Buy</button>
      </div>
    </div>
    </section>
      )
}

export default BuildPc;