import React from 'react'
import {Link} from 'react-router-dom'
import Logout from "../../LogOut/Logout"

const Nav = () => {
  return (
    <div className='flex flex-row items-center justify-around bg-primary-200'>
        <Link
        to="/"
        className="flex flex-col items-center text-primary-400 font-Open text-4xl font-extrabold">
        RGB
        <span className="font-PT text-primary-300 font-normal text-3xl">
          STORE
        </span>
      </Link>
        <Logout/>
    </div>
  )
}

export default Nav