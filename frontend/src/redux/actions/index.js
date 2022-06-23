import axios from "axios";
import { ADD_CART, GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, RESET_CART, SEARCH_PRODUCTS,FILTER_BY_PRICE, GET_CATEGORIES, SET_FILTER,LOAD_USER, FILTER_CATEGORIES} from "../types/index";
const PATH = "http://localhost:3001";

/// GET PRODUCTOS ///
export function getAllProducts() {
  return async function (dispatch) {
    try {
      let allProducts = await axios.get(`${PATH}/products`); //products por ahora
      let allProductsData = allProducts.data;
      return dispatch({
        type: GET_ALL_PRODUCTS,
        payload: allProductsData,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

/// GET DETALLE DE PRODUCTOS ///
export function getProductDetail(id) {
  return async function (dispatch) {
    try {
      let product = await axios.get(`${PATH}/products/${id}`);
      product = product.data;
      return dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: product,
      });
    } catch (error) {
      console.log(error, " product detail");
    }
  };
}

/// GET A LAS CATEGORIAS ///
export function getAllCategories() {
  return async function (dispatch) {
    try {
      let AllCategory = await axios.get(`${PATH}/category`); 
      console.log(AllCategory)
      let allCategoryData = AllCategory.data.map((e)=>e.name)
      return dispatch({
        type: GET_CATEGORIES,
        payload: allCategoryData,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

/// POST REGISTRAR USUARIO ///
export function PostUser(user) {
  return async function () {
    try{
      const exit = await axios.post("/register",user)
      if (exit.data){
        alert("Register Succesfully")
      }
     }catch(e){
      console.log("Error in Register")
  }
  }
}

/// DISPATCH PARA EL CARRITO (CREO QUE HAY QUE BORRAR) ///
export const addCart = (product) => {
  return {
    type:ADD_CART,
    payload:product
  }
}
export const resetCart = ()=>{
  return{
    type:RESET_CART
  }
}
export function setFilter(payload){
  return {
    type: SET_FILTER,
    payload
  }
}

/// ORDENAMIENTOS Y FILTRADOS ///
export function orderedByPrice(payload){  
  return {
    type: FILTER_BY_PRICE,
    payload
  }
}
export function filterCategories(payload){
  return{
    type: FILTER_CATEGORIES,
    payload
  }
 }

/// BUSQUEDA ///
export function searchProducts(search) {
  return function (dispatch) {
  axios.get(`${PATH}/products?name=` + search)
  .then((products => {
      dispatch({
          type: SEARCH_PRODUCTS,
          payload: products.data
      })
  }))
  .catch(() => {
      alert("Product not found!")
  })
  }
}
