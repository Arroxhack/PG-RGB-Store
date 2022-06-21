import React from "react";

export default function SideBar() {


  
    const products = [{id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
    {id: 1, name:'Producto',image:'https://us.123rf.com/450wm/scanrail/scanrail1701/scanrail170100025/68835630-abstracto-creativo-tecnolog%C3%ADa-de-negocios-concepto-de-la-oficina-de-comunicaci%C3%B3n-de-internet-web-3d-.jpg?ver=6', price:'1000'},
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},]

    const categories= ["procesadores",
        "pcs armadas",
        "monitores",
        "perisfericos",
        "mothers"]

    const marcas=[
        "hyperX","Redragron","Logitech","T-dagger","hp"
    ]






  return (
    <aside className='w-1/4 md:w-64 sm:text-xs  shadow-xl flex flex-col justify-around bg-black h-screen text-lg md:text-sm text-center text-white '>
      <div>
      {/* aca mapeameamos las categories */}
      {/* categories? categories.map((cat)=>{
        <a>cat</a
        
      }) */}
      <h4 className='text-xl text-yellow-300'>Categories</h4>
      <ul >
        <li className='flex flex-col text-left '>
          {categories?categories.map((cat)=>{
            return(
               <a className='no-underline hover:text-yellow-300 hover:rounded-lg hover:transition-y-6 text-left pl-4'  href="">{cat}</a> 
            )
          }):0}
        </li>
      </ul>
      </div>
     
        <div className='flex flex-col '>
            <h4 className=' text-xl text-yellow-300 pb-3'>Price</h4>
            <div className='flex flex-col text-left pl-4'>
          <label className='text-left' htmlFor=""> <input type="checkbox" name="" id="" className='cursor-pointer'/>higher price</label>
          <label className='text-left' htmlFor=""> <input type="checkbox" name="" id="" className='cursor-pointer'/>lower price</label>
          </div>
        </div>

      
      <div className='flex flex-col  pl-4 pt-4'>
    {/* aca mapeameamos labels con input de type checkbox */}
    {/* marcas? marcas.map((marca)=>{
    return(
        <label htmlFor=""> <input type="checkbox" name="" id="" /> marca </label>
    )}
    ) */}
        <h4  className='text-xl text-yellow-300 pb-3'>Marcas</h4>
        {marcas? marcas.map((m)=>{
            return(
        <label className='text-left' htmlFor=""> <input cclassName='cursor-pointer bg-yellow-300 border-yelloy-300' type="checkbox" name="" id="" />{m}</label>
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
