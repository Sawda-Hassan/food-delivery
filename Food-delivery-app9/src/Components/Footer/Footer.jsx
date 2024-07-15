import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi sapiente vel saepe molestias voluptatum rerum reiciendis deserunt dignissimos. Corporis, nesciunt recusandae. Quibusdam impedit eum qui deserunt ipsam nobis deleniti! Repellendus.</p>
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
                    <li>Contact@tomato.com</li>
                </ul>

            </div>
        </div>
        
        <hr />
        <p className='footer-copy-right'> Copyright @ Tomato.com -All Right Reserved</p></div>
  )
}

export default Footer