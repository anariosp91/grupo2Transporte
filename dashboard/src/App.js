import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from '../src/components/NavBar'
import ToursList from './components/Page';

function App() {
  return (
     <BrowserRouter>
      <NavBar/>
      <Page/>
     </BrowserRouter> 
  );
}

export default App;
