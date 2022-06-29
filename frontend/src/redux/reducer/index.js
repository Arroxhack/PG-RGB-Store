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
  CLEAN_FILTER
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
      let orderedByPrice = state.filtros.includes('menor valor')
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
      const products = state.products;
      const filter = state.filtros;
      const categoriesFiltered = filter.includes('all')
        ? state.allProducts
        : products.filter((e) => e.category.includes(filter[0]));

      return {
        ...state,
        products: categoriesFiltered,
      };

    case FILTER_MIN:
      const filterMaxAndMin = state.filtros
        ? state.products.filter(
            (e) => e.price > state.filterPrice && e.price < state.filterMax
          )
        : alert('No existen productos en este rango');
      return {
        ...state,
        products: filterMaxAndMin,
      };

    case FILTER_BRANDS:
      const brandsFiltered = state.filtros.includes('all')
        ? state.allProducts
        : state.allProducts.filter((e) =>state.filtros.includes(e.brand));
      return {
        ...state,
        products: brandsFiltered,
      };

    ///SETEA EL ESTADO DE FILTROS///
    case SET_FILTER:
      return {
        ...state,
        filtros:[...state.filtros, action.payload],
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
