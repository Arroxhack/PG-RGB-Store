import { filterBrands } from '../actions';
import {
  ADD_CART,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAIL,
  RESET_CART,
  SEARCH_PRODUCTS,
  FILTER_BY_PRICE,
  GET_CATEGORIES,
  SET_FILTER,
  FILTER_CATEGORIES,
  GET_BRANDS,
  FILTER_BRANDS,
  FILTER_MIN,
  SET_FILTER_MAX,
  CLEAN,
  GET_USER_DATA,
  CREATE_PRODUCT,
  GET_PROFILE,
  SET_FILTER_PRICE,
  CLEAN_FILTER,
  SET_FILTER_BRANDS,
  CLEAN_FILTER_BRANDS,
  SET_ORDER, 
  CLEAN_ORDER,
  CLEAN_FILTER_PRICE,
  FILTER_CATEGORY,
  FILTER_BRAND,
  FILTER_PRICE
} from '../types/index';

const initialState = {
  allProducts: [],
  products: [],
  detail: [],
  cart: [],
  categories: [],
  filtros: [],
  brands: [],
  filterMax: [],
  newProduct: [],
  UserData: [],
  filterPrice: [],
  filterBrands:[],
  filterOrder: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /// GET, POST, UPDATE, DELETE ///
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
        productsFilter: action.payload,
      };
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    //======================================
    //CAMBIAR PARAMS!!!!! PELIGROSO! PUEDO ACCEDER A PERFILES DE OTROS USER Y EDITARLOS!!!
    //======================================
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case GET_BRANDS:
    let allBrands= state.products.map(e=> e.brand)  
    let brand= new Set(allBrands) 
      let arr= [...brand]
    return {
        ...state,
        brands: arr,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        newProduct: action.payload,
      };
    case GET_USER_DATA:
      return {
        ...state,
        UserData: action.payload,
      };

    /// BUSQUEDA ///
    case SEARCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    /// FILTRADO Y ORDENAMIENTO ///
    case FILTER_BY_PRICE:
        let productOrder = [...state.products]
        productOrder = productOrder.sort((a,b)=>{
          if(a.price<b.price) {return action.payload==='LOW' ? -1 : 1}
          if(a.price>b.price) {return action.payload==='LOW' ? 1 : -1}
          return 0
        })
      return {
        ...state,
        products: productOrder,
      };

    case FILTER_CATEGORIES:
      return {
        ...state,
        products: action.payload,
      };

    case FILTER_MIN:
     let filterMaxAndMin=  
    state.allProducts.filter(
        (e) => e.price > state.filterPrice && e.price < state.filterMax)
       
        return {
        ...state,
        products: filterMaxAndMin,
      };

    case FILTER_BRANDS:
      return {
        ...state,
        products: action.payload,
      };

    ///SETEA EL ESTADO DE FILTROS///
    case SET_FILTER:
      return {
        ...state,
        filtros: action.payload,
      };
    case SET_FILTER_MAX:
      return {
        ...state,
        filterMax: action.payload,
      };
      case SET_FILTER_PRICE:
        return {
          ...state,
          filterPrice: action.payload,
        };
    
      case SET_FILTER_BRANDS:
      return {
      ...state,
      filterBrands: action.payload,
      };
      case SET_ORDER:
      return {
      ...state,
      filterOrder: action.payload,
      };
      
    case CLEAN:
      return {
        ...state,
        detail: action.payload,
      };

      case CLEAN_FILTER:
        return {
          ...state,
          filtros: action.payload,
        };
        
        case CLEAN_FILTER_BRANDS:
          return{
            ...state,
            filterBrands:action.payload,
          }
          case CLEAN_ORDER:
          return{
            ...state,
            filterOrder:action.payload,
          }
          case CLEAN_FILTER_PRICE:
            return{
              ...state,
              filterMax:action.payload,
              filterPrice:action.payload
            }
        

    /// CARRITO (CREO QUE LO TENGO QUE BORRAR) ///
    case ADD_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case RESET_CART:
      return {
        ...state,
        cart: [],
      };
    /// ORDENAMIENTOS POR BACK ///
    case FILTER_CATEGORY:
      return{
        ...state,
        products:action.payload
      };
    case FILTER_BRAND:
      return{
        ...state,
        products:action.payload
      };
    case FILTER_PRICE:
      return{
        ...state,
        products:action.payload
      }
    default:
      return { ...state };
  }

};

export default reducer;
