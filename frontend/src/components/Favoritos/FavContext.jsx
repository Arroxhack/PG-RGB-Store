import { createContext,useEffect, useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { deleteProductFavorito,addProductFavorito,getProductFavorito} from '../../redux/actions'
import axios from "axios";
export const FavContext = createContext();


const FavProvider = ({children}) =>{
    const dispatch = useDispatch();
    const idUser = window.atob(localStorage.getItem('id'));
    const login = localStorage.getItem('login')
    const [favsBaseDeDatos, setFavsBaseDeDatos] = useState([])
    const favoritos = useSelector(state=>state.favoritos);
    
    const [favs, setFavs] = useState(()=>{
        try{
            const favsLocalStorage = localStorage.getItem('fav');
            return favsLocalStorage ? JSON.parse(favsLocalStorage) : []
        }catch(error){
            return []
        }
    });

    useEffect(()=>{
        localStorage.setItem('fav', JSON.stringify(favs));
    },[favs])

    const addProductFav = (id,idUserF) =>{
        dispatch(addProductFavorito(id,idUserF));
        setFavs([...favs,id]);
    }

    const deleteProductFav = (id,idUserF) =>{
        dispatch(deleteProductFavorito(id,idUserF));
        setFavs(favs.filter(i=>i!==id));
    }

    return(
        <FavContext.Provider value={{favs,addProductFav,deleteProductFav,setFavs}}>
            {children}
        </FavContext.Provider>
    )
}

export default FavProvider