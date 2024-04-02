import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';

const RoutePages = () => {
  return (
    <Routes>

    
        
      <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Home />} />
          <Route path='/services' element={<Home />} />
          <Route path='/contact' element={<Contact />} />


    </Routes>
  )
}

export default RoutePages
