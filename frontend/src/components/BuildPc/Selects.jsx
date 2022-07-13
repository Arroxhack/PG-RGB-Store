import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";

function Selects({ name, handleChange,brand=undefined}) {
  let id = `${name}`;
  let label = name.charAt(0).toUpperCase() + name.slice(1);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.allProducts);
  //console.log(allProducts);
  // let urlIntel = new URL('https://localhost:3000/arma-ru-pc?brand=Intel');
  // let urlAmd = new URL('https://localhost:3000/arma-ru-pc?brand=AMD');
  // let params;
  // if(urlIntel.toString().slice(-5) === 'Intel'){
  //   params = new URLSearchParams(urlIntel.search);
  // }else{
  //   params = new URLSearchParams(urlAmd.search);
  // }
  // const brand =  params.get('brand');
  // console.log(brand,'soy la brand')
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
      >
        <option value="">Choose your {name}</option>
        
        {name==='CPU' ? allProducts.map((p)=>p.category[0]===name && p.brand === brand? (<option id={p.id} value={JSON.stringify(p)}> {p.name} </option>) : null) : null}
        {name === 'Motherboard' && brand ? allProducts.map((p)=>p.category[0]===name && p.compatibilityBrands === brand ? (<option id={p.id} value={JSON.stringify(p)}> {p.name} </option>) : null) : name === 'Motherboard' && !brand ? allProducts.map((p)=>p.category[0]===name? (<option id={p.id} value={JSON.stringify(p)}> {p.name} </option>) : null) : null}

        {allProducts.map((p) => p.category[0] !== 'CPU' &&  p.category[0] !== 'Motherboard' && p.category[0] === `${name}` ? ( <option id={p.id} value={JSON.stringify(p)}> {p.name} </option>) : null
        )}
      </select>
    </div>
  );
}

export default Selects;