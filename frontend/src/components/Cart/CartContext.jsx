import { createContext,useEffect, useState } from "react"
import Swal from "sweetalert2";
import axios from "axios";

export const CartContext = createContext()

const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 2000, 
  });

 
 
const CartProvider = ({children}) => {

    const [products, setProducts] = useState(()=>{
        try {
            const productosLocalStorage = localStorage.getItem('cartProducts')
            return productosLocalStorage ? JSON.parse(productosLocalStorage) : []
        } catch (error) {
            return []
        }
    })

    //console.log(products)

    useEffect(()=>{
        localStorage.setItem('cartProducts', JSON.stringify(products))
        //console.log(products)
        // console.log("products: ", products);
        const login = localStorage.getItem('login');
        const email = window.atob(localStorage.getItem('email'));
        const cartProductArray = localStorage.getItem('cartProducts');
        // console.log("login: ", login, ", email: ", email, ", cartProductArray: ", cartProductArray)
        if(login && email){
            (async() => {
                const response = axios.post("http://localhost:3001/changeCart", {email, cartProductArray})
                .then((res)=> res.data)
                .catch(e=>console.log(e))
                const ress = await Promise.all([response]);
                console.log("ress: ", ress);
            })()
        }
    }, [products])


    const addProductsToCart = (...product) =>{
        const inCart = products.find(p=>p.id===product.id) // devuelve el valor que coincida // si no coincide, undefined
        console.log("products: ", products) //productos en el carrito
        console.log("inCart: ", inCart); // porducto que se quiere agregar y que ya esta en el carrito
        console.log("product: ", product); //producto a agregar
        if(inCart){ // si hay algo
            setProducts(products.map(p=>{ // por cada producto en el carrito
                if(p.id===product.id){
                    return {...inCart, amount: inCart.amount+1}
                } else return p
            }))
        }        
        else{
            setProducts([...products, {...product, amount:1}])
        }
        Toast.fire({
            icon: "success",
            title: "Added to cart!",
          });
    }

    const addProductToCart= product=>{
        const inCart = products.find(p=>p.id===product.id)
        console.log("inCart: ", inCart)
        if(inCart){
            setProducts(products.map(p=>{
                if(p.id===product.id){
                    return {...inCart, amount: inCart.amount+1}
                } else return p
            }))
        }        else{
            setProducts([...products, {...product, amount:1}])
        }
        Toast.fire({
            icon: "success",
            title: "Added to cart!",
          });
    }

    const deleteProductCart = (product) =>{
        
     
            const inCart = products.find(p=>p.id===product.id)

            if(inCart.amount===1){
                setProducts(products.filter(p=>p.id!==product.id))
            }
            if(inCart.amount>1){
                setProducts(products.map(p=>{
                    if(p.id===product.id){
                       return {...inCart, amount:inCart.amount-1}
                    } return p
                }))
            }
            
         
            Toast.fire({
              icon: "error",
              title: "Removed one to cart!",
            });
        
    }

    const deleteProduct = product => {
        const inCart = products.find(p=>p.id===product.id)

            if(inCart.amount){
                setProducts(products.filter(p=>p.id!==product.id))
            }
           
            Toast.fire({
                icon: "error",
                title: "Removed all to cart!",
              });
    }

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

    const resetProductCart = ()=>{
        setProducts([])

    }



    return (

        <CartContext.Provider value={{products, addProductsToCart, addProductToCart,deleteProductCart,deleteProduct, resetProductCart, setProducts}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider