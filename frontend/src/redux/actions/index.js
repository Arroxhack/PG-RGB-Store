import axios from 'axios';
import { GET_ALL_COMPONENTS, GET_PRODUCT_DETAIL } from '../types/index';

const PATH = 'http://localhost:3001';

export function getAllComponents() {
  return async function (dispatch) {
    try {
      let allComponents = await axios.get(`${PATH}/products`); //components por ahora
      let allComponentsData = allComponents.data;
      return dispatch({
        type: GET_ALL_COMPONENTS,
        payload: allComponentsData,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProductDetail(id) {
  return async function (dispatch) {
    try {
      const PRODUCT = await axios.get(`${PATH}/product/${id}`).data;
      return dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: PRODUCT,
      });
    } catch (error) {
      console.log(error, ' product detail');
    }
  };
}
