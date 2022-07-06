import axios from "axios";

export async function SendReview(username, ArrayProduct, idCompra) {
  let products = [];
  let precioTotal = 0;
  for (let n in ArrayProduct) {
    products.push(
      ArrayProduct[n].name +
        " " +
        `quantity : ${ArrayProduct[n].cant}` +
        " " +
        ArrayProduct[n].price
    );
    precioTotal += ArrayProduct[n].price * ArrayProduct[n].cant;
  }
  await axios({
    method: "post",
    url: "http://localhost:3001/SendEmailProducts",
    data: { username, products, precioTotal, idCompra }, // email
    headers: { "X-Requested-With": "XMLHttpRequest" },
    withCredentials: true,
  });
}
