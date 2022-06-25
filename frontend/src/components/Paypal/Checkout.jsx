import React, { useRef } from 'react';
import { useEffect } from 'react';


export default function Checkout() {

    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => { //funcion que crea ordenes
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Cool looking table",
                            amout: {
                                currency_code: "USD", 
                                value: 650.00
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => { // si se aprueba la compra 
                const order = await actions.order.capture()
                console.log(order) 
            },
            onError: (err) => { // si no se aprueba
                console.log(err)
            }
        }).render(paypal.current)
    }, [])

  return (
    <div>
        <div ref = {paypal}></div>
    </div>
  )
}
