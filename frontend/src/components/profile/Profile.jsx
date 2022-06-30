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
    <div className=" flex flex-col h-screen w-full items-center justify-center bg-primary-200
    ">
      <div className="border-2 border-primary-400 h-3/5 w-2/6 flex flex-col items-center justify-center rounded-xl">
      <ul className="">
        
        <h2 className="bor border-b-2 border-primary-300 w-38 text-secundary-250 text-lg">Name: </h2>
        <li>{user.name}</li>
   
        <h2 className="bor border-b-2 border-primary-300 w-38 text-secundary-250 text-lg">LastName:</h2>
        <li>{user.lastname}</li>
   
        <h2 className="bor border-b-2 border-primary-300 w-38 text-secundary-250 text-lg">Email:</h2>
        <li>{user.email}</li>
   
        <h2 className="bor border-b-2 border-primary-300 w-38 text-secundary-250 text-lg">Username:</h2>
        <li>{user.username}</li>
        
        <div className="flex bor border-b-2  border-primary-300 w-38 ">
        <h2 className="pr-4 text-secundary-250 text-lg">image:</h2>
        <li >{user.image  ? <img  src={user.image} /> : "Dato no encontrado"}</li>
        </div>
        <div className="flex bor border-primary-300 border-b-2 w-38">
        <h2 className="pr-4 text-secundary-250 text-lg">cellphone:</h2>
        <li>{user.cellphone ? user.cellphone : "Dato no encontrado"}</li>
        </div>
        <div className="flex bor border-b-2 border-primary-300 w-38">
        <h2 className="pr-4 text-secundary-250 text-lg" >Address:</h2>
        <li>{user.address ? user.address : "Dato no encontrado"}</li>
        </div>
      </ul>
      <button className="mt-4 rounded-lg lg:hover:bg-primary-300 lg:hover:text-primary-400 lg:hover:" onClick={(e) => handleChangePassword(e)}>
        Cambiar Contraseña
      </button>
      </div>
     
      {mostrarChangePassword === true ? <ChangePassword /> : null}
    </div>
  );
}
