import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const { name, price, productImage, description } = product;

  return (
    <div className="p-6">
      <div className="flex flex-col items-center">
        <img 
          src={productImage} 
          alt={name} 
          className="w-60 h-60 object-cover mb-4" 
        />
        <h1 className="text-3xl font-bold mb-4">{name}</h1>
        <p className="text-lg text-gray-600 mb-4">${price.toFixed(2)}</p>
        <p className="text-gray-700 mb-6">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
