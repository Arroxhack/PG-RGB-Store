import axios from "axios";
import { useContext, useState } from "react";
import { CartContext } from "../Cart/CartContext";
import { useDispatch } from "react-redux";
import { BiLogOut } from "react-icons/bi";

export default function Logout() {
  const [actualizar, setActualizar] = useState("");
  const { products } = useContext(CartContext); //CartContext estado global // products array con prodcucts con amount
  const dispatch = useDispatch();

  function onClick(e) {
    e.preventDefault();
    // dispatch(postCart(products))

    // axios.post("/rutaParaAgregarCarritoAUsuario", )

    axios({
      method: "post",
      url: "https://proyecto-grupal-rgb.herokuapp.com/logout",
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
          return (window.location = "http://localhost:3000/");
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="flex items-center py-2">
      <button onClick={(e) => onClick(e)}>
        <BiLogOut className="h-4 w-4 md:h-12 md:w-14  text-primary-400 lg:hidden " />
      </button>
      <span
        onClick={(e) => onClick(e)}
        className="text-base text-primary buttom"
      >
        Log Out
      </span>
    </div>
  );
}
