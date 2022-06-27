import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllCategories, setFilterMax} from '../../redux/actions'
import { setFilter } from "../../redux/actions";
import {filterCategories} from '../../redux/actions'
import { getBrand } from "../../redux/actions";
import { filterBrands } from "../../redux/actions";
import { filterMin } from "../../redux/actions";


export default function SideBar() {


  //ESTADOS
  const dispatch = useDispatch();
  const categories= useSelector(state=> state.categories)
  const filters= useSelector(state=>state.filtros)
  const brand = useSelector(state => state.brands)
  const products = useSelector(state => state.products)
  const filterMax= useSelector(state=>state.filterMax)


  //
     useEffect(()=>{
      dispatch(getAllCategories())
      dispatch(getBrand())
     },[dispatch])


 
    function handleFilterCat(e) {
      e.preventDefault();
      dispatch(setFilter(e.target.value))
      dispatch(filterCategories(e.target.value));
    }

    function handleFilterBrand(e) {
      e.preventDefault();
      dispatch(setFilter(e.target.value))
      dispatch(filterBrands(e.target.value))
      
    }

    function handleFilterMax(e) {
      e.preventDefault();
      dispatch(filterMin(e.target.value));      
    }
    function onChangeMin(e){
      e.preventDefault()
      dispatch(setFilter(e.target.value))
    }
    function onChangeMax(e){
      e.preventDefault()
      dispatch(setFilterMax(e.target.value))
    }

    return (
    <aside className='w-1/4 md:w-64 sm:text-xs  shadow-xl flex flex-col justify-around bg-primary-200 h-screen text-lg md:text-sm text-center text-primary-400 '>

      <div className="flex flex-col pb-4">
      <h4 className='text-xl text-yellow-300 pb-4'>Categories</h4>
      <ul>
        <li className='flex flex-col   '>
        <button className="text-left text-lg pl-8" onClick={(e)=>handleFilterCat(e)} value={"all"}>All</button>
          {categories?categories.map((cat)=>{
            return(
            <button className="text-left text-lg pl-8"  onClick={(e)=>handleFilterCat(e)} value={cat}>{cat}</button>
        )}):0}
        </li>
      </ul>
      </div>
          
      
      <div className='flex flex-col  pl-4 pt-4'>
        <h4  className='text-xl text-yellow-300 pb-3'>Brands</h4>
        <label className='text-left'  htmlFor=""> <input className='cursor-pointer bg-yellow-300 border-yelloy-300'  value="all" type="checkbox" name="" id="" />All</label>
        {brand? brand.map((m)=>{
            return(
        <label className='text-left'  htmlFor=""> <input className='cursor-pointer bg-yellow-300 border-yelloy-300' onChange={(e)=> handleFilterBrand(e)}  value={m.name} type="checkbox" name="" id="" />{m.name}</label>
            )
        }):0}
      </div>
      <div className='pt-4'>
          <label htmlFor=""><input className='w-16 rounded-lg text-center bg-yellow-300 text-black placeholder:text-gray-900 ' type="number" placeholder="Min" onChange={onChangeMin}/> </label>
          <label htmlFor=""><input className='w-16 rounded-lg text-center bg-yellow-300 text-black placeholder:text-gray-900 ' type="number" placeholder="Max"  onChange={onChangeMax}/> </label>
           </div>
           <fragments className='flex-col items-center pt-2'>
          <button type="submit" className="bg-primary-400 font-Open py-1 rounded-lg text-primary-200  font-semibold hover:bg-primary-300" onClick={(e)=> handleFilterMax(e)}>submit</button>
          </fragments>
    </aside>
  );
}


