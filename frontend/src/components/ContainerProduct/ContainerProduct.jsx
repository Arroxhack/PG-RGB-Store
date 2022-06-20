import React from 'react'
import { Link } from "react-router-dom";
import Product from '../Product/Product';

const ContainerProduct = () => {
    const arr = [
    {id: 1, name:'Producto',image:'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg', price:'1000'},
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

  return (
    <div className='grid grid-cols-4 gap-5 w-full justify-items-center'>
        {arr.map(p=>
                <Link key={p.id} to={`/${p.id}`}>
                    <Product product={p}/>
                </Link>)}
    </div>
  )
}

export default ContainerProduct