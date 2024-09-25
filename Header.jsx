
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/images/logo.jpeg';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white text-gray-900 py-5 font-serif border-b-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo on the left side */}
        <div className="flex items-center">
          {/* Display the logo image */}
          {/* <img src={logo} alt="Logo" className="h-14 w-24 sm:h-14 sm:w-24 mr-2" /> */}
          <h1>Interview</h1>
        </div>

        {/* Navigation Links hidden on small screens */}
        <nav className="hidden md:flex space-x-6 text-xl sm:text-xl">
          <Link to="/" className="hover:text-green-600 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-green-600 transition duration-300">About Us</Link>
          <Link to="/resume" className="hover:text-green-600 transition duration-300">Resume</Link>
          <Link to="/dsa" className="hover:text-green-600 transition duration-300">DSA</Link>
       
          <Link to="/contact" className="hover:text-gray-700 transition duration-300 bg-green-600 py-1 px-1 rounded-md">Contact Us</Link>
        </nav>

        {/* Hamburger Icon shown on small screens */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-600" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu visible when isOpen is true */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 text-white px-4 py-6 space-y-4">
          <Link to="/" onClick={toggleMenu} className="block hover:text-indigo-500 transition duration-300">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="block hover:text-indigo-500 transition duration-300">About Us</Link>
          <Link to="/services" onClick={toggleMenu} className="block hover:text-indigo-500 transition duration-300">Services</Link>
          <Link to="/products" onClick={toggleMenu} className="block hover:text-indigo-500 transition duration-300">Product</Link>
          <Link to="/career" onClick={toggleMenu} className="block hover:text-indigo-500 transition duration-300">Career</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;


