import React from 'react'
import intel from './imagesBuild/1.jpg'
function Intel({onClick}) {
  return (
    <button value="Intel" name='brand' onClick={(e)=>onClick(e,'brand','Intel')}><img  src={intel} alt=''/></button>
  )
}

export default Intel