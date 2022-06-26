import React, { useRef } from 'react';
import { useEffect } from 'react';


export default function Checkout() {

    const paypal = useRef();

    
    useEffect(() => {
        window.paypal.Buttons({
            // Sets up the transaction when a payment button is clicked
            createOrder: (data, actions) => {
              return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [{
                  amount: {
                    currency_code: "USD",
                    value: '2', // Can also reference a variable or function
                    breakdown: {
                        item_total: { // Required when including the "items" array !!!!
                            currency_code: "USD",
                            value: '2'
                        }
                    }
                  },
                //   description: "teclado de pc"
                  items: [
                    {
                        name: "Item1", /* Shows within upper-right dropdown during payment approval */
                        description: "Item1 genial", /* Item details will also be in the completed paypal.com transaction view */
                        unit_amount: {
                        currency_code: "USD",
                        value: "1"
                        },
                        quantity: "1"
                    },
                    {
                        name: "Item2", /* Shows within upper-right dropdown during payment approval */
                        description: "Item2 muy bueno", /* Item details will also be in the completed paypal.com transaction view */
                        unit_amount: {
                            currency_code: "USD",
                            value: "1"
                        },
                        quantity: "1"
                    },
                  ]
                }],
              });
            },
            // Finalize the transaction after payer approval
            onApprove: (data, actions) => {
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
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    }, [])

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "500px"}}>
        <div style={{width: 200}} ref = {paypal}></div>
    </div>
  )
}
