import React, { createContext, useState } from "react";
import { mockProducts } from "../services/mockProducts";
export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  //Now we have the products on a State called products
  const [products] = useState(mockProducts);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
