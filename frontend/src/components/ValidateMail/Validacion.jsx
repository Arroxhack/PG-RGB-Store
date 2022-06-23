import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import transporter from "../../Nodemailer/Config";

export const Verificade = await transporter.sendMail({
    from: 'rgbstore0@gmail.com', // sender address
    to: email, // list of receivers
    subject: "Verification ✔", // Subject line
    html: `<b>Hola, Aca esta tu codigo de Verificacion! ${token}</b>`, // html body
  });


export default  function Validations() {
  const navigate = useNavigate()
  const [token,setToken] = useState("");
  let { username } = useParams();


  async function HandleSubmit(e){
e.preventDefault()
const UserRegister = await axios({
  method: "post",
  url: `http://localhost:3001/register/verify/${username}`,
  data: token,
  headers: { "X-Requested-With": "XMLHttpRequest" },
  withCredentials: true,
})
  .then((e) => e.data)
  .catch((e) => console.log(e));
  if (UserRegister == "Correctly edit"){
    navigate("/")
  } else {
    alert("The Token is not correctly")
  }
}


  return (
    <div>
      <h3>Enter a token is will send to mail:</h3>
      <input value={token} onChange={(e)=> setToken(e.target.value)}/>
      <button onClick={(e)=> HandleSubmit(e)}>Send</button>
    </div>
  )
}
