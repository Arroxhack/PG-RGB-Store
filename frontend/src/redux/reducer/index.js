import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL } from '../types/index';

const initialState = {
  allProducts: [],
  detail: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload
      };
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;

