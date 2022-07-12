import axios from "axios";
export async function givePoints(username, ArrayProducts) {

  const PATH = 'http://localhost:3001'

  // CORREGIR LINEA 29

  let totalMount = 0;
  console.log(ArrayProducts);
  for (let x in ArrayProducts) {
    let quantity = Number(ArrayProducts[x].cant);
    let amount = Number(ArrayProducts[x].price);
    totalMount += quantity * amount;
  }
  const result = await axios({
    method: "put",
    url: `${PATH}/givePoint`,
    data: { username, totalMount }, // email
    headers: { "X-Requested-With": "XMLHttpRequest" },
    withCredentials: true,
  }).then((e) => e.data);

  return result;
}

export async function takePoints(username, totaltake) {
  await axios({
    method: "put",
    url: "http://localhost:3001/takepoints",
    data: { username, totaltake }, // email
    headers: { "X-Requested-With": "XMLHttpRequest" },
    withCredentials: true,
  }).then((e) => e.data);
}
