import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import myImage from '../../Components/logo3.png';
import { Link } from 'react-router-dom';
function Navbar() {
    const [menu,setmenu]=useState("menu")
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" />

        <ul  className='navbar-menu'> 
        < Link to='/' onClick={()=>setmenu("home")}className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setmenu("menu")}className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={()=>setmenu("mobile-apps")}className={menu==="mobile-apps" ?"active":""}>mobile-app</a>
        <a  href ='footer'onClick={()=>setmenu("contact-us")}className={menu==="contact-us" ?"active":""}>Contact us</a>


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