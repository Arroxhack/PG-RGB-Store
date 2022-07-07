import React from 'react'
import { deleteProductFavorito,addProductFavorito} from '../../redux/actions'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'

function Favorito({id}) {
    const login = localStorage.getItem('login');
    const idUser = window.atob(localStorage.getItem('id'));
    const navigate = useNavigate();
    const dispatch = useDispatch();
   
    const handleClickAdd = (e)=>{
        e.preventDefault();
        dispatch(addProductFavorito(id,idUser));
    }
    const handleClickDelete = (e)=>{
      e.preventDefault();
      dispatch(deleteProductFavorito(id,idUser));
    }
  return (
    <div>
    {
        login ? <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">{ 
        <div >
          <button className="w-full text-center py-3 rounded bg-primary-400 text-white hover:bg-primary-300 focus:outline-none my-1" onClick={handleClickAdd}>Add</button > 
        <button className="w-full text-center py-3 rounded bg-primary-400 text-white hover:bg-primary-300 focus:outline-none my-1" onClick={handleClickDelete}>Delete</button></div>} </div>: 
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">{ <div >
          <button className="w-full text-center py-3 rounded bg-primary-400 text-white hover:bg-primary-300 focus:outline-none my-1"onClick={()=>navigate('/login')}>Add</button > 
        <button className="w-full text-center py-3 rounded bg-primary-400 text-white hover:bg-primary-300 focus:outline-none my-1" onClick={()=>navigate('/login')}>Delete</button></div>} </div>
    }
    </div>
  )
}

export default Favorito