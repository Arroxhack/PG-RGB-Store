import {GET_ALL_PRODUCTS} from "../types/index";

const initialState = {
    allProducts:[],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      
      case GET_ALL_PRODUCTS:
        return{
          ...state,
          allProducts: action.payload
        }
        default:
        return state;
    }
  };
  
  export default reducer;