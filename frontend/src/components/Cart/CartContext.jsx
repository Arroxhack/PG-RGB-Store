import { createContext,useEffect, useState } from "react"

export const CartContext = createContext()

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

    }

    const deleteProductCart = product =>{
        
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
        
    }

    const deleteProduct = product => {
        const inCart = products.find(p=>p.id===product.id)

            if(inCart.amount===0){
                setProducts(products.filter(p=>p.id!==product.id))
            }
            if(inCart.amount>=1){
                setProducts(products.map(p=>{
                    if(p.id===product.id){
                       return {...inCart, amount: inCart.amount - inCart.amount}
                    } return p
                }))
            }
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