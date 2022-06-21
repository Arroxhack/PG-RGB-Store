import './App.css';
import {Route, Routes} from 'react-router'
import ContainerProduct from './components/ContainerProduct/ContainerProduct';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<ContainerProduct/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
