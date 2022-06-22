import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex flex-row justify-evenly'>
        <Link to='/categorias'>
        <p>Categorías</p>
        </Link>
        <Link to='/categorias/notebooks'>
        Notebooks
        </Link>
        <Link to='/categorias/pc-armadas'>
        PC Armadas
        </Link>
        <Link to='/categorias/placas-de-videos'>
        Placas de videos
        </Link>
        <Link to='/arma-tu-pc'>
        <p>Arma tu pc</p>
        </Link>
    </div>
  )
}

export default Nav