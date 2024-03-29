import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  GetUserData,
  VaciarStatePendingComment,
  GetCommendPending,
  getHistory,
} from "../../redux/actions/index";
import ChangePassword from "./ChangePassword";
import PhoneInput from "react-phone-input-2";
import Swal from "sweetalert2";
import "react-phone-input-2/lib/style.css";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router";
import CommentPending from "./CommentPending";

export default function Profile() {

  const PATH = 'https://pg-rgb-store-backend-production.up.railway.app'

  const navigate = useNavigate();

  const id = window.atob(localStorage.getItem("id"));

  const username = window.atob(localStorage.getItem("username"));
  // console.log(username);

  const { history } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUserData(id));
    dispatch(GetCommendPending(username));
    dispatch(getHistory(id));
  }, []);
  const user = useSelector((state) => state.UserData);
  const Commend = useSelector((state) => state.CommendPending);
  // console.log("ACAAAAA", Commend);
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
      title: "Login",
      text: `You have to be logged in to continue`,
      button: "Ok",
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
      document.getElementById("EditProfile").innerHTML = "See profile";
    } else {
      dispatch(GetUserData(id));
      setEditPerfil(false);
      document.getElementById("EditProfile").innerHTML = "Edit profile";
    }
  };

  const HandleConfirm = (e) => {
    e.preventDefault();
    if (confirmEdit === false) {
      document.querySelector("#Edicion").innerHTML = "Cancel changes";
      setConfirmEdit(true);
    } else {
      document.querySelector("#Edicion").innerHTML = "Confirm changes";
      setConfirmEdit(false);
    }
  };

  const ConfirmEditLast = async (e) => {
    e.preventDefault();
    const result = await axios({
      method: "put",
      url: `${PATH}/profile/edit`,
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
        button: "Ok",
      });
    } else {
      Swal.fire({
        icon: "succes",
        title: "Succes",
        text: `${result}`,
        button: "Ok",
      });
      window.location.replace("../profile");
    }
  };

  // console.log(history)
  return (
    <div>
      {id ? (
        <>
          <NavBar />
          <div className="lg:flex  lg:items-start pt-11 lg:justify-center min-h-screen h-full w-full gap-8 bg-primary-200 sm:grid sm:items-center sm:justify-center">
            <div className="lg:w-[35rem] lg:p-4  bg-secundary-250 shadow-md sm:w-auto sm:p-2">
              <h1 className="text-2xl font-open font-bold pb-5 capitalize">
                Profile
              </h1>

              {editPerfil === false ? (
                <form className="font-Open">
                  <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 max-w-max">
                    <h2 className="font-semibold"> Name:</h2>
                    <p>{user.name}</p>
                    <h2 className="font-semibold">Last Name:</h2>
                    <p>{user.lastname}</p>
                    <h2 className="font-semibold">Email:</h2>
                    <p>{user.email}</p>
                    <h2 className="font-semibold">Username:</h2>
                    <p>{user.username}</p>
                    <h2 className="font-semibold">Cellphone:</h2>
                    <p>{user.cellphone ? "+" + user.cellphone : "Not found"}</p>
                    <h2 className="font-semibold">Address:</h2>
                    <p>{user.address ? user.address : "Not found"}</p>
                    <h2 className="font-semibold">Image:</h2>
                    <p>
                      {user.image ? (
                        <img
                          className="rounded-full h-20 w-20"
                          src={user.image}
                        />
                      ) : (
                        "Not found"
                      )}
                    </p>
                    <h2 className="font-semibold">Points:</h2>
                    <p>{user.points}</p>
                  </div>
                  <div className=" flex justify-center mt-2">
                  <button
                    id="EditProfile"
                    className="w-auto text-center mt-5 py-3 px-5 rounded bg-primary-400 lg:hover:bg-primary-300 my-1"
                    onClick={(e) => EditPerfil(e)}
                  >
                    Edit Profile
                  </button>
                  </div>
                </form>
              ) : (
                <form className="max-w-4xl p-6 mx-auto rounded-md shadow-md">
                  <div className="text-lg font-semibold capitalize ">
                    <label>Name: </label>
                    <input
                      name="Name"
                      className="block w-full px-4 py-2 mt-2 border rounded-md focus:border-primary-400 focus:ring-primary-400 before:focus:ring-primary-100"
                      value={NameEdit}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {console.log(NameEdit)}
                  </div>
                  <div className="text-lg font-semibold capitalize ">
                    <label>LastName:</label>
                    <input
                      name="Lastname"
                      className="block w-full px-4 py-2 mt-2 border rounded-md focus:border-primary-400 focus:ring-primary-400 before:focus:ring-primary-100"
                      value={LastnameEdit}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                  <div className="text-lg font-semibold capitalize ">
                    <h2>Address:</h2>
                    <input
                      name="Address"
                      className="block w-full px-4 py-2 mt-2 border rounded-md focus:border-primary-400 focus:ring-primary-400 before:focus:ring-primary-100"
                      value={AddressEdit}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="text-lg font-semibold capitalize ">
                    <h2>Phone:</h2>
                    <PhoneInput
                      name="cellphone"
                      country={"ar"}
                      value={CellphoneEdit}
                      onChange={(phone) => setCellphone(phone)}
                    />
                  </div>
                  <div className="text-lg font-semibold capitalize ">
                    <h2>Image:</h2>
                    <p>
                      {ImageUpload ? (
                        <img
                          className="rounded-full h-20 w-20"
                          src={ImageUpload}
                        />
                      ) : (
                        "Not found"
                      )}
                    </p>
                  </div>
                  <input
                    value=""
                    type="file"
                    name="image"
                    id="image"
                    onChange={UploadImage}
                  />
                  <div className="flex row space-x-3">
                    <button
                      className="w-full text-center mt-5 py-3 rounded bg-primary-400 lg:hover:bg-primary-300 my-1"
                      onClick={(e) => DeleteImage(e)}
                    >
                      Erase Image
                    </button>
                  </div>

                  <div className="flex row space-x-3">
                    <button
                      className="w-full text-center mt-5 py-3 rounded bg-primary-400 lg:hover:bg-primary-300 my-1"
                      onClick={(e) => handleChangePassword(e)}
                    >
                      Change Password
                    </button>
                  </div>
                  <button
                    id="Edicion"
                    onClick={(e) => HandleConfirm(e)}
                    className="w-full text-center mt-5 py-3 rounded bg-primary-400 lg:hover:bg-primary-300 my-1"
                  >
                    Done
                  </button>
                  <button
                    id="EditProfile"
                    className="w-full text-center mt-5 py-3 rounded bg-primary-400 lg:hover:bg-primary-300 my-1"
                    onClick={(e) => EditPerfil(e)}
                  >
                    Back to Profile
                  </button>
                  {confirmEdit === true ? (
                    <div className="flex row space-x-3">
                      <h2>Enter your password to confirm changes:</h2>
                      <input
                        placeholder="Enter password"
                        name="Password"
                        className="block w-full px-4 py-2 mt-2 border rounded-md focus:border-primary-400 focus:ring-primary-400 before:focus:ring-primary-100"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        onClick={(e) => ConfirmEditLast(e)}
                        className="w-full text-center mt-5 py-3 rounded bg-primary-400 lg:hover:bg-primary-300 my-1"
                      >
                        Send
                      </button>
                    </div>
                  ) : null}
                </form>
              )}

              {mostrarChangePassword === true ? <ChangePassword /> : null}
            </div>

            {editPerfil === true ? null : (
              <div>
                {Commend.length > 0 ? (
                  <>
                    <CommentPending ComentariosPending={Commend} />{" "}
                  </>
                ) : null}
              </div>
            )}

      

            {editPerfil === true ? null : (
              <div className="p-6 lg:w-[35rem] lg:p-4  bg-secundary-250 shadow-md sm:w-auto sm:p-2 sm:mb-2">
                <h2 className="text-2xl font-open font-bold pb-5 capitalize">
                  Purchase history
                </h2>
                <div className="flex flex-col gap-5">
                  {history[0]?.id ? (
                    <>
                      {history.map((p) => {
                        let total = 0;
                        return (
                          <div>
                            <table className="w-[350px]">
                              <caption className="font-bold">{`#${
                                p.id
                              } - ${p.createdAt.slice(0, -14)}`}</caption>
                              <tbody>
                                {p.products.map((e) => {
                                  total = total + Number(e.price);
                                  return (
                                    <tr className="grid grid-cols-[3fr_1fr_1fr] px-5 py-2 border-t">
                                      <td key={e.id}>{e.name}</td>
                                      <td className="text-center">{e.cant}</td>
                                      <td className="text-center">{`$${e.price}`}</td>
                                    </tr>
                                  );
                                })}
                                <tr>
                                  <th className="text-end border-t">{`Total: $${total}`}</th>
                                </tr>
                              </tbody>

                            </table>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    "No purchases found"
                  )}
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        NoLogin()
      )}
    </div>
  );
}
