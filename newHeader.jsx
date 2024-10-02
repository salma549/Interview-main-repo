// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/images/logo.jpeg';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);


//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="bg-white text-gray-900  py-5 font-serif border-b-4">
//       <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
//         {/* Logo on the left side */}
//         <div className="flex items-center">
       
//             {/* Display the logo image */}
//             <img src={logo} alt="Logo" className="h-14 w-24 sm:h-14 sm:w-24 mr-2" />
        
//         </div>

//         {/* Navigation Links hidden on small screens */}
//         <nav className="hidden md:flex space-x-6 text-xl sm:text-xl">
//           <Link to="/" className="hover:text-green-600 transition duration-300">Home</Link>
//           <Link to="/about" className="hover:text-green-600 transition duration-300">About Us</Link>
//           <Link to="/services" className="hover:text-green-600 transition duration-300">Services</Link>
//           <Link to="/products" className="hover:text-green-600 transition duration-300">Product</Link>
//           <Link to="/career" className="hover:text-green-600 transition duration-300">Career</Link>
//           <Link to="/career" className="hover:text-gray-700 transition duration-300 bg-green-600 py-1 px-1 rounded-md">Contact Us</Link>
//         </nav>

//         {/* Hamburger Icon shown on small screens */}
//         <div className="md:hidden flex items-center">
//           <button onClick={toggleMenu}>
//             {isOpen ? (
//               <XMarkIcon className="h-6 w-6 text-gray-600" />
//             ) : (
//               <Bars3Icon className="h-6 w-6 text-gray-600" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu visible when isOpen is true */}
//       {isOpen && (
//         <nav className="md:hidden bg-gray-800 text-white px-4 py-6 space-y-4">
//           <Link to="/" onClick={toggleMenu} className="block hover:text-indigo-500 transition duration-300">Home</Link>
//           <Link to="/about" onClick={toggleMenu} className="block hover:text-indigo-500 transition duration-300">About Us</Link>
//           <Link to="/services" onClick={toggleMenu} className="block hover:text-indigo-500 transition duration-300">Services</Link>
//           <Link to="/products" onClick={toggleMenu} className="block hover:text-indigo-500 transition duration-300">Product</Link>
//           <Link to="/career" onClick={toggleMenu} className="block hover:text-indigo-500 transition duration-300">Career</Link>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// // import logo from '../assets/images/logo.jpeg';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="bg-white text-gray-900 py-5 font-serif border-b-4 fixed top-0 left-0 w-full z-50">
//       <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
//         {/* Logo on the left side */}
//         <div className="flex items-center">
//           {/* Display the logo image */}
//           {/* <img src={logo} alt="Logo" className="h-14 w-24 sm:h-14 sm:w-24 mr-2" /> */}
//           <h1>Interview</h1>
//         </div>

//         {/* Navigation Links hidden on small screens */}
//         <nav className="hidden md:flex space-x-6 text-xl sm:text-xl">
//           <Link to="/" className="hover:text-green-600 transition duration-300">Home</Link>
//           <Link to="/about" className="hover:text-green-600 transition duration-300">About Us</Link>
//           <Link to="/resume" className="hover:text-green-600 transition duration-300">Resume</Link>
//           <Link to="/dsa" className="hover:text-green-600 transition duration-300">DSA</Link>
       
//           <Link to="/contact" className="hover:text-gray-700 transition duration-300 bg-green-600 py-1 px-1 rounded-md">Contact Us</Link>
//         </nav>

//         {/* Hamburger Icon shown on small screens */}
//         <div className="md:hidden flex items-center">
//           <button onClick={toggleMenu}>
//             {isOpen ? (
//               <XMarkIcon className="h-6 w-6 text-gray-600" />
//             ) : (
//               <Bars3Icon className="h-6 w-6 text-gray-600" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu visible when isOpen is true */}
//       {isOpen && (
//         <nav className="md:hidden bg-gray-800 text-white px-4 py-6 space-y-4">
//           <Link to="/" onClick={toggleMenu} className="block hover:text-indigo-500 transition duration-300">Home</Link>
//           <Link to="/about" onClick={toggleMenu} className="block hover:text-indigo-500 transition duration-300">About Us</Link>
//           <Link to="/services" onClick={toggleMenu} className="block hover:text-indigo-500 transition duration-300">Services</Link>
//           <Link to="/products" onClick={toggleMenu} className="block hover:text-indigo-500 transition duration-300">Product</Link>
//           <Link to="/career" onClick={toggleMenu} className="block hover:text-indigo-500 transition duration-300">Career</Link>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;

// Above Main -------------


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-lg py-3 fixed top-0 left-0 w-full z-50 transition-all duration-500">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="text-3xl font-extrabold tracking-wide">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-400">
              Interview
            </span>
          </div>
        </div>

        {/* Navigation Links (Hidden on Small Screens) */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <Link
            to="/"
            className="relative text-white hover:text-yellow-300 transition duration-300 group"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/about"
            className="relative text-white hover:text-yellow-300 transition duration-300 group"
          >
            About Us
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/resume"
            className="relative text-white hover:text-yellow-300 transition duration-300 group"
          >
            Resume
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/dsa"
            className="relative text-white hover:text-yellow-300 transition duration-300 group"
          >
            DSA
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
          </Link>
        
          <Link
            to="/all"
            className="relative text-white hover:text-yellow-300 transition duration-300 group"
          >
          All
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/code"
            onClick={toggleMenu}
            className="block text-lg hover:text-indigo-500 transition duration-300"
          >
            Code
          </Link>

          <Link
            to="/editor"
            onClick={toggleMenu}
            className="block text-lg hover:text-indigo-500 transition duration-300"
          >
         Code Editor
          </Link>

          <Link
            to="/contact"
            className="relative text-white hover:text-yellow-300 transition duration-300 group bg-green-500 px-4 py-2 rounded-full"
          >
            Contact Us
          </Link>
        </nav>

        {/* Hamburger Icon (Shown on Small Screens) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XMarkIcon className="h-8 w-8 text-white transform transition-transform duration-300" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-white transform transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible on Small Screens) */}
      {isOpen && (
        <nav className="md:hidden bg-white rounded-xl shadow-xl mt-4 mx-4 p-6 space-y-6 text-gray-900">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block text-lg hover:text-indigo-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="block text-lg hover:text-indigo-500 transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/resume"
            onClick={toggleMenu}
            className="block text-lg hover:text-indigo-500 transition duration-300"
          >
            Resume
          </Link>
          <Link
            to="/dsa"
            onClick={toggleMenu}
            className="block text-lg hover:text-indigo-500 transition duration-300"
          >
            DSA
          </Link>
          
          <Link
            to="/all"
            className="relative text-white hover:text-yellow-300 transition duration-300 group"
          >
          All
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/code"
            onClick={toggleMenu}
            className="block text-lg hover:text-indigo-500 transition duration-300"
          >
            Code
          </Link>
          <Link
            to="/editor"
            onClick={toggleMenu}
            className="block text-lg hover:text-indigo-500 transition duration-300"
          >
         Code Editor
          </Link>

          <Link
            to="/contact"
            onClick={toggleMenu}
            className="block text-lg hover:text-indigo-500 transition duration-300"
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;

