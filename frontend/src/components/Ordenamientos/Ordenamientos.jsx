import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { orderedByPrice, setOrder} from '../../redux/actions'


export default function Ordenamientos() {
    
    const dispatch = useDispatch();
    const products = useSelector(state=> state.products)
   


    function handleOrderedByPrice(e){
        e.preventDefault();
        dispatch(setOrder(e.target.value))
        dispatch(orderedByPrice(e.target.value))
      }
      
    return (
        <div className="flex w-60 h-8">
        <h4 className='text-primary-400 w/20 pr-5'>Order by</h4>
      <select onChange={e => handleOrderedByPrice(e)} className='w-36 bg-primary-400 font-Open flex items-center rounded-lg text-primary-200 uppercase font-semibold  '>
        <option disabled>Price </option>
        <option value="mayor valor">higher price</option>
        <option value="menor valor">lower price</option>
      </select>
      </div>
  )
}
