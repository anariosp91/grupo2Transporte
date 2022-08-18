import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from '../src/components/NavBar'
import Tours from './components/Tours';
import Users from './components/Users'

function App() {
  return (
     <BrowserRouter>
      <NavBar/>
      <Tours columns={['Titulo', 'Descripcion', 'Detalle', 'Imagen']}/>
      <Users columns={['Nombre', 'Apellido', 'Email', 'Detalle', 'Imagen']}/>

     </BrowserRouter> 

       
  );
}

export default App;
