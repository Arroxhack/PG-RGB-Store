import axios from 'axios';
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
  CREATE_PRODUCT,
  CLEAN,
  SET_FILTER_MAX,
  FILTER_MIN,
  GET_USER_DATA,
  EDIT_PROFILE,
  SET_FILTER_PRICE,
  CLEAN_FILTER,
  BUILD_PC,
  GET_PRODUCTS_BY_CATEGORY,
  SET_FILTER_BRANDS,
  CLEAN_FILTER_BRANDS,
  SET_ORDER,
  CLEAN_ORDER,
  CLEAN_FILTER_PRICE,
  CLEAN_FILTER_ORDER,
  FILTER_CATEGORY,
  FILTER_BRAND,
  DELETE_CART,
} from '../types/index';
import Swal from 'sweetalert2';
const PATH = 'http://localhost:3001';

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

export function getProductsByCategory(category) {
  return async (dispatch) => {
    try {
      const PRODUCTS = await axios.get(`${PATH}/?cat=${category}`);
      return dispatch({
        type: GET_PRODUCTS_BY_CATEGORY,
        payload: PRODUCTS.data,
      });
    } catch (error) {}
  };
}
//ARMADO PC
export function buildPc(payload) {
  return {
    type: BUILD_PC,
    payload,
  };
}
/// GET MARCAS DE PRODUCTOS ///
export function getBrand(payload) {
  return {
    type: GET_BRANDS,
    payload,
  };
}

export function clean() {
  return {
    type: CLEAN,
    payload: [],
  };
}
export function cleanFilter() {
  return {
    type: CLEAN_FILTER,
    payload: [],
  };
}
export function cleanFilterBrands() {
  return {
    type: CLEAN_FILTER_BRANDS,
    payload: [],
  };
}
export function cleanOrder() {
  return {
    type: CLEAN_ORDER,
    payload: [],
  };
}
export function cleanFilterPrice() {
  return {
    type: CLEAN_FILTER_PRICE,
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
        text: 'Creado con exito!',
        icon: 'success',
        confirmButtonText: 'ok',
      });
      return dispatch({
        type: CREATE_PRODUCT,
        payload: post.data,
      });
    } catch (error) {
      Swal.fire({
        title: 'Algo fallo',
        text: 'No se pudo crear el producto',
        icon: 'error',
        confirmButtonText: 'ok',
      });
    }
  };
};
/// UPDATE PRODUCTO ///
export const editProduct = (producto) => {
  return async (dispatch) => {
    try {
      const post = await axios.put(
        `${PATH}/edit-products/${producto.id}`,
        producto
      );
      Swal.fire({
        title: `${producto.name}`,
        text: 'Editado con exito!',
        icon: 'success',
        confirmButtonText: 'ok',
      });
    } catch (error) {
      Swal.fire({
        title: 'Algo fallo',
        text: 'No se pudo editar el producto',
        icon: 'error',
        confirmButtonText: 'ok',
      });
    }
  };
};
/// DELETE PRODUCTO ///
export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      const deleteProduct = await axios.delete(`${PATH}/delete-product/${id}`);

      Swal.fire({
        icon: 'success',
        title: 'Product delete',
        confirmButtonText: 'Ok',
      });
    } catch (error) {
      Swal.fire({
        title: 'Algo fallo',
        text: 'No se pudo borrar el producto',
        icon: 'error',
        confirmButtonText: 'ok',
      });
    }
  };
};

/// POST REGISTRAR USUARIO ///
export function PostUser(user) {
  return async function () {
    try {
      const exit = await axios.post(`${PATH}/register`, user);
      if (exit.data) {
        alert('Register Succesfully');
      }
    } catch (e) {
      console.log('Error in Register');
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
      console.log('Error in Get Data');
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
export function setFilterPrice(payload) {
  return {
    type: SET_FILTER_PRICE,
    payload,
  };
}
export function setFilterMax(payload) {
  return {
    type: SET_FILTER_MAX,
    payload,
  };
}
export function setFilterBrands(payload) {
  return {
    type: SET_FILTER_BRANDS,
    payload,
  };
}
export function setOrder(payload) {
  return {
    type: SET_ORDER,
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

export const filterCategory = (category) => {
  return async (dispatch) => {
    try {
      const filterCat = await axios.get(`${PATH}/filter/?category=${category}`);

      return dispatch({
        type: FILTER_CATEGORY,
        payload: filterCat.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterBran = (category, brand) => {
  return async (dispatch) => {
    try {
      const filterBran = await axios.get(
        `${PATH}/filter/?category=${category}&brand=${brand}`
      );

      return dispatch({
        type: FILTER_BRAND,
        payload: filterBran.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function filterCategories(category) {
  return async function (dispatch) {
    let categories;
    try {
      categories = await axios.get(`${PATH}/products/?category=${category}`); //products por ahora

      return dispatch({
        type: FILTER_CATEGORIES,
        payload: categories.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterBrands(brand) {
  return async function (dispatch) {
    let brands;
    try {
      if (brand !== 'all') {
        brands = await axios.get(`${PATH}/brands/?brand=${brand}`); //products por ahora
      }

      return dispatch({
        type: FILTER_BRANDS,
        payload: brands.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterMin(payload) {
  return {
    type: FILTER_MIN,
    payload,
  };
}

/// BUSQUEDA ///
export function searchProducts(search) {
  return function (dispatch) {
    axios
      .get(`${PATH}/product?name=` + search)
      .then((products) => {
        console.log(products, ' soy products');
        dispatch({
          type: SEARCH_PRODUCTS,
          payload: products.data,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: 'info',
          title: 'Product not found',
          button: 'OK',
        });
      });
  };
}
//======================================
//CAMBIAR PARAMS!!!!! PELIGROSO! PUEDO ACCEDER A PERFILES DE OTROS USER Y EDITARLOS!!!
//======================================
// PERFIL DE USER
// export function getUserProfile(username) {
//   return (dispatch) => {
//     try {
//       axios
//         .get(`${PATH}/profile/${username}`)
//         .then((user) => dispatch({ type: GET_PROFILE, payload: user.data }));
//     } catch (error) {
//       console.log('ERROR EN GETUSERPROFILE ACTIONS');
//     }
//   };
// }
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
}
