import React, { useState } from "react";
import './LoginPopup.css'
import { assets } from "../../assets/assets";

function LoginPopup({setshowlogin}) {
  const{curstate,setcurstate}=useState("sign up")
  return (
    <div className="LoginPopup">
      <form action="" className="login-popup-container">
      <div className="login-popup-titile">
        <h2>{curstate}</h2>
        <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt="" />
      </div>
      <div className="login-popup-inputs">
        {curstate==="login"? <></>: <input type="text" placeholder="your name" required/>}
        <input type="email" placeholder="your email" required/>
        <input type="password" placeholder="password" required/>

      </div>
      <button>{curstate ==="sing up"?" create account ":"login"}</button>
      <div className="login-popup-condition">
        <input type="checkbox" required />
        <p>by continuing , i agree to terms if use & privacy policy</p>

        </div>
        {
          curstate==="logi"
          ? <p>Create a new account? <span onClick={()=>setcurstate("sing Up")}>Click here</span></p>
           :
           <p>Already have an account <span onClick={()=>setcurstate("login")}> login here</span></p>
        }
      </form>
      
    </div>
  )
}

export default LoginPopup