import React from "react";
import ReactDOM from "react-dom";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Swal from "sweetalert2";
import axios from "axios";
import { CrearComentarioReview } from "./crearComentario";
import { useNavigate } from "react-router-dom";

export default function Pagando() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  console.log(username);
  let product = localStorage.getItem("cartProducts");
  let productJSON = JSON.parse(product);

  let articulos = productJSON.map((e) => {
    return {
      name: e.name,
      description: e.category[0] + "-" + e.id,
      unit_amount: {
        currency_code: "USD",
        value: e.price + "", //aca
      },
      quantity: e.amount,
    };
  });

  let PrecioTotalArticulos =
    articulos[0].unit_amount.value * articulos[0].quantity;

  let multiplicacionEntreValueYQuantity = articulos.map((e) => {
    return e.unit_amount.value * e.quantity;
  });

  if (articulos.length > 1) {
    PrecioTotalArticulos = multiplicacionEntreValueYQuantity.reduce(
      (prev, current) => {
        return prev + current;
      }
    );
  }
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          reference_id: "PUHF",
          description: "Sporting Goods",

          custom_id: "CUST-HighFashions",
          soft_descriptor: "HighFashions",
          amount: {
            currency_code: "USD",
            value: PrecioTotalArticulos.toFixed(2), //value: "230.00"
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: PrecioTotalArticulos.toFixed(2), //value: "180.00"
              },
              // shipping: {
              //     currency_code: "USD",
              //     value: "30.00"
              // },
              // handling: {
              //     currency_code: "USD",
              //     value: "10.00"
              // },
              // tax_total: {
              //     currency_code: "USD",
              //     value: "20.00"
              // },
              // shipping_discount: {
              //     currency_code: "USD",
              //     value: "10"
              // }
            },
          },
          items: articulos /* [{
                name: "T-Shirt", //aca
                description: "Green XL", //aca
                sku: "sku01",
                unit_amount: {
                     currency_code: "USD",
                     value: "90.00" //aca
                },
                tax: {
                    currency_code: "USD",
                    value: "10.00"
                },
                quantity: "1", //aca
                category: "PHYSICAL_GOODS"
            },
                {
                name: "Shoes",
                description: "Running, Size 10.5",
                sku: "sku02",
                unit_amount: {
                     currency_code: "USD",
                     value: "45.00"
                },
                tax: {
                    currency_code: "USD",
                    value: "5.00"
                },
                quantity: "2",
                category: "PHYSICAL_GOODS"
            }] */,
          shipping: {
            method: "United States Postal Service",
            address: {
              name: {
                full_name: "John",
                surname: "Doe",
              },
              address_line_1: "123 Townsend St",
              address_line_2: "Floor 6",
              admin_area_2: "San Francisco",
              admin_area_1: "CA",
              postal_code: "94107",
              country_code: "US",
            },
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(async function (detalles) {
      // en detalles esta todo lo que pasa en nuestro pago en un objeto
      const arregloSoloId = detalles.purchase_units[0].items.map((e) => {
        let id = e.description.split("-")[1];
        return id;
      });
      console.log(arregloSoloId, "ARREGLO ID");
      console.log(username, "USUARIO");
      console.log("idCompra", detalles.id);
      await CrearComentarioReview(username, arregloSoloId, detalles.id);
      Swal.fire({
        icon: "success",
        title: "Payment Successful!",
        html:
          `Payer: ${detalles.payer.name.given_name} ${detalles.payer.name.surname}` +
          "</br>" +
          "</br>" +
          `Amount paid: ${detalles.purchase_units[0].amount.value} USD` +
          "</br>" +
          "</br>" +
          `Transaction number: ${detalles.id}`,
        // text: `Transaction number: ${detalles.id}`,
        // text: `Amount paid: ${detalles.purchase_units[0].amount.value}`
        // footer: '<a href="">Why do I have this issue?</a>'
      });

      let arregloObjetosIdQuantity = detalles.purchase_units[0].items.map(
        (e) => {
          let id = e.description.split("-")[1];
          return { id: id, amount: e.quantity };
        }
      );
      console.log("arregloObjetosIdQuantity: ", arregloObjetosIdQuantity);

      let products = arregloObjetosIdQuantity;

      // console.log("products: ", JSON.stringify(products));

      // axios.put(`http://localhost:3001/remove`, products) // "correctly edit"// "warning negative stock"// "failed on edit"
      //     .then((response) => console.log(response.data))
      //     .catch((err) => console.log(err))

      const prueba = await axios({
        method: "put",
        url: "https://proyecto-grupal-rgb.herokuapp.com/remove",
        data: products,
        // headers: { "X-Requested-With": "XMLHttpRequest" },
        // withCredentials: true,
      })
        .then((e) => e.data)
        .catch((e) => console.log(e));
      navigate("/");
    });
  };

  //   {id: '6DX94897RC997852V', intent: 'CAPTURE', status: 'COMPLETED', purchase_units: Array(1), payer: {…}, …}
  //   create_time: "2022-06-29T17:22:02Z"
  //   id: "6DX94897RC997852V"
  //   intent: "CAPTURE"
  //   links: [{…}]
  //   payer: {name: {…}, email_address: 'sb-471yzp17341676@personal.example.com', payer_id: '39FW54JMV78TL', address: {…}}
  //   purchase_units: [{…}]
  //   status: "COMPLETED"
  //   update_time: "2022-06-29T17:22:20Z"

  const style = {
    layout: "vertical",
    color: "gold",
    shape: "pill",
    label: "pay",
  };

  const onCancel = (data) => {
    // en data hay un order id que es un objeto {orderID: '6V920429E17498936'}
    console.log(data);
    Swal.fire({
      icon: "error",
      title: "Payment Cancelled",
      text: "Your payment has been cancelled and will not be charged",
      // footer: '<a href="">Why do I have this issue?</a>'
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
        onCancel={onCancel}
        style={style}
      />
    </div>
  );
}
