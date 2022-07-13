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
  const username = window.atob(localStorage.getItem("username"));

  let [searchParms, setSearchParams] = useSearchParams();

  const [menu, setMenu] = useState("create-product");
    
  const {id} = useParams()
    const dispatch = useDispatch()

    const productID = parseInt(id)
  const changeMenu = (e) => {
    e.preventDefault();
    let params = searchParms(e.target);
    setSearchParams(params);
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
