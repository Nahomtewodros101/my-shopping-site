import { motion } from "framer-motion";
import React, { useContext } from "react";
import { products } from "../../products";
import { ShopContext } from '../../context/ShopContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const buttonVariants = {
  initial: { scale: 1 },
  clicked: { scale: 1.2, transition: { duration: 0.2 } },
};

const hoverVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" },
};

const infoVariants = {
  hidden: { opacity: 0, height: 0, overflow: 'hidden' },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
};

const Shop = () => {
  const { addToCart, cartItems, animationState, recentlyAdded } = useContext(ShopContext);

  return (
    <motion.div
      className="text-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="text-3xl font-bold mb-4">Shop</h1>
      <motion.div
        className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial="initial"
            whileHover="hover"
            variants={hoverVariants}
            className="flex flex-col items-center p-4 border rounded shadow-lg"
          >
            <img
              src={product.productImage}
              alt={product.name}
              className="w-40 h-40 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <motion.div
              variants={infoVariants}
              initial="hidden"
              whileHover="visible"
              className="flex flex-col items-center"
            >
              <p className="text-lg text-gray-600 mb-2">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <motion.button 
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700"
                onClick={() => addToCart(product.id)}
                initial="initial"
                animate={animationState[product.id] ? "clicked" : "initial"}
                variants={buttonVariants}
              >
                {recentlyAdded[product.id] ? 'Added to Cart' : 'Add to Cart'} {cartItems[product.id] ? `(${cartItems[product.id]})` : ''}
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Shop;
