import {GET_ALL_COMPONENTS} from "../types/index";

const initialState = {
    allComponents:[],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      
      case GET_ALL_COMPONENTS:
        return{
          ...state,
          allComponents: action.payload
        }
        default:
        return state;
    }
  };
  
  export default reducer;