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
import PicFlow from "./components/Gallery/PicFlow/PicFlow";
import TripMemories from "./components/Gallery/Memories/Kashmir/TripMemories";
import Kasmir from "./components/Gallery/Memories/Kashmir/Kasmir";
import GoldenTriangle from "./components/Gallery/Memories/Kashmir/GoldenTriangle";
import Andaman from "./components/Gallery/Memories/Kashmir/Andaman";
import Kerela from "./components/Gallery/Memories/Kashmir/Kerela";
import Rajasthan from "./components/Gallery/Memories/Kashmir/Rajasthan";
import Singapore from "./components/Gallery/Memories/Kashmir/Singapore";
import Northeast from "./components/Gallery/Memories/Kashmir/Northeast";

function App() {
  const routeClass = {
    class : 'landing',
    class : 'others'
  }

  return (
    <div className='overflow-clip'>

        <Router className="landing">
          <Routes>
            <Route path="/" element={<Landing />} />
            
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/tripmemories" element={<TripMemories/>} />
            {/* <Route path="/kashmir" element={<Kasmir/>} /> */}
            <Route path="/goldentriangle" element={<GoldenTriangle/>} />
            <Route path="/andaman" element={<Andaman/>} />
            <Route path="/kerela" element={<Kerela/>} />
            <Route path="/rajasthan" element={<Rajasthan/>} />
            <Route path="/malaysia" element={<Singapore/>} />
            <Route path="/northeast" element={<Northeast/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
