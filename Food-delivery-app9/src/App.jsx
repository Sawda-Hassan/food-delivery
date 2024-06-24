import React from 'react'

import Navbar from './Components/navbar/Navbar'
import { assets } from './assets/assets'
function App() {
  return (
    <div className='app'>
      <Navbar/>
      <u className='navbar-menu'> 
        <li>home</li>
        <li>menu</li>
        <li>mobile-app</li>
        <li>Contact us</li>

      </u>
      <div className='navbar-light'>
        <img src={assets.search_icon} alt=''/>
        <div className='dot'></div>
        <button>sign in</button>
      </div>

    </div>
  )
}

export default App