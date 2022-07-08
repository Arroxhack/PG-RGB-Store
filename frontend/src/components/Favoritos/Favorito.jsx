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
    hover:bg-primary-300 focus:outline-none my-1" onClick={onClick}>Delete</button>
  )
} 
function Favorito({id}) {
    const login = localStorage.getItem('login');
    const idUser = window.atob(localStorage.getItem('id'));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(false);
    const favorito = useSelector(state=>state.favoritos)
    const favId = favorito.map(e=>e.id);
    

    // const checkFavorite = ()=>{
    //   const favId = favorito.map(e=>e.id)
    //   const check = favId.includes(id);
    //   console.log('soy check: ', check)
    //   if(check){
    //     setIsFavorite(true)
    //   }
    // }
    const handleClickAdd = (e)=>{
        e.preventDefault();
        dispatch(addProductFavorito(id,idUser));
        dispatch(getProductFavorito(idUser));

        const newArr = JSON.parse(localStorage.getItem('fav'));
        newArr.push(id);
        localStorage.setItem('fav',JSON.stringify(newArr));
        setIsFavorite(true);
    }

    const handleClickDelete = (e)=>{
      e.preventDefault();
      dispatch(deleteProductFavorito(id,idUser));
      dispatch(getProductFavorito(idUser));
      const newArr = JSON.parse(localStorage.getItem('fav'));
      const arr = newArr.filter(i=>i!== id);
      localStorage.setItem('fav',JSON.stringify(arr));
      setIsFavorite(false);
    }

    useEffect(() => {
      // checkFavorite();
      localStorage.setItem('fav',JSON.stringify(favId))
      dispatch(getProductFavorito(idUser));
    }, [isFavorite,dispatch]);
  return (
    <div>
  {
      login ?
      isFavorite ?
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