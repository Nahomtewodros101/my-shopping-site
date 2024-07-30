import React, { useState, useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const Product = (props) => {
  const { id, name, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);


  const [addedToCart, setAddedToCart] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  const handleAddToCart = () => {
    addToCart(id);
    setItemCount(cartItems[id] ? cartItems[id] + 1 : 1);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000); 
  };

  return (
    <div className="product-card flex flex-col items-center transition-transform transform hover:scale-105 rounded-md shadow-md border border-gray-300 p-4">
      <img 
        src={productImage} 
        alt={name} 
        className="w-40 h-40 object-cover mb-4" 
      />
      <h2 className="text-lg font-semibold mb-2 text-center">{name}</h2>
      <p className="text-lg text-gray-600 mb-4 text-center">${price}</p>
      <button
        className={`bg-black text-white px-4 py-2 rounded transition-transform transform ${addedToCart ? 'bg-gray-900' : 'hover:bg-gray-500'} ${addedToCart ? 'scale-105' : ''}`}
        onClick={handleAddToCart}
      >
        {addedToCart ? `Added to Cart! (${itemCount})` : 'Add to Cart'}
      </button>
    </div>
  );
};

export default Product;
