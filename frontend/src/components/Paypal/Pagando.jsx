import React from "react";
import ReactDOM from "react-dom";
import {PayPalButtons} from "@paypal/react-paypal-js";


export default function Pagando() {

    let product = localStorage.getItem("cartProducts"); 
    let productJSON = JSON.parse(product);
    
    console.log("Productos completos del carrito: ", productJSON);

    let articulos = productJSON.map(e => {
     return {
            name: e.name,
            description: e.category[0],
            unit_amount: {
                currency_code: "USD",
                value: e.price+"" //aca
           },
           quantity: e.amount
        }
    });
    console.log("Mis articulos: ", articulos);
    console.log("Mis articulos.length: ", articulos.length);

    let PrecioTotalArticulos = articulos[0].unit_amount.value * articulos[0].quantity;
    
    if(articulos.length > 1){
        PrecioTotalArticulos = productJSON.reduce((prev, current) => {
            return prev.price*prev.amount + current.price*current.amount +""
        })
    };    
    console.log("PrecioTotalArticulos: ", PrecioTotalArticulos);


  const createOrder = (data, actions) => {
    return actions.order.create({
        purchase_units: [{
            reference_id: "PUHF",
            description: "Sporting Goods",

            custom_id: "CUST-HighFashions",
            soft_descriptor: "HighFashions",
            amount: {
                currency_code: "USD",
                value: PrecioTotalArticulos, //value: "230.00"
                breakdown: {
                    item_total: {
                        currency_code: "USD",
                        value: PrecioTotalArticulos//value: "180.00"
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
                }
            },
            items: articulos/* [{
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
                        surname: "Doe"
                    },
                    address_line_1: "123 Townsend St",
                    address_line_2: "Floor 6",
                    admin_area_2: "San Francisco",
                    admin_area_1: "CA",
                    postal_code: "94107",
                    country_code: "US"
                }
            }
        }]
    })
  };

  const onApprove = (data, actions) => { 
    return actions.order.capture().then(function (detalles) { // en detalles esta todo lo que pasa en nuestro pago en un objeto
        console.log(detalles)
    })
  };

  const style = {
    layout: 'vertical',
    color:  'gold',
    shape:  'pill',
    label:  'pay',
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

  const onCancel = (data) => {  // en data hay un order id que es un objeto {orderID: '6V920429E17498936'}
    console.log(data)
  };

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "300px"}}>
    <PayPalButtons
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
      onCancel={onCancel}
      style={style}
    />
    </div>
  );
}