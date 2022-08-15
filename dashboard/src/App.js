import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from '../src/components/NavBar'

function App() {
  return (
     <BrowserRouter>
      <NavBar/>
     </BrowserRouter> 
  );
}

export default App;
