import React, { createContext, useReducer } from "react";
import { CartReducer, sumItems } from "./CartReducer";

import { toast } from "react-toastify";

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
    toast.info("Product Increased", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch({ type: "INCREASE", payload });
  };

  const decrease = (payload) => {
    toast.info("Product Decreased", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch({ type: "DECREASE", payload });
  };

  const addProduct = (payload) => {
    console.log(state);
    toast.success("Product Added", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch({ type: "ADD_ITEM", payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  const clearCart = () => {
    toast.success("Cart Cleared", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch({ type: "CLEAR" });
  };

  const contextValues = {
    removeProduct,
    addProduct,
    increase,
    decrease,
    clearCart,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
