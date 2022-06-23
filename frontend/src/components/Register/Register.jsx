import Form from "./Form";
import React, { useState,useEffect } from "react";

export default function Register() {
  return (
    <div className="bg-primary-200 h-screen flex flex-col align">
      <h2>Formulario:</h2>
      <div className="">
      <Form />
      </div>
    </div>
  );
}
