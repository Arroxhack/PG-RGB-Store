import React from "react";
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

const HomeAdmin = () => {
  const admin = localStorage.getItem("admin");
  let [searchParms, setSearchParams] = useSearchParams();

  const [menu, setMenu] = useState("create-product");

  const changeMenu = (e) => {
    e.preventDefault();
    let params = searchParms(e.target);
    setSearchParams(params);
  };

  return (
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
  );
};

export default HomeAdmin;
