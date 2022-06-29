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

let createOrder = (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              currency_code: "USD",
              value: '77.44', // Can also reference a variable or function
              breakdown: {
                  item_total: { // Required when including the "items" array !!!!
                      currency_code: "USD",
                      value: '77.44'
                  }
              }
            },
            items: [
              {
                name: "First Product Name", /* Shows within upper-right dropdown during payment approval */
                description: "Optional descriptive text..", /* Item details will also be in the completed paypal.com transaction view */
                unit_amount: {
                  currency_code: "USD",
                  value: "50"
                },
                quantity: "2"
              },
            ]
          }]
        });
      }
      
    let onApprove = (data, actions) => {
        return actions.order.capture().then(function(orderData) {
          // Successful capture! For dev/demo purposes:
          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
          const transaction = orderData.purchase_units[0].payments.captures[0];
          alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
          // When ready to go live, remove the alert and show a success message within this page. For example:
          // const element = document.getElementById('paypal-button-container');
          // element.innerHTML = '<h3>Thank you for your payment!</h3>';
          // Or go to another URL:  actions.redirect('thank_you.html');
        });
      } 



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

// if (paidFor){
//     //display a success message and redirect user to home "/"
//     alert("Thank you for your purchase")
// }

// if(error){
//     //Display error message and redirect user to wherever i want
//     alert(error);
// }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "500px"}}> 
    <PayPalButtons style={{width: 200}}
/*         onClick={(data, actions) => {
            //validate on button click
        }} */
        createOrder={ createOrder /* (data, actions) => {
            return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [
                    {
                        description: product[0].description,
                        amount:{
                            currency_code: "USD",
                            value:  "2"// product[0].price/100, //1.95
                            // breakdown: {
                            //     item_total: { // Required when including the "items" array !!!!
                            //         currency_code: "USD",
                            //         value: '2'
                            //     }
                            // }
                        }
                    }
                ]
            })
        } */}
        onApprove = {onApprove/* async(data, actions) => {
            const order = await actions.order.capture()
            console.log(order)

            // handleApprove(data.orderID);
        } */}
        onCancel = {() => { // sucede si el usuario cancela el checkout
            // Display cancel message and redirect the user to cart or checkout page
        }} 
        onError = {(err) => {
            setError(err)
            console.log("Error: ", err)
        }}
    />
    </div>
  )
}
