import { motion } from "framer-motion";
import React from "react";
import { products } from "../data/products";
import Product from "./Product";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Shop = () => {
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
          <motion.div key={product.id} variants={itemVariants}>
            <Product data={product} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Shop;
