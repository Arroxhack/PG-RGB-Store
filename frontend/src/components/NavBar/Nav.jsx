import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {


  return (
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
        </div>
  )
}

export default Nav