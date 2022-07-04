import { createContext,useEffect, useState } from "react"
import Swal from "sweetalert2";

export const FavoritoContext = createContext()

const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 2000, 
  });

 
 
const FavoritoProvider = ({children}) => {

    const [products, setProducts] = useState(()=>{
        try {
            const productosLocalStorage = localStorage.getItem('favProducts')
            return productosLocalStorage ? JSON.parse(productosLocalStorage) : []
        } catch (error) {
            return []
        }
    })

    //console.log(products)

    useEffect(()=>{
        localStorage.setItem('favProducts', JSON.stringify(products))
        //console.log(products)
    }, [products])

    const addProductToFav= product=>{
        //const inFav = products.find(p=>p.id===product.id)
            setProducts({product})

            Toast.fire({
                icon: "success",
                title: "Added of fav!",
            });
    }

    const deleteProductFav = (product) =>{
        
     
            //const inFav = products.find(p=>p.id===product.id)
            setProducts(products.filter(p=>p.id!==product.id))
            // if(inFav.amount===1){
            //     setProducts(products.filter(p=>p.id!==product.id))
            // }
            // if(inFav.amount>1){
            //     setProducts(products.map(p=>{
            //         if(p.id===product.id){
            //            return {...inFav, amount:inFav.amount-1}
            //         } return p
            //     }))
            // }
            
         
            Toast.fire({
              icon: "error",
              title: "Removed of Fav!",
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

    const resetProductFav = ()=>{
        setProducts([])

    }



    return (

        <FavoritoContext.Provider value={{products, addProductToFav,deleteProductFav, resetProductFav}}>
            {children}
        </FavoritoContext.Provider>
    )
}

export default FavoritoProvider