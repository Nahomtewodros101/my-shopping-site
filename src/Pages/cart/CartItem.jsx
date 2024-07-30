import React from "react";

const CartItem = ({ data }) => {
  const { id, name, price, productImage, description } = data;

  return (
    <div className="cart-item flex items-center bg-white border border-gray-300 rounded-lg shadow-md p-4 w-full max-w-md">
      <img
        src={productImage}
        alt={name}
        className="w-32 h-32 object-cover rounded-lg mr-4"
      />
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-lg font-bold mb-2">${price.toFixed(2)}</p>
        <p className="text-sm text-gray-500">Quantity: {data.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
