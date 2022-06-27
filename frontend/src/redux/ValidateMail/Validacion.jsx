import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Validations() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  let { username } = useParams();

  async function HandleSubmit(e) {
    e.preventDefault();
    console.log("ACAAAAAAAAA");
    console.log(token);
    const UserRegister = await axios({
      method: "put",
      url: `http://localhost:3001/register/verify`,
      data: { token, username },
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
    })
      .then((e) => e.data)
      .catch((e) => console.log(e));
    if (UserRegister?.validate === true) {
      let { login, lastname, image, username, email, cellphone, name } =
        UserRegister.user;
      localStorage.setItem("username", username);
      localStorage.setItem("name", name);
      localStorage.setItem("lastname", lastname);
      localStorage.setItem("login", login);
      localStorage.setItem("email", email);
      navigate("/");
    } else {
      alert("The Token is not correctly");
    }
  }

  return (
    <div>
      <h3>Enter a token is will send to mail:</h3>
      <input value={token} onChange={(e) => setToken(e.target.value)} />
      <button onClick={(e) => HandleSubmit(e)}>Send</button>
    </div>
  );
}
