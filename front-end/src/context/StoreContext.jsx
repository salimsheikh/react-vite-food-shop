import { createContext, useState } from "react";
import PropsTypes from "prop-types";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  

  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    console.log(itemId)
    if(!cartItems[itemId]){
        setCartItems((prev) => ({...prev, [itemId]: 1}));
    }else{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    }
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item_id in cartItems)
      {
        if(cartItems[item_id] > 0){
          let itemInfo = food_list.find((product) => product._id === item_id);
          totalAmount += itemInfo.price*cartItems[item_id];
        }
      }
      return totalAmount;
  }

  const contextValue = {
    // Add your context values here
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propsTypes = {
  children: PropsTypes.node.isRequired,
};

export default StoreContextProvider;
