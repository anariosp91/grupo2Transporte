import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from '../src/components/NavBar';
import ContentWrapper from './components/ContentWrapper';

function App() {
  return (
     <BrowserRouter>
        <NavBar />
        <ContentWrapper />
     </BrowserRouter> 
  );
}

export default App;
