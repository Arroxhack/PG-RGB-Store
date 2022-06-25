import React from 'react'
import { useState } from 'react'
import Checkout from './Checkout';

export default function Paypal() {
    const [checkout, setCheckout] = useState(false); // al ser true se va a la pagina de checkout

  return (
    <div >
        {checkout ? <Checkout/>
        : <button onClick={() => {setCheckout(true)}}>Checkout {/* al presionar este boton queremos ir a la pagina de pago, o sea de checkout */}</button>}
    </div>
  )
}
