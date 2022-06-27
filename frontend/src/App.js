<<<<<<< HEAD
import './App.css';
import { Route, Routes } from 'react-router';
import ContainerProduct from './components/ContainerProduct/ContainerProduct';
import Home from './components/Home/Home.jsx';
import DetailProduct from './components/DetailProduct/DetailProduct.jsx';
import Cart from './components/Cart/Cart';
import Categories from './components/Categories/Categories';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register.jsx';
import Product from './components/Product/Product';
// import Validacion from './components/ValidateMail/Validacion.jsx';
import HomeAdmin from './components/Admin/HomeAdmin';
import BuildPc from './components/BuildPc/BuildPc';
import Profile from './components/User/Profile';
import Validations from './redux/ValidateMail/Validacion';
=======
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
import Paypal from "./components/Paypal/Paypal";

>>>>>>> c965c43f8b38345f64c41c514b903c58c6f39f3d

function App() {
  return (
    <div className='Font-Open'>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Home />} exact />
        <Route path='/products/:id' element={<DetailProduct />} exact />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path='/arma-tu-pc' element={<BuildPc />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/logIn' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/validate/:username' element={<Validations />} />
        <Route path='/admin' element={<HomeAdmin />} />
        <Route path='/profile/:username' element={<Profile />} />
=======
        <Route path="/paypal" element={<Paypal />} exact/>
        <Route path="/" element={<Home />} exact />
        <Route path="/products/:id" element={<DetailProduct />} exact />
        {/* <Route path="/cart" element={<Cart />} /> */}

        <Route path="/arma-tu-pc" element={<BuildPc/>}/>
        <Route path="/arma-tu-pc/amd" element={<Amd/>}/>
        <Route path="/arma-tu-pc/intel" element={<Intel/>}/>

        <Route path="/categories" element={<Categories />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/validate/:username" element={<Validacion />} />
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="*" element={<Error />} />

>>>>>>> c965c43f8b38345f64c41c514b903c58c6f39f3d
        {/* ACA ABAJO PODES CREAR TODAS LAS RUTAS DE PRUEBA QUE QUIERAS */}
      </Routes>
    </div>
  );
}

export default App;
