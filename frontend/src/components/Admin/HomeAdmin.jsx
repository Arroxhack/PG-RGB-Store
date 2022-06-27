import React from 'react'
import Menu from './Menu/Menu'
import Nav from './Nav/Nav'
import { useState } from 'react'
import CreateProduct from './Productos/CreateProduct'
import DeleteProduct from './Productos/DeleteProduct'
import EditProduct from './Productos/EditProduct'
import CreateAdmin from './Usuarios/CreateAdmin'
import EditUser from './Usuarios/EditUser'
import Error from "../Error/Error";

const HomeAdmin = () => {
    const admin = localStorage.getItem("admin");

    const [menu, setMenu] = useState(0)

    console.log(menu)
  return (
    <>
    {admin ? (
      <Error />
    ) : (
          <div>
          <Nav/>
          <div className='flex flex-row'>
          <div className='bg-primary-200 h-screen w-60'>
              <Menu value={menu} setValue={setMenu}/>
          </div>
          { menu==0 && <CreateProduct/>}
          { menu==1 && <EditProduct/>}
          { menu==2 && <DeleteProduct/>}
          { menu==3 && <CreateAdmin/>}
          { menu==4 && <EditUser/>}
          </div>
          </div>
    ) }
  </>
  )
}


export default HomeAdmin;
