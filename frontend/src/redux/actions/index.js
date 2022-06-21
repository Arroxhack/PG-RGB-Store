import axios from axios;
import {GET_ALL_PRODUCTS} from "../types/index";


const PATH = "http://localhost:3001"


export function getAllProducts(){
    return async function(dispatch){
        try{
            let allProducts = await axios.get(`${PATH}/products`) //products por ahora
            let allProductsData = allProducts.data
            return dispatch({
                type: GET_ALL_PRODUCTS,
                payload: allProductsData
            })
        } 
        catch(error){
            console.log(error)
        }
    }
}
