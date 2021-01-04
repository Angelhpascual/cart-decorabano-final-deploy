import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import * as serviceWorker from "./serviceWorker";

import { HelmetProvider } from "react-helmet-async";
import ProductsContextProvider from "./contexts/ProductsContext";
import CartContextProvider from "./contexts/CartContext";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <HelmetProvider>
    <ProductsContextProvider>
      <CartContextProvider>
        <ToastContainer />
        <Routes />
      </CartContextProvider>
    </ProductsContextProvider>
  </HelmetProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
