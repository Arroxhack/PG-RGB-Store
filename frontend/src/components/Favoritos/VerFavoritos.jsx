import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getProductFavorito } from '../../redux/actions';
import NavBar from "../NavBar/NavBar";
import Swal from "sweetalert2";

function VerFavoritos() {
    const login = localStorage.getItem('login');
    const idUser = localStorage.getItem('id');
    const dispatch = useDispatch();
    const favoritos = useSelector(state=>state.favoritos)
    // console.log(favoritos,' fav en jsx  ')
    // console.log(idUser)
    useEffect(()=>{
        login &&
        dispatch(getProductFavorito(idUser));
    },[dispatch,login,idUser])

  return (
    <div className='bg-primary-200 w-full h-full'>
         <NavBar />
        <h1>FAVORITOS</h1>
        <ul>
            {favoritos.map((p)=>{
                return(
                    <li key={p.id}>
                <img  height="200px"
                      width="200px" src={p.image[0]} alt='produc-foto'/>z
                <p className='bg-primary-300 w-full h-full'>{p.name}</p>
                <p className='bg-primary-300 w-full h-full'> PRICE: {p.price}</p>
                </li>
                )
            })}
        </ul>
    </div>
  )
}

export default VerFavoritos