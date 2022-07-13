import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'

const Nav = () => {

  
  return (
    <div className="flex flex-col items-center bg-primary-400 h-screen lef-0 sm:w-2/4 fixed top-0 ">
          <ul className=" text-base text-secundary-250 pt-4 md:flex md:justify-between md:pt-0 ">
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
        </div>
  )
}

export default Nav