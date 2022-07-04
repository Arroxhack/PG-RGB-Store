import React, { useState } from "react";
import { validate, regexPass, regexEmail } from "./Validations";
import { PostUser } from "../../redux/actions";
import { useNavigate } from "react-router";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import Swal from "sweetalert2";
export default function Register() {
  let navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    passwordValidate: "",
  });

  const { name, lastname, username, password, email, passwordValidate } = user;

  const handleOnChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...user,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      lastname.length === 0 ||
      username.length === 0 ||
      email.length === 0 ||
      password.length === 0
    ) {
      Swal.fire({
        icon: "warning",
        title: "Algo Salio Mal",
        text: "FILL IN THE BLANKS!",
        button: "Aceptar",
      });
    } else if (name.length <= 3) {
      Swal.fire({
        icon: "warning",
        title: "Algo Salio Mal",
        text: "NAME HAS TO BE AT LEAST 3 LETTERS",
        button: "Aceptar",
      });
    } else if (!/^[a-zA-Z\s]*$/.test(lastname)) {
      Swal.fire({
        icon: "warning",
        title: "Algo Salio Mal",
        text: "LASTNAME HAS TO BE ONLY LETTERS",
        button: "Aceptar",
      });
    } else if (username.length <= 3) {
      Swal.fire({
        icon: "warning",
        title: "Algo Salio Mal",
        text: "USERNAME HAS TO BE AT LEAST 3 LETTERS",
        button: "Aceptar",
      });
    } else if (!regexEmail.test(email)) {
      Swal.fire({
        icon: "warning",
        title: "Algo Salio Mal",
        text: "FORMAT HAS TO BE EMAIL",
        button: "Aceptar",
      });
    } else if (!regexPass.test(password)) {
      Swal.fire({
        icon: "warning",
        title: "Algo Salio Mal",
        text: "INVALID PASSWORD",
        button: "Aceptar",
      });
    } else if (password !== passwordValidate) {
      Swal.fire({
        icon: "warning",
        title: "Algo Salio Mal",
        text: "PASSWORDS HAS TO BE EQUAL",
        button: "Aceptar",
      });
    } else if (
      /^[a-zA-Z\s]*$/.test(lastname) &&
      /^[a-zA-Z\s]*$/.test(name) &&
      /^[a-zA-Z\s]*$/.test(username) &&
      regexEmail.test(email) &&
      regexPass.test(password) &&
      password === passwordValidate
    ) {
      const UserRegister = await axios({
        method: "post",
        url: "https://proyecto-grupal-rgb.herokuapp.com/register",
        data: user,
        headers: { "X-Requested-With": "XMLHttpRequest" },
        withCredentials: true,
      })
        .then((e) => e.data)
        .catch((e) => console.log(e));
      if (
        UserRegister[0] === "E" &&
        UserRegister[1] === "r" &&
        UserRegister[2] === "r"
      ) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `${UserRegister}`,
          button: "Aceptar",
        });
      } else {
        navigate(`/validate/${UserRegister.username}`);
      }
      setUser({
        name: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        passwordValidate: "",
        address: "ejemplo",
      });
    }
  };

  return (
    <section className="bg-primary-200 overflow-clip">
    <div className="w-screen h-full bg-primary-200 font-Open min-h-screen flex flex-col">
      <NavBar />
      <div className="container bg-primary-200 max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-secundary-250 px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              {errors.name && <p>{errors.name}</p>}
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                onChange={handleOnChange}
              />
              <label>Lastname</label>
              {errors.lastname && <p>{errors.lastname}</p>}
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="text"
                placeholder="Lastname"
                value={lastname}
                name="lastname"
                onChange={handleOnChange}
              />
              <label>Username</label>
              {errors.username && <p>{errors.username}</p>}
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="text"
                placeholder="Username"
                value={username}
                name="username"
                onChange={handleOnChange}
              />
              <label>Email</label>
              {errors.email && <p>{errors.email}</p>}
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="text"
                placeholder="Email"
                value={email}
                name="email"
                onChange={handleOnChange}
              />
              <label>Password</label>
              {errors.password && <p>{errors.password}</p>}
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="password"
                placeholder="Password"
                value={password}
                name="password"
                onChange={handleOnChange}
              />
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="password"
                placeholder="Password"
                value={passwordValidate}
                name="passwordValidate"
                onChange={handleOnChange}
              />
              <button
                className="w-full text-center py-3 rounded bg-primary-400 text-white hover:bg-primary-300 focus:outline-none my-1"
                type="submit"
              >
                {" "}
                Submit{" "}
              </button>
            </div>
            <div className="t-6">
              Already have an account?
              <a className="no-underline border-b" href="../login/">
                Log in
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
}
