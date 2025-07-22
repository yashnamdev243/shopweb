// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <section className="py-12 px-4 sm:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div>
          <img
            src="/assets/about-shivling.jpg"
            alt="Namdev Narmadeshwar Shivling Arts"
            className="rounded-lg shadow-md object-cover w-full max-h-[500px]"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-[#b84d1c] mb-4">About Us</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At <strong>Namdev Narmadeshwar Shivling Arts</strong>, we are dedicated to preserving the sacred
            heritage of Indian spirituality by crafting authentic <strong>Narmadeshwar Shivlings</strong> and
            other divine art pieces.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Founded with devotion and precision, our workshop has grown into a trusted name for devotees across India. Each Shivling is
            sourced and shaped with respect, faith, and traditional values—designed to bring peace and divinity to your home or temple.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With over <strong>5+ years of experience</strong> and <strong>50+ successful spiritual treks & tours</strong>,
            our aim is to blend sacred art with soulful living.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
