import React from 'react'
import amd from './imagesBuild/2.jpg'
function Amd({onClick}) {
  return (
 <button  value="AMD" name='brand' onClick={(e)=>onClick(e,'brand','AMD')}><img src={amd} alt=''/></button>
  )
}

export default Amd