import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import myImage from '../../Components/logo3.png';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
function Navbar({setshowlogin}) {
    const [menu,setmenu]=useState("menu")
    const{getTotalCartAmount}=useContext(StoreContext)
  return (
    <div className='navbar'>
     <Link  to=''> <img src={assets.logo} alt="" /></Link>

        <ul  className='navbar-menu'> 
        < Link to='/' onClick={()=>setmenu("home")}className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setmenu("menu")}className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={()=>setmenu("app-download")}className={menu==="app-download" ?"active":""}>mobile-app</a>
        <a  href ='#footer'onClick={()=>setmenu("contact-us")}className={menu==="contact-us" ?"active":""}>Contact us</a>


      </ul>
      <div className='navbar-light'>
        <img src={assets.search_icon} alt=''/>
       <div className='navbar-search-icon'/>
       <Link to='/cart' ><img src={assets.basket_icon} alt=''/> </Link>
        <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setshowlogin(true)}>sign in</button>
      </div>
      
    
  )
}

export default Navbar