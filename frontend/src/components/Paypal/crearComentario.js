import axios from "axios";

export async function CrearComentarioReview(Username, ArrayProduct, idCompra) {
  for (let i = 0; i < ArrayProduct.length; i++) {
    const idProduct = Number(ArrayProduct[i]);
    const PATH = 'https://rgb-store.herokuapp.com/'
    await axios({
      method: "post",
      url: `${PATH}/NewReview`,
      data: { Username, idProduct, idCompra }, // email
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
    });
  }
}
