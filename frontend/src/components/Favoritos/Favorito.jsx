import React from 'react'
import { deleteProductFavorito,addProductFavorito} from '../../redux/actions'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'
import Swal from "sweetalert2";
// /<img src=''/>
function Favorito({id}) {
    const login = localStorage.getItem('login');
    const idUser = localStorage.getItem('id');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const favoritos = useSelector(state=>state.favoritos);
   
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
        login ? <div>{ <div><button className='bg-primary-300' onClick={handleClickAdd}>Add</button > 
        <button className='bg-primary-300' onClick={handleClickDelete}>Dellete</button></div>} </div>: 
        <div>{ <div><button className='bg-primary-300' onClick={()=>navigate('/login')}>Add</button > 
        <button className='bg-primary-300' onClick={()=>navigate('/login')}>Dellete</button></div>} </div>
    }
    </div>
  )
}

export default Favorito