import React from "react";
import './Product.css';  

const Product = (props) => {
  const { id, name, price, productImage } = props.data;

  return (
    <div className="product-card flex flex-col items-center transition-transform transform hover:scale-105 hover:animate-bounce rounded-md shadow-md border border-gray-300 p-4">
      <img 
        src={productImage} 
        alt={name} 
        className="w-40 h-40 object-cover mb-4" 
      />
      <h2 className="text-lg font-semibold mb-2 text-center">{name}</h2>
      <p className="text-gray-600 text-center mb-4">${price}</p>
      <button className="add-to-cart-btn bg-black text-white rounded-xl px-2 py-1 transition-transform transform hover:scale-105 ">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
