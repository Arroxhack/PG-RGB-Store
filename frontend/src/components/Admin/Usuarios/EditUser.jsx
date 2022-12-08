import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const EditUser = () => {
  const idAdmin = window.atob(localStorage.getItem("id"));
  const [users, setUsers] = useState([]);
  const [usersFilter, setUsersFilter] = useState([]);
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
    if (e.target.value === "Lock") {
      setMethod(e.target.value);
      const listUsersLock = users.filter((e) => e.lock === false);
      setUsersFilter(listUsersLock);
    } else {
      setMethod(e.target.value);
      const listUsersLock = users.filter((e) => e.lock === true);
      setUsersFilter(listUsersLock);
    }
  };
  const HandleSelect = async (e) => {
    setUserid(e.target.value);
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("enviar").innerHTML = "Enviando...";
    document.getElementById("enviar").disabled = true;
    console.log("idUser", Userid, "idAdmin", idAdmin);
    if (method === "Lock") {
      const result = await axios({
        method: "put",
        url: `${PATH}/blockUser`,
        data: { Userid, idAdmin }, // email
        headers: { "X-Requested-With": "XMLHttpRequest" },
        withCredentials: true,
      }).then((e) => e.data);

      if (result[0] === "E" && result[1] === "r" && result[2] === "r") {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: result,
          button: "Ok",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Updated ✔",
          text: result,
          button: "Ok",
        });
      }
      document.getElementById("enviar").disabled = false;
      document.getElementById("enviar").innerHTML = method;
      setState(" ");
    } else {
      const result = await axios({
        method: "put",
        url: `${PATH}/unlockUser`,
        data: { Userid, idAdmin }, // email
        headers: { "X-Requested-With": "XMLHttpRequest" },
        withCredentials: true,
      }).then((e) => e.data);

      if (result[0] === "E" && result[1] === "r" && result[2] === "r") {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: result,
          button: "Ok",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Updated ✔",
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
      <select onChange={(e) => HandleFilter(e)}>
        <option value="" disabled selected>
          Seleccione una opcion:
        </option>
        <option value={"Lock"}>Ban User</option>
        <option value={"UnLock"}>Unban User</option>
      </select>
      <select
        onChange={(e) => {
          HandleSelect(e);
        }}
      >
        <option value="" disabled selected>
          Select User:
        </option>
        {usersFilter &&
          usersFilter.map((e, i) => {
            return (
              <option key={i} value={e.id}>
                {e.username}
              </option>
            );
          })}
      </select>
      <button
        id="enviar"
        onClick={(e) => HandleSubmit(e)}
        className="bg-primary-400 font-Open px-5 py-1 rounded-lg text-primary-200 uppercase font-semibold hover:bg-primary-300"
      >
        {method === "Lock" ? "Ban User" : "Unban User"}
      </button>
    </div>
  );
};

export default EditUser;
