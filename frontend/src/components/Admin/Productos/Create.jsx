import React, { useEffect } from "react";
import Menu from "../Menu/Menu";
import Nav from "../Nav/Nav";
import { useState } from "react";
import EditProduct from "../Productos/EditProduct";
import Error from "../../Error/Error";
import { useParams, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getProductDetail } from "../../../redux/actions";
import CreateProduct from "./CreateProduct";

const Create = () => {
  const admin = localStorage.getItem("admin");
  const username = localStorage.getItem("username");

  let [searchParms, setSearchParams] = useSearchParams();

  const [menu, setMenu] = useState("create-product");
  const [Validate, setValidate] = useState(true);
    
    const dispatch = useDispatch()


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

  useEffect(() => {
    ValidatePassword();
  }, [dispatch]);

  return (
    // <>
    //   {Validate ? 
      (
        <>
          {admin ? (
            <div>
              <Nav />
              <div className="flex flex-row">
                <div className="bg-primary-200 h-screen w-60">
                  <Menu/>
                </div>
               <CreateProduct/>
              </div>
            </div>
          ) : (
            <Error />
          )}
        </>
      )
    //    : null}
    // </>
  );
};

export default Create;
