import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css';

function FoodDisplay({ category }) {
  const { foodlist } = useContext(StoreContext); // Use foodlist instead of foodList

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {foodlist && foodlist.length > 0 ? (
          foodlist.map((item, index) => (
            <FoodItem
              key={index}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p>No food items available.</p>
        )}
      </div>
    </div>
  );
}

export default FoodDisplay;
