import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import './Home.css'
import ExploreMenu from '../../Components/Explore-menu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
function Home() {
  const[category,setCategory]=useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
       <FoodDisplay category={category}/>
    </div>
  )
}

export default Home