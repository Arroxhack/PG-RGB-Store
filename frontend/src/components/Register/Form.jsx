import React, { useState } from "react";
import { validate, regexPass, regexEmail } from "./Validations";
import { PostUser } from "../../redux/actions";
import { useNavigate } from "react-router";
import axios from "axios";
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
      alert("FILL IN THE BLANKS!"); //REVISAR SWEET ALERT
    } else if (name.length <= 3) {
      alert("NAME HAS TO BE AT LEAST 3 LETTERS");
    } else if (!/^[a-zA-Z\s]*$/.test(lastname)) {
      alert("LASTNAME HAS TO BE ONLY LETTERS");
    } else if (!/^[a-zA-Z\s]*$/.test(username)) {
      alert("USERNAME HAS TO BE ONLY LETTERS");
    } else if (!regexEmail.test(email)) {
      alert("FORMAT HAS TO BE EMAIL");
    } else if (!regexPass.test(password)) {
      alert("INVALID PASSWORD");
    } else if (password !== passwordValidate) {
      alert("PASSWORDS HAS TO BE EQUAL");
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
        url: "http://localhost:3001/register",
        data: user,
        headers: { "X-Requested-With": "XMLHttpRequest" },
        withCredentials: true,
      })
        .then((e) => e.data)
        .catch((e) => console.log(e));
      console.log(UserRegister);
      if (UserRegister) {
        localStorage.setItem("user", UserRegister);
        navigate(`/validate/${UserRegister.username}`);
      } else {
        console.log("Hubo un error en el registro intentalo de nuevo");
      }

      //       export function PostUser(user) {
      //   return async function () {
      //     try{
      //       const exit = await axios.post(`${PATH}/register`,user)
      //       if (exit.data){
      //         alert("Register Succesfully")
      //       }
      //      }catch(e){
      //       console.log("Error in Register")
      //   }
      //   }
      // }
      //CHECKEAR NODEMAILER!!!https://www.youtube.com/watch?v=KjheexBLY4A
      //https://nodemailer.com/about/
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={handleOnChange}
        />
        <label>Lastname</label>
        <input
          type="text"
          placeholder="Lastname"
          value={lastname}
          name="lastname"
          onChange={handleOnChange}
        />
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          name="username"
          onChange={handleOnChange}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          value={email}
          name="email"
          onChange={handleOnChange}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          name="password"
          onChange={handleOnChange}
        />
        <input
          type="password"
          placeholder="password"
          value={passwordValidate}
          name="passwordValidate"
          onChange={handleOnChange}
        />
        <button type="submit"> Submit </button>
      </form>
      <div>
        {errors.name && <p>{errors.name}</p>}
        {errors.lastname && <p>{errors.lastname}</p>}
        {errors.username && <p>{errors.username}</p>}
        {errors.email && <p>{errors.email}</p>}
        {errors.password && <p>{errors.password}</p>}
      </div>
    </div>
  );
}
