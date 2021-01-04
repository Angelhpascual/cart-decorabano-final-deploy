import React, { useContext, useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import { ProductsContext } from "../../contexts/ProductsContext";
import styles from "./ProductsGrid.module.scss";

const ProductsGrid = () => {
  const { products } = useContext(ProductsContext);
  /**
   * Sate for the search term
   */

  const [searchTerm, setSearchTerm] = useState("");

  /**
   * State for the results (ARRAY)
   */

  const [searchResults, setSearchResults] = useState([]);

  /**
   * Filtering the array with searchTerm dependencies
   */

  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, products]);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-sm-8">
          <div className="py-3">{products.length} Products</div>
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <input
              type="text"
              name=""
              placeholder="Search product"
              className="form-control"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.p__grid}>
        {searchResults.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
