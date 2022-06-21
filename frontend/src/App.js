import './App.css';
import {Route, Routes} from 'react-router'
import ContainerProduct from './components/ContainerProduct/ContainerProduct';
import Home from "./components/Home"
import DetailProduct from "./components/DetailProduct"

function App() {
  return (
    <div>
      <h1>Henry</h1>
      <Routes>
      <Route path='/' element={<ContainerProduct/>}/>
      <Route path='/home' element={<Home/>} exact />
      <Route path='/products/:id' element={<DetailProduct/>} exact/>
      </Routes>
    </div>
  );
}

export default App;
