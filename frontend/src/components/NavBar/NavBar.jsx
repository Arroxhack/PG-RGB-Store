import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logout from "../LogOut/Logout";
import SearchBar from "../SearchBar/SearchBar";
import BoxCart from "../Cart/BoxCart";
import Nav from "./Nav";
import CheckoutPaypal from "../Paypal/CheckoutPaypal";

function NavBar() {
  const username = localStorage.getItem("username");
  const admin = localStorage.getItem("admin");

  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCart = (e) => {
    e.preventDefault();
    setCartOpen(!cartOpen);
  };

  const handleMenu = (e) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-4 shadow-lg bg-primary-200">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 y-4  pb-5 lg:pb-0">
        {/*LOGO */}
        <div className="flex items-center flex-shrink-0 mr-16">
          <Link
            to="/"
            className="flex flex-col items-center text-primary-400 font-Open text-xl tracking-tight font-extrabold"
          >
            RGB
            <span className="font-PT text-primary-300 font-normal text-xl tracking-tight">
              STORE
            </span>
          </Link>
        </div>
        {/*LOGO */}

        <div className="flex justify-center bg-primary-200">
          <ul className=" text-base text-secundary-250 pt-4 md:flex md:justify-between md:pt-0 ">
            <li className="md:p-4 py-2 block hover:bg-primary-300 rounded ">
              <Link to="/categories">
                <p>Categories</p>
              </Link>
            </li>
            <li className="md:p-4 py-2 block hover:bg-primary-300 rounded ">
              <Link to="/categories/notebooks">Notebooks</Link>
            </li>
            <li className="md:p-4 py-2 block hover:bg-primary-300 rounded ">
              <Link to="/categories/pc-armadas">Prebuilt PCs</Link>
            </li>
            <li className="md:p-4 py-2 block hover:bg-primary-300 rounded ">
              <Link to="/categories/placas-de-videos">GPUs</Link>
            </li>
            <li className="md:p-4 py-2 block hover:bg-primary-300 rounded ">
              <Link to="/arma-tu-pc">
                <p>Build your PC</p>
              </Link>
            </li>
          </ul>
        </div>

        {/*       
        <div className="block lg:hidden">
          {menuOpen ?   
           <div className="flex justify-center bg-primary-200 ">
          <ul className=" text-base text-secundary-250 pt-4 md:flex md:justify-between md:pt-0 ">
            <li className="md:p-4 py-2 block hover:bg-primary-300 rounded ">
              <Link to="/categories">
                <p>Categories</p>
              </Link>
            </li>
            <li className="md:p-4 py-2 block hover:bg-primary-300 rounded ">
              <Link to="/categories/notebooks">Notebooks</Link>
            </li>
            <li className="md:p-4 py-2 block hover:bg-primary-300 rounded ">
              <Link to="/categories/pc-armadas">Prebuilt PCs</Link>
            </li>
            <li className="md:p-4 py-2 block hover:bg-primary-300 rounded ">
              <Link to="/categories/placas-de-videos">GPUs</Link>
            </li>
            <li className="md:p-4 py-2 block hover:bg-primary-300 rounded ">
              <Link to="/arma-tu-pc">
                <p>Build your PC</p>
              </Link>
            </li>
          </ul>
        </div>   : null}

          <button onClick={handleMenu} className="text-secundary-250 py-2 px-2.5">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
        </div>
      </div> */}
      </div>
      
      <div className="menu w-full lg:flex  space-x-3 lg:items-center lg:w-auto lg:px-3 px-8">
        <div>
          <SearchBar></SearchBar>
        </div>
        <div className="flex ">
        <p onClick={handleCart} className="bg-primary-400 font-Open px-5 py-1 rounded-lg cursor-pointer text-primary-200 uppercase font-semibold hover:bg-primary-300">Cart</p>
        {cartOpen ? <div className="absolute">
          <BoxCart onClick={handleCart}/>
        </div> : <></>}
          {/* {cartOpen ? (
            <BoxCart onClick={handleCart} />
          ) : (
            <p onClick={handleCart} className="bg-primary-400 font-Open px-5 py-1 rounded-lg text-primary-200 uppercase font-semibold hover:bg-primary-300">Cart</p>)} */}
          {username ? (
            <div>
              <Link to="/profile">
                <p className="bg-primary-400 font-Open px-5 py-1 rounded-lg text-primary-200 uppercase font-semibold hover:bg-primary-300">
                  Welcome {username}!
                </p>
              </Link>{" "}
              <Logout />
              {admin ? (
                <Link to="/admin/list-products">
                  <button className="bg-primary-400 font-Open px-5 py-1 rounded-lg text-primary-200 uppercase font-semibold hover:bg-primary-300">
                    ADMINPANEL
                  </button>
                </Link>
              ) : null}
            </div>
          ) : (
            <>
              <Link
                to="/logIn"
                className="bg-primary-400 font-Open px-5 py-1 rounded-lg text-primary-200 uppercase font-semibold hover:bg-primary-300"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="bg-primary-400 font-Open px-5 py-1 rounded-lg text-primary-200 uppercase font-semibold hover:bg-primary-300"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
