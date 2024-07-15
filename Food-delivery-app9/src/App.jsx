import React from 'react'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import placeOrder from './Pages/place-order/placeOrder'
import Navbar from './Components/navbar/Navbar'
import Header from './Components/Header/Header'
import { assets } from './assets/assets'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
function App() {
  return (
   <>
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<placeOrder/>}/>

      </Routes>
   
      
    </div>
    <Footer />
   </>
  )
}

export default App