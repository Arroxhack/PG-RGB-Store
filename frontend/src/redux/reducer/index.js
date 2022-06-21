import { GET_ALL_COMPONENTS, GET_PRODUCT_DETAIL } from '../types/index';

const initialState = {
  allComponents: [],
  detail: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COMPONENTS:
      return {
        ...state,
        allComponents: action.payload,
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
