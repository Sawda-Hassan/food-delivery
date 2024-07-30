import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
import myImage from '../../Components/Footer/last.png';

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
            <img src={myImage} alt width="215px" height="123px" />
             <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
       </div>
             </div>
            <div className='footer-content-center'>
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>Abou</li>
                    <li>Delivery</li>
                    <li>prifacy policy</li>

                </ul>
            </div>
            <div className='footer-content-righ'>
                <h2>Get IN TOUCH</h2>
                <ul>
                    <li>+1-212-245-234</li>
                    <li>Contact@food-delivery.com</li>
                    <li>w.wadnaha street</li>

                </ul>

            </div>
        </div>
        
        <hr />
        <p className='footer-copy-right'> Copyright @ Food-delivery.com -All Right Reserved</p></div>
  )
}

export default Footer