import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home/Home.jsx";
import DetailProduct from "./components/DetailProduct/DetailProduct.jsx";
import Categories from "./components/Categories/Categories";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register.jsx";
import Validacion from "./components/ValidateMail/Validacion.jsx"
import HomeAdmin from "./components/Admin/HomeAdmin";
import BuildPc from "./components/BuildPc/BuildPc";

function App() {
  return (
    <div className="Font-Open">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/products/:id" element={<DetailProduct />} exact />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/arma-tu-pc" element={<BuildPc/>}/>
        <Route path="/categories" element={<Categories />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/validate/:username" element={<Validacion />} />
        <Route path="/admin" element={<HomeAdmin/>}/>

        {/* ACA ABAJO PODES CREAR TODAS LAS RUTAS DE PRUEBA QUE QUIERAS */}
      </Routes>
    </div>
  );
}

export default App;
