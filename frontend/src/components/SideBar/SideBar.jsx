import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import orderedByPrice from '../../redux/reducer'
import {getAllCategories} from '../../redux/actions'


export default function SideBar() {

  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const categories= useSelector(state=> state.categories)
  const[order,setOrder]= useState('')
  
  const marcas=[
        "hyperX","Redragron","Logitech","T-dagger","hp"
    ]

     useEffect(()=>{
      dispatch(getAllCategories()) 
     },[dispatch])


    function handleOrderedByPrice(e){
      e.preventDefault();
      console.log(products)
      dispatch(orderedByPrice(e.target.value));
      setOrder(`Ordenado ${e.target.value} `)
    }
    console.log(categories)
  
  
  
    return (
    <aside className='w-1/4 md:w-64 sm:text-xs fixed  shadow-xl flex flex-col justify-around bg-primary-200 h-screen text-lg md:text-sm text-center text-primary-400 '>
      <div>
      <h4 className='text-xl text-yellow-300'>Categories</h4>
      <ul >
        <li className='flex flex-col text-left '>
          {categories?categories.map((cat)=>{
            return(
                <button  className='no-underline hover:text-yellow-300 hover:rounded-lg hover:transition-y-6 text-left pl-4' >{cat}</button>
          )}):0}
        </li>
      </ul>
      </div>
          <div className="flex justify-center">
            <h4>Order by</h4>
          <select onChange={e => handleOrderedByPrice(e)} className='w-1/2 '>
            <option value="" selected disabled>Price</option>
            <option value="mayor valor">higher price</option>
            <option value="menor valor">lower price</option>
          </select>
          </div>
      
      <div className='flex flex-col  pl-4 pt-4'>
        <h4  className='text-xl text-yellow-300 pb-3'>Marcas</h4>
        {marcas? marcas.map((m)=>{
            return(
        <label className='text-left'  htmlFor=""> <input className='cursor-pointer bg-yellow-300 border-yelloy-300' onChange={e => handleOrderedByPrice(e)} value='menor valor' type="checkbox" name="" id="" />{m}</label>
            )
        }):0}
      </div>
      <div className='pt-4'>
          <label htmlFor=""><input className='w-16 rounded-lg text-center bg-yellow-300 text-black placeholder:text-gray-900 ' type="text" placeholder="Max" /> - </label>
          <label htmlFor=""><input className='w-16 rounded-lg text-center bg-yellow-300 text-black placeholder:text-gray-900 ' type="text" placeholder="Min" /></label>
          <button></button>
          </div>
    </aside>
  );
}


