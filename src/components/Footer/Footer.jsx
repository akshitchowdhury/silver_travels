import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-12 md:p-2">
      <div className=" max-w-7xl mx-auto py-12  sm:px-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          
          <div className=" text-white justify-center justify-self-center">
          <div className="text-white">
          <h4 className="text-sm font-semibold uppercase">About Us</h4>
          <br/>
          {/* <img src={footLogo} className='footerLogo' alt="footerLogo" /> */}
          <p className='text-sm text-gray-500 font-medium'>Silverline Tours & Travels:
          Welcome to Silverline Tours & Travels! We offer a refreshing approach to travel solutions. Unlike other agents who promise the moon and rush you through whirlwind tours, we prioritize your comfort and experience.

</p>
        </div>
        
          </div>

          <div className="text-white   ">
            <h2 className="mb-6 text-sm font-semibold uppercase">Quick Links</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <Link to="/home" className="hover:underline">Home</Link>
              </li>
              <li className="mb-4">
                <Link to="/about" className="hover:underline">About Us</Link>
              </li>
              <li className="mb-4">
                <Link to="/services" className="hover:underline">Services</Link>
              </li>
              <li className="mb-4">
                <Link to="/gallery" className="hover:underline">Gallery</Link>
              </li>
              <li className="mb-4">
                <Link to="/contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="text-white  ">
            <h2 className="mb-6 text-sm font-semibold uppercase">Services</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Seamless Arrival</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Lodging</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Travelling</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Exploration</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Safe Departure</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Complete Tour Package</a>
              </li>
            </ul>
          </div>

          <div className="text-white justify-center justify-self-center">
            <h2 className="mb-6 text-sm font-semibold uppercase">Contact Us</h2>
            <ul className='my-2'>
          
          <li className='text-gray-500'>
          Silverline Tours & Travels
Lokhandwala, Andheri West
Mumbai 400053
<li>
E-mail: silverlinetourstravels15@gmail.com</li>
<li>Mob/WhatsApp: +91 7506526928</li>
</li>
          
        </ul>
          </div>
        </div>
        <div className=" mt-7 text-base tracking-wide text-white max-md:max-w-full
        mx-0 md:mx-96" >
        @copyright 2024 Developed by <a className= "font-semibold 
        hover:text-red-500 tranisition ease-in-out duration 300" href="https://business-portfolio-eta.vercel.app/"> Akshit_Chowdhury</a>
      </div>
      </div>
      
    
    </footer>
  );
};

export default Footer;
