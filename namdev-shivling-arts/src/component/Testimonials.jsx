// src/components/Testimonials.jsx
import React from 'react';
import { Avatar, Card } from 'antd';

const testimonials = [
  {
    name: 'Ravi Sharma',
    comment: 'Beautifully crafted Shivling, felt divine energy at home!',
    avatar: '/assets/user1.jpg',
  },
  {
    name: 'Sneha Verma',
    comment: 'Packaging was excellent, product arrived safely. Highly recommend!',
    avatar: '/assets/user2.jpg',
  },
  {
    name: 'Manoj Desai',
    comment: 'Authentic Narmadeshwar Shivling, thank you for this sacred gift!',
    avatar: '/assets/user3.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 px-4 sm:px-16 bg-[#fff9f4]">
      <h2 className="text-3xl font-bold text-center text-[#b84d1c] mb-8">What Our Customers Say</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((item, idx) => (
          <Card key={idx} className="rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <Avatar src={item.avatar} />
              <span className="font-medium">{item.name}</span>
            </div>
            <p className="text-gray-700">{item.comment}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
