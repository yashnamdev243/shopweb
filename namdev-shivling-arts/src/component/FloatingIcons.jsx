// // ===== FloatingIcons.jsx =====
// import React from 'react';
// import {
//   WhatsAppOutlined,
//   PhoneOutlined,
//   InstagramOutlined,
// } from '@ant-design/icons';

// const FloatingIcons = () => {
//   return (
//     <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end space-y-3">
//       {/* WhatsApp */}
//       <a
//         href="https://wa.me/919876543210"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
//         title="Chat on WhatsApp"
//       >
//         <WhatsAppOutlined className="text-xl" />
//       </a>

//       {/* Call */}
//       <a
//         href="tel:+919876543210"
//         className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
//         title="Call Us"
//       >
//         <PhoneOutlined className="text-xl" />
//       </a>

//       {/* Instagram */}
//       <a
//         href="https://instagram.com/your_page"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
//         title="Instagram"
//       >
//         <InstagramOutlined className="text-xl" />
//       </a>
//     </div>
//   );
// };

// export default FloatingIcons;


import React from 'react';
import {
  WhatsAppOutlined,
  PhoneOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import 'aos/dist/aos.css';

const FloatingIcons = () => {
  return (
    <div
      className="fixed bottom-6 right-4 z-50 flex flex-col items-end space-y-4"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center"
      >
        <span className="absolute right-12 opacity-0 group-hover:opacity-100 bg-green-600 text-white text-xs rounded-md px-3 py-1 transition-opacity duration-300 shadow-md">
          Chat on WhatsApp
        </span>
        <div className="bg-green-500 text-white p-3 rounded-full shadow-xl hover:scale-110 hover:shadow-green-400 transition-all duration-300 animate-pulse">
          <WhatsAppOutlined className="text-xl" />
        </div>
      </a>

      {/* Call */}
      <a
        href="tel:+919876543210"
        className="group relative flex items-center"
      >
        <span className="absolute right-12 opacity-0 group-hover:opacity-100 bg-blue-600 text-white text-xs rounded-md px-3 py-1 transition-opacity duration-300 shadow-md">
          Call Us
        </span>
        <div className="bg-blue-600 text-white p-3 rounded-full shadow-xl hover:scale-110 hover:shadow-blue-400 transition-all duration-300">
          <PhoneOutlined className="text-xl" />
        </div>
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/your_page"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center"
      >
        <span className="absolute right-12 opacity-0 group-hover:opacity-100 bg-pink-500 text-white text-xs rounded-md px-3 py-1 transition-opacity duration-300 shadow-md">
          Instagram
        </span>
        <div className="bg-pink-500 text-white p-3 rounded-full shadow-xl hover:scale-110 hover:shadow-pink-400 transition-all duration-300">
          <InstagramOutlined className="text-xl" />
        </div>
      </a>
    </div>
  );
};

export default FloatingIcons;
