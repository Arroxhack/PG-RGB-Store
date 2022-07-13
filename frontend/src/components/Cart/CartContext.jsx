import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export const CartContext = createContext();

const Toast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 2000,
});

const PATH = "http://localhost:3001";

const CartProvider = ({ children }) => {
  const [verificate, setVerificate] = useState(false);
  const [usePoints, setUsePoints] = useState(false);
  const [TyCcontext, setTyC] = useState(false);
  const [points, setPoints] = useState(0);
  const [products, setProducts] = useState(() => {
    try {
      const productosLocalStorage = localStorage.getItem("cartProducts");
      return productosLocalStorage ? JSON.parse(productosLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  //console.log(products)

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(products));
    //console.log(products)
    // console.log("products: ", products);
    const login = localStorage.getItem("login");
    const email = window.atob(localStorage.getItem("email"));
    const cartProductArray = localStorage.getItem("cartProducts");
    // console.log("login: ", login, ", email: ", email, ", cartProductArray: ", cartProductArray)
    if (login && email) {
      (async () => {
        const response = axios
          .post(`${PATH}/changeCart`, { email, cartProductArray })
          .then((res) => res.data)
          .catch((e) => console.log(e));
        const ress = await Promise.all([response]);
        //console.log("ress: ", ress);
      })();
    }
  }, [products]);

  const addArrayToCart = (product) => {
    product.forEach((e) => {
      const inCart = products.find((p) => p.id === e.id);

      //console.log("inCart: ", inCart);
      if (inCart) {
        setProducts((products) =>
          products.map((p) => {
            console.log("cada product que entra: ", p);
            if (p.id === e.id) {
              return (
                (products) => products, { ...inCart, amount: inCart.amount + 1 }
              );
            } else {
              return (products) => products, { ...p, amount: 1 };
            }
          })
        );
      } else {
        //console.log("cada product que entra al segundo else: ", e);
        return setProducts((products) => [...products, { ...e, amount: 1 }]);
      }
    });
    Toast.fire({
      icon: "success",
      title: "Your PC has been added to cart!",
    });
  };

  const addProductToCart = (product) => {
    const inCart = products.find((p) => p.id === product.id);

    //console.log("inCart: ", inCart);
    if (inCart) {
      setProducts(
        products.map((p) => {
          if (p.id === product.id) {
            return { ...inCart, amount: inCart.amount + 1 };
          } else return p;
        })
      );
    } else {
      setProducts((products) => [...products, { ...product, amount: 1 }]);
    }
    Toast.fire({
      icon: "success",
      title: "Added to cart!",
    });
  };

  const deleteProductCart = (product) => {
    const inCart = products.find((p) => p.id === product.id);

    if (inCart.amount === 1) {
      setProducts(products.filter((p) => p.id !== product.id));
    }
    if (inCart.amount > 1) {
      setProducts(
        products.map((p) => {
          if (p.id === product.id) {
            return { ...inCart, amount: inCart.amount - 1 };
          }
          return p;
        })
      );
    }
    Toast.fire({
      icon: "error",
      title: "Removed one to cart!",
    });
  };

  const deleteProduct = (product) => {
    const inCart = products.find((p) => p.id === product.id);

    if (inCart.amount) {
      setProducts(products.filter((p) => p.id !== product.id));
    }

    Toast.fire({
      icon: "error",
      title: "Removed all to cart!",
    });
  };

  // const deleteProductCart = product=>{
  //     products.filter(p=>p.id!==product.id
  //     const inCart = products.find(p=>p.id===product.id)
  //     if(inCart.amount ===1 ){
  //         setProducts(
  //             products.filter(p=>p.id!==product.id)
  //         )
  //     }
  //     if(inCart.amount > 1){
  //         setProducts(p=>{
  //             if(p.id===product.id){
  //                 return {...inCart, amount:inCart.amount-1}
  //             } else return p
  //         })
  //     }
  // }

  const resetProductCart = () => {
    setProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        verificate,
        setVerificate,
        products,
        addProductToCart,
        deleteProductCart,
        deleteProduct,
        addArrayToCart,
        resetProductCart,
        setProducts,
        usePoints,
        setUsePoints,
        points,
        setPoints,
        TyCcontext,
        setTyC,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
