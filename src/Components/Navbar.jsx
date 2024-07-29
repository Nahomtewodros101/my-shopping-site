import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    // Perform animation and then navigate
    setTimeout(() => {
      navigate(path);
    }, 200); // Duration should match the animation duration
  };

  return (
    <div className="shadow-2xl rounded-md p-4">
      <div className="links font-semibold flex items-center justify-end space-x-4">
        <motion.div
          whileTap={{ scale: 1.8 }}
          onClick={() => handleClick('/')}
          className="cursor-pointer"
        >
          <span className="text-black hover:text-gray-300">Shop</span>
        </motion.div>
        <motion.div
          whileTap={{ scale: 1.8 }}
          onClick={() => handleClick('/cart')}
          className="cursor-pointer"
        >
          <span className="text-black hover:text-gray-300 flex items-center">
            <ShoppingCart size={25} />
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
