import "./PlaceOrderPage.css";
import {StoreContext}  from '../../context/StoreContext'
import { useContext } from "react";
const PlaceOrderPage = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  const ship_amount = getTotalCartAmount() > 0 ? 2 : 0;

  return (
    <div className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />

        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Counry" />
        </div>

        <input  type="text" placeholder="Phone" />


      </div>
      <div className="place-order-right">


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
};

export default PlaceOrderPage;
