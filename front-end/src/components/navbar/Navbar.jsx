import { useContext, useState } from 'react';
import './Navbar.css';
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import PropTypes from 'prop-types';


Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

const Navbar = ({setShowLogin, theme, setTheme}) => {

  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext);

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <div className='navbar'>
      <Link to="/"><img src={assets.logo} alt="" className='logo' /></Link>
      <div className="navbar-menu">
        <Link to="/" onClick={()=>{setMenu("home")}} className={menu === 'home' ? 'active' : ''}>HOME</Link>
        <Link to="/" href='#explore-menu' onClick={()=>{setMenu("menu")}} className={menu === 'menu' ? 'active' : ''}>MENU</Link>
        <Link to="/#app-download" href='#app-download' onClick={()=>{setMenu("mobile-app")}} className={menu === 'mobile-app' ? 'active' : ''}>MOBILE APP</Link>
        <a href='#footer' onClick={()=>{setMenu("contact-us")}} className={menu === 'contact-us' ? 'active' : ''}>CONTACT US</a>
      </div>

      <div className="navbar-right">

        <img src={assets.search_icon} alt="" className='search-icon' />

        <div className="navbar-basket-icon">
          <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "hide-dot" : "dot"}></div>
        </div>

        <img onClick={() => {toggle_mode()}} src={theme === 'light' ? assets.toggle_light : assets.toggle_dark} alt='' className='theme-icon' />
        
        <button onClick={() =>setShowLogin(true)}>Sign In</button>
      </div>
    </div>

  );
}

export default Navbar;
