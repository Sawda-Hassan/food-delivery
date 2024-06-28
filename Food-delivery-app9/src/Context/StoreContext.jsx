// StoreContext.js
import React, { createContext, useState, useEffect } from 'react';
import { foodlist } from '../assets/assets'; // Assuming foodlist is defined in assets/assets.js

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemID) => {
    setCartItems((prev) => ({
      ...prev,
      [itemID]: (prev[itemID] || 0) + 1,
    }));
  };

  const removeFromCart = (itemID) => {
    setCartItems((prev) => {
      const updatedItems = { ...prev };
      if (updatedItems[itemID] > 1) {
        updatedItems[itemID] -= 1;
      } else {
        delete updatedItems[itemID];
      }
      return updatedItems;
    });
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    foodlist, // Ensure this matches the variable name used in useContext
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
