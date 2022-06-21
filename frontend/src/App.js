import "./App.css";
import { Route, Routes } from "react-router";
import ContainerProduct from "./components/ContainerProduct/ContainerProduct";
import Home from "./components/Home";
import DetailProduct from "./components/DetailProduct";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <div>
      <h1>Henry</h1>
      <Routes>
        <Route path="/" element={<ContainerProduct />} />
        <Route path="/home" element={<Home />} exact />
        <Route path="/products/:id" element={<DetailProduct />} exact />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
