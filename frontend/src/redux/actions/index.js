import axios from "axios";
import { ADD_CART, GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, RESET_CART, SEARCH_PRODUCTS,FILTER_BY_PRICE, GET_CATEGORIES, SET_FILTER,LOAD_USER, FILTER_CATEGORIES,GET_BRANDS,FILTER_BRANDS,CREATE_PRODUCT} from "../types/index";
import Swal from 'sweetalert2'
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

/// GET MARCAS DE PRODUCTOS ///
export function getBrand() {
  return async function (dispatch) {
    try {
      let allProducts = await axios.get(`${PATH}/brands`); //products por ahora
      let allBrands = allProducts.data
      console.log(allBrands)
      return dispatch({
        type: GET_BRANDS,
        payload: allBrands,
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

/// POST PRODUCTOS ///
export const createProduct = (product)=>{
  return async dispatch=>{
    try {
      const post = await axios.post(`${PATH}/create-product`, product)
      Swal.fire({
        title: `${post.data.name}`,
        text: 'creado con exito!',
        icon:'success',
        confirmButtonText: 'ok'
      })

      return{
        type: CREATE_PRODUCT,
        payload: post.data
      }
    } catch (error) {
      Swal.fire({
        title: 'Algo fallo',
        text: 'No se pudo crear el producto',
        icon:'error',
        confirmButtonText: 'ok'
      })
    }
  }
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


 export function filterBrands(payload){
  return{
    type: FILTER_BRANDS,
    payload
  }
 }
/// BUSQUEDA ///
export function searchProducts(search) {
  return function (dispatch) {
  axios.get(`${PATH}/product?name=` + search)
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
