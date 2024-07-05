import React from 'react';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import CartPage from './pages/cart/CartPage';
import PlaceOrderPage from './pages/placeorder/PlaceOrderPage';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route  path='/order' element={<PlaceOrderPage />} />
      </Routes>
    </div>
  );
}

export default App;
