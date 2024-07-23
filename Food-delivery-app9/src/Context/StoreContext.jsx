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

const getTotalCartAmount=()=>{
  let TtotalAmount=0;
  for(const item in cartItems){
    if(cartItems[item]>0){
      let itemINFO=foodlist.find((product)=>product.id==item)
      TtotalAmount+=itemINFO.price* cartItems[item]
    }
  }
  return TtotalAmount;
}
  const contextValue = {
    foodlist, // Ensure this matches the variable name used in useContext
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
