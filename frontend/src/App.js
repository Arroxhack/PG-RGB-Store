import './App.css';
import {Route, Routes} from 'react-router'
import ContainerProduct from './components/ContainerProduct/ContainerProduct';


function App() {
  return (
    <div>
      <h1>Henry</h1>
      <Routes>
      <Route path='/' element={<ContainerProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
