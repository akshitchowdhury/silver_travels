import React from "react";

import "./Home.css";
import mainLogo from "../../assets/logo.png";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeAbout from "./HomeAbout";
import HomeWhyUs from "./HomeWhyUs";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Nav from "../Navbar/Nav";
import SocialIcons from "../Social Icons/SocialIcons";
import ServiceCard from "../Services/ServiceCard";
import Scard from "../Services/Scard";
import BookNow from "./BookNow";

const Home = () => {
  return (
    <>
      
    
      <div className="navBlock w-full">
        <nav className="bg-cover">
        <Nav/>
        <SocialIcons/>
        <h1 className="titleText text-center text-center font-semibold text-4xl" style={{marginTop: '10%'}}>Silver Line travels</h1>   
        
        
        </nav>
      </div>
      <HomeAbout />

      <HomeWhyUs />
      <BookNow/>
      <Footer/>
    </>
  );
};

export default Home;
