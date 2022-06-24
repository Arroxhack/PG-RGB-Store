import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { verify } from '../../redux/actions';
import { useNavigate } from 'react-router';
import jwt_decode from "jwt-decode";



export default function LogIn() {
let navigate = useNavigate()
const [userName, setUsername] = useState("")
const [password, setPassword] = useState("")

/* 
Hacer ruta get de que si esta el mail que le haga login y si no que lo haga registrarse, que lo mande a la ruta del register.
*/

const handleLoginSubmit = async(e) => {
  e.preventDefault();
  let userLogin = {username: userName, password: password}
  const user = await axios({
    method: "post",
    url: "http://localhost:3001/login",
    data: userLogin, // objeto que tiene {username, password}
    headers: { "X-Requested-With": "XMLHttpRequest" },
    withCredentials: true,
  })
  .then((data) => data.data)
  .catch(e => console.log(e))
  let {login, lastname, image, username, email, cellphone, name} = user;
  if(login){
    localStorage.setItem("username", username);
    localStorage.setItem("name", name);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("login", login);
    localStorage.setItem("email", email);
    setUsername("");
    setPassword("");
    navigate("/");
  }
  else{
    setUsername("");
    setPassword("");
  }
}


function handleCallbackResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
  var userObject = jwt_decode(response.credential);
  console.log(userObject);
 /*  setUsername */
}
useEffect(() => {
  /* global google */
  google.accounts.id.initialize({
    client_id:  "40192132874-9l8jidbuvjeqfq497io9jlom3oh1uulg.apps.googleusercontent.com",
    callback: handleCallbackResponse  
  });

  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {theme: "outline", size: "large"}
  );
}, []);

return (
      <div className=' flex flex-col items-center justify-center min-h-screen '>
        <form className=' w-1/3 h-96  border-white border-2 gap-6 rounded-md flex flex-col justify-center items-center
        sm:w-80 sm:h-80  ' onSubmit={(e) => handleLoginSubmit(e)}>
          <div>
          <img className='w-16' src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg" alt="avatar" />
          </div>
          <div className='flex flex-col items-center justify-center gap-1'>
            <input className='border-2 border-primary-400 rounded max-w-max  '
            type='text'
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
          <button type='submit' className='hover:bg-primary-400 rounded-xl w-24 text-xl items-center' >
            Login
          </button>
        </form>
        <div id="signInDiv"></div>
      </div>
    )
}



