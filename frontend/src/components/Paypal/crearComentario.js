import axios from "axios";

export async function  CrearComentarioReview(idUser,idProduct,idCompra){
    const result =  await axios({
        method: "post",
        url: "http://localhost:3001/NewReview",
        data: {idUser,idProduct,idCompra }, // email
        headers: { "X-Requested-With": "XMLHttpRequest" },
        withCredentials: true,
      });
      if (result[0] === "E" && result[1] === "r" && result[2] === "r"){
        return "Error imprevisto";
      } 
      return  "Done";
}