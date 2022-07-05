import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getProductFavorito,deleteProductFavorito,addProductFavorito } from '../../redux/actions';
import NavBar from "../NavBar/NavBar";
import Swal from "sweetalert2";
import { useState } from 'react';

function VerFavoritos() {
    const login = localStorage.getItem('login');
    const idUser = localStorage.getItem('id');
    const dispatch = useDispatch();
    const favoritos = useSelector(state=>state.favoritos)
    const [refresh,setRefresh] = useState('');
    // console.log(favoritos,' fav en jsx  ')
    // console.log(idUser)
    
    const handleClickDelete = (e)=>{
        e.preventDefault();
        dispatch(deleteProductFavorito(e.target.value,idUser));
        setRefresh(' ');
        //console.log(e.target.value, ' soy el value'
        Swal.fire({
            icon: "success",
            title: "Deleted!",
        });
        
    }
    
    useEffect(()=>{
        login &&
        dispatch(getProductFavorito(idUser));
    },[refresh,dispatch])
console.log('soy fav: ', favoritos)
  return (
    <div className='h-screen flex flex-col bg-primary-200'>
         <NavBar />
        <h1>FAVORITOS</h1>
        <ul>
            {favoritos.map((p)=>{
                return(
                    <li key={p.id} >
                        <img  height='200px' width='200px' src={p.image[0]} alt='p-foto'/>
                <p className=' bg-primary-500 bg-cover w-48 '>{p.name}</p>
                <p className='bg-primary-500 bg-cover w-48 '> PRICE: {p.price}</p>
                    <button value={p.id} onClick={handleClickDelete}>Delete</button>
                </li>
                )
            })}
        </ul>
    </div>
  )
}

export default VerFavoritos