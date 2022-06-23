import React from 'react'

const Menu = () => {
  return (
<div className='text-secondary-100'>
<div>
        <div className='flex flex-col items-center pb-16'>
            <img src='profile.com' alt='Foto del admin'/>
            <p className='uppercase'>Nombre del admin</p>
        </div>
    </div>

    <div className='mx-0 my-auto'>
        <ul>
            <li>Crear producto</li>
            <li>Modificar prducto</li>
            <li>Borrar producto</li>
            <li>Crear admin</li>
            <li>Editar usuario</li>
        </ul>
    </div>
</div>
  )
}

export default Menu