// src/components/Hero.jsx
import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#fff3e0] to-[#f9e0c7] py-12 sm:py-20 px-4 sm:px-16 text-center relative overflow-hidden">
      <div className="max-w-5xl mx-auto z-10 relative">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#b84d1c] leading-tight mb-4">
          Welcome to Namdev Narmadeshwar Shivling Arts
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          Handcrafted sacred Shivlings & divine art pieces for your spiritual journey.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/products">
            <Button size="large" className="bg-[#b84d1c] text-white hover:scale-105 transition">
              Explore Products
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="large" className="bg-white border-[#b84d1c] text-[#b84d1c] hover:bg-[#ffe9d6] transition">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      {/* Background Decoration */}
      <img
        src="/assets/shivling-deco.png"
        alt="Spiritual art"
        className="absolute opacity-10 bottom-0 right-0 w-60 sm:w-80 pointer-events-none z-0"
      />
    </section>
  );
};

export default Hero;
