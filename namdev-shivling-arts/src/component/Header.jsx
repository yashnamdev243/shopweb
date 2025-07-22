
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   PhoneOutlined,
//   WhatsAppOutlined,
//   MenuOutlined,
//   CloseOutlined,
// } from '@ant-design/icons';
// import { Button } from 'antd';

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-md px-4 sm:px-8 py-3 flex justify-between items-center">
//       <Link to="/" className="text-xl sm:text-2xl font-bold text-[#b84d1c] tracking-wide">
//         Namdev Shivling Arts
//       </Link>

//       {/* Desktop Nav */}
//       <nav className="hidden md:flex gap-6 font-medium text-gray-700">
//         <Link to="/" className="hover:text-[#b84d1c] transition">Home</Link>
//         <Link to="/about" className="hover:text-[#b84d1c] transition">About</Link>
//         <Link to="/products" className="hover:text-[#b84d1c] transition">Products</Link>
//         <Link to="/contact" className="hover:text-[#b84d1c] transition">Contact</Link>
//       </nav>

//       {/* Icons + Mobile Menu Toggle */}
//       <div className="flex items-center gap-2">
//         <a href="tel:+919876543210">
//           <Button
//             shape="circle"
//             icon={<PhoneOutlined />}
//             className="bg-[#b84d1c] text-white hover:scale-110 transition"
//           />
//         </a>
//         <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
//           <Button
//             shape="circle"
//             icon={<WhatsAppOutlined />}
//             className="bg-green-500 text-white hover:scale-110 transition"
//           />
//         </a>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={toggleMobileMenu}
//           className="md:hidden text-2xl text-[#b84d1c]"
//         >
//           {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center gap-4 py-4 font-medium text-gray-700 z-40">
//           <Link to="/" onClick={toggleMobileMenu} className="hover:text-[#b84d1c]">Home</Link>
//           <Link to="/about" onClick={toggleMobileMenu} className="hover:text-[#b84d1c]">About</Link>
//           <Link to="/products" onClick={toggleMobileMenu} className="hover:text-[#b84d1c]">Products</Link>
//           <Link to="/contact" onClick={toggleMobileMenu} className="hover:text-[#b84d1c]">Contact</Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhoneOutlined, WhatsAppOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => setIsMobileOpen(!isMobileOpen);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 bg-white shadow-md px-4 sm:px-8 py-3 flex justify-between items-center"
    >
      <Link
        to="/"
        className="text-xl sm:text-2xl font-bold text-[#b84d1c] tracking-wide"
        onClick={() => setIsMobileOpen(false)}
      >
        Namdev Shivling Arts
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6 font-medium text-gray-700">
        {["Home", "About", "Products", "Contact"].map((item) => (
          <Link
            key={item}
            to={`/${item === "Home" ? "" : item.toLowerCase()}`}
            className="hover:text-[#b84d1c] transition"
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Action Buttons + Mobile Toggle */}
      <div className="flex items-center gap-2">
        <a href="tel:+919876543210">
          <Button shape="circle" icon={<PhoneOutlined />} className="bg-[#b84d1c] text-white" />
        </a>
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
          <Button shape="circle" icon={<WhatsAppOutlined />} className="bg-green-500 text-white" />
        </a>
        <button onClick={toggleMenu} className="md:hidden text-2xl text-[#b84d1c]">
          {isMobileOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="absolute top-[64px] right-0 w-2/3 sm:w-1/2 h-screen bg-white shadow-md p-6 flex flex-col gap-6 z-40 md:hidden"
          >
            {["Home", "About", "Products", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="text-lg text-gray-800 hover:text-[#b84d1c]"
                onClick={() => setIsMobileOpen(false)}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
