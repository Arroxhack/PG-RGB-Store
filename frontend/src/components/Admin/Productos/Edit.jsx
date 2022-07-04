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

const Edit = () => {
  const admin = localStorage.getItem("admin");
  const username = localStorage.getItem("username");

  let [searchParms, setSearchParams] = useSearchParams();

  const [menu, setMenu] = useState("create-product");
  const [Validate, setValidate] = useState(true);
    
  const {id} = useParams()
    const dispatch = useDispatch()

    const productID = parseInt(id)
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
    // ValidatePassword();
    dispatch(getProductDetail(productID))
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
                  <Menu value={menu} setValue={setMenu} onChange={changeMenu} />
                </div>
                <EditProduct id={productID} />
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

export default Edit;
