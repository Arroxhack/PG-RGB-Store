import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {orderedByPrice} from '../../redux/actions'
import { setFilter } from "../../redux/actions";

export default function Ordenamientos() {
    
    const dispatch = useDispatch();
    const filters= useSelector(state=>state.filtros)
    const allProducts = useSelector((state) => state.allProducts);
    const products = useSelector(state=> state.products)

    function handleOrderedByPrice(e){
        e.preventDefault();
        dispatch(setFilter(e.target.value))
        dispatch(orderedByPrice(e.target.value));
      }
      
    return (
        <div className="flex justify-center">
        <h4>Order by</h4>
      <select onChange={e => handleOrderedByPrice(e)} className='w-1/2 '>
        <option value="mayor valor">higher price</option>
        <option value="menor valor">lower price</option>
      </select>
      </div>
  )
}
