import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router";
function ForgotPassword() {
  const [errors, setErrors] = useState("");
  const [Verify, setVerify] = useState(false);
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [token, setSecretToken] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [newPasswordValidate, setNewPasswordValidate] = useState("");
  const navigate = useNavigate();

  const PATH = 'https://pg-rgb-store-backend-production.up.railway.app'

  const HandleSendToken = async (e) => {
    e.preventDefault();
    // if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)) {
    //   return setErrors("Tienes que poner un Email para Seguir");
    // }
    document.querySelector("#token").innerHTML = "Sending...";
    const result = await axios({
      method: "post",
      url: `${PATH}/sendTokenResetPassword`,
      data: { email }, // email
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
    }).then((e) => e.data);
    if (result[0] === "E" && result[1] === "r" && result[2] === "r") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${result}`,
        button: "Ok",
      });
      document.querySelector("#token").innerHTML = "Send Token";
    } else {
      Swal.fire({
        icon: "succes",
        title: "Email Sent",
        text: `${result}`,
        button: "Ok",
      }).then(() => setVerify(true));
      document.querySelector("#token").innerHTML = "Send Token";
      setState(" ");
    }
  };

  const handleChange = async (e) => {
    e.preventDefault();
    document.querySelector("#change").innerHTML = "Changing password";
    if (NewPassword !== newPasswordValidate) {
      return Swal.fire({
        icon: "warning",
        title: "Error",
        text: `The password must be the same`,
        button: "Ok",
      });
    }
    const result = await axios({
      method: "put",
      url: `${PATH}/resetForgotPassword`,
      data: { email, NewPassword, token }, // email
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
    }).then((e) => e.data);
    if (result[0] === "E" && result[1] === "r" && result[2] === "r") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${result}`,
        button: "Ok",
      });
      document.querySelector("#change").innerHTML = "Change Password";
    } else {
      Swal.fire({
        icon: "success",
        title: "Password authorization completed",
        text: `${result}`,
        button: "Ok",
      }).then(() => {
        setVerify(false);
        navigate("/");
      });
      document.querySelector("#change").innerHTML = "Change Password";
      setState(" ");
    }
  };

  return (
    <div className="overflow-clip">
      <NavBar />
      <div className=" flex flex-col items-center justify-center min-h-screen h-screen bg-primary-200">
        <div className="bg-secundary-250 px-6 py-8 rounded shadow-md text-black">
          <form className="flex flex-col justify-center items-center sm:w-80 sm:h-80">
            {Verify === false ? (
              <>
                <div className="flex flex-col items-center justify-center gap-1">
                  <label>Enter your email:</label>
                  <input
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {errors ? (
                  <p /* style={{color: "red"}} */ className="bg-secundary-50">
                    {Swal.fire({
                      icon: "error" / "success",
                      title: "Error",
                      text: errors,
                      button: "Ok",
                    }).then(() => window.location.reload())}
                  </p>
                ) : null}{" "}
                {/* si hay errores salen aca */}
                <button
                  id="token"
                  type="submit"
                  onClick={(e) => HandleSendToken(e)}
                  className="w-full text-center py-3 rounded bg-primary-400 text-white hover:bg-primary-300 focus:outline-none my-1"
                >
                  Send Token
                </button>
                <div id="signInDiv"></div>
                <br />
              </>
            ) : (
              <>
                <div className="flex flex-col items-center justify-center gap-1">
                  <label>Enter your Token:</label>
                  <input
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    type="text"
                    value={token}
                    onChange={(e) => setSecretToken(e.target.value)}
                  />
                </div>
                <div
                  className=" w-1/3 h-96  border-white border-2 gap-6 rounded-md flex flex-col justify-center items-center
            sm:w-80 sm:h-80  "
                >
                  <input
                    className="border-2 border-primary-400 rounded max-w-max  "
                    value={NewPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter New Password"
                  />
                  <input
                    className="border-2 border-primary-400 rounded max-w-max  "
                    value={newPasswordValidate}
                    onChange={(e) => setNewPasswordValidate(e.target.value)}
                    placeholder="Repeat New Password"
                  />
                </div>

                <button
                  id="change"
                  className="w-full text-center py-3 rounded bg-primary-400 text-white hover:bg-primary-300 focus:outline-none my-1"
                  onClick={(e) => handleChange(e)}
                >
                  Change Password
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
