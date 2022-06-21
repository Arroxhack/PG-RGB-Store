import { ADD_CART, GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, RESET_CART } from '../types/index';

const initialState = {
  allProducts: [],
  detail: [],
  cart:[]
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
    case ADD_CART:
      return{
        ...state,
        cart:[...state.cart, action.payload]
      }
    case RESET_CART:
      return{
        ...state,
        cart:[]
      }
    default:
      return { ...state };
  }
};

export default reducer;

