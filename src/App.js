import "./App.css";
import Landing from "./components/Landing/Landing";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Nav from "./components/Navbar/Nav";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";

function App() {
  const routeClass = {
    class : 'landing',
    class : 'others'
  }

  return (
    <div className="App">

        <Router className="landing">
          <Routes>
            <Route path="/" element={<Landing />} />
            
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
