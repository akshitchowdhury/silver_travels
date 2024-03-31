import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
<Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Home />} />
          <Route path='/services' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        
        
      </Router> 
      
      
      {/* <Router>
        <Routes>
         <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Home />} />
          <Route path='/services' element={<Home />} />
          <Route path='/contact' element={<Home />} />

        </Routes>
        <Footer />
      </Router> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
