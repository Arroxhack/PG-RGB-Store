import axios from 'axios';
import {
  ADD_FAV,
  DELETE_FAV,
  GET_FAV,
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
  GET_GPUS,
  DELETE_CART,
  NEXT_PAGE,
  PREV_PAGE,
  SET_PAGE,
  GET_COMMEND_PENDING,
  GET_COMMEND_PRODUCT,
  FILTER_PRICE,
  SEND_RESPONSE,
  GET_QUESTION,
  GET_QUEST,
  POST_QUESTION,
  NEXT_PAGE_PRODUCTS,
  PREV_PAGE_PRODUCTS,
  SET_PAGE_PRODUCTS,
  CLEAN_PRODUCTS,
  GET_HISTORY
} from '../types/index';
import Swal from 'sweetalert2';
const PATH = 'https://pg-rgb-store-backend-production.up.railway.app';

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

//// GET DE GPUS ////
export function getGpus() {
  return async function (dispatch) {
    try {
      let gpu = await axios.get(`${PATH}/gpu`);
      let gpuData = gpu.data;
      return dispatch({
        type: GET_GPUS,
        payload: gpuData,
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
export function cleanFilter() {
  return {
    type: CLEAN_FILTER,
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

export function getProductFavDetail(id) {
  return async function () {
    try {
      let product = await axios.get(`${PATH}/products/${id}`);
      console.log('soy product fav detail', product.data);
      return product.data;
    } catch (error) {
      console.log(error, ' product fav detail');
    }
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
        text: 'Created successfully!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
      return dispatch({
        type: CREATE_PRODUCT,
        payload: post.data,
      });
    } catch (error) {
      Swal.fire({
        title: 'Something went wrong',
        text: 'Product was not created',
        icon: 'error',
        confirmButtonText: 'Ok',
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
        text: 'Product updated successfully!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
    } catch (error) {
      Swal.fire({
        title: 'Something went wrong',
        text: 'Product was not updated',
        icon: 'error',
        confirmButtonText: 'Ok',
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
        title: 'Product deleted successfully',
        confirmButtonText: 'Ok',
      });
    } catch (error) {
      Swal.fire({
        title: 'Something went wrong',
        text: 'Product was not deleted',
        icon: 'error',
        confirmButtonText: 'Ok',
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
      const dataFilter = filterBran.data;
      return dispatch({
        type: FILTER_BRAND,
        payload: dataFilter,
      });
    } catch (error) {
      Swal.fire({
        icon: 'alert',
        title: 'Something went wrong',
        text: 'Please refresh and try searching again',
        confirmButtonText: 'Ok',
      });
    }
  };
};

export const filterPrice = (category, brand, min, max, name) => {
  return async (dispatch) => {
    try {
      if (!name) {
        if (!brand) {
          if (min && max) {
            const filterCat = await axios.get(
              `${PATH}/filter/?category=${category}&min=${min}&max=${max}`
            );
              
            return dispatch({
              type: FILTER_PRICE,
              payload: filterCat.data,
            });
          }
          if (min || max) {
            const filterCat = await axios.get(
              `${PATH}/filter/?category=${category}&min=${min ? min : max}`
            );
              
            return dispatch({
              type: FILTER_PRICE,
              payload: filterCat.data,
            });
          }
        }
        if (brand) {
          if (min && max) {
            const filterCat = await axios.get(
              `${PATH}/filter/?category=${category}&brand=${brand}&min=${min}&max=${max}`
            );

            return dispatch({
              type: FILTER_PRICE,
              payload: filterCat.data,
            });
          }
          if (min || max) {
            const filterCat = await axios.get(
              `${PATH}/filter/?category=${category}&brand=${brand}&min=${
                min ? min : max
              }`
            );

            return dispatch({
              type: FILTER_PRICE,
              payload: filterCat.data,
            });
          }
        }
      } else {
        if (brand) {
          const searchName = await axios.get(
            `${PATH}/filter/?name=${name}&brand=${brand}`
          );
          const rta = searchName.data;
          if (rta.length >= 1) {
            return dispatch({
              type: FILTER_PRICE,
              payload: searchName.data,
            });
          } else {
            Swal.fire({
              icon: 'alert',
              title: 'Something went wrong',
              text: 'Please refresh and try again',
              confirmButtonText: 'Ok',
            });
          }
        } else {
          const searchName = await axios.get(`${PATH}/filter/?name=${name}`);
          const rta = searchName.data;
          if (rta.length >= 1) {
            return dispatch({
              type: FILTER_PRICE,
              payload: searchName.data,
            });
          } else {
            Swal.fire({
              icon: 'alert',
              title: 'Something went wrong',
              text: 'Please refresh and try again',
              confirmButtonText: 'Ok',
            });
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterProducts = (category,brand,min,max,name)=>{
  return async(dispatch)=>{
    try {

      if(!name){
        if(!brand){
          if(!min && !max){
            const filter = await axios.get(`${PATH}/filter/?category=${category}`);
            return dispatch({
              type: FILTER_PRICE,
              payload: filter.data
            })
          }else{
            const filter = await axios.get(`${PATH}/filter/?category=${category}&min=${min}&max=${max}`);
            return dispatch({
              type: FILTER_PRICE,
              payload: filter.data
            })
          }
        }else{
          if(!min && !max){
            const filter = await axios.get(`${PATH}/filter/?category=${category}&brand=${brand}`);

            return dispatch({
              type: FILTER_PRICE,
              payload: filter.data
            })
          }else{
            const filter = await axios.get(`${PATH}/filter/?category=${category}&brand=${brand}&min=${min}&max=${max}`);
            return dispatch({
              type: FILTER_PRICE,
              payload: filter.data
            })
          }
        }
      }else{
        if(!brand){
          if(!min && !max){
            const filter = await axios.get(`${PATH}/filter/?name=${name}`);
            return dispatch({
              type:FILTER_PRICE,
              payload: filter.data
            })
          }else{
            const filter = await axios.get(`${PATH}/filter/?name=${name}&min=${min}&max=${max}`);
            return dispatch({
              type:FILTER_PRICE,
              payload: filter.data
            })
          }
        }else{
          if(!min && !max){
            const filter = await axios.get(`${PATH}/filter/?name=${name}&brand=${brand}`);
            return dispatch({
              type:FILTER_PRICE,
              payload: filter.data
            })
          }else{
            const filter = await axios.get(`${PATH}/filter/?name=${name}&brand=${brand}&min=${min}&max=${max}`);
            return dispatch({
              type:FILTER_PRICE,
              payload: filter.data
            })
          }
        }
      }
    } catch (error) {
      Swal.fire({
        icon: 'alert',
        title: 'There was an error',
        text: 'Please refresh and try the search again.',
        confirmButtonText: 'OK',
      });
    }
  }
}

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
// export function searchProducts(search) {
//   return function (dispatch) {
//     axios
//       .get(`${PATH}/product?name=` + search)
//       .then((products) => {
//         dispatch({
//           type: SEARCH_PRODUCTS,
//           payload: products.data,
//         });
//       })
//       .catch(() => {
        
//       });
//   };
// }
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

export function addProductFavorito(idProd, idUser) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 2000,
  });
  return async (dispatch) => {
    try {
      await axios
        .put(`${PATH}/add/favorito`, { idProd, idUser })
        .then((res) => {
          if (Array.isArray(res.data)) {
            Toast.fire({
              icon: 'success',
              title: 'Successfully added to favourites',
            });
            dispatch({ type: ADD_FAV, payload: res.data });
          } else {
            Toast.fire({
              icon: 'error',
              title: res.data.error,
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteProductFavorito(idProd, idUser) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 2000,
  });
  return async (dispatch) => {
    try {
      await axios
        .put(`${PATH}/delete/favorito`, { idProd, idUser })
        .then((res) => {
          if (Array.isArray(res.data)) {
            Toast.fire({
              icon: 'success',
              title: 'Successfully removed from favourites',
            });
            dispatch({ type: DELETE_FAV, payload: res.data });
          } else {
            Toast.fire({
              icon: 'error',
              title: res.data.error,
            });
          }
        });
    } catch (error) {
      console.log(error, ' error delete');
    }
  };
}

export function getProductFavorito(idUser) {
  return async (dispatch) => {
    try {
      await axios.get(`${PATH}/get/favorito?idUser=${idUser}`).then((res) => {
        console.log(res.data, ' en actions getFavoritos');

        return dispatch({ type: GET_FAV, payload: res.data });
      });
    } catch (error) {}
  };
}

// PAGINADO ADMIN
export const nextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};
export const prevPage = () => {
  return {
    type: PREV_PAGE,
  };
};
export const setPage = (p) => {
  return {
    type: SET_PAGE,
    payload: p,
  };
};

export function PostComment(comment, username, id) {
  return async () => {
    try {
      const result = await axios.put(`${PATH}/PostCommentReview`, {
        comment,
        username,
        id,
      });
      if (result.data !== 'Done') {
        Swal.fire({
          icon: 'info',
          title: 'DataBase error',
          button: 'Ok',
        });
      }
      Swal.fire({
        icon: 'success',
        title: 'Comment posted',
        button: 'Ok',
      }).then(() => window.location.reload());
    } catch (e) {
      console.log(e);
    }
  };
}

export function GetCommendPending(username) {
  return (dispatch) => {
    try {
      axios
        .put(`${PATH}/getCommendFalse/${username}`)
        .then((user) =>
          dispatch({ type: GET_COMMEND_PENDING, payload: user.data })
        );
    } catch (error) {
      console.log(error);
    }
  };
}

export function GetCommendProduct(id) {
  return (dispatch) => {
    try {
      axios
        .get(`${PATH}/commentofProduct/${id}`)
        .then((user) =>
          dispatch({ type: GET_COMMEND_PRODUCT, payload: user.data })
        );
    } catch (error) {
      console.log(error);
    }
  };
}

export function VaciarStatePendingComment() {
  return (dispatch) => {
    try {
      dispatch({ type: 'GET_COMMEND_PENDING_VACIO', payload: [] });
    } catch (error) {
      console.log(error);
    }
  };
}
export function VaciarStateProductComment() {
  return (dispatch) => {
    try {
      dispatch({ type: 'GET_COMMEND_PRODUCT_VACIO', payload: [] });
    } catch (error) {
      console.log(error);
    }
  };
}
/// QUESTIONS
export const getQuestions = () => {
  return async (dispatch) => {
    try {
      const question = await axios.get(`${PATH}/not-response`);
      return dispatch({
        type: GET_QUESTION,
        payload: question.data
      })
    }catch(error){
      console.log(error)
    }
  };
};

export const sendResponse = (rta) => {
  return async (dispatch) => {
    const { id } = rta;
    const { response } = rta;

    try {
      const send = await axios.put(`${PATH}/create-response/${id}`, {
        response,
      });
      if (send.data) {
        Swal.fire({
          icon: 'success',
          text: 'Response sent successfully',
          confirmButtonText: 'Ok',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: 'Something went wrong, please try again',
        confirmButtonText: 'Ok',
      });
    }
  };
};

export const getQuest = (id) => {
  return async (dispatch) => {
    try {
      const questionProduct = await axios.get(`${PATH}/comment/${id}`);

      if (questionProduct.data) {
        return dispatch({
          type: GET_QUEST,
          payload: questionProduct.data,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: 'Something went wrong, please try again',
        confirmButtonText: 'Ok',
      });
    }
  };
};

export const postQuest = (question) => {
  return async (dispatch) => {
    const { id } = question;
    const { comentario, user } = question;
    try {
      const postQuestion = await axios.post(`${PATH}/create-comment/${id}`, {
        comment: comentario,
        user,
      });

      if (postQuestion.data) {
        Swal.fire({
          icon: 'success',
          text: 'Response sent successfully',
          confirmButtonText: 'Ok',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: 'Something went wrong, please try again',
        confirmButtonText: 'Ok',
      });
    }
  };
};

export const deleteQuest = (id) => {
  return async (dispatch) => {
    try {
      const deleteQUEST = await axios.delete(`${PATH}/delete-question/${id}`);

      if (deleteQUEST.data) {
        Swal.fire({
          icon: 'success',
          text: 'Question successfully deleted',
          confirmButtonText: 'Ok',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: 'Something went wrong, please try again',
        confirmButtonText: 'Ok',
      });
    }
  };
};


// PAGINADO PRODUCT
export const nextPageProduct = () => {
  return {
    type: NEXT_PAGE_PRODUCTS,
  };
};
export const prevPageProduct = () => {
  return {
    type: PREV_PAGE_PRODUCTS,
  };
};
export const setPageProduct = (p) => {
  return {
    type: SET_PAGE_PRODUCTS,
    payload: p,
  };
};

// RESET PRODUCTS
export const cleanProducts = ()=>{
  return{
    type: CLEAN_PRODUCTS,
    payload: []
  }
}

// GET HISTORY
export const getHistory = (id)=>{
  return async (dispatch)=>{
    try {
      const history = await axios.get(`${PATH}/user-purchase/${id}`)

      if(history.data){
        return dispatch(
          {type: GET_HISTORY,
          payload: history.data}
        )
      }

    } catch (error) {
      console.log(error)
    }
  }
}