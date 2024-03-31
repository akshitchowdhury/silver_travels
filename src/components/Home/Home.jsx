import React from "react";

import "./Home.css";
import mainLogo from "../../assets/logo.png";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeAbout from "./HomeAbout";
import HomeWhyUs from "./HomeWhyUs";
import Footer from "../Footer/Footer";
import About from "../About/About";

const Home = () => {
  return (
    <>





      <div className="navBlock w-full">
        <nav className="bg-cover">
          <div class="logo flex items-start justify-start px-3 py-2 mx-auto max-w-screen-xl">
            <img src={mainLogo} alt="logo" />
          </div>

          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/*  */}
            <div className="link-tab navbar-links flex flex-col md:flex-row md:items-center md:justify-between w-full md:w-auto ">
              <Link to="/home" className="navbar-link ">
                Home
              </Link>
              <Link to="/about" className="navbar-link">
                About Us
              </Link>
              <Link to="/services" className="navbar-link">
                Services
              </Link>
              <Link to="/gallery" className="navbar-link">
                Gallery
              </Link>
              <Link to="/contact" className="navbar-link">
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <HomeAbout />

      <HomeWhyUs />
      
    </>
  );
};

export default Home;
