import { ADD_CART, GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, RESET_CART , FILTER_BY_PRICE} from '../types/index';

const initialState = {
  allProducts: [],
  detail: [],
  cart:[],
  products:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
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
      case FILTER_BY_PRICE:
          let orderedByPrice = action.payload === 'Menor precio'?
          state.products.sort(function(a, b) {
              if (a.price > b.price)return 1;    
              if (b.price > a.price)return -1;

              return 0;
        
              
          }):
          state.products.sort(function(a,b){
              if(a.price > b.price) return -1;
              if(b.price > a.price) return 1;
              return 0;
          })
          return{
              ...state,
              products: orderedByPrice
          };

    default:
      return { ...state };
  }
};

export default reducer;

