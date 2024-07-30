import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Importing framer-motion
import { ShopContext } from "../../context/ShopContext";
import { products } from "../../products";

const containerVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.3 },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const hoverTextVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const totalPrice = Object.keys(cartItems).reduce((total, id) => {
    const item = products.find((product) => product.id === parseInt(id));
    return total + (item ? item.price * cartItems[id] : 0);
  }, 0);

  const isCartEmpty = Object.keys(cartItems).length === 0;

  const handleContinueShopping = () => {
    navigate("/");
  };

  const handleCheckout = () => {
    if (!isCartEmpty) {
      alert("Proceeding to checkout...");
    }
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      const currentQuantity = cartItems[id] || 0;
      const quantityDifference = newQuantity - currentQuantity;

      if (quantityDifference > 0) {
        for (let i = 0; i < quantityDifference; i++) {
          addToCart(id);
        }
      } else {
        for (let i = 0; i < -quantityDifference; i++) {
          removeFromCart(id);
        }
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Your Cart Items</h1>
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        {products.map((product) => {
          if (cartItems[product.id] > 0) {
            return (
              <motion.div
                key={product.id}
                className="relative flex flex-col items-center p-4 border rounded shadow-lg"
                variants={containerVariants}
                whileHover="hover"
              >
                <img
                  src={product.productImage}
                  alt={product.name}
                  className="w-40 h-40 object-cover mb-4"
                />
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-lg text-gray-600 mb-2">
                  ${product.price.toFixed(2)}
                </p>
                <motion.p
                  className="text-gray-700 mb-4"
                  variants={descriptionVariants}
                  initial="hidden"
                  whileHover="visible"
                >
                  {product.description}
                </motion.p>
                <motion.span
                  className="absolute bottom-2 text-sm text-gray-500"
                  variants={hoverTextVariants}
                  initial="hidden"
                  whileHover="visible"
                >
                  Hover for details
                </motion.span>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleQuantityChange(product.id, cartItems[product.id] - 1)}
                    className="bg-black text-white px-2 py-1 rounded hover:bg-gray-700"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={cartItems[product.id]}
                    min="0"
                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 0)}
                    className="w-16 text-center border rounded"
                  />
                  <button
                    onClick={() => handleQuantityChange(product.id, cartItems[product.id] + 1)}
                    className="bg-black text-white px-2 py-1 rounded hover:bg-gray-700"
                  >
                    +
                  </button>
                </div>
              </motion.div>
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
