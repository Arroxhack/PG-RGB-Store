import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const username = window.atob(localStorage.getItem("username"));
  return (
    <div className="text-secundary-100">
      <div>
        <div className="flex flex-col items-center pb-16 pt-10">
          <p>Admin panel</p>
          <p>Welcome back:</p>
          <p className="uppercase">{username}</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-secundary-100 h-[1px] w-[150px] my-3"></div>
        <Link to="/admin/list-products">
          <h3
            value="create-product"
            className="hover:bg-primary hover:text-primary-200 px-5 cursor-pointer"
          >
            Product list
          </h3>
        </Link>
        <div className="bg-secundary-100 h-[1px] w-[150px] my-3"></div>
        <Link to="/admin/question-answer">
          <h3
            value="question-answer"
            className="hover:bg-primary hover:text-primary-200 px-5 cursor-pointer"
          >
            Questions & answers
          </h3>
        </Link>
        <div className="bg-secundary-100 h-[1px] w-[150px] my-3"></div>
        <Link to="/admin/create-admin">
          <h3
            value="create-admin"
            className="hover:bg-primary hover:text-primary-200 px-8 cursor-pointer"
          >
            Create admin
          </h3>
        </Link>
        <div className="bg-secundary-100 h-[1px] w-[150px] my-3"></div>
        <Link to="/admin/edit-user">
          <h3
            value="edit-user"
            className="hover:bg-primary hover:text-primary-200 px-7 cursor-pointer"
          >
            Edit user
          </h3>
        </Link>
        <div className="bg-secundary-100 h-[1px] w-[150px] my-3"></div>
      </div>
    </div>
  );
};

export default Menu;
