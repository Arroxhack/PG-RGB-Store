import React from "react";

import { Link, NavLink } from "react-router-dom";

function NavBar({ toggleOpen }) {
  return (
    <nav className="flex justify-between items-center h-16 bg-gray-300 text-black relative shadow-sm">
      <Link to="/" class="pl-8">
        RGB
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
     
      <div className="pr-8 hidden md:block">
        <Link to="" className="p-4">
          Home
        </Link>
        <Link to="" className="p-4">
          Ingresar
        </Link>
        <Link to="" className="p-4">
          Carrito
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
