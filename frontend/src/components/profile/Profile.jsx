import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GetUserData } from "../../redux/actions/index";
import ChangePassword from "./ChangePassword";
/*
const Uploaded = (e)=>{
    const file = document.querySelector(
      'input[type=file]')['files'][0];
    let reader = new FileReader();
    reader.onload = function () {
        LAVARIABLEDONDEQUIERASGUARDAR = reader.result.replace("data:","")
        .replace(/^.+,/, "");
    }
    reader.readAsDataURL(file);
  }
<input type='file' name='image' id='image' onChange={Uploaded}/>
*/

export default function Profile() {
  const id = localStorage.getItem("id");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserData);
  const [mostrarChangePassword, setMostrarChangePassword] = useState(false);
  useEffect( () => {
    dispatch(GetUserData(id));
  }, []);
  const handleChangePassword = (e) => {
    e.preventDefault(e);
    if (mostrarChangePassword == false) {
      setMostrarChangePassword(true);
    } else {
      setMostrarChangePassword(false);
    }
  };
  return (
    <div>
      <ul>
        <h2>Name: </h2>
        <li>{user.name}</li>

        <h2>LastName:</h2>
        <li>{user.lastname}</li>
        <h2>Email:</h2>
        <li>{user.email}</li>
        <h2>Username:</h2>
        <li>{user.username}</li>
        <h2>image:</h2>
        <li>{user.image ? <img src={user.image} /> : "Dato no encontrado"}</li>
        <h2>cellphone:</h2>
        <li>{user.cellphone ? user.cellphone : "Dato no encontrado"}</li>
        <h2>Address:</h2>
        <li>{user.address ? user.address : "Dato no encontrado"}</li>
      </ul>
      <button onClick={(e) => handleChangePassword(e)}>
        Cambiar Contraseña
      </button>
      {mostrarChangePassword === true ? <ChangePassword /> : null}
    </div>
  );
}
