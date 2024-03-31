import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="text-white">
            <h2 className="mb-6 text-sm font-semibold uppercase">Help center</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Discord Server</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Twitter</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Facebook</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="text-white">
            <h2 className="mb-6 text-sm font-semibold uppercase">Quick Links</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li className="mb-4">
                <Link to="/about" className="hover:underline">About Us</Link>
              </li>
              <li className="mb-4">
                <Link to="/projects" className="hover:underline">Projects</Link>
              </li>
              <li className="mb-4">
                <Link to="/contact" className="hover:underline">Contact Me</Link>
              </li>
            </ul>
          </div>

          <div className="text-white">
            <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Licensing</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          <div className="text-white">
            <h2 className="mb-6 text-sm font-semibold uppercase">Track me</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">iOS</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Android</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Windows</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">MacOS</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
