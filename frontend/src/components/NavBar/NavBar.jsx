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
import { BiCategoryAlt } from "react-icons/bi";
import { MdComputer } from "react-icons/md";
import { IoIosBuild } from "react-icons/io";
import svg from "../../images/rename.svg";
import { FiLogIn } from "react-icons/fi";
import { BsPencilSquare } from "react-icons/bs";
import {MdOutlineFavoriteBorder} from 'react-icons/md'
function NavBar() {
  let username = localStorage.getItem("username");
  const admin = localStorage.getItem("admin");
  if (username) {
    username = window.atob(localStorage.getItem("username"));
  }

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
    return (
      <div className="flex flex-col items-start  bg-primary-700 text-primary-400 h-screen lef-0 w-2/4 fixed top-0 left-0 text-base ">
        <button
          className="mt-5 active:border active:border-primary-200"
          onClick={() => handleClose()}
        >
          <AiOutlineClose className="md:h-12 md:w-14" />
        </button>
        <ul className=" text-base text-primary pt-4 md:text-2xl   ">
          <li className="sm:py-2 md:py-6  active:bg-primary-300 rounded  ">
            <Link to="/categories?category=all&page=1" className="flex items-center">
              <BiCategoryAlt />
              <p className="sm:ml-1 md:ml-2">Categories</p>
            </Link>
          </li>
          <li className=" sm:py-2 md:py-6   active:bg-primary-300 rounded ">
            <Link to="/categories?category=Notebook&page=1" className="flex items-center ">
              <MdComputer />
              <p className="sm:ml-1 md:ml-2"> Notebooks</p>
            </Link>
          </li>

          <li className="sm:py-2 md:py-6 block active:bg-primary-300 rounded ">
            <Link to="/categories?category=Desktop&page=1" className="flex items-center ">
              <img
                src={svg}
                alt="svg pc"
                className="sm:h-7 sm:w-4 md:h-10 md:w-8"
              />
              <p className="sm:ml-1 md:ml-2">Prebuilt PCs</p>
            </Link>
          </li>

          <li className="sm:py-2 md:py-6 block active:bg-primary-300 rounded ">
            <Link to="/arma-tu-pc" className="flex items-center ">
              <IoIosBuild />
              <p className="sm:ml-1 md:ml-2">Build your PC</p>
            </Link>
          </li>
          <li className="sm:py-2 md:py-6 block active:bg-primary-300 rounded ">
            <Link to="/favoritos" className="flex items-center ">
              <MdOutlineFavoriteBorder className="text-primary" />
              <p className="sm:ml-1 md:ml-2">Favorites</p>
            </Link>
          </li>
        </ul>
        <div className="flex md:text-2xl bottom-0   ">
          {username ? (
            <div className="flex flex-col ">
              <Link
                to="/profile"
                className="flex items-center sm:py-2 md:py-6   text-primary-400 md:text-2xl left-0 "
              >
                <HiOutlineUserCircle className="  text-primary-400 " />
                <span className=" sm:ml-1 md:ml-2">Profile</span>
              </Link>{" "}

              <Logout />
              {admin ? (
                <Link to="/admin/list-products">
                  <button className=" md:p-4 sm:py-2 md:py-6 block active:bg-primary-300 rounded">
                    Admin panel
                  </button>
                </Link>
              ) : null}
            </div>
          ) : (
            // SI NO ESTA RGISTRADO

            <div className="flex flex-col  md:w-1/4   ">
              <div className="sm:py-2 md:py-6">
                <Link
                  to="/logIn"
                  className=" sm:text-base  text-primary-400 md:text-xl sm:mr-2  flex items-center md:w-28"
                >
                  <FiLogIn />
                  <p className="sm:ml-1 md:ml-2 md:w-20 md:text-2xl">Log in</p>
                </Link>
              </div>
              <div className="sm:py-2 md:py-6 flex">
                <Link
                  to="/register"
                  className=" sm:text-base text-primary-400  md:text-xl flex items-center "
                >
                  <BsPencilSquare />
                  <p className="sm:ml-1 md:ml-2 md:text-2xl">Register</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  //nav de escritorio
  return (
    <nav className=" w-full flex  items-center lg:justify-between  shadow-lg bg-primary-700 sm:h-11 sm:flex justify-between md:flex md:justify-around md:h-20 lg:h-24 sticky z-50 top-0 left-0">
      <div className="flex items-center sm:justify-around sm:w-1/4  md:w-1/4 lg:w-2/5 ">
        <div className="sm:flex sm:items-center sm:ml-[-1rem] lg:hidden sm:block sm:mr-4">
          <button className="absolute" onClick={() => handleOpen()}>
            <AiOutlineMenu className="h-6 w-7 md:h-12 md:w-14 text-primary-400 " />
          </button>
          {navOpen ? <Nav /> : ""}
        </div>

        {/*LOGO */}
        <div className="flex items-center sm:mr-[-2rem]  ">
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

        <div className="flex justify-between items-center max-h-max bg-primary-700 text-base text-primary  sm:hidden lg:block  lg:flex ">
          <ul className="flex  ">
            <li className="lg:mr-5 relative flex">
              <Link to="/categories?category=all&page=1" className="">
                <p className="buttom">Categories</p>
              </Link>
            </li>
            <li className="lg:buttom lg:mr-5">
              <Link to="/categories?category=Notebook&page=1">Notebooks</Link>
            </li>
            <li className="lg:buttom lg:mr-5 ">
              <Link to="/categories?category=Desktop&page=1">Prebuilt PCs</Link>
            </li>
            <li className="lg:buttom ">
              <Link to="/arma-tu-pc">
                <p>Build your PC</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* SEARCHBAR */}
      <div className=" sm:w-1/5  md:w-1/2 lg:w-1/6 sm:ml-[-4rem] flex lg:flex lg:-ml-[10rem]">
        <SearchBar />
      </div>

      {/* ADMIN, PERFIL Y LOG OUT */}
      <div className="flex lg:justify-between  items-center sm:justify-end sm:w-18 lg:w-1/4 ">
        {username ? (
          <div className="lg:flex lg:ml-[-6rem] lg:items-center lg:justify-between lg:w-full sm:hidden lg:block ">
            <Link
              to="/profile"
              className="sm:text-xs text-primary-400 md:text-xl flex "
            >
              <span className="text-base text-primary buttom">Profile</span>
            </Link>{" "}
            <Logout />
            <Link to="/favoritos">
              <button className="flex lg:ml-[-1rem] text-base text-primary buttom items-center sm:hidden lg:block">
                Favorites
              </button>
            </Link>
            {admin ? (
              <Link to="/admin/list-products">
                <button className="text-base text-primary buttom">
                  Admin Panel
                </button>
              </Link>
            ) : null}
          </div>
        ) : (
          // SI NO ESTA RGISTRADO

          <div className="lg:flex justify-between  md:w-1/4 items-center sm:hidden lg:block ">
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
        <div className="flex flex-col items-center text-primary-300 sm:h-full lg:mr-6 ">
          <TiShoppingCart
            onClick={handleCart}
            className="h-6 w-7 md:h-10 md:w-10 relative cursor-pointer lg:hover:translate-y-px"
          />
          {cartOpen ? (
            <div className="absolute lg:translate-x-[-10rem] sm:translate-x-28 md:">
              <BoxCart onClick={handleCart} />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
