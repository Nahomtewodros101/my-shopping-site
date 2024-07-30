import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ data }) => {
  const { id, name, price, productImage, description } = data;
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div 
      className={`product-card flex flex-col items-center transition-transform transform ${isHovered ? 'scale-110' : 'scale-100'} rounded-md shadow-md border border-gray-300 p-4`} 
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={productImage} 
        alt={name} 
        className="w-40 h-40 object-cover mb-4 transition-transform duration-300" 
      />
      <h2 className="text-lg font-semibold mb-2 text-center">{name}</h2>
      <p className="text-gray-600 mb-2 text-center">{description}</p>
      <p className="text-lg text-gray-600 mb-4 text-center">${price.toFixed(2)}</p>
    </div>
  );
};

export default Product;
