import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { verify } from "../../redux/actions";
import { useNavigate } from "react-router";
import jwt_decode from "jwt-decode";
import NavBar from "../NavBar/NavBar";
import Swal from "sweetalert2";

export default function LogIn() {
  let navigate = useNavigate();
  const cartProductArray = localStorage.getItem('cartProducts');
  console.log(cartProductArray, ' soy cartttttt')
  const [userName, setUsername] = useState(""); // Llega del input del form username al hacer submit.
  const [password, setPassword] = useState(""); // Llega del input del form password al hacer submit.
  const [googleUser, setGoogleUser] = useState({});
  const [errors, setErrors] = useState("");
  const refresh = () => {
    window.location.reload(false);
  };
 
  const ResendEmail = async (email) => {
    const result = await axios({
      method: "post",
      url: "https://proyecto-grupal-rgb.herokuapp.com/resendEmailLogin",
      data: { email }, // email
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
    });
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
      navigate(`/`);
    }
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    let userLogin = { username: userName, password: password }; // Creo este objeto userLogin con la info de mi estado local.

    const user = await axios({
      //La ruta trae toda la info en la base de datos de un usuario
      method: "post",
      url: "https://proyecto-grupal-rgb.herokuapp.com/login",
      data: userLogin, // objeto que tiene {userName y password}
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
    })
      .then((data) => data.data)
      .catch((e) => console.log(e));

    let { login, lastname, verify, username, email, permissions, name, id } =
      user; //Info que trae la ruta
    if (verify === false) {
      Swal.fire({
        icon: "error" / "success",
        title: "Error",
        text: "Su Cuenta no esta verificada, sera redirigido a una pagina para verificar su correo electronico",
        button: "Aceptar",
      });
      ResendEmail(email);
      return navigate(`/validate/${username}`);
    }
    
    if (login) {
      
      console.log(' soy yo rey')
        const email = user.email;
        const response = await axios({
          //La ruta trae toda la info en la base de datos de un usuario
          method: "post",
          url: "https://proyecto-grupal-rgb.herokuapp.com/userCart",
          data: {email,cartProductArray}, // 
          headers: { "X-Requested-With": "XMLHttpRequest" },
          withCredentials: true,
        }).then((res)=> res.data).catch(e=>console.log(e));

        const ress = await Promise.all([response]);

        if(ress[0] === "E" && ress[1] === "r" && ress[2] === "r"){
          Swal.fire({
            icon: "error",
            title: "Error",
            text: `User blocked`,
            button: "Aceptar",
          }).then(()=> {return navigate('/login')})
        }else{
          localStorage.setItem("username", username); //Seteo lo que trajo la ruta al localstorage
          localStorage.setItem("name", name);
          localStorage.setItem("lastname", lastname);
          localStorage.setItem("login", login);
          localStorage.setItem("email", email);
          localStorage.setItem("id", id);
          if (permissions === true) {
            localStorage.setItem("admin", permissions);
          }
          setUsername(""); //Reseteo mis estados locales
          setPassword("");
          navigate("/");
        }
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
      .get(`https://proyecto-grupal-rgb.herokuapp.com/googleLogin?googleMail=${userObject.email}`)
      .then((data) => data.data)
      .catch((e) => console.log(e));
    // let userData = user.data
    console.log("user: ", user);

    if (user?.lock) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `User blocked`,
        button: "Aceptar",
      }).then(()=> {return navigate('/login')})
    } else{
      if (user) {
       
        const email = user.email;
        const response = await axios({
          //La ruta trae toda la info en la base de datos de un usuario
          method: "post",
          url: "https://proyecto-grupal-rgb.herokuapp.com/userCart",
          data: {email,cartProductArray}, // 
          headers: { "X-Requested-With": "XMLHttpRequest" },
          withCredentials: true,
        }).then((res)=> res.data);

        if(response[0] === "E" && response[1] === "r" && response[2] === "r"){
          Swal.fire({
            icon: "error",
            title: "Error",
            text: `User blocked`,
            button: "Aceptar",
          }).then(()=> {return navigate('/login')})
        }else{
          localStorage.setItem("username", user.username);
          localStorage.setItem("name", user.name);
          localStorage.setItem("lastname", user.lastname);
          localStorage.setItem("login", true);
          localStorage.setItem("email", user.email);
          localStorage.setItem("id", user.id);
          if (user.permissions === true) {
            localStorage.setItem("admin", user.permissions);
          }
          navigate("/");
        }
      } else {
        Swal(
          "El email asociado a la cuenta de google no coincide con ningun usuario registrado",
          "...redirigiendo para registrarse como un nuevo usuario!"
        ); // sweet alert
        navigate("/register");
      }
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
    <div className="overflow-clip">
      <NavBar />
      <div className=" flex flex-col items-center justify-center min-h-screen h-screen bg-primary-200">
        <div className="bg-secundary-250 px-6 py-8 rounded shadow-md text-black">
          <form
            className="flex flex-col justify-center items-center sm:w-80 sm:h-80"
            onSubmit={(e) => handleLoginSubmit(e)}
          >
            <div>
           
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="text"
                value={userName}
                name="Username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="password"
                value={password}
                name="Password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errors ? (
              <p /* style={{color: "red"}} */ className="bg-secundary-50">
                {Swal.fire({
                  icon: "error" / "success",
                  title: "Error",
                  text: errors,
                  button: "Aceptar",
                }).then(() => refresh())}
              </p>
            ) : null}{" "}
            {/* si hay errores salen aca */}
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-primary-400 text-white hover:bg-primary-300 focus:outline-none my-1"
            >
              Login
            </button>
            <div id="signInDiv"></div>
            <br />
            <div className="t-6">
              {`Don't have an account yet? `}
              <a className="no-underline border-b" href="../register/">
                {`Sign Up`}
              </a>
              .
            </div>
          </form>
        </div>
        {/*        { googleUser && 
          <div>
            <img src={googleUser.picture} alt="User"/>
            <h3>{googleUser.name}</h3>
            <h3>{googleUser.email}</h3>
          </div>
        } */}
      </div>
    </div>
  );
}