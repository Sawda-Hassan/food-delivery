import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../../Components/FoodItem/FoodItem';
import { Navigate, useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, foodlist, removeFromCart,  getTotalCartAmount  } = useContext(StoreContext);
  console.log('cartItems:', cartItems);
  console.log('foodlist:', foodlist);
  const Navigate=useNavigate();
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-titles'>
          <p>Items</p>
          <p>Titles</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>remove</p>
        </div>
        <br />
        <hr />
        {foodlist.map((item,index)=>{
          if(cartItems[item.id]>0)
          {
            return(

            <div>  <div className='cart-items-titles cart-items -item'>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>{cartItems[item.id]}</p>
            <p>{item.price*cartItems[item.id]}</p>
            <p onClick={()=>removeFromCart(item.id)} className='cross'>X</p>
          </div>
          <hr /></div>
              
              
            )
          }

})}
      </div>
        <div className='cart-button'>
          <div className='cart-total'>
            <h2>cart Toatals</h2>
            
              <div className='cart-total-details'>
                <p>subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <div  className='cart-total-details'>
                <p>delivery fee</p>
                <b>${2}</b>
              </div>
              <hr />
              <div className='cart-total-details'>
                <b>Total</b>
                <b>${getTotalCartAmount()+2}</b>
              </div>
              <button onClick={()=>Navigate("/order")} >PROCEED TO CHECKOUT</button>
            </div>
            <div className='cart-promocode'>
              <div>
                <p>if you have promo code ,Enter it here</p>
              <div className='cart-promocode-input'>
                <input type="text" placeholder='promocode' />
                <button>submit</button>
              </div>
              </div>
            </div>
          </div>
        </div>
    
  );
}

export default Cart;