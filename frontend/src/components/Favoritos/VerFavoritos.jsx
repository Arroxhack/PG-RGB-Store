import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getProductFavorito,deleteProductFavorito,addProductFavorito } from '../../redux/actions';
import NavBar from "../NavBar/NavBar";
import Swal from "sweetalert2";
import { useState } from 'react';

function VerFavoritos() {
const login = localStorage.getItem('login');
const idUser = window.atob(localStorage.getItem('id'));
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

}

useEffect(()=>{
    login &&
    dispatch(getProductFavorito(idUser));
},[refresh,dispatch])
console.log('soy fav: ', favoritos)
return (
<div className='h-screen flex flex-col  overflow-auto items-center bg-primary-200'>
    <NavBar />
    <div className='flex justify-center items-center w-full'>
        <div className='w-3/5 bg-primary-200 h-4/5'>
        
    <h1>FAVORITOS</h1>
        <div className='object-center h-full bg-primary-200 flex flex-col content-center place-content-center text-center'>
        {favoritos.map((p)=>{
            return(
                <div key={p.id} className='flex pb-4 h-48 justify-start bg-secundary-250 border-b border-primary-200'>
            
                    <div className='max-h-max object-fit flex items-center bg-secundary-100'>
                        <img className='object-center max-h-max  w-40' src={p.image[0]} alt='p-foto'/>
                    </div>
                    <div className='flex flex-col ml-12 items-start justify-evenly'>
                    <div>
                        <p className='font-PT text-xl mt-3'>{p.name}</p>
                    </div>
                    
                    <div className='left-0'>
                        <p className='font-PT font-bold  '>${p.price}</p>
                    </div>
                    <div>
                            <button value={p.id} onClick={handleClickDelete}>Delete</button>
                    </div>
                    
                    </div>
        
            </div>
            )
        })}
    </div>
    </div>
</div>
</div>
)
}

export default VerFavoritos