import React, {useState} from 'react';
import {PayPalButtons} from "@paypal/react-paypal-js";


export default function PaypalButton() {

    let product = localStorage.getItem("cartProducts") 
    product = JSON.parse(product);
    console.log("array product: ", product);
    console.log(product[0].description);
    console.log(product[0].price/100);
/* 
[{
    amount: 1
    brand: "ASUS"
    category: ['Motherboard']
    compatibilityBrands: "Intel"
    ddr: 4
    description: "ASUS TUF GAMING Z590-PLUS WIFI takes all the essential elements of the latest Intel® processors and combines them with game-ready features and proven durability. Engineered with military-grade components, an upgraded power solution and a comprehensive cooling system, this motherboard offers rock-solid, stable performance for marathon gaming. Aesthetically, TUF GAMING Z590-PLUS WIFI sports the new TUF Gaming logo, and incorporates simple geometric design elements to reflect the dependability and stability that defines the TUF Gaming series."
    dimensions: "338 mm x 273 mm"
    factorMother: "ATX"
    id: 2
    image: (4) ['https://m.media-amazon.com/images/I/81wO3L69TSL._AC_SL1500_.jpg', 'https://http2.mlstatic.com/D_NQ_NP_818050-MLA48417753622_122021-O.webp', 'https://http2.mlstatic.com/D_NQ_NP_791666-MLA48417688966_122021-O.webp', 'https://http2.mlstatic.com/D_NQ_NP_778509-MLA48417800143_122021-O.webp']
    inOffer: false
    name: "ASUS TUF Gaming Z590-Plus WIFI"
    percentageDiscount: 0
    price: 195
    socket: "LGA1200"
    stock: 12
    wattsPowerSupply: null
    weight: null
}] 
*/

const [paidFor, setPaidFor] = useState(false);
const [error, setError] = useState(null);

const handleApprove = (orderID) => {
    //Call backend function to fullfill the order

    //if response is success
    setPaidFor(true);
    // Refresh user's account

    //if response is error
    //alert user with message // setError
};

if (paidFor){
    //display a success message and redirect user to home "/"
    alert("Thank you for your purchase")
}

if(error){
    //Display error message and redirect user to wherever i want
    alert(error);
}

  return (
    <div>
        holi
    <PayPalButtons
/*         onClick={(data, actions) => {
            //validate on button click
        }} */
        createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units: [
                    {
                        description: product[0].description,
                        amount:{
                            value: product[0].price/100 //1.95
                        }
                    }
                ]
            })
        }}
        onApprove = {async(data, actions) => {
            const order = await actions.order.capture()
            console.log("order: ", order)

            handleApprove(data.orderID);
        }}
        onCancel = {() => { // sucede si el usuario cancela el checkout
            // Display cancel message and redirect the user to cart or checkout page
        }} 
        onError = {(err) => {
            setError(err);
            console.log("Error: ", err)
        }}
    />
    </div>
  )
}
