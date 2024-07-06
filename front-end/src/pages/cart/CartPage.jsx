import { useContext } from 'react';
import './CartPage.css';
import {StoreContext}  from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const CartPage = () => {

  const {cartItems, food_list, removeFromCart,getTotalCartAmount} = useContext(StoreContext)

  const navigate = useNavigate();

  const ship_amount = getTotalCartAmount() > 0 ? 2 : 0;

  return (
    <div className='cart-page'>
      <div key="cart-items" className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if(cartItems[item._id] > 0){
            return (
            <>
            <div key={index} className="cart-items-title cart-items-item">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${cartItems[item._id] * item.price}</p>
              <p className='cross' onClick={() => {removeFromCart(item._id)}}>X</p>
            </div>
            <hr />
            </>)
          }
        })}
      </div>

      <div className="cart-bottom">


        
      <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Promo Code' maxLength={50} />
              <button>Submit</button>
            </div>
          </div>
        </div>

        <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${ship_amount}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount() + ship_amount }</b>
              </div>              
            </div>
            <div className='checkout-button'>
              <button onClick={() => {navigate("/order")}}>PROCEE TO CHECKOUT</button>
            </div>
        </div>


        
        
      </div>
    </div>
  );
}
export default CartPage;
