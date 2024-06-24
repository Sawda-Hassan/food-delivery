import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import k from 'Components/navbar/food-delivery (2)-01.png'

import logo from 'Components/food-delivery (2)-01.png'
function Navbar() {
  return (
    <div className='navbar'>
        <img src={k} />
        <u className='navbar-menu'> 
        <li>home</li>
        <li>menu</li>
        <li>mobile-app</li>
        <li>Contact us</li>

      </u>
      <div className='navbar-light'>
        <img src={assets.search_icon} alt=''/>
       < div className='navbar-search-icon'/>
        <img src={assets.basket_icon} alt=''/>
        <div className='dot'></div>
        <button>sign in</button>
      </div>
        
    </div>
  )
}

export default Navbar