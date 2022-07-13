import React from 'react'
import Amd from './Amd'
import Intel from './Intel'

function Brands({onClick}) {
  return (
    <div><Amd onClick={onClick}/> <Intel onClick={onClick}/></div>
  )
}

export default Brands