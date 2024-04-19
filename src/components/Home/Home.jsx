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
        <h1 className=" text-center font-semibold 
         text-4xl md:text-4xl lg:text-6xl mt-10 md:mt-20 lg:mt-40">Silver Line Tours and travels</h1>   
<h1 className="titleText text-center font-semibold text-2xl md:text-3xl lg:text-4xl mt-4 md:mt-8 lg:mt-16">Connecting people and places</h1>

        
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
