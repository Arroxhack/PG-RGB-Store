import React from "react";
import { Link } from "react-router-dom";

function ResponsiveMenu() {
  return (
    <div className="grid grid-rows-3 text-center items-center bg-gray-500">
      <Link to="/" className="p-4 text-white">
        Home
      </Link>
      <Link to="/login" className="p-4 text-white">
        Ingresar
      </Link>
      <Link to="/cart" className="p-4 text-white">
        Carrito
      </Link>
    </div>
  );
}

export default ResponsiveMenu;
