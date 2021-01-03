import React, { createContext, useReducer } from "react";
import { CartReducer, sumItems } from "./CartReducer";

/**
 * CartContex
 * This is where we can create the context that will
 * be consumed by CartReducer.js and will be able to
 * start differents functions.
 *
 * ADD_ITEM
 * REMOVE_ITEM
 * INCREASE
 * DECREASE
 *  */
//Create the context
export const CartContext = createContext();

//Manage the localstorage if "cart" exist put cart values in the array items and if It is doesn't exist put an empty array
const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

//To use the differents shared items we need a initialState
const initialState = {
  cartItems: storage,
  ...sumItems(storage),
  checkout: false,
};

const CartContextProvider = ({ children }) => {
  //dispatch the GUN!
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };

  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  const addProduct = (payload) => {
    console.log(state);
    dispatch({ type: "ADD_ITEM", payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleCheckout = () => {
    console.log("CHECKOUT", state);
    dispatch({ type: "CHECKOUT" });
  };

  const contextValues = {
    removeProduct,
    addProduct,
    increase,
    decrease,
    clearCart,
    handleCheckout,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
