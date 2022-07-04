import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetCart } from '../../redux/actions'

const Fav = () => {
    const myStorage = window.localStorage
    const favorito = myStorage.favorito
    const product = JSON.parse(myStorage.getItem('favorito',JSON.parse(favorito)))

    const dispatch = useDispatch()

    // console.log(product)
 

    const favoritos = useSelector(state=>state.favoritos)

const deleteFav = (e)=>{
    myStorage.setItem('favorito',JSON.stringify([]))
}

  return (
    <div>
        {product && product.map(p=>{
            return(
                <div>
                    <p key={p.id}>{p.name}</p>
                    <h2>{p.price}</h2>
                    <img src={p.image} heigth='30px' width='30px' alt={`Imagen de ${p.name}`}/>
                </div>
            )
        })}
            <button onClick={deleteFav}>limpiar favoritos</button>
    </div>
  )
}

export default Fav