import React from "react";
import { useState } from "react";
import Checkout from "./Checkout";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import PaypalButton from "./PaypalButton";
import { useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

export default function CheckoutPaypal() {
  // const [checkout, setCheckout] = useState(false); // al ser true se va a la pagina de paypal
  const navigate = useNavigate();

  // let createOrder = (data, actions) => {
  //     return actions.order.create({
  //       purchase_units: [{
  //         amount: {
  //           currency_code: "USD",
  //           value: '77.44', // Can also reference a variable or function
  //           breakdown: {
  //               item_total: { // Required when including the "items" array !!!!
  //                   currency_code: "USD",
  //                   value: '77.44'
  //               }
  //           }
  //         },
  //         items: [
  //           {
  //             name: "First Product Name", /* Shows within upper-right dropdown during payment approval */
  //             description: "Optional descriptive text..", /* Item details will also be in the completed paypal.com transaction view */
  //             unit_amount: {
  //               currency_code: "USD",
  //               value: "50"
  //             },
  //             quantity: "2"
  //           },
  //         ]
  //       }]
  //     });
  //   }

  // let onApprove = (data, actions) => {
  //     return actions.order.capture().then(function(orderData) {
  //       // Successful capture! For dev/demo purposes:
  //       console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
  //       const transaction = orderData.purchase_units[0].payments.captures[0];
  //       alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
  //       // When ready to go live, remove the alert and show a success message within this page. For example:
  //       // const element = document.getElementById('paypal-button-container');
  //       // element.innerHTML = '<h3>Thank you for your payment!</h3>';
  //       // Or go to another URL:  actions.redirect('thank_you.html');
  //     });
  //   }

  let handleOnClick = async (e) => {
    e.preventDefault();
    // Login true -> paypal / login false -> redirige a login
    // console.log("ACAAAA: ",localStorage.getItem("cartProducts"))
    let product = localStorage.getItem("cartProducts");
    product = JSON.parse(product);
    product = product.map((el) => {
      return { id: el.id, amount: el.amount };
    });

    const Stock = await axios({
      method: "post",
      url: "https://proyecto-grupal-rgb.herokuapp.com/VerifyStock",
      data: product,
      // headers: { "X-Requested-With": "XMLHttpRequest" },
      // withCredentials: true,
    })
      .then((e) => e.data)
      .catch((e) => console.log(e));
      
    if (Stock === "Success") {
      if (
        localStorage.getItem("login") &&
        localStorage.getItem("cartProducts").length > 2
      ) {
        // return setCheckout(true)
        navigate("/paypal");
      } else if (localStorage.getItem("login")) {
        alert("No hay productos en el carrito");
        navigate("/");
      } else {
        alert(`No puedes comprar sin haber iniciado sesison
      
            ...redirigiendo a inicio de sesion`);
        navigate("/logIn");
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "No Stock",
        text: `${Stock}`,
        // footer: '<a href="">Why do I have this issue?</a>'
      });
    }
  };

  return (
    <div>
      <button onClick={(e) => handleOnClick(e)}>Checkout</button>
    </div>
  );
}
