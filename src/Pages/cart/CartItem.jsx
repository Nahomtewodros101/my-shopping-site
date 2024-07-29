import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const CartItem = (props) => {
  const { id, name, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const itemQuantity = cartItems[id] || 0;

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-2xl">
      <img
        src={productImage}
        alt={name}
        className="w-32 h-32 object-cover rounded-lg shadow-lg mb-4"
      />
      <div className="flex flex-col items-center">
        <p className="text-xl font-semibold text-gray-800 mb-2">{name}</p>
        <p className="text-lg text-gray-600 mb-4">${price}</p>
        <div className="flex items-center gap-2">
          <button
            className="bg-gray-300 text-gray-800 px-2 py-1 rounded hover:bg-gray-400"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <input
            type="text"
            value={itemQuantity}
            readOnly
            className="text-center w-12 border border-gray-300 rounded"
          />
          <button
            className="bg-gray-300 text-gray-800 px-2 py-1 rounded hover:bg-gray-400"
            onClick={() => addToCart(id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
