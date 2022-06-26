import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import swal from "sweetalert2";

export default function Validations() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  let { username } = useParams();

  async function HandleSubmit(e) {
    e.preventDefault();
    const UserRegister = await axios({
      method: "put",
      url: `http://localhost:3001/register/verify`,
      data: { token, username },
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
    })
      .then((e) => e.data)
      .catch((e) => console.log(e));
    if (UserRegister.validate === true) {
      let { login, lastname, verify, username, email, permissions, name } = UserRegister.user;
      localStorage.setItem("username", username); //Seteo lo que trajo la ruta al localstorage
      localStorage.setItem("name", name);
      localStorage.setItem("lastname", lastname);
      localStorage.setItem("login", login);
      localStorage.setItem("email", email);
      localStorage.setItem("Admin", permissions);
      navigate("/");
    } else {
      alert("The Token is not correctly");
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
      url: "http://localhost:3001/resendEmail",
      data: { username }, // username
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
    }).then((e) => e.data);
    if (result.length) {
      swal.fire({
        icon: "success",
        title: "REENVIADO",
        text: "Codigo Reenviado,Espere 30 segundos para reenviarlo nuevamente",
        button: "Aceptar",
      });
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen ">
      <div
        className=" w-1/3 h-96  border-white border-2 gap-6 rounded-md flex flex-col justify-center items-center
        sm:w-80 sm:h-80  "
      >
        <h3>Enter a token is will send to mail:</h3>
        <div className="flex flex-col items-center justify-center gap-1">
          <input
            className="border-2 border-primary-400 rounded max-w-max  "
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
          <button
            className="hover:bg-primary-400 rounded-xl w-24 text-xl items-center"
            onClick={(e) => HandleSubmit(e)}
          >
            Send
          </button>
          <button
            className="hover:bg-primary-400 rounded-xl w-24 text-xl items-center"
            id="enviar"
            onClick={(e) => ResendEmail(e)}
          >
            Re-Send Email
          </button>
        </div>
      </div>
    </div>
  );
}
