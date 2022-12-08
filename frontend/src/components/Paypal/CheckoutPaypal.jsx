import React from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

export default function CheckoutPaypal() {
  const navigate = useNavigate();

  const PATH = 'https://pg-rgb-store-backend-production.up.railway.app'

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

    let product = localStorage.getItem("cartProducts");
    product = JSON.parse(product);
    product = product.map((el) => {
      return { id: el.id, amount: el.amount };
    });

    // console.log(product, "ACAAA");

    const Stock = await axios({ // devuelve un string con Success o un string con los nombres de los productos que no tienen stock
      method: "post",
      url: `${PATH}/VerifyStock`,
      data: product // {id, amount}
    })
      .then((e) => e.data) 
      .catch((e) => console.log(e));
      
    if (Stock === "Success") {
      if (
        localStorage.getItem("login") &&
        localStorage.getItem("cartProducts").length > 2
      ) {
        navigate("/paypal");
      } else if (localStorage.getItem("login")) {
        Swal.fire({
            icon: 'error',
            title: 'Something went wrong',
            html: 
            'There are no products inside the cart' +
            '<br/>' +
            '<br/>' +
            'Redirecting to home page' 
          })
        navigate("/");
      } else {
        Swal.fire({
            icon: 'error',
            title: 'Something went wrong',
            html: 
            'You can not buy without login in' +
            '<br/>' +
            '<br/>' +
            'Redirecting to login page' 
          })
        navigate("/logIn");
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "No Stock",
        text: `${Stock}`,
      });
    }
  };

  return (
    <div>
      <button onClick={(e) => handleOnClick(e)}>Checkout</button>
    </div>
  );
}
