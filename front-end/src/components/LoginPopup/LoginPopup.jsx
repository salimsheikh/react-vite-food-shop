import { useEffect, useState } from 'react';
import './LoginPopup.css'
import { assets } from '../../assets/assets';
const LoginPopup = ({setShowLogin}) => {
    const [currState, setCurrState] = useState('sign-up');
    console.log(currState);
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState === "sign-up" ? "Sign Up" : "Sign In"}</h2>
            <img onClick={()=>{setShowLogin(false)}} src={assets.cross_icon} alt="" />
        </div>

        <div className="login-popup-inputs">
            {currState === "sign-up" ? <input type="text" placeholder='Your name' required /> : <></>}
            <input type="email" placeholder='Your email' required  />
            <input type="password" placeholder='Password' required  />
        </div>

        <button>{currState === "sign-up" ? "Create account" : "Login"}</button>
        {currState === "sign-up" ? <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continuing, i agree to the terms of use & privacy policy</p>
        </div> : <></>}

        

        {currState === 'sign-in' ? <p>Create a new account? <span onClick={() => {setCurrState('sign-up')}}>click here</span></p> : <p>Already have an account? <span onClick={() => {setCurrState('sign-in')}}>Login here</span></p>}
        
        
      </form>

    </div>
  );
}

export default LoginPopup;
