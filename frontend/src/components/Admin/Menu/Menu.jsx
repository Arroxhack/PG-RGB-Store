import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {

  return (
<div className='text-secundary-100'>
<div>
        <div className='flex flex-col items-center pb-16 pt-10'>
            <img src='profile.com' alt='Foto del admin'/>
            <p className='uppercase'>Nombre del admin</p>
        </div>
    </div>

    <div className='flex flex-col items-center'>
      <div className='bg-secundary-100 h-[1px] w-[150px] my-3'></div>
      <Link to='/admin/list-products'>
      <h3 value='create-product' className='hover:bg-primary hover:text-primary-200 px-5 cursor-pointer'>List products</h3>
      </Link>
      <div className='bg-secundary-100 h-[1px] w-[150px] my-3'></div>
      <Link to='/admin/create-admin'>
      
      <h3 value='create-admin' className='hover:bg-primary hover:text-primary-200 px-8 cursor-pointer'>Create admin</h3>
      </Link>
      <div className='bg-secundary-100 h-[1px] w-[150px] my-3'></div>
      <Link to='/admin/edit-user'>
      <h3 value='edit-user' className='hover:bg-primary hover:text-primary-200 px-7 cursor-pointer'>Edit user</h3>
      </Link>
      <div className='bg-secundary-100 h-[1px] w-[150px] my-3'></div>
    </div>
</div>
  )
}

export default Menu