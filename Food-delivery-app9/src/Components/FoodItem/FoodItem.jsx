import React, { useState, useContext } from 'react';
import { assets } from '../../assets/assets';
import './FoodItem.css';
import { StoreContext } from '../../Context/StoreContext';

function FoodItem({ id, name, description, price, image }) {
  const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const handleAddToCart = () => {
    addToCart(id);
    setItemCount(cartItems[id] || 0);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
    setItemCount(cartItems[id] || 0);
  };

  return (
    <div className="food-item" id={id}>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt=''/>
        {!cartItems[id] ? (
          <img className='add' onClick={handleAddToCart} src={assets.add_icon_white} alt="Add to Cart"/>
        ) : (
          <div className='food-item-counter'>
            <img onClick={handleRemoveFromCart} src={assets.remove_icon_red} alt="Remove from Cart"/>
            <p>{itemCount}</p>
            <img onClick={handleAddToCart} src={assets.add_icon_green} alt="Add more to Cart"/>
          </div>
        )}
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          {/* Assuming assets.rating_starts is defined */}
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
