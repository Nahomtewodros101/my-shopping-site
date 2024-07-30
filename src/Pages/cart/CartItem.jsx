import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

const infoVariants = {
  hidden: { opacity: 0, height: 0, overflow: 'hidden' },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
};

const CartItem = ({ data }) => {
  const { id, name, price, productImage, description, quantity } = data;

  return (
    <motion.div
      className="cart-item flex items-center bg-white border border-gray-300 rounded-lg shadow-md p-4 w-full max-w-md"
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
    >
      <img
        src={productImage}
        alt={name}
        className="w-32 h-32 object-cover rounded-lg mr-4"
      />
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <motion.div
          className="overflow-hidden"
          variants={infoVariants}
          initial="hidden"
          animate="hidden"
          whileHover="visible"
        >
          <p className="text-gray-600 mb-2">{description}</p>
          <p className="text-lg font-bold mb-2">${price.toFixed(2)}</p>
        </motion.div>
        <p className="text-sm text-gray-500">Quantity: {quantity}</p>
      </div>
    </motion.div>
  );
};

export default CartItem;
