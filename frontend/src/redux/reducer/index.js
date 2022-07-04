import { buildPc } from '../actions';
import {
  ADD_CART,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAIL,
  RESET_CART,
  DELETE_CART,
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
  SET_FILTER_PRICE,
  CLEAN_FILTER,
  BUILD_PC,
  GET_PRODUCTS_BY_CATEGORY,
  SET_FILTER_BRANDS,
  CLEAN_FILTER_BRANDS,
  SET_ORDER,
  CLEAN_ORDER,
  CLEAN_FILTER_PRICE,
  FILTER_CATEGORY,
  FILTER_BRAND,
  FILTER_PRICE,
  NEXT_PAGE,
  PREV_PAGE,
  SET_PAGE,
  GET_COMMEND_PENDING,
  GET_COMMEND_PRODUCT,
  GET_GPUS,
  GET_FAV,
  DELETE_FAV,
  ADD_FAV,
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
  buildPc: {},
  productsByCategory: [],
  filterBrands: [],
  filterOrder: [],

  favoritos: [],

  page:1,

  gpus: [],
  CommendPending: [],
  CommendProduct: [],
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

    // case ADD_FAV:
    //   return {
    //     ...state,
    //     favoritos: [...action.payload],
    //   };
    // case DELETE_FAV:
    //   return {
    //     ...state,
    //     favoritos: [...action.payload],
    //   };
    case GET_FAV:
      return {
        ...state,
        favoritos: [...action.payload],
      };
    //BUILD PC PROPIAAA
    //SE GUARDA COMO UN OBJETO QUE EN SUS ATRIBUTOS TIENE LOS ID DE LOS PRODUCTOS,
    // CADA KEY ES UNA CATEGORY Y CADA VALUE ES COMPONENTE QUE PERTENCE A ESA CATEGORY
    case BUILD_PC:
      return {
        ...state,
        buildPc: { ...buildPc, [action.payload.category]: action.payload },
      };

    case GET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        productsByCategory: action.payload,
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case GET_BRANDS:
      let allBrands = state.products.map((e) => e.brand);
      let brand = new Set(allBrands);
      let arr = [...brand];
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
    case GET_CATEGORIES:
      return {
        ...state,
        gpus: action.payload,
      };

    /// BUSQUEDA ///
    case SEARCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    /// FILTRADO Y ORDENAMIENTO ///
    case FILTER_BY_PRICE:
      let productOrder = [...state.products];
      productOrder = productOrder.sort((a, b) => {
        if (a.price < b.price) {
          return action.payload === 'LOW' ? -1 : 1;
        }
        if (a.price > b.price) {
          return action.payload === 'LOW' ? 1 : -1;
        }
        return 0;
      });
      let orderedByPrice =
        //SI TENGO CATEGORIES
        !state.filterBrands.length > 0 &&
        state.filtros.length > 0 &&
        state.filterOrder.includes('menor valor')
          ? state.products.sort(function (a, b) {
              if (a.price > b.price) return 1;
              if (b.price > a.price) return -1;
              return 0;
            })
          : !state.filterBrands.length > 0 &&
            state.filtros.length > 0 &&
            state.filterOrder.includes('mayor valor')
          ? state.products.sort(function (a, b) {
              if (a.price > b.price) return -1;
              if (b.price > a.price) return 1;
              return 0;
            })
          : //SI NO TENGO CATEGORIES NI MARCAS
          !state.filtros.length > 0 &&
            !state.filterBrands.length > 0 &&
            state.filterOrder.includes('menor valor')
          ? state.allProducts.sort(function (a, b) {
              if (a.price > b.price) return 1;
              if (b.price > a.price) return -1;
              return 0;
            })
          : !state.filtros.length > 0 &&
            !state.filterBrands.length > 0 &&
            state.filterOrder.includes('mayor valor')
          ? state.allProducts.sort(function (a, b) {
              if (a.price > b.price) return -1;
              if (b.price > a.price) return 1;
              return 0;
            })
          : // SI TENGO MARCAS
          state.brands.length > 0 && state.filterOrder.includes('menor valor')
          ? state.products.sort(function (a, b) {
              if (a.price > b.price) return 1;
              if (b.price > a.price) return -1;
              return 0;
            })
          : state.brands.length > 0 && state.filterOrder.includes('mayor valor')
          ? state.products.sort(function (a, b) {
              if (a.price > b.price) return -1;
              if (b.price > a.price) return 1;
              return 0;
            })
          : //// SI TENGO TODO
          state.brands.length > 0 &&
            state.filtros.length > 0 &&
            state.filterMax.length > 0 &&
            state.filterPrice.le &&
            state.filterOrder.includes('menor valor')
          ? state.products.sort(function (a, b) {
              if (a.price > b.price) return 1;
              if (b.price > a.price) return -1;
              return 0;
            })
          : state.brands.length > 0 && state.filterOrder.includes('mayor valor')
          ? state.products.sort(function (a, b) {
              if (a.price > b.price) return -1;
              if (b.price > a.price) return 1;
              return 0;
            })
          : 0;

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
      let filterMaxAndMin = state.allProducts.filter(
        (e) => e.price > state.filterPrice && e.price < state.filterMax
      );

      return {
        ...state,
        products: filterMaxAndMin,
      };

    case FILTER_BRANDS:
      const brandsFiltered = state.filtros.includes('all')
        ? state.allProducts
        : state.allProducts.filter((e) => state.filtros.includes(e.brand));
      return {
        ...state,
        products: action.payload,
      };

    ///SETEA EL ESTADO DE FILTROS///
    case SET_FILTER:
      return {
        ...state,
        filtros: [action.payload],
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
      return {
        ...state,
        filterBrands: action.payload,
      };
    case CLEAN_ORDER:
      return {
        ...state,
        filterOrder: action.payload,
      };
    case CLEAN_FILTER_PRICE:
      return {
        ...state,
        filterMax: action.payload,
        filterPrice: action.payload,
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
    /// ORDENAMIENTOS POR BACK ///
    case FILTER_CATEGORY:
      return {
        ...state,
        products: action.payload,
      };
    case FILTER_BRAND:
      return {
        ...state,
        products: action.payload,
      };
    case FILTER_PRICE:
      return {
        ...state,
        products:action.payload
      }
    case NEXT_PAGE:
      return{
        ...state,
        page: state.page+1
      };

    case PREV_PAGE:
      let prev = state.page-1
      if(state.page===1){
        prev = 1
      }
      return{
        ...state,
        page: prev
      };
      case SET_PAGE:
        return{
          ...state,
          page: action.payload
        }
    //GET_COMMEND_PRODUCT
    //CommendPending: [],
    // CommendProduct: [],
    //GET_COMMEND_PENDING,

    case GET_COMMEND_PENDING:
      return {
        ...state,
        CommendPending: action.payload,
      };
    case 'GET_COMMEND_PENDING_VACIO':
      return {
        ...state,
        CommendPending: [],
      };
    case GET_COMMEND_PRODUCT:
      return {
        ...state,
        CommendProduct: action.payload,
      };
    case 'GET_COMMEND_PRODUCT_VACIO':
      return {
        ...state,
        CommendPending: [],
      };
    default:
      return { ...state };
  }
};

export default reducer;
