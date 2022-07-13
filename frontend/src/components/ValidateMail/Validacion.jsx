import React, { useContext} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { CartContext } from "../Cart/CartContext";
import NavBar from '../NavBar/NavBar'

export default function Validations() {

  const PATH = 'https://rgb-store.herokuapp.com/'

  const { setProducts, products } = useContext(CartContext);
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  let { username } = useParams();
  const cartProductArray = localStorage.getItem("cartProducts");

  async function HandleSubmit(e) {
    e.preventDefault();
    const UserRegister = await axios({
      method: "put",
      url: `${PATH}/register/verify`,
      data: { token, username },
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
    })
      .then((e) => e.data)
      .catch((e) => console.log(e));

    if (
      UserRegister[0] === "E" &&
      UserRegister[1] === "r" &&
      UserRegister[2] === "r"
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${UserRegister}`,
        button: "Aceptar",
      });
    } else {
      Swal.fire({
        icon: "succes",
        title: "Exito",
        text: `Verificacion Completa`,
        button: "Aceptar",
      });
      let { lastname, verify, username, email, permissions, name, id } =
        UserRegister.user;
      console.log("UserRegister: ", UserRegister);
      if (UserRegister.validate && email) {
        const response = await axios({
          //La ruta trae toda la info en la base de datos de un usuario
          method: "post",
          url: `${PATH}/userCart`,
          data: { email, cartProductArray }, //
          headers: { "X-Requested-With": "XMLHttpRequest" },
          withCredentials: true,
        })
          .then((res) => res.data)
          .catch((e) => console.log(e));

        const ress = await Promise.all([response]);
        console.log("ress: ", ress);

        try {
          const carritoDb = await axios.get(
            `${PATH}/userCart?email=${email}`
          );
          let carritoDbData = carritoDb.data.filter((e) => e.id);
          console.log("carritoDbData: ", carritoDbData);
          setProducts([...carritoDbData]);
          // localStorage.setItem("cartProducts", JSON.stringify(carritoDbData))
        } catch (error) {
          console.log(error);
        }
      }
      //Seteo lo que trajo la ruta al localstorage
      localStorage.setItem("username", window.btoa(username));
      localStorage.setItem("name", window.btoa(name));
      localStorage.setItem("lastname", window.btoa(lastname));
      localStorage.setItem("login", true);
      localStorage.setItem("email", window.btoa(email));
      localStorage.setItem("id", window.btoa(id));
      if (permissions === true) {
        localStorage.setItem("admin", permissions);
      }
      navigate("/");
    }
  }
  function deshabilitar_btnEnviar() {
    setTimeout(function () {
      document.getElementById("enviar").innerHTML = "Re-Send Email";
    }, 30000);
    document.getElementById("enviar").innerHTML = "Blocked";
  }

  const ResendEmail = async (e) => {
    e.preventDefault();
    document.getElementById("enviar").disabled = true;
    deshabilitar_btnEnviar();
    const result = await axios({
      method: "post",
      url: `${PATH}/resendEmail`,
      data: { username }, // username
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
    }).then((e) => e.data);
    if (result[0] === "E" && result[1] === "r" && result[2] === "r") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${result}`,
        button: "Aceptar",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "REENVIADO",
        text: "Codigo Reenviado,Espere 30 segundos para reenviarlo nuevamente",
        button: "Aceptar",
      });
    }
  };

  return (
    <div className="">
    <>
    <NavBar />
    </>
    <div className=" flex flex-col items-center justify-center absolute inset-0 bg-primary-200">
      <div className="border px-5 py-3 h-[450px] w-[500px] text-center flex items-center flex-col justify-around rounded-lg bg-secundary-250">
        <div className="flex flex-col gap-5 items-center">
          <h3 className="text-primary-200 uppercase font-PT font-bold text-2xl">Enter a token is will send to mail:</h3>
          <input className="text-center bg-[#EEEEEE] rounded-lg border border-primary-400 py-2 focus:outline-none focus:border-primary-300 text-primary-200" placeholder="Enter your token" value={token} onChange={(e) => setToken(e.target.value)}/>
          
          <button className="bg-primary px-5 py-1 rounded-lg hover:bg-primary-300 uppercase font-bold" onClick={(e) => HandleSubmit(e)}>Send</button>
        </div>

        <div>
          <p className="text-[#0A0A0A] text-center mb-5">If the token did not arrive in your email, please check the spam or junk mail box. If not, press the following button.</p>
          <button className="bg-primary px-5 py-1 rounded-lg hover:bg-primary-300 uppercase font-bold" id="enviar" onClick={(e) => ResendEmail(e)}>Re-Send</button>
        </div>
      </div>
    </div>
    </div>
  );
}
