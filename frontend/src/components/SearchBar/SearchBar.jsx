import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { filterPrice, searchProducts } from "../../redux/actions";
import { BiSearchAlt2 } from "react-icons/bi";

export default function SearchBar() {
  const [name, setSearch] = useState("");

  const [params, setParams] = useSearchParams();

  let dispatch = useDispatch();
  const navigate = useNavigate();
  function onSubmit(e) {
    e.preventDefault();
    setSearch("");
    let final = name.trim();
    navigate(`/categories?name=${final}&page=1`);
  }

  function onInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }
  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center sm:max-w-max lg:max-w-max "
    >
      <input
        className="lg:pl-5 text-secundary-100 lg:left-0 border border-primary-400 lg:border-2
          bg-primary-200 lg:h-10 rounded-lg text-sm focus:outline-none 
         sm:placeholder:text-xs md:max-w-max md:h-9 md:placeholder:text-lg sm:max-w-max md:pr-24 lg:max-w-max  "
        type="text"
        placeholder="Search..."
        value={name}
        onChange={onInputChange}
      ></input>

      <button
        type="submit"
        className=" relative   sm:ml-[-1rem] sm:mt-[0.5rem] lg:ml-[-2rem]  "
      >
        <BiSearchAlt2 className="sm:h-5 sm:w-5 sm:pb-2 sm:pr-2 text-primary-400 lg:h-11 lg:w-8 md:h-8 md-w-8  " />
      </button>
    </form>
  );
}
