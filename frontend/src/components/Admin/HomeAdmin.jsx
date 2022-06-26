import React from "react";
import Menu from "./Menu/Menu";
import Error from "../Error/Error";

const HomeAdmin = () => {
  const admin = localStorage.getItem("admin");
  return (
    <>
      {admin ? (
        <div className="bg-primary-200 h-screen w-60">
          {" "}
          <Menu />{" "}
        </div>
      ) : (
        <Error />
      )}
    </>
  );
};

export default HomeAdmin;
