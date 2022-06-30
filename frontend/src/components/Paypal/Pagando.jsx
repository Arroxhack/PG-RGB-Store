import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import {PayPalButtons} from "@paypal/react-paypal-js";


export default function Pagando() {

    let product = localStorage.getItem("cartProducts"); 
    let productJSON = JSON.parse(product);
    console.log("Primer producto del carrito: ", productJSON);
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
    })
    console.log("Mis articulos: ", articulos)
  
    let PrecioTotalArticulos = productJSON.reduce((prev, current) => {
        return prev.price*prev.amount + current.price*current.amount +""
    })
 
   
    console.log("PrecioTotalArticulos: ", PrecioTotalArticulos)

//[
    // {
    //     amount: 1
    //     brand: "ASUS"
    //     category: ['Motherboard']
    //     compatibilityBrands: "Intel"
    //     ddr: 4
    //     description: "ASUS TUF GAMING Z590-PLUS WIFI takes all the essential elements of the latest Intel® processors and combines them with game-ready features and proven durability. Engineered with military-grade components, an upgraded power solution and a comprehensive cooling system, this motherboard offers rock-solid, stable performance for marathon gaming. Aesthetically, TUF GAMING Z590-PLUS WIFI sports the new TUF Gaming logo, and incorporates simple geometric design elements to reflect the dependability and stability that defines the TUF Gaming series."
    //     dimensions: "338 mm x 273 mm"
    //     factorMother: "ATX"
    //     id: 2
    //     image: (4) ['https://m.media-amazon.com/images/I/81wO3L69TSL._AC_SL1500_.jpg', 'https://http2.mlstatic.com/D_NQ_NP_818050-MLA48417753622_122021-O.webp', 'https://http2.mlstatic.com/D_NQ_NP_791666-MLA48417688966_122021-O.webp', 'https://http2.mlstatic.com/D_NQ_NP_778509-MLA48417800143_122021-O.webp']
    //     inOffer: false
    //     name: "ASUS TUF Gaming Z590-Plus WIFI"
    //     percentageDiscount: 0
    //     price: 195
    //     socket: "LGA1200"
    //     stock: 12
    //     wattsPowerSupply: null
    //     weight: null
    // },
    // {
    //     amount: 1
    //     brand: "ASUS"
    //     category: ["Motherboard"]
    //     compatibilityBrands: "Intel"
    //     ddr: 4
    //     description: "ASUS TUF GAMING Z590-PLUS WIFI takes all the essential elements of the latest Intel® processors and combines them with game-ready features and proven durability. Engineered with military-grade components, an upgraded power solution and a comprehensive cooling system, this motherboard offers rock-solid, stable performance for marathon gaming. Aesthetically, TUF GAMING Z590-PLUS WIFI sports the new TUF Gaming logo, and incorporates simple geometric design elements to reflect the dependability and stability that defines the TUF Gaming series."
    //     dimensions: "338 mm x 273 mm"
    //     factorMother: "ATX"
    //     id: 2
    //     image: ["https://m.media-amazon.com/images/I/81wO3L69TSL._AC_SL1500_.jpg",…]
    //     inOffer: false
    //     name: "ASUS TUF Gaming Z590-Plus WIFI"
    //     percentageDiscount: 0
    //     price: 195
    //     socket: "LGA1200"
    //     stock: 12
    //     wattsPowerSupply: null
    //     weight: null
    // }
//]

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
  }
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