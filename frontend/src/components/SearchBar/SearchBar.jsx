import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { filterPrice, searchProducts } from "../../redux/actions";
import {BiSearchAlt2} from 'react-icons/bi'

export default function SearchBar() {
  const [name, setSearch] = useState("");

  const [params, setParams]= useSearchParams()
  


  let dispatch = useDispatch();
  const navigate = useNavigate();
  function onSubmit(e) {
    e.preventDefault();
    setSearch("");
    navigate(`/categories?name=${name}`)
  }

  function onInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  
  }
  return (
 
      <form onSubmit={onSubmit} className='flex items-center sm:max-w-max lg:w-full  '>
  
        <input
          className=" border border-primary-400 lg:border-2
          bg-primary-200 text-secundary-100 text-center lg:h-10 rounded-lg text-sm focus:outline-none 
         sm:placeholder:text-xs md:max-w-max md:h-9 md:placeholder:text-lg sm:max-w-max lg:pr-36 "
          type="text"
          placeholder="Search..."
          value={name}
          onChange={onInputChange}
        ></input>
      
          <button type="submit" className=" relative right-0  sm:ml-[-1rem] sm:mt-[0.5rem] md:pt-3 lg:ml-[-2rem] lg:mt-0 ">
        <BiSearchAlt2 className="sm:h-5 sm:w-5 sm:pb-2 sm:pr-2 text-primary-400 lg:h-11 lg:w-8 "/>
        </button>
      
      </form>
  
  );
}
