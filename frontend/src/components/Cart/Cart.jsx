import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addCart } from '../../redux/actions'

const Cart = () => {

    const myStorage = window.localStorage
    const carrito = myStorage.carrito
    const product = JSON.parse(myStorage.getItem('carrito',JSON.parse(carrito)))


const deleteCart = (e)=>{
    e.preventDefault()
    myStorage.setItem('carrito',JSON.stringify({name:'carrito vacio'}))
}

  return (
    <div>
        { product && product.map(p=>{
            return(
                <div>
                    <p key={p.id}>{p.name}</p>
                    <h2>{p.price}</h2>
                    <img src={p.image} heigth='30px' width='30px' alt={`Imagen de ${p.name}`}/>
                </div>
            )
        })}
            <button onClick={deleteCart}>limpiar carrito</button>
    </div>
  )
}

export default Cart