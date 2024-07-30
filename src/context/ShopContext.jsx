import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [recentlyAdded, setRecentlyAdded] = useState({}); 

  const addToCart = (id) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [id]: (prevItems[id] || 0) + 1,
    }));
    triggerRecentlyAdded(id); 
    triggerAnimation(id); 
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

  const triggerRecentlyAdded = (id) => {
    setRecentlyAdded((prev) => ({
      ...prev,
      [id]: true,
    }));
    setTimeout(() => {
      setRecentlyAdded((prev) => ({
        ...prev,
        [id]: false,
      }));
    }, 1000); 
  };

  const [animationState, setAnimationState] = useState({});

  const triggerAnimation = (id) => {
    setAnimationState((prev) => ({
      ...prev,
      [id]: true,
    }));
    setTimeout(() => {
      setAnimationState((prev) => ({
        ...prev,
        [id]: false,
      }));
    }, 1000); // Reset animation state after 1 second
  };

  return (
    <ShopContext.Provider value={{ cartItems, addToCart, removeFromCart, animationState, recentlyAdded }}>
      {children}
    </ShopContext.Provider>
  );
};
