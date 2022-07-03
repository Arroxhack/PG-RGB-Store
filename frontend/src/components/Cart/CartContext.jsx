import { createContext,useEffect, useState } from "react"
import Swal from "sweetalert2";

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
    }, [products])

    const addProductToCart= product=>{
        const inCart = products.find(p=>p.id===product.id)

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
            title: "Added one to cart!",
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

        <CartContext.Provider value={{products, addProductToCart,deleteProductCart,deleteProduct, resetProductCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider