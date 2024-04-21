import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className=" max-w-7xl mx-auto py-12  sm:px-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          
          <div className=" text-white justify-center justify-self-center">
          <div className="text-white">
          <h4 className="text-sm font-semibold uppercase">About Us</h4>
          <br/>
          {/* <img src={footLogo} className='footerLogo' alt="footerLogo" /> */}
          <p className='text-sm text-gray-500 font-medium'>Silver Line Tours and Travels:
          Welcome to Silver Line Tours and Travels! We are a one-stop shop for travel solutions.</p>
        </div>
        
          </div>

          <div className="text-white justify-center justify-self-center">
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

          <div className="text-white justify-center justify-self-center">
            <h2 className="mb-6 text-sm font-semibold uppercase">Services</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Seamless Arrival</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Lodging</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Travleling</a>
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
E-mail: bhaswatibom@gmail.com</li>
<li>Mob/WhatsApp: 7506526928</li>
</li>
          
        </ul>
          </div>
        </div>
        <div className="self-center mt-7 text-base tracking-wide text-white max-md:max-w-full" style={{marginLeft:
      '37%'}}>
        @copyright 2024 Developed by Akshit Chowdhury
      </div>
      </div>
      
    
    </footer>
  );
};

export default Footer;
