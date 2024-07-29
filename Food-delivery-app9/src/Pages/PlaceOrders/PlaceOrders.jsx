import React, { useContext } from 'react'
import './place-order.css'
import { StoreContext } from '../../Context/StoreContext'

const  placeOrders=()=> {
  const{getTotalCartAmount}=useContext(StoreContext)

  return (
     <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'> Delvery Information</p>
        <div className='mutlti-feild'>
          <input type="text" placeholder='First-name' />
          <input type="text" placeholder='Last-name' />
        </div>
        <input type="email" placeholder='Email' />
        <input type="text" placeholder='street' />
        <div className='multi-feild'>
        <input type="text" placeholder='city' />
        <input type="text" placeholder='State' />
        </div>
        <div className='multi-feild'>
        <input type="text" placeholder='zipcode' />
        <input type="text" placeholder='country' />
        </div>
        <input type="text" placeholder='phone' />
      </div>
      <div className='place-order-right'>
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
            <button>PROCEED TO Pay</button>
            </div>
          </div>
     </form>
  )
}

export default  placeOrders