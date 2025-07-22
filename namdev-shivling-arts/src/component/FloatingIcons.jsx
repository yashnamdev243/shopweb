// ===== FloatingIcons.jsx =====
import React from 'react';
import {
  WhatsAppOutlined,
  PhoneOutlined,
  InstagramOutlined,
} from '@ant-design/icons';

const FloatingIcons = () => {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end space-y-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        title="Chat on WhatsApp"
      >
        <WhatsAppOutlined className="text-xl" />
      </a>

      {/* Call */}
      <a
        href="tel:+919876543210"
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        title="Call Us"
      >
        <PhoneOutlined className="text-xl" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/your_page"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        title="Instagram"
      >
        <InstagramOutlined className="text-xl" />
      </a>
    </div>
  );
};

export default FloatingIcons;
