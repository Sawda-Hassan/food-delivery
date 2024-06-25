import React from 'react'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import placeOrder from './Pages/place-order/placeOrder'
import Navbar from './Components/navbar/Navbar'
import { assets } from './assets/assets'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<placeOrder/>}/>

      </Routes>
      
    </div>
  )
}

export default App