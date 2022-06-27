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
<<<<<<< HEAD
  GET_USER_DATA,
  CREATE_PRODUCT,
} from "../types/index";
=======
  GET_PROFILE,
  CREATE_PRODUCT,
} from '../types/index';
>>>>>>> 04d700bbc90f7ef3266be057ca316e21db732c9d

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
<<<<<<< HEAD
  UserData: [],
=======
>>>>>>> 04d700bbc90f7ef3266be057ca316e21db732c9d
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
<<<<<<< HEAD
    case GET_USER_DATA:
      return {
        ...state,
        UserData: action.payload,
      };
=======
>>>>>>> 04d700bbc90f7ef3266be057ca316e21db732c9d

    /// BUSQUEDA ///
    case SEARCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
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
        : products.filter((e) => e.category.includes(filter[0]));

      return {
        ...state,
        products: categoriesFiltered,
      };

    case FILTER_MIN:
      const filterMaxAndMin = state.filtros
        ? state.products.filter(
            (e) => e.price > state.filtros && e.price < state.filterMax
          )
<<<<<<< HEAD
        : alert("No existen productos en este rango");
=======
        : alert('No existen productos en este rango');
>>>>>>> 04d700bbc90f7ef3266be057ca316e21db732c9d
      return {
        ...state,
        products: filterMaxAndMin,
      };

    case FILTER_BRANDS:
<<<<<<< HEAD
      const brandsFiltered = state.filtros.includes("all")
        ? state.products
        : state.products.filter((e) => e.brand === state.filtros);
=======
      const brandsFiltered = state.filtros.includes('all')
        ? state.allProducts
<<<<<<< HEAD
        : state.allProducts.filter((e) =>state.filtros.includes(e.brand));
=======
        : state.allProducts.filter((e) => e.brand === state.filtros);
>>>>>>> 04d700bbc90f7ef3266be057ca316e21db732c9d
>>>>>>> 07810bdf728e076e4860f1797dc50c39220750a6
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

    case CLEAN:
      return {
        ...state,
        detail: action.payload,
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
