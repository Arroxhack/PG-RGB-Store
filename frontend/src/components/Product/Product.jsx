import React from 'react'

const Product = ({product}) => {
  return (
    <div className='bg-blue-700 w-64 h-84 flex flex-col items-center rounded-md gap-2 hover:shadow-lg hover:shadow-green-700/50'>
        <img src={product.image} alt={`Imagen de ${product.name}`} className='h-72  rounded-t-md'/>
        <div className='flex flex-col items-center p-4'>
        <h3 className='text-xl font-bold text-gray-100'>{`$${product.price}`}</h3>
        <p className='text-l text-gray-300 uppercase'>{product.name}</p>
        </div>
    </div>
  )
}

export default Product