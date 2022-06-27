import React from 'react'
import { useState } from 'react'
import Checkout from './Checkout';
import {PayPalButtons, usePayPalScriptReducer} from "@paypal/react-paypal-js";

export default function Paypal() {
    const [checkout, setCheckout] = useState(false); // al ser true se va a la pagina de checkout
    // console.log("PayPalButtons: ",PayPalButtons)

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

  return (
    <div >
        {checkout ? <Checkout/>
        : <button onClick={() => {setCheckout(true)}}>Checkout {/* al presionar este boton queremos ir a la pagina de pago, o sea de checkout */}</button>}
        {/* <PayPalButtons
           style={{ layout: "vertical" }}
           createOrder={createOrder}
           onApprove = {onApprove}
         /> */}
    </div>
  )
}







