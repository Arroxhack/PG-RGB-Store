import axios from "axios";

export async function SendReview(username, ArrayProduct, idCompra) {
  const PATH = 'https://pg-rgb-store-backend-production.up.railway.app'

  let products = [];
  let precioTotal = 0;
  for (let n in ArrayProduct) {
    products.push(
      ArrayProduct[n].name +
        " / " +
        `QUANTITY: ${ArrayProduct[n].cant}` +
        " / " +
        " PRICE: " +
        ArrayProduct[n].price
    );
    precioTotal += ArrayProduct[n].price * ArrayProduct[n].cant;
  }
  await axios({
    method: "post",
    url: `${PATH}/SendEmailProducts`,
    data: { username, products, precioTotal, idCompra }, // email
    headers: { "X-Requested-With": "XMLHttpRequest" },
    withCredentials: true,
  });
}
