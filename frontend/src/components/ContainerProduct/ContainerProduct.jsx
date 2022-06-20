import React from 'react'
import { Link } from "react-router-dom";
import Product from '../Product/Product';

const ContainerProduct = () => {
    const arr = [
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
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},]

  return (
    <div className='grid grid-cols-4 gap-2 w-full'>
        {arr.map(p=>
                <Link key={p.id} to={`/${p.id}`}>
                    <Product product={p}/>
                </Link>)}
    </div>
  )
}

export default ContainerProduct