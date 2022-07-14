import React, { useContext } from "react";

import { useEffect } from "react";
import { Link } from "react-router-dom";
//import { getProductFavorito,deleteProductFavorito,addProductFavorito } from '../../redux/actions';
import { FavContext } from './FavContext'
import {useNavigate} from 'react-router-dom'
import Fav from './Images/Fav.png'
import NoFav from './Images/NoFav.png'

const Add = ({id,onClick})=>{

    return(
    <button id={id} onClick={onClick} className="py-3 motion-safe:hover:scale-110"> <img src={NoFav} alt='add-fav' height='25px' width='25px' /> </button>
    )
  }

  const Delete = ({id,onClick})=>{
    return(
      <button id={id} className="py-3 
      motion-safe:hover:scale-110" onClick={onClick}><img src={Fav} alt='delete-fav' height='25px' width='25px'/></button>
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

    const handleClickNotLoging =(e)=>{
      e.preventDefault();
      navigate('/login')
    }
    return(  
    <div className="relative mr-3 mb-10">
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
              <Add id={`add-${id}`} onClick={handleClickNotLoging}/>
              </div>
          }
          </div>
          )
}

export default BoxFav;