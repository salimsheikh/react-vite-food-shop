import { createContext } from "react";
import PropsTypes from 'prop-types'
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
   const contextValue = {
    // Add your context values here
    food_list
   }   
   return(
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
   );
}

StoreContextProvider.propsTypes = {
    children: PropsTypes.node.isRequired
}

export default StoreContextProvider