// ===== Products.jsx =====
import React, { useEffect, useState } from 'react';
import ProductCard from '../Component/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Dummy API simulation
    const data = [
      {
        id: 1,
        name: 'Narmadeshwar Shivling - Small',
        price: '₹999',
        image: '/assets/shivling1.jpg',
      },
      {
        id: 2,
        name: 'Shivling with Marble Stand',
        price: '₹1,499',
        image: '/assets/shivling2.jpg',
      },
      {
        id: 3,
        name: 'Black Stone Shivling - Premium',
        price: '₹2,199',
        image: '/assets/shivling3.jpg',
      },
      {
        id: 4,
        name: 'Pure Narmadeshwar Shivling',
        price: '₹1,799',
        image: '/assets/shivling4.jpg',
      },
      {
        id: 5,
        name: 'Handcrafted Shivling Idol',
        price: '₹1,250',
        image: '/assets/shivling5.jpg',
      },
    ];
    setProducts(data);
  }, []);

  return (
    <section className="bg-[#fffdf9] py-10 px-4 md:px-10 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#4f342f]">Our Products</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
