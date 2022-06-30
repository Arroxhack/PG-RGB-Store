import React from 'react'

const Menu = ({value, setValue,onChange}) => {

  const onClick = (e)=>{
    setValue(e.target.value)
    onChange(e)
  }

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
      <option value='create-product' onClick={onClick} className='hover:bg-primary hover:text-primary-200 px-5 cursor-pointer'>Crear producto</option><div className='bg-secundary-100 h-[1px] w-[150px] my-3'></div>
      <option value='edit-product' onClick={onClick} className='hover:bg-primary hover:text-primary-200 px-3 cursor-pointer'>Modificar prducto</option><div className='bg-secundary-100 h-[1px] w-[150px] my-3'></div>
      <option value='delete-product' onClick={onClick} className='hover:bg-primary hover:text-primary-200 px-5 cursor-pointer'>Borrar producto</option><div className='bg-secundary-100 h-[1px] w-[150px] my-3'></div>
      <option value='create-admin' onClick={onClick} className='hover:bg-primary hover:text-primary-200 px-8 cursor-pointer'>Crear admin</option><div className='bg-secundary-100 h-[1px] w-[150px] my-3'></div>
      <option value='edit-user' onClick={onClick} className='hover:bg-primary hover:text-primary-200 px-7 cursor-pointer'>Editar usuario</option><div className='bg-secundary-100 h-[1px] w-[150px] my-3'></div>
    </div>
</div>
  )
}

export default Menu