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
    <button id={id} onClick={onClick} className="w-full text-center py-3 rounded  text-white hover:bg-secundary-250 focus:outline-none my-1"> <img src={NoFav} alt='add-fav' height='25px' width='25px' /> </button>
    )
  }

  const Delete = ({id,onClick})=>{
    return(
      <button id={id} className="w-full text-center py-3 rounded 
      hover:bg-secundary-250  focus:outline-none my-1" onClick={onClick}><img src={Fav} alt='delete-fav' height='25px' width='25px'/></button>
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
              </div>
          }
          </div>
          )
}

export default BoxFav;