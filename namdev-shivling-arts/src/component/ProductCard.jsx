// src/components/ProductCard.jsx
import React from 'react';
import { Card, Button } from 'antd';

const ProductCard = ({ product }) => {
  return (
    <Card
      hoverable
      className="rounded-lg shadow-md"
      cover={<img alt={product.name} src={product.image} className="h-52 object-cover rounded-t-lg" />}
    >
      <h3 className="text-lg font-semibold text-[#b84d1c]">{product.name}</h3>
      <p className="text-gray-700 mb-4">{product.price}</p>
      <Button type="primary" className="bg-[#b84d1c] w-full">
        View Details
      </Button>
    </Card>
  );
};

export default ProductCard;
