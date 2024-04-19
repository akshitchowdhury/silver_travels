import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import './Nav.css'
import { Transition } from "@headlessui/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar bg-inherit border-gray-200 dark:bg-inherit sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Silver Travels
            </span>
          </a>
        </Link>

        {/* Conditional rendering based on screen size */}
        {/* Hamburger Menu Button for small screens */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
                     dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-controls="navbar-default"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navbar Links for large screens */}
        <div className="hidden md:flex md:flex-row-reverse  md:justify-end" 
          id="navbar-default"
          style={{marginLeft: '19rem'}}>
          <ul className="font-medium flex flex-row justify-end space-x-12">
            <li>
              <Link
                className="text-zinc-700 md:text-white sm:text-zinc-700 hover:text-sky-400 text-xl duration-300 ease-in-out"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-700 md:text-white sm:text-zinc-700 hover:text-sky-400 text-xl duration-300 ease-in-out"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-700 md:text-white sm:text-zinc-700 hover:text-sky-400 text-xl transition-colors duration-300 ease-in-out"
                to="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-700 md:text-white sm:text-zinc-700 hover:text-sky-400 text-xl transition-colors duration-300 ease-in-out"
                to="/gallery"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-700 md:text-white sm:text-zinc-700 hover:text-sky-400 text-xl transition-colors duration-300 ease-in-out"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`w-full md:w-auto md:flex md:flex-row-reverse md:justify-end ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          {/* Transition applied only when menu is open */}
          <Transition
            show={isMenuOpen}
            enter="transition ease-out duration-200 transform"
            enterFrom="opacity-0 scale-0"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-200 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-0"
          >
            <ul className="font-medium w-full flex flex-col p-6 md:p-0 mt-4 border border-gray-100 rounded-lg bg-sky-200 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-inherit dark:bg-sky-200 md:bg-sky-200 dark:border-gray-700">
              <li>
                <Link
                  className="text-zinc-700 md:text-white sm:text-zinc-700 hover:text-sky-400 text-xl duration-300 ease-in-out"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-700 md:text-white sm:text-zinc-700 hover:text-sky-400 text-xl duration-300 ease-in-out"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-700 md:text-white sm:text-zinc-700 hover:text-sky-400 text-xl transition-colors duration-300 ease-in-out"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-700 md:text-white sm:text-zinc-700 hover:text-sky-400 text-xl transition-colors duration-300 ease-in-out"
                  to="/gallery"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-700 md:text-white sm:text-zinc-700 hover:text-sky-400 text-xl transition-colors duration-300 ease-in-out"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </Transition>
        </div>
      </div>
    </nav>
  );
}
