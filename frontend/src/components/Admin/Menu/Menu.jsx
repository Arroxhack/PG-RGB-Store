import React from 'react'

const Menu = ({value, setValue}) => {

  const onClick = (e)=>{
    setValue(e.target.value)
  }

  return (
<div className='text-secondary-100'>
<div>
        <div className='flex flex-col items-center pb-16 pt-10'>
            <img src='profile.com' alt='Foto del admin'/>
            <p className='uppercase'>Nombre del admin</p>
        </div>
    </div>

    <div className='flex flex-col items-center'>
      <div className='bg-secondary-100 h-[1px] w-[150px] my-3'></div>
      <option value='0' onClick={onClick} className='hover:bg-primary hover:text-primary-200 px-5 cursor-pointer'>Crear producto</option><div className='bg-secondary-100 h-[1px] w-[150px] my-3'></div>
      <option value='1' onClick={onClick} className='hover:bg-primary hover:text-primary-200 px-3 cursor-pointer'>Modificar prducto</option><div className='bg-secondary-100 h-[1px] w-[150px] my-3'></div>
      <option value='2' onClick={onClick} className='hover:bg-primary hover:text-primary-200 px-5 cursor-pointer'>Borrar producto</option><div className='bg-secondary-100 h-[1px] w-[150px] my-3'></div>
      <option value='3' onClick={onClick} className='hover:bg-primary hover:text-primary-200 px-8 cursor-pointer'>Crear admin</option><div className='bg-secondary-100 h-[1px] w-[150px] my-3'></div>
      <option value='4' onClick={onClick} className='hover:bg-primary hover:text-primary-200 px-7 cursor-pointer'>Editar usuario</option><div className='bg-secondary-100 h-[1px] w-[150px] my-3'></div>
    </div>
</div>
  )
}

export default Menu