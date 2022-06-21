import React from 'react'
import ResponsiveMenu from './ResponsiveMenu'
import NavBar from './NavBar'

function Layout({children}) {
   
  return (
    <div className='h-screen'>
        <NavBar/>
        <ResponsiveMenu />
        {children}
    </div>
  )
}

export default Layout
