import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Routes>
        
      <Route path='/' element= {<Landing/>}/>
      <Route path='/home' element= {<Home/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
