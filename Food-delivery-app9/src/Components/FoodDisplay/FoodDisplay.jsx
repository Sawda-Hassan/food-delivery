import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css';

function FoodDisplay({ category }) {
  const { foodlist } = useContext(StoreContext); // Use foodlist instead of foodList

  const getTitle = (category) => {
    if (category === "All") {
      return "Top dishes near you";
    } else {
      return `Top ${category} dishes near you`;
    }
  };

  return (
    <div className="food-display" id="food-display">
      <h2>{getTitle(category)}</h2>
      <div className="food-display-list">
        {foodlist.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
