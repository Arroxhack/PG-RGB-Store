import React, { useContext } from "react";

import { useEffect } from "react";
import { Link } from "react-router-dom";
//import { getProductFavorito,deleteProductFavorito,addProductFavorito } from '../../redux/actions';
import { FavContext } from './FavContext'
import {useNavigate} from 'react-router-dom'
const Add = ({id,onClick})=>{

    return(
    <button id={id} onClick={onClick} className="w-full text-center py-3 rounded bg-primary-400 text-white hover:bg-primary-300 focus:outline-none my-1">Add</button>
    )
  }
  const Delete = ({id,onClick})=>{
    return(
      <button id={id} className="w-full text-center py-3 rounded bg-primary-400 text-white 
      hover:bg-primary-300 focus:outline-none my-1" onClick={onClick}>Delete</button>
    )
  } 
const BoxFav = ({id,onClick})=>{
    const login = localStorage.getItem('login');
    const idUser = window.atob(localStorage.getItem('id'));
    const {favs,deleteProductFav,addProductFav} = useContext(FavContext);
    const navigate = useNavigate();

    const handleClickDelete = (e,id,idUser)=>{
      e.preventDefault();
      deleteProductFav(id,idUser)
    }

    const handleClickAdd = (e,id,idUser)=>{
      e.preventDefault();
      addProductFav(id,idUser)
    }
    console.log('soy fav ', favs )
    return(  
    <div>
        {
            login ?
            favs.includes(id) ?
            <div>
              <Delete id={`delete-${id}`} onClick={(e)=>handleClickDelete(e,id,idUser)}/>
              </div>
              :
              <div>
                <Add id={`add-${id}`} onClick={(e)=>handleClickAdd(e,id,idUser)}/>
              </div>
              :
              <div>
              <Add id={`add-${id}`} onClick={()=>navigate('/login')}/>
              <Delete id={`delete-${id}`} onClick={()=>navigate('/login')}/>
              </div>
          }
          </div>
          )
}

export default BoxFav;