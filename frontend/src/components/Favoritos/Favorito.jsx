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

    // useEffect(() => {
    //   dispatch(getProductFavorito(idUser));
    // }, [dispatch,idUser])
    
    //const favs = useSelector(state=>state.favoritos);
    //console.log(idUser)
    // const arrayOfIdFavs = favs?.map(el=>el.idProd);
    // console.log('arrayOfIdFavs: ',favs)
    // addProductFavorito();
    // deleteProductFavorito();
    const handleClickAdd = (e)=>{
        e.preventDefault();
        const response = addProductFavorito(id,idUser);
        // console.log(response)
        // if(response){
        //   Swal.fire({
        //     icon: "error",
        //     title: response.error,
        //     // text: `Transaction number: ${detalles.id}`,
        //     // text: `Amount paid: ${detalles.purchase_units[0].amount.value}`
        //     // footer: '<a href="">Why do I have this issue?</a>'
        //   });
        // }
        // Swal.fire({
        //   icon: "success",
        //   title: "Added!",
        //   // text: `Transaction number: ${detalles.id}`,
        //   // text: `Amount paid: ${detalles.purchase_units[0].amount.value}`
        //   // footer: '<a href="">Why do I have this issue?</a>'
        // });
    }

    const handleClickDelete = (e)=>{
      e.preventDefault();
      deleteProductFavorito(id,idUser);
      // Swal.fire({
      //   icon: "success",
      //   title: "Deleted!",
      //   // text: `Transaction number: ${detalles.id}`,
      //   // text: `Amount paid: ${detalles.purchase_units[0].amount.value}`
      //   // footer: '<a href="">Why do I have this issue?</a>'
      // });
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