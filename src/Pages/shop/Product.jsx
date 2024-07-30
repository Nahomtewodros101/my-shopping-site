import React, { useState, useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const Product = (props) => {
  const { id, name, price, productImage, description } = props.data;
  const { cartItems, addToCart } = useContext(ShopContext);

  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <div className="product-card flex flex-col items-center transition-transform transform hover:scale-105 rounded-md shadow-md border border-gray-300 p-4">
      <img
        src={productImage}
        alt={name}
        className="w-40 h-40 object-cover mb-4"
      />
      <h2 className="text-lg font-semibold mb-2 text-center">{name}</h2>
      <p className="text-lg text-gray-600 mb-2 text-center">${price.toFixed(2)}</p>
      <p className="text-gray-700 mb-4 text-center">{description}</p>
      <button
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 transition-transform transform"
        onClick={handleAddToCart}
      >
        Add to Cart {cartItems[id] ? `(${cartItems[id]})` : ''}
      </button>
    </div>
  );
};

export default Product;
