import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { searchProducts } from "../../redux/actions";
import {BiSearchAlt2} from 'react-icons/bi'

export default function SearchBar() {
  const [search, setSearch] = useState("");
  let dispatch = useDispatch();
  const navigate = useNavigate();
  function onSubmit(e) {
    e.preventDefault();
    dispatch(searchProducts(search));
    setSearch("");
    navigate('/categories')
  }

  function onInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);

    console.log(search);
  }
  return (
    <div className="lg:pt-2 relative mx-auto text-gray-600 sm:max-w-max md:max-w-max">
      <form onSubmit={onSubmit} className='flex md:max-w-max '>
        <input
          className=" border border-primary-400 lg:border-2 border-gray-300
          bg-primary-200 lg:h-10 lg:px-5 lg:pr-16 rounded-lg text-sm focus:outline-none
          sm:max-w-max sm:placeholder:text-xs  md:max-w-max md:h-9 md:placeholder:text-lg"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={onInputChange}
        ></input>
      
          <button type="submit" className="absolute right-0 ml-[-8px] sm:pt-1 md:pt-3">
        <BiSearchAlt2 className="sm:h-6 sm:w-6 sm:pb-2 sm:pr-2 text-primary-400"/>
        </button>
     
      
      </form>
    </div>
  );
}
