import axios from "axios";

export async function CrearComentarioReview(Username, ArrayProduct, idCompra) {
  for (let i = 0; i < ArrayProduct.length; i++) {
    const idProduct = Number(ArrayProduct[i]);
    await axios({
      method: "post",
      url: "https://proyecto-grupal-rgb.herokuapp.com/NewReview",
      data: { Username, idProduct, idCompra }, // email
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
    });
  }
}
