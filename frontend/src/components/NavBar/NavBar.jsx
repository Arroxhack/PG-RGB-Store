import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logout from "../LogOut/Logout";
import SearchBar from "../SearchBar/SearchBar";
import BoxCart from "../Cart/BoxCart";
import Nav from "./Nav";

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
      <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 y-4  pb-5 lg:pb-0">
        {/*LOGO */}
        <div class="flex items-center flex-shrink-0 mr-16">
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
        <div class="block lg:hidden">
          {menuOpen ? <Nav onClick={handleMenu} /> : <p> </p>}
          <button onClick={handleMenu} class="text-secundary-250 py-2 px-2.5">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              class="w-6"
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
      </div>

      <div class="menu w-full lg:flex flex-grow space-x-3 lg:items-center lg:w-auto lg:px-3 px-8">
        <div>
          <SearchBar></SearchBar>
        </div>
        <div className="flex justify-center">
          {cartOpen ? (
            <BoxCart onClick={handleCart} />
          ) : (
            <p
              onClick={handleCart}
              className="bg-primary-400 font-Open px-5 py-1 rounded-lg text-primary-200 uppercase font-semibold hover:bg-primary-300"
            >
              Cart
            </p>
          )}
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
