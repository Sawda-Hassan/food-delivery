import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import './Home.css'
import ExploreMenu from '../../Components/Explore-menu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import Footer from '../../Components/Footer/Footer'
import AppDownload from '../../Components/AppDownload/AppDownload'
function Home() {
  const[category,setCategory]=useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
       <FoodDisplay category={category}/>
       <AppDownload/>
    </div>
  )
}

export default Home