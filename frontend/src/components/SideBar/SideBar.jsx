import React from "react";

export default function SideBar() {


    const categories= ["procesadores",
        "pcs armadas",
        "monitore",
        "prerisfericos",
        "mothers"]

    const marcas=[
        "hyperX","Redragron","Logitech","T-dagger","hp"
    ]


  return (
    <aside class='w-1/4 md:w-64 sm:text-xs  shadow-xl flex flex-col bg-black h-screen text-lg md:text-sm text-center text-white '>
      <div>
      {/* aca mapeameamos las categories */}
      {/* categories? categories.map((cat)=>{
        <a>cat</a
        
      }) */}
      <h4 class='text-xl text-yellow-300'>Categories</h4>
      <ul >
        <li class='flex flex-col text-left  pl-4 pt-4'>
          {categories?categories.map((cat)=>{
            return(
               <a class='no-underline hover:bg-yellow-300 hover:rounded-lg hover:text-black'  href="">{cat}</a> 
            )
          }):0}
        </li>
      </ul>
      </div>
     
        <div class='flex flex-col '>
            <h4 class=' text-xl text-yellow-300 pb-3'>Price</h4>
            <div class='flex flex-col text-left pl-4'>
          <label class='text-left' htmlFor=""> <input type="checkbox" name="" id="" />higher price</label>
          <label class='text-left' htmlFor=""> <input type="checkbox" name="" id="" />lower price</label>
          </div>
        </div>

      
      <div class='flex flex-col   pl-4 pt-4'>
    {/* aca mapeameamos labels con input de type checkbox */}
    {/* marcas? marcas.map((marca)=>{
    return(
        <label htmlFor=""> <input type="checkbox" name="" id="" /> marca </label>
    )}
    ) */}
        <h4  class='text-xl text-yellow-300 pb-3'>Marcas</h4>
        {marcas? marcas.map((m)=>{
            return(
        <label class='text-left' htmlFor=""> <input class='cursor-pointer hover:color-yelloy-300 border-yelloy-300' type="checkbox" name="" id="" />{m}</label>
            )
        }):0}



      </div>
    </aside>
  );
}
