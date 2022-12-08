import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import swal from "sweetalert2";

const CreateAdmin = () => {
  const idAdmin = window.atob(localStorage.getItem("id"));
  const [users, setUsers] = useState([]);
  const [Userid, setUserid] = useState(0);
  const [method, setMethod] = useState("Upgradear a Admin");
  const [state, setState] = useState("");

  const PATH = 'https://pg-rgb-store-backend-production.up.railway.app'


  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const allusers = await axios({
      method: "get",
      url: `${PATH}/Users`,
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
      url: `${PATH}/Users`,
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
        url: `${PATH}/updateToAdmin`,
        data: { idUser, idAdmin }, // email
        headers: { "X-Requested-With": "XMLHttpRequest" },
        withCredentials: true,
      }).then((e) => e.data);

      if (result[0] === "E" && result[1] === "r" && result[2] === "r") {
        swal.fire({
          icon: "error",
          title: "Error",
          text: result,
          button: "Ok",
        });
      } else {
        swal.fire({
          icon: "success",
          title: "Success ✔",
          text: result,
          button: "Ok",
        });
      }
      document.getElementById("enviar").disabled = false;
      document.getElementById("enviar").innerHTML = method;
      setState("   ");
    }

    if (method === "updateToUser") {
      const result = await axios({
        method: "post",
        url: `${PATH}/updateToUser`,
        data: { idUser, idAdmin }, // email
        headers: { "X-Requested-With": "XMLHttpRequest" },
        withCredentials: true,
      }).then((e) => e.data);

      if (result[0] === "E" && result[1] === "r" && result[2] === "r") {
        swal.fire({
          icon: "error",
          title: "Error",
          text: result,
          button: "Ok",
        });
      } else {
        swal.fire({
          icon: "success",
          title: "Success ✔",
          text: result,
          button: "Ok",
        });
      }
      document.getElementById("enviar").disabled = false;
      document.getElementById("enviar").innerHTML = method;
      setState("  ");
    }
    if (method === "UpdateToSuperAdmin") {
      const result = await axios({
        method: "post",
        url: `${PATH}/UpdateToSuperAdmin`,
        data: { idUser, idAdmin }, // email
        headers: { "X-Requested-With": "XMLHttpRequest" },
        withCredentials: true,
      }).then((e) => e.data);

      if (result[0] === "E" && result[1] === "r" && result[2] === "r") {
        swal.fire({
          icon: "error",
          title: "Error",
          text: result,
          button: "Ok",
        });
      } else {
        swal.fire({
          icon: "success",
          title: "Success ✔",
          text: result,
          button: "Ok",
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
        Refresh users
      </button>
      <p>Create new Admin/SuperAdmin/User:</p>
      <select onChange={(e) => HandleFilter(e)}>
        <option value="" disabled selected>
          Select one:
        </option>
        <option value={"updateToAdmin"}>User into Admin</option>
        <option value={"updateToUser"}>Admint into User</option>
        <option value={"UpdateToSuperAdmin"}>Admin into SuperAdmin</option>
      </select>
      <select
        onChange={(e) => {
          HandleSelect(e);
        }}
      >
        <option value="" disabled selected>
          Select a user:
        </option>
        {users &&
          users.map((e, i) => {
            return (
              <option key={i} value={e.id}>
                {e.email}---{e.permissions === true ? "admin" : "user"}
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
          ? "Turn Admin into User"
          : method === "updateToAdmin"
          ? "Turn User into Admin"
          : "Turn Admin into SuperAdmin"}
      </button>
    </div>
  );
};

export default CreateAdmin;
