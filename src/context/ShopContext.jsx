import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (id) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [id]: (prevItems[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (updatedItems[id] > 1) {
        updatedItems[id] -= 1;
      } else {
        delete updatedItems[id];
      }
      return updatedItems;
    });
  };

  return (
    <ShopContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );
};
