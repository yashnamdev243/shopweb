// src/pages/Home.jsx
import React from 'react';
import Testimonials from '../component/Testimonials';
import Hero from '../component/Hero';
import ProductCard from '../Component/ProductCard';


const dummyProducts = [
  {
    id: 1,
    name: 'Narmadeshwar Shivling – Small',
    price: '₹999',
    image: '/assets/shivling1.jpg',
  },
  {
    id: 2,
    name: 'Shivling with Base Stand',
    price: '₹1499',
    image: '/assets/shivling2.jpg',
  },
  {
    id: 3,
    name: 'Black Marble Shivling',
    price: '₹1999',
    image: '/assets/shivling3.jpg',
  },
];

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Featured Products */}
      <section className="py-12 px-4 sm:px-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-[#b84d1c] mb-8">Featured Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {dummyProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};

export default Home;
