import { createContext, useEffect, useState } from "react";
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

  const contextValue = {
    // Add your context values here
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart
  };

  useEffect(() => {
    console.log(cartItems)
  },[cartItems])

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
