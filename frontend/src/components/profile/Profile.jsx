import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  GetUserData,
  VaciarStatePendingComment,
  GetCommendPending,
} from "../../redux/actions/index";
import ChangePassword from "./ChangePassword";
import PhoneInput from "react-phone-input-2";
import Swal from "sweetalert2";
import "react-phone-input-2/lib/style.css";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router";
import CommentPending from "./CommentPending";

export default function Profile() {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const username = localStorage.getItem("username");
  console.log(username);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUserData(id));
    dispatch(GetCommendPending(username));
  }, []);
  const user = useSelector((state) => state.UserData);
  const Commend = useSelector((state) => state.CommendPending);
  console.log("ACAAAAA", Commend);
  const [mostrarChangePassword, setMostrarChangePassword] = useState(false);
  const [NameEdit, setName] = useState("");
  const [LastnameEdit, setLastname] = useState("");
  const [AddressEdit, setAddress] = useState("");
  const [CellphoneEdit, setCellphone] = useState("");
  const [ImageUpload, setImageUpload] = useState("");
  const [Password, setPassword] = useState("");
  const [editPerfil, setEditPerfil] = useState(false);
  const [confirmEdit, setConfirmEdit] = useState(false);
  const handleChangePassword = (e) => {
    e.preventDefault(e);
    if (mostrarChangePassword == false) {
      setMostrarChangePassword(true);
    } else {
      setMostrarChangePassword(false);
    }
  };

  const UploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImageUpload(base64);
    console.log(base64);
  };

  const NoLogin = () => {
    Swal.fire({
      icon: "warning",
      title: "No Login",
      text: `Tienes que estar logeado para ingresar a la pagina`,
      button: "Aceptar",
    }).then(() => navigate("/login"));
  };
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const DeleteImage = (e) => {
    e.preventDefault();
    setImageUpload(null);
  };

  const EditPerfil = (e) => {
    e.preventDefault();
    setConfirmEdit(false);
    if (editPerfil === false) {
      setName(user.name);
      setLastname(user.lastname);
      setAddress(user.address);
      setCellphone(user.cellphone);
      setImageUpload(user.image);
      setEditPerfil(true);
      document.getElementById("EditProfile").innerHTML = "Ver Perfil";
    } else {
      dispatch(GetUserData(id));
      setEditPerfil(false);
      document.getElementById("EditProfile").innerHTML = "Editar Perfil";
    }
  };

  const HandleConfirm = (e) => {
    e.preventDefault();
    if (confirmEdit === false) {
      document.querySelector("#Edicion").innerHTML = "Cancelar Edicion";
      setConfirmEdit(true);
    } else {
      document.querySelector("#Edicion").innerHTML = "Confirmar Edicion";
      setConfirmEdit(false);
    }
  };

  const ConfirmEditLast = async (e) => {
    e.preventDefault();
    const result = await axios({
      method: "put",
      url: `https://proyecto-grupal-rgb.herokuapp.com/profile/edit`,
      data: {
        id,
        NameEdit,
        LastnameEdit,
        AddressEdit,
        CellphoneEdit,
        ImageUpload,
        Password,
      },
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
    })
      .then((e) => e.data)
      .catch((e) => console.log(e));
    if (result[0] === "E" && result[1] === "r" && result[2] === "r") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${result}`,
        button: "Aceptar",
      });
    } else {
      Swal.fire({
        icon: "succes",
        title: "EXITO",
        text: `${result}`,
        button: "Aceptar",
      });
      window.location.replace("http://localhost:3000/profile");
    }
  };
  return (
    <div>
      {id ? (
        <>
          <NavBar />
          <div className=" flex flex-col items-center justify-center min-h-screen h-screen bg-gradient-to-t from-primary-300 to-primary">
            <button
              id="EditProfile"
              className="bg-primary-400 font-Open px-5 py-1 rounded-lg  uppercase font-semibold hover:bg-primary-300"
              onClick={(e) => EditPerfil(e)}
            >
              {" "}
              Editar Perfil
            </button>
            <div className="bg-secundary-250 px-6 py-8 rounded shadow-md text-black">
              {editPerfil === false ? (
                <>
                  <div className="flex row space-x-3">
                    <h2>Name: </h2>
                    <p className="text-decoration underline ">{user.name}</p>
                  </div>
                  <div className="flex row space-x-3">
                    <h2>LastName:</h2>
                    <p className="text-decoration underline ">
                      {user.lastname}
                    </p>
                  </div>
                  <div className="flex row space-x-3">
                    <h2>Email:</h2>
                    <p className="text-decoration underline">{user.email}</p>
                  </div>
                  <div className="flex row space-x-3">
                    <h2>Username:</h2>
                    <p className="text-decoration underline">{user.username}</p>
                  </div>
                  <div className="flex row space-x-3">
                    <h2>cellphone:</h2>
                    <p className="text-decoration underline">
                      {user.cellphone
                        ? "+" + user.cellphone
                        : "Dato no encontrado"}
                    </p>
                  </div>
                  <div className="flex row space-x-3">
                    <h2>Address:</h2>
                    <p className="text-decoration underline">
                      {user.address ? user.address : "Dato no encontrado"}
                    </p>
                  </div>
                  <div className="flex row space-x-3">
                    <h2>image:</h2>
                    <p>
                      {user.image ? (
                        <img
                          className="rounded-full h-20 w-20"
                          src={user.image}
                        />
                      ) : (
                        "Dato no encontrado"
                      )}
                    </p>
                  </div>
                </>
              ) : (
                <form>
                  <div className="flex row space-x-3">
                    <h2>Name: </h2>
                    <input
                      name="Name"
                      className="border-2 border-primary-400 rounded max-w-max  "
                      value={NameEdit}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {console.log(NameEdit)}
                  </div>
                  <div className="flex row space-x-3">
                    <h2>LastName:</h2>
                    <input
                      name="Lastname"
                      className="border-2 border-primary-400 rounded max-w-max  "
                      value={LastnameEdit}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                  <div className="flex row space-x-3">
                    <h2>Address:</h2>
                    <input
                      name="Address"
                      className="border-2 border-primary-400 rounded max-w-max  "
                      value={AddressEdit}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="flex row space-x-3">
                    <h2>Phone:</h2>
                    <PhoneInput
                      name="cellphone"
                      country={"ar"}
                      value={CellphoneEdit}
                      onChange={(phone) => setCellphone(phone)}
                    />
                  </div>
                  <div className="flex row space-x-3">
                    <h2>Image:</h2>
                    <p>
                      {ImageUpload ? (
                        <img
                          className="rounded-full h-20 w-20"
                          src={ImageUpload}
                        />
                      ) : (
                        "Dato no encontrado"
                      )}
                    </p>
                  </div>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={UploadImage}
                  />
                  <div className="flex row space-x-3">
                    <button
                      className="bg-primary-400 font-Open px-5 py-1 rounded-lg text-primary-100 uppercase font-semibold hover:bg-primary-300"
                      onClick={(e) => DeleteImage(e)}
                    >
                      Erase Image
                    </button>
                  </div>
                  <button
                    id="Edicion"
                    onClick={(e) => HandleConfirm(e)}
                    className="bg-primary-400 font-Open px-5 py-1 rounded-lg text-primary-200 uppercase font-semibold hover:bg-primary-300"
                  >
                    Confirmar Edicion
                  </button>
                  {confirmEdit === true ? (
                    <div className="flex row space-x-3">
                      <h2>Ingrese su contraseña para confirmar cambios:</h2>
                      <input
                        placeholder="Ingrese Contraseña"
                        name="Password"
                        className="border-2 border-primary-400 rounded max-w-max  "
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        onClick={(e) => ConfirmEditLast(e)}
                        className="bg-primary-400 font-Open px-5 py-1 rounded-lg text-primary-200 uppercase font-semibold hover:bg-primary-300"
                      >
                        Enviar
                      </button>
                    </div>
                  ) : null}
                  <div className="flex row space-x-3">
                    <button
                      className="bg-primary-400 font-Open px-5 py-1 rounded-lg text-primary-200 uppercase font-semibold hover:bg-primary-300"
                      onClick={(e) => handleChangePassword(e)}
                    >
                      Change Password
                    </button>
                  </div>
                </form>
              )}

              {mostrarChangePassword === true ? <ChangePassword /> : null}
            </div>
            { editPerfil ===true ? null :
              <div>
                {Commend.length > 0 ? (
                  <>
                    {" "}
                    <CommentPending ComentariosPending={Commend} />{" "}
                  </>
                ) : (
                  "No Comentarios Pendientes"
                )}
              </div>
            }
          </div>
        </>
      ) : (
        NoLogin()
      )}
    </div>
  );
}
