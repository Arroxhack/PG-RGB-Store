import React from 'react'
import aas from '../../images/hyperx.jpg'

const imagen=[
  "hyperx.jpg",
  '/images/redragon.jpg'

]

const Slider = () => {

    
  return (
    <div className='w-full select-none relative'>
        <img className="w-full h-72 object-cover" src={imagen[0]} alt="Slider" />
    </div>
  )
}

export default Slider