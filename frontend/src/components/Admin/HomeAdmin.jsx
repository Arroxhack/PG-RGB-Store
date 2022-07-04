import React, { useEffect } from "react";
import Menu from "./Menu/Menu";
import Nav from "./Nav/Nav";
import { useState } from "react";
import CreateProduct from "./Productos/CreateProduct";
import DeleteProduct from "./Productos/DeleteProduct";
import EditProduct from "./Productos/EditProduct";
import CreateAdmin from "./Usuarios/CreateAdmin";
import EditUser from "./Usuarios/EditUser";
import Error from "../Error/Error";
import { useParams, useSearchParams } from "react-router-dom";
import AdminProduct from "./Productos/AdminProduct";
import Swal from "sweetalert2";
import axios from "axios";

const HomeAdmin = () => {

  const {page} = useParams()
  
  const admin = localStorage.getItem("admin");
  const username = localStorage.getItem("username");


  const [Validate, setValidate] = useState(true);

  const ValidatePassword = async () => {
    const { value: password } = await Swal.fire({
      title: "Enter your password",
      input: "password",
      inputLabel: "Password",
      inputPlaceholder: "Enter your password",
      inputAttributes: {
        maxlength: 10,
        autocapitalize: "off",
        autocorrect: "off",
      },
    });

    if (!password) {
      Swal.fire(`Tienes Que Ingresar Tu Contraseña de Administrador`);
      // return ValidatePassword();
    }
    const result = await axios({
      method: "post",
      url: "https://proyecto-grupal-rgb.herokuapp.com/verifyAdminPass",
      data: { username, password },
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
    })
      .then((e) => e.data)
      .catch((e) => console.log(e));
    if (result[0] === "E" && result[1] === "r" && result[2] === "r") {
      return ValidatePassword();
    } else {
      return setValidate(true);
    }
  };

  useEffect(() => {
    ValidatePassword();
  }, []);

  return (
    <>
      {Validate ? (
        <>
          {admin ? (
            <div>
              <Nav />
              <div className="flex flex-row">
                <div className="bg-primary-200 h-screen w-60">
                  <Menu/>
                </div>
                {page === 'list-products' && <AdminProduct />}
                {page === 'create-admin' ? <CreateAdmin /> : <></>}
                {page === 'edit-user' ? <EditUser/> : <></>}
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
