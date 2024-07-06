import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import CartPage from './pages/cart/CartPage';
import PlaceOrderPage from './pages/placeorder/PlaceOrderPage';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  useEffect(() =>{console.log(`showLoing ${showLogin}`);})

  
  return (
    
    <>
    {showLogin ? <LoginPopup  setShowLogin={setShowLogin}  /> : <></>}    
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route  path='/order' element={<PlaceOrderPage />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
