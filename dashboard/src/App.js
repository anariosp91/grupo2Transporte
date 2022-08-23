import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from '../src/components/NavBar';
import ContentMiddle from './components/ContentMiddle';

function App() {
  return (
     <BrowserRouter>
        <NavBar />
        <ContentMiddle />
     </BrowserRouter> 
  );
}

export default App;
