// StoreContext.js
import React, { createContext, useState, useEffect } from 'react';
import { foods } from '../assets/assets';
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [foodList, setFoodList] = useState(foods);

  return (
    <StoreContext.Provider value={{ foodList }}>
      {props.children}
    </StoreContext.Provider>
  
  );

};
export default StoreContextProvider