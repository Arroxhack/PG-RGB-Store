import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, buildPc } from "../../redux/actions";

function Selects({ name, handleChange, brand = undefined, socket = undefined, ddr = undefined,isSelected}) {
  let id = `${name}`;
  let label = name.charAt(0).toUpperCase() + name.slice(1);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.allProducts);
  //console.log(allProducts);

  return (
    <div className="">
      <label
        className="p-2 mx-0 mb-2 mt-0 block font-Open font-bold leading-none"
        htmlFor={id}
      >
        {label}
      </label>
      <select
        className="border-solid rounded p-2 mx-0 mb-2 mt-0 block text-base leading-none bg-secundary-250 cursor-pointer"
        name={id}
        id={id}
        onChange={handleChange}
        disabled={!isSelected}
      >
        <option value="">Choose your {name}</option>
        {/* CPU */}
        {name === 'CPU' ? allProducts.map((p)=>p.category[0]===name ? (<option key={p.id} value={JSON.stringify(p)}> {p.name} </option>) : null) : null}
        {/* Motherboard */}
        {name === 'Motherboard' && brand && socket? allProducts.map((p)=>p.compatibilityBrands === brand && p.socket === socket? (<option key={p.id} value={JSON.stringify(p)}> {p.name} </option>) : null) : name === 'Motherboard' && !brand && !socket? allProducts.map((p)=>p.category[0]===name? (<option key={p.id} value={JSON.stringify(p)}> {p.name} </option>) : null) : null}
        {/* RAM */}
        {name === 'Ram' && ddr ? allProducts.map((p)=> p.category[0] === 'Ram' && p.ddr === ddr ? (<option key={p.id} value={JSON.stringify(p)}>{p.name}</option>) :null) : name === 'Ram' && !brand && !ddr ? allProducts.map((p)=>p.category[0] === 'Ram' ?(<option key={p.id} value={JSON.stringify(p)}>{p.name}</option>):null):null}
        
        {allProducts.map((p) => p.category[0] !== 'CPU' &&  p.category[0] !== 'Motherboard' && p.category[0] !== 'Ram' && p.category[0] === `${name}` ? ( <option key={p.id} value={JSON.stringify(p)}> {p.name} </option>) : null
        )}
      </select>
    </div>
  );
}

export default Selects;