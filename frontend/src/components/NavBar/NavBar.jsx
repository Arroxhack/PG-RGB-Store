import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logout from "../LogOut/Logout";
import SearchBar from "../SearchBar/SearchBar";
import BoxCart from "../Cart/BoxCart";

import CheckoutPaypal from "../Paypal/CheckoutPaypal";
import {TiShoppingCart} from 'react-icons/ti'
import {HiOutlineUserCircle} from 'react-icons/hi'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'


function NavBar() {
  // localStorage.getItem("username")
  const username = false
  const admin = localStorage.getItem("admin");

  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [navOpen, setNavOpen]= useState(false)
  
  const handleCart = (e) => {
    e.preventDefault();
    setCartOpen(!cartOpen);
  };


 const handleOpen= ()=>{
setNavOpen(true)
 }
 const handleClose= ()=>{
  setNavOpen(false)
   }
  

   //Nav para movil
function Nav() {

  return (
    <div className="flex flex-col items-start  bg-primary-200 text-primary-400 h-screen lef-0 w-2/4 fixed top-0 ">
      <button className='mt-5 active:border active:border-primary-200' onClick={()=>handleClose()}><AiOutlineClose className="md:h-12 md:w-14"/></button>
          <ul className=" text-base text-primary pt-4 md:text-3xl  ">
            <li className="md:p-4 py-2 block active:bg-primary-300 rounded ">
              <Link to="/categories">
                <p>Categories</p>
              </Link>
            </li>
            <li className="md:p-4 py-2 block active:bg-primary-300 rounded ">
              <Link to="/categories/notebooks">Notebooks</Link>
            </li>
            <li className="md:p-4 py-2 block active:bg-primary-300 rounded ">
              <Link to="/categories/pc-armadas">Prebuilt PCs</Link>
            </li>
            <li className="md:p-4 py-2 block active:bg-primary-300 rounded ">
              <Link to="/categories/placas-de-videos">GPUs</Link>
            </li>
            <li className="md:p-4 py-2 block active:bg-primary-300 rounded ">
              <Link to="/arma-tu-pc">
                <p>Build your PC</p>
              </Link>
            </li>
          </ul>
        </div>
  )
}


//nav de escritorio
  return (
      <nav className=" w-full flex flex-wrap items-center lg:justify-between lg:py-4 shadow-lg bg-primary-200 sm:h-11 sm:flex justify-between md:flex md:justify-around md:h-20 ">
       <div className="flex items-center justify-between sm:w-1/4  md:w-1/4 ">

       <div className="flex items-center">
       <button className="absolute" onClick={()=> handleOpen()}>
       <AiOutlineMenu className="h-6 w-7 md:h-12 md:w-14 text-primary-400 "/> 
       </button>
       {(navOpen)? <Nav/> : ''}
       </div>
       
        
          {/*LOGO */}
          <div className="flex items-center lg:flex-shrink-0 lg:mr-16 sm:top-0">
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
          </div>
          {/*LOGO */}
    <div className="flex justify-between lg:w-auto  lg:border-b-0 lg:pl-6 lg:pr-2 lg:y-4  lg:pb-5 ">
          <div className="flex justify-center bg-primary-200 sm:hidden">
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
  
        </div>
        
        
          <div className="sm:w-1/2 md:w-1/2" >
            <SearchBar/>
          </div>
          <div className="flex justify-between items-center sm:w-1/4 ">
            {username ? (
              <div className="flex items-center">
                <Link to="/profile"  className="sm:text-xs text-primary-400 md:text-xl ">
                <HiOutlineUserCircle className="h-6 w-7 md:h-12 md:w-14 text-primary-400 "/>
                </Link>{" "}
                <Logout  />
                {admin ? (
                  <Link to="/admin">
                    <button className="bg-primary-400 font-Open lg:px-5 lg:py-1 rounded-lg text-primary-200 lguppercase font-semibold focus:bg-primary-300">
                      ADMINPANEL
                    </button>
                  </Link>
                ) : null}
              </div>

            ) : (

              <div className="flex justify-between sm:w-1/4 md:w-1/4 items-center">
                <Link
                  to="/logIn"
                  className="sm:text-xs sm:w-6 text-primary-400 md:text-xl flex sm:mr-2"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className=" sm:text-xs text-primary-400  md:text-xl sm:pr-3"
                >
                  Register
                </Link>
              </div>
            )}
            <div className="flex flex-col  items-center text-primary-400 sm:h-full ">   
            <TiShoppingCart onClick={handleCart} className="h-6 w-7 md:h-10 md:w-10 relative "/>
          {cartOpen ? <div className="absolute">
            <BoxCart onClick={handleCart}/>
          </div> : <></>}
          </div>
          </div>
      </nav>
    );
  }
  
  
  export default NavBar;
