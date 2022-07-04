import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logout from "../LogOut/Logout";
import SearchBar from "../SearchBar/SearchBar";
import BoxCart from "../Cart/BoxCart";
import CheckoutPaypal from "../Paypal/CheckoutPaypal";
import { TiShoppingCart } from "react-icons/ti";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

function NavBar() {

  const username = localStorage.getItem("username")
  const admin =  localStorage.getItem("admin");

  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [navOpen, setNavOpen] = useState(false);

  const handleCart = (e) => {
    e.preventDefault();
    setCartOpen(!cartOpen);
  };

  const handleOpen = () => {
    setNavOpen(true);
  };
  const handleClose = () => {
    setNavOpen(false);
  };

  //Nav para movil
  function Nav() {
 
  //nav de escritorio
  return (
    <nav className=" w-full flex  items-center lg:justify-between  shadow-lg bg-primary-200 sm:h-11 sm:flex justify-between md:flex md:justify-around md:h-20 lg:h-24 sticky z-50 top-0">
      <div className="flex items-center sm:justify-around sm:w-1/4  md:w-1/4 lg:w-1/2 ">
        <div className="flex items-center sm:ml-[-1rem] lg:hidden">
          <button className="absolute" onClick={() => handleOpen()}>
            <AiOutlineMenu className="h-6 w-7 md:h-12 md:w-14 text-primary-400 " />
          </button>
          {navOpen ? <Nav /> : ""}
        </div>

        {/*LOGO */}
        <div className="flex items-center sm:top-0 ">
          <Link
            to="/"
            className="flex flex-col items-center text-primary-400 font-Open text-xl tracking-tight font-extrabold sm:text-sm md:text-lg"
          >
            RGB
            <span className="font-PT text-primary-300 font-normal text-xl tracking-tight sm:text-sm sm:mt-[-4px] md:text-lg">
              STORE
            </span>
          </Link>
        </div>
        {/*LOGO */}

        <div className="flex justify-between items-center max-h-max bg-primary-200 text-base text-primary  sm:hidden lg:block ">
          <ul className="flex  ">
            <li className="lg:mr-5 relative flex">
              <Link to="/categories" className="">
                <p className="buttom">Categories</p>
              </Link>
            </li>
            <li class="buttom lg:mr-5">
              <Link to="/categories/notebooks">Notebooks</Link>
            </li>
            <li className="buttom lg:mr-5 ">
              <Link to="/categories/pc-armadas">Prebuilt PCs</Link>
            </li>
            <li className="buttom lg:mr-5">
              <Link to="/arma-tu-pc">
                <p>Build your PC</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="menu w-full lg:flex  space-x-3 lg:items-center lg:w-auto lg:px-3 px-8">
        <div>
          <SearchBar></SearchBar>
        </div>

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
                <Link to="/admin">
                  <button className="bg-primary-400 font-Open px-5 py-1 rounded-lg text-primary-200 uppercase font-semibold hover:bg-primary-300">
                    ADMINPANEL
                  </button>
                </Link>
              ) : null}

              <Link to="/favoritos">
                <button  className="bg-primary-400 font-Open px-5 py-1 rounded-lg text-primary-200 uppercase font-semibold hover:bg-primary-300">favoritos</button>
              </Link>
            </div>
          ) : null}
            <div>

      {/* SEARCHBAR */}
      <div className=" sm:w-1/4 sm:left-0 md:w-1/2 lg:w-1/4 sm:ml-[-4rem] flex lg:justify-center ">
        <SearchBar />
      </div>

      {/* ADMIN, PERFIL Y LOG OUT */}
      <div className="flex justify-between  items-center sm:w-2/6 lg:w-1/6 ">
        {username ? (
          <div className="flex lg:ml-[-4rem] items-center sm:hidden lg:block">
            <Link
              to="/profile"
              className="sm:text-xs text-primary-400 md:text-xl flex "
            >
              <span className="text-base text-primary buttom">profile</span>
            </Link>{" "}
            <Logout />
            {admin ? (
              <Link to="/admin">
                <button className="text-base text-primary buttom">
                  admin panel
                </button>
              </Link>
            ) : null}
          </div>
        ) : (
          // SI NO ESTA RGISTRADO

          <div className="flex justify-between  md:w-1/4 items-center sm:hidden lg:block ">
            <div className="buttom">
              <Link
                to="/logIn"
                className=" sm:text-xs  text-primary-400 md:text-xl sm:mr-2 sm:w-10 lg:text-base  "
              >
                Log in
              </Link>
            </div>
            <div className=" lg:mr-[-6rem]">
              <Link
                to="/register"
                className=" sm:text-xs text-primary-400  md:text-xl buttom lg:text-base"
              >
                Register
              </Link>
            </div>
          </div>
        )}

        {/* CARRITO */}
        <div className="flex flex-col items-center text-primary-400 sm:h-full lg:mr-6 ">
          <TiShoppingCart
            onClick={handleCart}
            className="h-6 w-7 md:h-10 md:w-10 relative cursor-pointer lg:hover:translate-y-px"
          />
          {cartOpen ? (
            <div className="absolute">
              <BoxCart onClick={handleCart} />
            </div>
          ) : (
            null          
            )}
        </div>
      </div>
      </div>
      </div>
    </nav>
  )
}}

export default NavBar;
