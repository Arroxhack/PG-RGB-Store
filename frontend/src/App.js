import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home/Home.jsx";
import DetailProduct from "./components/DetailProduct/DetailProduct.jsx";
import Categories from "./components/Categories/Categories";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register.jsx";
import Validacion from "./components/ValidateMail/Validacion.jsx";
import HomeAdmin from "./components/Admin/HomeAdmin";
import BuildPc from "./components/BuildPc/BuildPc";
import Amd from "./components/BuildPc/Amd";
import Intel from "./components/BuildPc/Intel";
import Error from "./components/Error/Error.jsx";
import Pagando from "./components/Paypal/Pagando";
import Profile from "./components/profile/Profile";
import ValidateNewPassword from "./components/profile/ValidateNewPassword.jsx";
import CheckProduct from "./components/BuildPc/CheckProduct";
import CheckoutCart from "./components/Cart/CheckoutCart";
import Gpus from "./components/Gpus/Gpus";

function App() {
  return (
    <div className="Font-Open">
      <Routes>
        <Route path="/paypal" element={<Pagando />} exact />
        <Route path="/" element={<Home />} exact />
        <Route path="/products/:id" element={<DetailProduct />} exact />
        {/* <Route path="/cart" element={<Cart />} /> */}

        <Route path="/arma-tu-pc" element={<BuildPc />} />
   
        <Route path="/cart" element={<CheckoutCart />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/validate/:username" element={<Validacion />} />
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gpus" element={<Gpus/>}/>
        <Route
          path="/resetPassword/:username"
          element={<ValidateNewPassword />}
        />
        <Route path="*" element={<Error />} />

        {/* ACA ABAJO PODES CREAR TODAS LAS RUTAS DE PRUEBA QUE QUIERAS */}
      
      
      </Routes>
    </div>
  );
}

export default App;
