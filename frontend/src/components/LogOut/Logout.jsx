import axios from "axios";
import { useContext, useState } from "react";
import { CartContext } from "../Cart/CartContext";
import { useDispatch } from "react-redux";
import { BiLogOut } from "react-icons/bi";

export default function Logout() {
  const [actualizar, setActualizar] = useState("");
  const { products } = useContext(CartContext); //CartContext estado global // products array con prodcucts con amount
  const dispatch = useDispatch();

  const PATH = 'https://pg-rgb-store-backend-production.up.railway.app'

  function onClick(e) {
    e.preventDefault();
    // dispatch(postCart(products))

    // axios.post("/rutaParaAgregarCarritoAUsuario", )

    axios({
      method: "post",
      url: `${PATH}/logout`,
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
    })
      .then((res) => {
        if (res) {
          console.log(res.data, "-> respuesta del post de logout");
          // localStorage.removeItem("token");
          // localStorage.removeItem('userId');
          // localStorage.removeItem('name');
          // localStorage.removeItem('type');
          // localStorage.removeItem('avatar');
          localStorage.clear();
          setActualizar(" ");
          return (window.location = "../");
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="flex items-center py-2">
      <button onClick={(e) => onClick(e)}>
        <BiLogOut className="h-4 w-4 md:h-10 md:w-8  text-primary-400 lg:hidden " />
      </button>
      <span
        onClick={(e) => onClick(e)}
        className="lg:text-base md:text-2xl md:ml-2 text-primary buttom lg:w-18 lg:mr-2 "
      >
        Log Out
      </span>
    </div>
  );
}
