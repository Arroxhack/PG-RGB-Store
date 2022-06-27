import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { verify } from "../../redux/actions";
import { useNavigate } from "react-router";
import jwt_decode from "jwt-decode";
import Swal from 'sweetalert2'


export default function LogIn() {
  let navigate = useNavigate();
  const [userName, setUsername] = useState(""); // Llega del input del form username al hacer submit.
  const [password, setPassword] = useState(""); // Llega del input del form password al hacer submit.
  const [googleUser, setGoogleUser] = useState({});
  const [errors, setErrors] = useState("");
  const refresh = () => {
    window.location.reload(false);
  };
  const ResendEmail = async (email) => {
    console.log(email);
    await axios({
      method: "post",
      url: "http://localhost:3001/resendEmailLogin",
      data: { email }, // email
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
    });
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    let userLogin = { username: userName, password: password }; // Creo este objeto userLogin con la info de mi estado local.

    const user = await axios({
      //La ruta trae toda la info en la base de datos de un usuario
      method: "post",
      url: "http://localhost:3001/login",
      data: userLogin, // objeto que tiene {userName y password}
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
    })
      .then((data) => data.data)
      .catch((e) => console.log(e));

    let { login, lastname, verify, username, email, permissions, name, id } =
      user; //Info que trae la ruta
    if (verify === false) {
      swal.fire({
        icon: "error" / "success",
        title: "Error",
        text: "Su Cuenta no esta verificada, sera redirigido a una pagina para verificar su correo electronico",
        button: "Aceptar",
      });
      ResendEmail(email);
      return navigate(`/validate/${username}`);
    }
    if (login) {
      localStorage.setItem("username", username); //Seteo lo que trajo la ruta al localstorage
      localStorage.setItem("name", name);
      localStorage.setItem("lastname", lastname);
      localStorage.setItem("login", login);
      localStorage.setItem("email", email);
      localStorage.setItem("id", id);
      localStorage.setItem("admin", permissions);
      setUsername(""); //Reseteo mis estados locales
      setPassword("");
      navigate("/");
    } else {
      //Si no trae login quiere decir que no esta autenticado el usuario
      setErrors(user);
      setUsername("");
      setPassword("");
    }
  };

  /* Desde aca arranca google */

  async function handleCallbackResponse(response) {
    // al hacer click en el boton se ejecuta esta funcion
    // console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential); // -> objeto con propiedades del usuario, usamos propiedad email
    console.log("userObject: ", userObject);
    setGoogleUser(userObject);
    let user = await axios
      .get(`http://localhost:3001/googleLogin?googleMail=${userObject.email}`)
      .then((data) => data.data)
      .catch((e) => console.log(e));
    // let userData = user.data
    console.log(user);
    if (user) {
      localStorage.setItem("username", user.username);
      localStorage.setItem("name", user.name);
      localStorage.setItem("lastname", user.lastname);
      localStorage.setItem("login", true);
      localStorage.setItem("email", user.email);
      navigate("/");
    } else {
      swal(
        "El email asociado a la cuenta de google no coincide con ningun usuario registrado",
        "...redirigiendo para registrarse como un nuevo usuario!"
      ); // sweet alert
      navigate("/register");
    }
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "40192132874-9l8jidbuvjeqfq497io9jlom3oh1uulg.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen ">
      <form
        className=" w-1/3 h-96  border-white border-2 gap-6 rounded-md flex flex-col justify-center items-center
        sm:w-80 sm:h-80  "
        onSubmit={(e) => handleLoginSubmit(e)}
      >
        <div>
          <img
            className="w-16"
            src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg"
            alt="avatar"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <input
            className="border-2 border-primary-400 rounded max-w-max  "
            type="text"
            value={userName}
            name="Username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="border-2 border-primary-400 rounded max-w-max  "
            type="password"
            value={password}
            name="Password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errors ? (
          <p /* style={{color: "red"}} */ class="bg-secundary-50">
            {swal
              .fire({
                icon: "error" / "success",
                title: "Error",
                text: errors,
                button: "Aceptar",
              })
              .then(() => refresh())}
          </p>
        ) : null}{" "}
        {/* si hay errores salen aca */}
        <button
          type="submit"
          className="hover:bg-primary-400 rounded-xl w-24 text-xl items-center"
        >
          Login
        </button>
      </form>
      <div id="signInDiv"></div>
      {/*        { googleUser && 
          <div>
            <img src={googleUser.picture} alt="User"/>
            <h3>{googleUser.name}</h3>
            <h3>{googleUser.email}</h3>
          </div>
        } */}
    </div>
  );
}
