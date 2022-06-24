
import { ADD_CART, GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, RESET_CART, SEARCH_PRODUCTS,FILTER_BY_PRICE,
   GET_CATEGORIES,SET_FILTER, FILTER_CATEGORIES, GET_BRANDS, FILTER_BRANDS, FILTER_MIN,SET_FILTER_MAX} from '../types/index';
const initialState = {
  allProducts: [],
  products: [],
  detail: [],
  cart:[],
  categories:[],
  filtros: [],
  brands:[],
  filterMax:[],
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
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
      
    case GET_BRANDS:
      return{
        ...state,
        brands: action.payload,
      }


    /// BUSQUEDA ///
    case SEARCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    /// FILTRADO Y ORDENAMIENTO ///
    case FILTER_BY_PRICE:
      let orderedByPrice = state.filtros.includes("menor valor")
      ? state.products.sort(function (a, b) {
          if (a.price > b.price) return 1;
          if (b.price > a.price) return -1;
          return 0;
        })
      : state.products.sort(function (a, b) {
          if (a.price > b.price) return -1;
          if (b.price > a.price) return 1;
          return 0;
        });
      return {
        ...state,
        products: orderedByPrice,
      };

      case FILTER_CATEGORIES:
        const products = state.allProducts;
        const filter = state.filtros;
        const categoriesFiltered = filter.includes("all")
          ? products
          : products.filter(e=>e.category.includes(filter));
          
          return {
          ...state,
          products: categoriesFiltered,
        };
      
      case FILTER_BRANDS: 
      const brandsFiltered = state.filtros.includes("all")
        ? state.products
        : state.products.filter(e=>e.brand == state.filtros)
        return {
        ...state,
        products: brandsFiltered,
        
      };
    
      case FILTER_MIN:
      const filterMaxAndMin= state.filtros?
      state.products.filter(e=> e.price > state.filtros && e.price < state.filterMax):alert()
      return{
        ...state,
        products: filterMaxAndMin
      }
    
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
    default:
      return { ...state };
  }
};

export default reducer;

