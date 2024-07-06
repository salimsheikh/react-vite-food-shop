import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import CartPage from './pages/cart/CartPage';
import PlaceOrderPage from './pages/placeorder/PlaceOrderPage';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() =>{    
    localStorage.setItem('current_theme',theme);
  },[theme]);

  
  return (
    
    <div className={`body-container ${theme}`}>
      {showLogin ? <LoginPopup  setShowLogin={setShowLogin}  /> : <></>}    
      <div className="app">
        <Navbar setShowLogin={setShowLogin} theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route  path='/order' element={<PlaceOrderPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
