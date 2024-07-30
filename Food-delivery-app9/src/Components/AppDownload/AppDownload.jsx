import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
function AppDownload() {
  return (
    <div className='app-download' id='app-downlaod'>
    <p>for better Experince Download <br />Food-delivery-app</p>
   <div className='app-downlaod-platforms'>
    <img src={assets.play_store} alt="" />
    <img src={assets.app_store} alt="" />
   </div>
    </div>
  )
}

export default AppDownload