import axios from "axios";
export async function givePoints(username, ArrayProducts) {
  let totalMount = 0;
  console.log(ArrayProducts);
  for (let x in ArrayProducts) {
    let quantity = Number(ArrayProducts[x].cant);
    let amount = Number(ArrayProducts[x].price);
    totalMount += quantity * amount;
  }
  const result = await axios({
    method: "put",
    url: "http://localhost:3001/givePoint",
    data: { username, totalMount }, // email
    headers: { "X-Requested-With": "XMLHttpRequest" },
    withCredentials: true,
  }).then((e) => e.data);

  return result;
}
