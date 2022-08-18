import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from '../src/components/NavBar'
import Tours from './components/Tours';

function App() {
  return (
     <BrowserRouter>
      <NavBar/>
      <Tours columns={['Titulo', 'Descripcion', 'Detalle', 'Imagen']}/>
     </BrowserRouter> 
  );
}

export default App;
