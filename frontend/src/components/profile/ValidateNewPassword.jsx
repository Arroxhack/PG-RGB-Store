import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function Validations() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [newPasswordValidate, setNewPasswordValidate] = useState("");
  let { username } = useParams();

  async function HandleSubmit(e) {
    e.preventDefault();
    if (NewPassword !== newPasswordValidate) {
      return alert("Las contraseñas deben coincidir");
    }
    const result = await axios({
      method: "put",
      url: `https://proyecto-grupal-rgb.herokuapp.com/resetPassword`,
      data: { token, username, NewPassword },
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
    })
      .then((e) => e.data)
      .catch((e) => console.log(e));
    if (result[0] === "E" && result[1] === "r" && result[2] === "r") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${result}`,
        button: "Aceptar",
      });
    } else {
      Swal.fire({
        icon: "succes",
        title: "EXITO",
        text: `${result}`,
        button: "Aceptar",
      });
      navigate(`/`);
    }
  }

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen ">
      <div
        className=" w-1/3 h-96  border-white border-2 gap-6 rounded-md flex flex-col justify-center items-center
        sm:w-80 sm:h-80  "
      >
        <input
          className="border-2 border-primary-400 rounded max-w-max  "
          value={NewPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter New Password"
        />
        <input
          className="border-2 border-primary-400 rounded max-w-max  "
          value={newPasswordValidate}
          onChange={(e) => setNewPasswordValidate(e.target.value)}
          placeholder="Repeat New Password"
        />
        <h3>Enter a Password token is will send to mail:</h3>
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
        </div>
      </div>
    </div>
  );
}
