import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
function ChangePassword() {
  const PATH = 'https://rgb-store.herokuapp.com/'

  const navigate = useNavigate();
  const username = window.atob(localStorage.getItem("username"));
  const [user, setUser] = useState({
    password: "",
    passwordValidate: "",
  });
  const handleOnChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password !== user.passwordValidate) {
      return alert("Las contraseñas deben coincidir");
    }
    document.getElementById("enviar").disabled = true;
    document.getElementById("enviar").innerHTML = "Enviando...";
    const { password } = user;
    const result = await axios({
      method: "put",
      url: `${PATH}/sendTokenReset`,
      data: { username, password },
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
      document.getElementById("enviar").disabled = false;
      document.getElementById("enviar").innerHTML = "Enviar";
      Swal.fire({
        icon: "succes",
        title: "EXITO",
        text: `${result}`,
        button: "Aceptar",
      });
      window.location.replace(
        `${PATH}/resetPassword/${username}`
      );
    }
  };
  return (
    <div className="">
      <div className="bg-secundary-200 px-2 py-6 rounded shadow-md text-black">
        <p>Porfavor ingrese 2 veces su contraseña actual</p>
        <form
          className="flex flex-col justify-center  items-center sm:w-80 sm:h-80"
          onSubmit={handleSubmit}
        >
          <input
            className="block w-full px-4 py-2 mt-2 border rounded-md focus:border-primary-400 focus:ring-primary-400 before:focus:ring-primary-100"
            onChange={handleOnChange}
            type="password"
            name="password"
            placeholder="Ingrese su contraseña"
          />
          <input
            className="block w-full px-4 py-2 mt-2 border rounded-md focus:border-primary-400 focus:ring-primary-400 before:focus:ring-primary-100"
            onChange={handleOnChange}
            type="password"
            name="passwordValidate"
            placeholder="Ingrese su contraseña"
          />
          <button
            className="w-full text-center mt-5 py-3 rounded bg-primary-400 lg:hover:bg-primary-300 my-1"
            id="enviar"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
