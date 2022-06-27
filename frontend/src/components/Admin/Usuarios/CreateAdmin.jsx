import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import swal from "sweetalert2";

const CreateAdmin = () => {
  const idAdmin = localStorage.getItem("id");
  const [users, setUsers] = useState([]);
  const [Userid, setUserid] = useState(0);
  const [method, setMethod] = useState("");
  const [state, setState] = useState("");

  useEffect(async () => {
    await getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const allusers = await axios({
      method: "get",
      url: "http://localhost:3001/Users",
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
      url: "http://localhost:3001/Users",
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
    const idUser = Number(Userid);
    if (method === "updateToAdmin") {
      const result = await axios({
        method: "post",
        url: "http://localhost:3001/updateToAdmin",
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
      setState("   ");
    }

    if (method === "updateToUser") {
      const result = await axios({
        method: "post",
        url: "http://localhost:3001/updateToUser",
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
      setState("  ");
    }
    if (method === "UpdateToSuperAdmin") {
      const result = await axios({
        method: "post",
        url: "http://localhost:3001/UpdateToSuperAdmin",
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
      Elija una opcion:
      <select onChange={(e) => HandleFilter(e)}>
        <option value={"updateToAdmin"}>USER a ADMIN</option>
        <option value={"updateToUser"}>ADMIN a USER</option>
        <option value={"UpdateToSuperAdmin"}>ADMIN a SuperADMIN</option>
      </select>
      <select
        onChange={(e) => {
          HandleSelect(e);
        }}
      >
        {users &&
          users.map((e, i) => {
            return (
              <option key={i} value={e.id}>
                {e.email}---{e.permissions == true ? "admin" : "usuario"}
              </option>
            );
          })}
      </select>
      <button
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
