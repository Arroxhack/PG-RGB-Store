import React from 'react'
import { deleteProductFavorito,addProductFavorito,getProductFavorito} from '../../redux/actions'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'
import { useState } from 'react';

const Add = ({id,onClick})=>{

  return(
  <button id={id} onClick={onClick} className="w-full text-center py-3 rounded bg-primary-400 text-white hover:bg-primary-300 focus:outline-none my-1">Add</button>
  )
}
const Delete = ({id,onClick})=>{
  return(
    <button id={id} className="w-full text-center py-3 rounded bg-primary-400 text-white 
    hover:bg-primary-300 focus:outline-none my-1" onClick={onClick}>Remove</button>
  )
} 
function Favorito({id}) {
    const login = localStorage.getItem('login');
    const idUser = window.atob(localStorage.getItem('id'));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialUserFavs =  JSON.parse(localStorage.getItem('fav')) || [];
    const [userFavs, setUserFavs] = useState(initialUserFavs);

    const handleClickAdd = (e)=>{
        e.preventDefault();
        dispatch(addProductFavorito(id,idUser));
        dispatch(getProductFavorito(idUser));
        const newArr = JSON.parse(localStorage.getItem('fav'));
        newArr.push(id);
        setUserFavs(newArr);
        localStorage.setItem('fav',JSON.stringify(newArr));
    }

    const handleClickDelete = (e)=>{
      e.preventDefault();
      dispatch(deleteProductFavorito(id,idUser));
      dispatch(getProductFavorito(idUser));
      const newArr = JSON.parse(localStorage.getItem('fav'));
      const arr = newArr.filter(i=>i!== id);
      setUserFavs(arr);
      localStorage.setItem('fav',JSON.stringify(arr));
    }

    useEffect(() => {
      //Array de id favoritos en local storage
      localStorage.setItem('fav',JSON.stringify(userFavs))
      
    },[userFavs]);
  return (
    <div>
  {
      login ?
      userFavs.includes(id) ?
      <div>
        <Delete id={`delete-${id}`} onClick={handleClickDelete}/>
        </div>
        :
        <div>
          <Add id={`add-${id}`} onClick={handleClickAdd}/>
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

export default Favorito