import axios from "axios";
export async function postHistory(id, idUser, products) {

  const PATH = 'https://pg-rgb-store-backend-production.up.railway.app'

  const result = await axios({
    method: "post",
    url: `${PATH}/post-purchase`,
    data: { id, idUser, products }, // email
    headers: { "X-Requested-With": "XMLHttpRequest" },
    withCredentials: true,
  }).then((e) => e.data);

  return result;
}
