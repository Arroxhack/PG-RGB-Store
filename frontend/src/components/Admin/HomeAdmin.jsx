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
import { useSearchParams } from "react-router-dom";
import AdminProduct from "./Productos/AdminProduct";
import Swal from "sweetalert2";
import axios from "axios";

const HomeAdmin = () => {
  const admin = localStorage.getItem("admin");
  const username = localStorage.getItem("username");

  let [searchParms, setSearchParams] = useSearchParams();

  const [menu, setMenu] = useState("create-product");
  const [Validate, setValidate] = useState(true);

  useEffect(() => {
    ValidatePassword();
  }, []);

  const changeMenu = (e) => {
    e.preventDefault();
    let params = searchParms(e.target);
    setSearchParams(params);
  };

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
      return ValidatePassword();
    }
    const result = await axios({
      method: "post",
      url: "http://localhost:3001/verifyAdminPass",
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

  return (
    <>
      {Validate ? (
        <>
          {admin ? (
            <div>
              <Nav />
              <div className="flex flex-row">
                <div className="bg-primary-200 h-screen w-60">
                  <Menu value={menu} setValue={setMenu} onChange={changeMenu} />
                </div>
                {menu === "create-product" && <CreateProduct />}
                {menu === "edit-product" && <EditProduct />}
                {menu === "delete-product" && <DeleteProduct />}
                {menu === "create-admin" && <CreateAdmin />}
                {menu === "edit-user" && <EditUser />}
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
