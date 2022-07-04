import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import swal from "sweetalert2";

const CreateAdmin = () => {
  const idAdmin = localStorage.getItem("id");
  const [users, setUsers] = useState([]);
  const [Userid, setUserid] = useState(0);
  const [method, setMethod] = useState("Upgradear a Admin");
  const [state, setState] = useState("");

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const allusers = await axios({
      method: "get",
      url: "https://proyecto-grupal-rgb.herokuapp.com/Users",
      data: null, // email
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
    }).then((e) => e.data);
    return setUsers(allusers);
  };
  const getAllUsersButton = async (e) => {
    e.preventDefault();
    const allusers = await axios({
      method: "get",
      url: "https://proyecto-grupal-rgb.herokuapp.com/Users",
      data: null, // email
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
    }).then((e) => e.data);
    return setUsers(allusers);
  };

  const HandleFilter = async (e) => {
    setMethod(e.target.value);
  };
  const HandleSelect = async (e) => {
    setUserid(e.target.value);
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("enviar").innerHTML = "Enviando...";
    document.getElementById("enviar").disabled = true;
    const idUser = Number(Userid);
    if (method === "updateToAdmin") {
      const result = await axios({
        method: "post",
        url: "https://proyecto-grupal-rgb.herokuapp.com/updateToAdmin",
        data: { idUser, idAdmin }, // email
        headers: { "X-Requested-With": "XMLHttpRequest" },
        withCredentials: true,
      }).then((e) => e.data);

      if (result[0] === "E" && result[1] === "r" && result[2] === "r") {
        swal.fire({
          icon: "error",
          title: "Error",
          text: result,
          button: "Aceptar",
        });
      } else {
        swal.fire({
          icon: "success",
          title: "EXITO ✔",
          text: result,
          button: "Aceptar",
        });
      }
      document.getElementById("enviar").disabled = false;
      document.getElementById("enviar").innerHTML = method;
      setState("   ");
    }

    if (method === "updateToUser") {
      const result = await axios({
        method: "post",
        url: "https://proyecto-grupal-rgb.herokuapp.com/updateToUser",
        data: { idUser, idAdmin }, // email
        headers: { "X-Requested-With": "XMLHttpRequest" },
        withCredentials: true,
      }).then((e) => e.data);

      if (result[0] === "E" && result[1] === "r" && result[2] === "r") {
        swal.fire({
          icon: "error",
          title: "Error",
          text: result,
          button: "Aceptar",
        });
      } else {
        swal.fire({
          icon: "success",
          title: "EXITO ✔",
          text: result,
          button: "Aceptar",
        });
      }
      document.getElementById("enviar").disabled = false;
      document.getElementById("enviar").innerHTML = method;
      setState("  ");
    }
    if (method === "UpdateToSuperAdmin") {
      const result = await axios({
        method: "post",
        url: "https://proyecto-grupal-rgb.herokuapp.com/UpdateToSuperAdmin",
        data: { idUser, idAdmin }, // email
        headers: { "X-Requested-With": "XMLHttpRequest" },
        withCredentials: true,
      }).then((e) => e.data);

      if (result[0] === "E" && result[1] === "r" && result[2] === "r") {
        swal.fire({
          icon: "error",
          title: "Error",
          text: result,
          button: "Aceptar",
        });
      } else {
        swal.fire({
          icon: "success",
          title: "EXITO ✔",
          text: result,
          button: "Aceptar",
        });
      }
      document.getElementById("enviar").disabled = false;
      document.getElementById("enviar").innerHTML = method;
      setState(" ");
    }
  };
  return (
    <div>
      <button
        className="bg-primary-400 font-Open px-5 py-1 rounded-lg text-primary-200 uppercase font-semibold hover:bg-primary-300"
        onClick={(e) => getAllUsersButton(e)}
      >
        Recargar Usuarios
      </button>
      <p>CREAR NUEVO ADMIN/SUPERADMIN/USUARIO:</p>
      <select onChange={(e) => HandleFilter(e)}>
        <option value="" disabled selected>
          Seleccione una de las 3 opciones:
        </option>
        <option value={"updateToAdmin"}>USER a ADMIN</option>
        <option value={"updateToUser"}>ADMIN a USER</option>
        <option value={"UpdateToSuperAdmin"}>ADMIN a SuperADMIN</option>
      </select>
      <select
        onChange={(e) => {
          HandleSelect(e);
        }}
      >
        <option value="" disabled selected>
          Seleccione un usuario:
        </option>
        {users &&
          users.map((e, i) => {
            return (
              <option key={i} value={e.id}>
                {e.email}---{e.permissions === true ? "admin" : "usuario"}
              </option>
            );
          })}
      </select>
      <button
        id="enviar"
        onClick={(e) => HandleSubmit(e)}
        className="bg-primary-400 font-Open px-5 py-1 rounded-lg text-primary-200 uppercase font-semibold hover:bg-primary-300"
      >
        {method === "updateToUser"
          ? "Convertir Admin a User"
          : method === "updateToAdmin"
          ? "Upgradear a Admin"
          : "Upgradear a SuperAdmin"}
      </button>
    </div>
  );
};

export default CreateAdmin;
