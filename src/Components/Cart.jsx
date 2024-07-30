import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { products } from "../data/products";
import CartItem from "../Pages/cart/CartItem";

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = Object.keys(cartItems).reduce((total, id) => {
    const item = products.find((product) => product.id === parseInt(id));
    return total + (item ? item.price * cartItems[id] : 0);
  }, 0);

  const isCartEmpty = Object.keys(cartItems).length === 0;

  const handleContinueShopping = () => {
    navigate("/");
  };

  // Handle checkout button click
  const handleCheckout = () => {
    if (!isCartEmpty) {
      // Proceed with checkout logic here
      alert("Proceeding to checkout...");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Your Cart Items</h1>
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        {products.map((product) => {
          if (cartItems[product.id] > 0) {
            return (
              <CartItem
                key={product.id}
                data={{ ...product, quantity: cartItems[product.id] }}
              />
            );
          }
          return null;
        })}
      </div>
      <div className="flex flex-col items-center mt-6 p-4 bg-white shadow-xl rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Checkout</h2>
        <p className="text-lg mb-4">Total Price: ${totalPrice.toFixed(2)}</p>
        <div className="flex gap-4">
          <button
            onClick={handleCheckout}
            className={`px-4 py-2 rounded-lg transition-colors ${
              isCartEmpty
                ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-700"
            }`}
            disabled={isCartEmpty}
          >
            Proceed to Checkout
          </button>
          <button
            onClick={handleContinueShopping}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
