import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
function ChangePassword() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
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
      url: "https://proyecto-grupal-rgb.herokuapp.com/sendTokenReset",
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
        `http://localhost:3000/resetPassword/${username}`
      );
    }
  };
  return (
    <div>
      <div className="bg-secundary-200 px-2 py-6 rounded shadow-md text-black">
        <p>Porfavor ingrese 2 veces su contraseña actual</p>
        <form
          className="flex flex-col justify-center items-center sm:w-80 sm:h-80"
          onSubmit={handleSubmit}
        >
          <input
            className="border-2 border-primary-400 rounded max-w-max  "
            onChange={handleOnChange}
            type="password"
            name="password"
            placeholder="Ingrese su contraseña"
          />
          <input
            className="border-2 border-primary-400 rounded max-w-max  "
            onChange={handleOnChange}
            type="password"
            name="passwordValidate"
            placeholder="Ingrese su contraseña"
          />
          <button
            className="hover:bg-primary-400 rounded-xl w-24 text-xl items-center"
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
