import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
function ChangePassword() {
  const PATH = 'https://pg-rgb-store-backend-production.up.railway.app'

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
      return alert("Passwords must be the same");
    }
    document.getElementById("enviar").disabled = true;
    document.getElementById("enviar").innerHTML = "Sending...";
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
        button: "Ok",
      });
    } else {
      document.getElementById("enviar").disabled = false;
      document.getElementById("enviar").innerHTML = "Send";
      Swal.fire({
        icon: "succes",
        title: "Succes",
        text: `${result}`,
        button: "Ok",
      });
      window.location.replace(
        `${PATH}/resetPassword/${username}`
      );
    }
  };
  return (
    <div className="">
      <div className="bg-secundary-200 px-2 py-6 rounded shadow-md text-black">
        <p>Please enter your current password twice</p>
        <form
          className="flex flex-col justify-center  items-center sm:w-80 sm:h-80"
          onSubmit={handleSubmit}
        >
          <input
            className="block w-full px-4 py-2 mt-2 border rounded-md focus:border-primary-400 focus:ring-primary-400 before:focus:ring-primary-100"
            onChange={handleOnChange}
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <input
            className="block w-full px-4 py-2 mt-2 border rounded-md focus:border-primary-400 focus:ring-primary-400 before:focus:ring-primary-100"
            onChange={handleOnChange}
            type="password"
            name="passwordValidate"
            placeholder="Enter your password"
          />
          <button
            className="w-full text-center mt-5 py-3 rounded bg-primary-400 lg:hover:bg-primary-300 my-1"
            id="enviar"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
