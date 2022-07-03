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
  //localStorage.getItem("admin");
  const username = true
  const admin = true

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
              <Link to="/arma-tu-pc">
                <p>Build your PC</p>
              </Link>
            </li>
          </ul>
<<<<<<< HEAD
          <div className="flex">
=======
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
>>>>>>> 7524d3353ff9aa383ba1d9753642b1f731da80b9
          {username ? (
              <div className="flex flex-col ">
                <Link to="/profile"  className="flex items-center py-2  sm:text-xs text-primary-400 md:text-xl left-0 ">
                <HiOutlineUserCircle className="h-4 w-4  md:h-12 md:w-14 text-primary-400 "/>
                <span className="text-base">Profile</span>
                </Link>{" "}
                <Logout  />
                {admin ? (
                  <Link to="/admin">
                    <button className=" md:p-4 py-2 block active:bg-primary-300 rounded">
                     Admin panel
                    </button>
                  </Link>
                ) : null}
              </div>

            ) : (
                  // SI NO ESTA RGISTRADO
          
              <div className="flex justify-between  md:w-1/4 items-center ">
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
            </div>
        </div>
  )
}


//nav de escritorio
  return (
      <nav className=" w-full flex  items-center lg:justify-between  shadow-lg bg-primary-200 sm:h-11 sm:flex justify-between md:flex md:justify-around md:h-20 lg:h-24 sticky z-50 top-0">
       <div className="flex items-center sm:justify-around sm:w-1/4  md:w-1/4 lg:w-1/2 ">

       <div className="flex items-center sm:ml-[-1rem] lg:hidden">
       <button className="absolute" onClick={()=> handleOpen()}>
       <AiOutlineMenu className="h-6 w-7 md:h-12 md:w-14 text-primary-400 "/> 
       </button>
       {(navOpen)? <Nav/> : ''}
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
        
        {/* SEARCHBAR */}
          <div className=" sm:w-1/4 sm:left-0 md:w-1/2 lg:w-1/4 sm:ml-[-4rem] flex lg:justify-center " >
            <SearchBar/>
          </div>



            {/* ADMIN, PERFIL Y LOG OUT */}
          <div className="flex justify-between  items-center sm:w-2/6 lg:w-1/6 ">
            {username ? (
              <div className="flex lg:ml-[-4rem] items-center sm:hidden lg:block">
                <Link to="/profile"  className="sm:text-xs text-primary-400 md:text-xl flex ">
                <span className="text-base text-primary buttom">profile</span>
                </Link>{" "}
                <Logout  />
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
            <TiShoppingCart onClick={handleCart} className="h-6 w-7 md:h-10 md:w-10 relative cursor-pointer lg:hover:translate-y-px"/>
          {cartOpen ? <div className="absolute">
            <BoxCart onClick={handleCart}/>
          </div> : <></>}
          </div>
          </div>
      </nav>
    );
  }
  
  
  export default NavBar;
