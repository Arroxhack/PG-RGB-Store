import "./App.css";
import { Route, Routes } from "react-router";
import ContainerProduct from "./components/ContainerProduct/ContainerProduct";
import Home from "./components/Home/Home.jsx";
import DetailProduct from "./components/DetailProduct/DetailProduct.jsx";
import Cart from "./components/Cart/Cart";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register.jsx"
function App() {
  return (
    <div className='Font-Open'>
      <Routes>
        <Route path="/" element={<ContainerProduct />} />
        <Route path="/home" element={<Home />} exact />
        <Route path="/products/:id" element={<DetailProduct />} exact />
        <Route path="/cart" element={<Cart />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;

