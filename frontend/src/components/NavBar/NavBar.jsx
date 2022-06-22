import React from "react";

import { Link, NavLink } from "react-router-dom";

function NavBar({ toggleOpen }) {
  return (
    <nav className="flex justify-evenly items-center h-36 bg-gray-300 text-black relative shadow-sm bg-primary-200">
      <Link to="/" className="flex flex-col items-center text-primary-400 font-Open text-5xl font-extrabold">
        RGB 
        <span className="font-PT text-primary-300 font-normal text-4xl"
        >STORE</span>
      </Link>
      
      <div className="px-4 cursor-pointer md:hidden" onClick={toggleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
     
      <div className="flex gap-5">
        <Link to="" className="bg-primary-400 font-Open px-5 py-1 rounded-lg text-primary-200 uppercase font-semibold hover:bg-primary-300">
          Ingresar
        </Link>
        <Link to="" className="bg-primary-400 font-Open px-5 py-1 rounded-lg text-primary-200 uppercase font-semibold hover:bg-primary-300">
          Carrito
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
