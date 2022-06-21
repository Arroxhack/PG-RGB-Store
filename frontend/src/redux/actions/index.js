import axios from "axios";
import { ADD_CART, GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, RESET_CART  } from "../types/index";

const PATH = "http://localhost:3001";

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