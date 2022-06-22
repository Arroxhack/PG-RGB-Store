import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';




export default function LogIn() {
let navigate = useNavigate()
const [userName, setUsername] = useState("")
const [password, setPassword] = useState("")
const dispatch = useDispatch()
// const verifyUser = useSelector(state => state.verifyUser) // {} -> {usernameCargado}

 /*  {
          login:true
          lastname:
          image:
          username:
          mail:
          celphone:
          name:
      } */


const handleLoginSubmit = async(e) => {
  e.preventDefault();
  console.log("This is submit");
  // dispatch(verify(userName, password));
  // console.log(verifyUser);
  let userLogin = {username: userName, password: password}
  const user = await axios({
    method: "post",
    url: "http://localhost:3001/login",
    data: userLogin,
    headers: { "X-Requested-With": "XMLHttpRequest" },
    withCredentials: true,
  })
  .then((data) => data.data)
  .catch(e => console.log(e))
  let {login, lastname, image, username, email, cellphone, name} = user;
  localStorage.setItem("username", username);
  localStorage.setItem("name", name);
  localStorage.setItem("lastname", lastname);
  localStorage.setItem("login", login);
  localStorage.setItem("email", email);
  if(login == true){
    setUsername("");
    setPassword("");
    navigate("/home");
  }
}

  return (
/*     <div className="container">
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
            LogIn
        </button>
    </div> */
    <div className='min-h-screen'>
      <form onSubmit={(e) => handleLoginSubmit(e)}>
        <div>
          <input 
          type='text'
          value={userName}
          name='Username'
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input 
          type='password' 
          value={password}
          name='Password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' >
          Login
        </button>
      </form>
    </div>
  )
}
