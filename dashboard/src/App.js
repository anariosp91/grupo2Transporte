import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from '../src/components/NavBar';
import ContentWrapper from './components/ContentMiddle';
import Footer from './components/Footer';

function App() {
  return (
     <BrowserRouter>
        <NavBar />
        <ContentWrapper />
        {/* <Footer /> */}
     </BrowserRouter> 
  );
}

export default App;
