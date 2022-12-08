import React, { useEffect, useContext } from "react";
import Menu from "./Menu/Menu";
import Nav from "./Nav/Nav";
import { useState } from "react";
import CreateAdmin from "./Usuarios/CreateAdmin";
import EditUser from "./Usuarios/EditUser";
import Error from "../Error/Error";
import { useParams, useSearchParams } from "react-router-dom";
import AdminProduct from "./Productos/AdminProduct";
import Swal from "sweetalert2";
import Response from "./Respuestas/Response";
import axios from "axios";
import { CartContext } from "../Cart/CartContext";
const HomeAdmin = () => {
  const { page } = useParams();
  const { verificate, setVerificate } = useContext(CartContext);
  const admin = localStorage.getItem("admin");
  const username = window.atob(localStorage.getItem("username"));

  const [Validate, setValidate] = useState(true);

  const PATH = 'https://pg-rgb-store-backend-production.up.railway.app'

  const ValidatePassword = async () => {
    const { value: password } = await Swal.fire({
      title: "Enter your password",
      input: "password",
      inputLabel: "Password",
      inputPlaceholder: "Enter your password",
      inputAttributes: {
        maxlength: 25,
        autocapitalize: "off",
        autocorrect: "off",
      },
    });

    if (!password) {
      Swal.fire(`Access with your admin password`);
      // return ValidatePassword();
    }
    const result = await axios({
      method: "post",
      url: `${PATH}/verifyAdminPass`,
      data: { username, password },
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
    })
      .then((e) => e.data)
      .catch((e) => console.log(e));
    if (result[0] === "E" && result[1] === "r" && result[2] === "r") {
      return ValidatePassword();
    } else {
      setVerificate(true);
      return setValidate(true);
    }
  };

  useEffect(() => {
    if (verificate == false) {
      ValidatePassword();
    }
  }, [admin]);

  return (
    <>
      {Validate ? (
        <>
          {admin ? (
            <div>
              <Nav />
              <div className="flex flex-row">
                <div className="bg-primary-200 h-screen w-60">
                  <Menu />
                </div>
                {page === "list-products" ? <AdminProduct /> : <></>}
                {page === "create-admin" ? <CreateAdmin /> : <></>}
                {page === "edit-user" ? <EditUser /> : <></>}
                {page === "question-answer" ? <Response /> : <></>}
              </div>
            </div>
          ) : (
            <Error />
          )}
        </>
      ) : null}
    </>
  );
};

export default HomeAdmin;
