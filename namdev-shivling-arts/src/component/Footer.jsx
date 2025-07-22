// ===== Footer.jsx =====
import React from 'react';
import {
  FacebookFilled,
  InstagramFilled,
  WhatsAppOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#4f342f] text-white pt-10 pb-6 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Namdev Narmadeshwar Shivling Arts</h3>
          <p className="text-sm leading-relaxed">
            We specialize in original Narmadeshwar Shivling and spiritual art forms,
            offering hand-crafted divine artifacts that bring peace, energy,
            and positivity to your surroundings.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-gray-300">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Contact Info</h4>
          <p className="text-sm">Phone: +91 9876543210</p>
          <p className="text-sm">WhatsApp: +91 9876543210</p>
          <div className="flex gap-4 mt-4 text-2xl">
            <a href="#" className="hover:text-gray-300"><FacebookFilled /></a>
            <a href="#" className="hover:text-gray-300"><InstagramFilled /></a>
            <a href="#" className="hover:text-gray-300"><WhatsAppOutlined /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Namdev Narmadeshwar Shivling Arts. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
