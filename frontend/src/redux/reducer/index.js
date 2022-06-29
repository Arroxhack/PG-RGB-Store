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
  CLEAN_FILTER_PRICE
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
      let orderedByPrice =
        //SI TENGO CATEGORIES
                !state.filterBrands.length>0 && state.filtros.length>0 && state.filterOrder.includes('menor valor')
                ? state.products.sort(function (a, b) {
                if (a.price > b.price) return 1;
                if (b.price > a.price) return -1;
                return 0;
              }): !state.filterBrands.length>0 && state.filtros.length>0 && state.filterOrder.includes('mayor valor')?
                state.products.sort(function (a, b) {
                if (a.price > b.price) return -1;
                if (b.price > a.price) return 1;
                return 0;
              }):
        //SI NO TENGO CATEGORIES NI MARCAS
              !state.filtros.length>0 && !state.filterBrands.length>0 && state.filterOrder.includes('menor valor')?
              state.allProducts.sort(function (a, b) {
              if (a.price > b.price) return 1;
              if (b.price > a.price) return -1;
              return 0;
            }): !state.filtros.length>0 && !state.filterBrands.length>0 && state.filterOrder.includes('mayor valor')?
              state.allProducts.sort(function (a, b) {
              if (a.price > b.price) return -1;
              if (b.price > a.price) return 1;
              return 0;
            }): 
        // SI TENGO MARCAS        
              state.brands.length>0 && state.filterOrder.includes('menor valor')?
              state.products.sort(function (a, b) {
              if (a.price > b.price) return 1;
              if (b.price > a.price) return -1;
              return 0;
              }):state.brands.length>0 && state.filterOrder.includes('mayor valor')?
              state.products.sort(function (a, b) {
              if (a.price > b.price) return -1;
              if (b.price > a.price) return 1;
              return 0;
              })
                    
              //// SI TENGO TODO       
              :state.brands.length>0 && state.filtros.length>0 && state.filterMax.length>0
              && state.filterPrice.le && state.filterOrder.includes('menor valor')?
              state.products.sort(function (a, b) {
              if (a.price > b.price) return 1;
              if (b.price > a.price) return -1;
              return 0;
              }):state.brands.length>0 && state.filterOrder.includes('mayor valor')?
              state.products.sort(function (a, b) {
              if (a.price > b.price) return -1;
              if (b.price > a.price) return 1;
              return 0;
              }):0
    

      return {
        ...state,
        products: orderedByPrice,
      };

    case FILTER_CATEGORIES:
      const filter = state.filtros;
      const categoriesFiltered = filter.includes('all')
        ? state.allProducts
        //SI TENGO CATEGORIAS
        : state.brands.length>0?state.products.filter((e) => e.category.includes(filter))
        : state.allProducts.filter((e) => e.category.includes(filter))

      return {
        ...state,
        products: categoriesFiltered,
      };

    case FILTER_MIN:
      //filtra cuando tengo solamente categorias
      const filterMaxAndMin = state.filtros.length>0 && state.filterPrice.length>0?state.products.filter(
        (e) => e.price > state.filterPrice && e.price < state.filterMax)
        //filtra cuando hay marcas nomas
        :state.filterBrands.length>0 && state.filterPrice.length>0?state.products.filter(
          (e) => e.price > state.filterPrice && e.price < state.filterMax)
          //filtra cuando hay categorias y filtros
        :state.filterBrands.length>0 && state.filtros.length>0 && state.filterPrice.length>0?state.products.filter(
          (e) => e.price > state.filterPrice && e.price < state.filterMax)
        //filtra cuaando hay categorias y ordenamiento
        :state.filterOrder.length>0 && state.filtros.length>0 && state.filterPrice.length>0?state.products.filter(
          (e) => e.price > state.filterPrice && e.price < state.filterMax)
        //filtra cuando hay marcas y ordenamiento
        :state.filterOrder.length>0 && state.filterBrands.length>0 && state.filterPrice.length>0?state.products.filter(
          (e) => e.price > state.filterPrice && e.price < state.filterMax)
        //filtras con todos los filtros
        :state.filterOrder.length>0 && state.filterBrands.length>0 && state.filtros.length>0 && state.filterPrice.length>0?state.products.filter(
          (e) => e.price > state.filterPrice && e.price < state.filterMax)
        
          :state.allProducts.filter(
        (e) => e.price > state.filterPrice && e.price < state.filterMax)
       
        return {
        ...state,
        products: filterMaxAndMin,
      };

    case FILTER_BRANDS:
      const brandsFiltered = state.filterBrands ==='all'
        ? state.allProducts
        : !state.filtros.length>0? state.allProducts.filter((e) => e.brand.includes(state.filterBrands)):
        state.products.filter((e) => e.brand.includes(state.filterBrands))

      return {
        ...state,
        products: brandsFiltered,
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
    default:
      return { ...state };
  }
};

export default reducer;
