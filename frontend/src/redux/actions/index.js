<<<<<<< HEAD
import axios from "axios";
=======
import axios from 'axios';
>>>>>>> 04d700bbc90f7ef3266be057ca316e21db732c9d
import {
  ADD_CART,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAIL,
  RESET_CART,
  SEARCH_PRODUCTS,
  FILTER_BY_PRICE,
  GET_CATEGORIES,
  SET_FILTER,
  LOAD_USER,
  FILTER_CATEGORIES,
  GET_BRANDS,
  FILTER_BRANDS,
  CREATE_PRODUCT,
  CLEAN,
  SET_FILTER_MAX,
  FILTER_MIN,
<<<<<<< HEAD
  GET_USER_DATA,
} from "../types/index";
import Swal from "sweetalert2";
const PATH = "http://localhost:3001";
=======
  EDIT_PROFILE,
  GET_PROFILE,
} from '../types/index';
import Swal from 'sweetalert2';
const PATH = 'http://localhost:3001';
>>>>>>> 04d700bbc90f7ef3266be057ca316e21db732c9d

/// GET PRODUCTOS ///
export function getAllProducts() {
  return async function (dispatch) {
    try {
      let allProducts = await axios.get(`${PATH}/products`); //products por ahora
      let allProductsData = allProducts.data;
      return dispatch({
        type: GET_ALL_PRODUCTS,
        payload: allProductsData,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

/// GET MARCAS DE PRODUCTOS ///

export function getBrand() {
  return async function (dispatch) {
    try {
      let allProducts = await axios.get(`${PATH}/brands`); //products por ahora
      let allBrands = allProducts.data;
<<<<<<< HEAD
      console.log(allBrands);
=======
>>>>>>> 04d700bbc90f7ef3266be057ca316e21db732c9d
      return dispatch({
        type: GET_BRANDS,
        payload: allBrands,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function clean() {
  return {
    type: CLEAN,
    payload: [],
  };
}

/// GET DETALLE DE PRODUCTOS ///
export function getProductDetail(id) {
  return async function (dispatch) {
    try {
      let product = await axios.get(`${PATH}/products/${id}`);
      product = product.data;
      return dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: product,
      });
    } catch (error) {
      console.log(error, ' product detail');
    }
  };
}

/// GET A LAS CATEGORIAS ///
export function getAllCategories() {
  return async function (dispatch) {
    try {
      let AllCategory = await axios.get(`${PATH}/category`);
      console.log(AllCategory);
      let allCategoryData = AllCategory.data.map((e) => e.name);
      return dispatch({
        type: GET_CATEGORIES,
        payload: allCategoryData,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

/// POST PRODUCTOS ///
export const createProduct = (product) => {
  return async (dispatch) => {
    try {
      const post = await axios.post(`${PATH}/create-product`, product);
      Swal.fire({
        title: `${post.data.name}`,
<<<<<<< HEAD
        text: "creado con exito!",
        icon: "success",
        confirmButtonText: "ok",
=======
        text: 'creado con exito!',
        icon: 'success',
        confirmButtonText: 'ok',
>>>>>>> 04d700bbc90f7ef3266be057ca316e21db732c9d
      });

      return {
        type: CREATE_PRODUCT,
        payload: post.data,
      };
    } catch (error) {
      Swal.fire({
<<<<<<< HEAD
        title: "Algo fallo",
        text: "No se pudo crear el producto",
        icon: "error",
        confirmButtonText: "ok",
=======
        title: 'Algo fallo',
        text: 'No se pudo crear el producto',
        icon: 'error',
        confirmButtonText: 'ok',
>>>>>>> 04d700bbc90f7ef3266be057ca316e21db732c9d
      });
    }
  };
};

/// POST REGISTRAR USUARIO ///
export function PostUser(user) {
  return async function () {
    try {
<<<<<<< HEAD
      const exit = await axios.post(`${PATH}/register`, user);
      if (exit.data) {
        alert("Register Succesfully");
      }
    } catch (e) {
      console.log("Error in Register");
    }
  };
}

// DATOS DEL USUARIO //
export function GetUserData(id) {
  return async function (dispatch) {
    try {
      const usuario = await axios.get(`${PATH}/Users/${id}`);
      const user = usuario.data;
      return dispatch({
        type: GET_USER_DATA,
        payload: user,
      });
    } catch (e) {
      console.log("Error in Get Data");
=======
      const exit = await axios.post('/register', user);
      if (exit.data) {
        alert('Register Succesfully');
      }
    } catch (e) {
      console.log('Error in Register');
>>>>>>> 04d700bbc90f7ef3266be057ca316e21db732c9d
    }
  };
}

/// DISPATCH PARA EL CARRITO (CREO QUE HAY QUE BORRAR) ///
export const addCart = (product) => {
  return {
    type: ADD_CART,
    payload: product,
  };
};
export const resetCart = () => {
  return {
    type: RESET_CART,
  };
};
export function setFilter(payload) {
  return {
    type: SET_FILTER,
    payload,
  };
}

export function setFilterMax(payload) {
  return {
    type: SET_FILTER_MAX,
    payload,
  };
}

/// ORDENAMIENTOS Y FILTRADOS ///
export function orderedByPrice(payload) {
  return {
    type: FILTER_BY_PRICE,
    payload,
  };
}
<<<<<<< HEAD
export function filterCategories(payload) {
  return {
    type: FILTER_CATEGORIES,
    payload,
  };
}

export function filterBrands(payload) {
  return {
=======
 export function filterBrands(payload){
  return{
>>>>>>> 04d700bbc90f7ef3266be057ca316e21db732c9d
    type: FILTER_BRANDS,
    payload,
  };
}
export function filterMin(payload) {
  return {
    type: FILTER_MIN,
<<<<<<< HEAD
=======
    payload
  }
 }
export function filterCategories(payload) {
  return {
    type: FILTER_CATEGORIES,
>>>>>>> 04d700bbc90f7ef3266be057ca316e21db732c9d
    payload,
  };
}

/// BUSQUEDA ///
export function searchProducts(search) {
  return function (dispatch) {
    axios
      .get(`${PATH}/product?name=` + search)
      .then((products) => {
<<<<<<< HEAD
=======
        console.log(products, ' soy products');
>>>>>>> 04d700bbc90f7ef3266be057ca316e21db732c9d
        dispatch({
          type: SEARCH_PRODUCTS,
          payload: products.data,
        });
      })
      .catch(() => {
<<<<<<< HEAD
        alert("Product not found!");
      });
  };
=======
        alert('Product not found!');
      });
  };
}
//======================================
//CAMBIAR PARAMS!!!!! PELIGROSO! PUEDO ACCEDER A PERFILES DE OTROS USER Y EDITARLOS!!!
//======================================
// PERFIL DE USER
export function getUserProfile(username) {
  return (dispatch) => {
    try {
      axios
        .get(`${PATH}/profile/${username}`)
        .then((user) => dispatch({ type: GET_PROFILE, payload: user.data }));
    } catch (error) {
      console.log('ERROR EN GETUSERPROFILE ACTIONS');
    }
  };
}
//======================================
//CAMBIAR PARAMS!!!!! PELIGROSO! PUEDO ACCEDER A PERFILES DE OTROS USER Y EDITARLOS!!!
//======================================
//MODIFICAR PERFIL USER
export function putUserProfile(username) {
  return (dispatch) => {
    try {
      axios
        .put(`${PATH}/profile/edit/${username}`)
        .then((user) => dispatch({ type: EDIT_PROFILE, payload: user.data }));
    } catch (error) {
      console.log(error);
    }
  };
>>>>>>> 04d700bbc90f7ef3266be057ca316e21db732c9d
}
