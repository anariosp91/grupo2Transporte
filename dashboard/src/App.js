import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from '../src/components/NavBar';
import Footer from './components/Footer';
import ContentMiddle from './components/ContentMiddle';

function App() {
  return (
     <BrowserRouter>
        <NavBar />
        <ContentMiddle />
        {/* <Footer /> */}
     </BrowserRouter> 
  );
}

export default App;
