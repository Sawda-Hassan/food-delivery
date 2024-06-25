import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

function Navbar() {
    const [menu,setmenu]=useState("menu")
  return (
    <div className='navbar'>
        <img src={assets.logo} />
        <ul   className='navbar-menu'> 
        <li onClick={()=>setmenu("home")}className={menu==="home"?"active":""}>home</li>
        <li onClick={()=>setmenu("menu")}className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setmenu("mobile-apps")}className={menu==="mobile-apps" ?"active":""}>mobile-app</li>
        <li onClick={()=>setmenu("contact-us")}className={menu==="contact-us" ?"active":""}>Contact us</li>


      </ul>
      <div className='navbar-light'>
        <img src={assets.search_icon} alt=''/>
       <div className='navbar-search-icon'/>
        <img src={assets.basket_icon} alt=''/>
        <div className='dot'></div>
        </div>
        <button>sign in</button>
      </div>
      
    
  )
}

export default Navbar