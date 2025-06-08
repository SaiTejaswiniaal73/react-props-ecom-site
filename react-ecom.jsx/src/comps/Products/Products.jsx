import React from "react";
import { products } from "./data";
import Product from "./Product";
// import "Products.css"
const Products = () => {
  return (
    <div className="products-list">
      {
      products.products.map((p,index) => {
        return (
          <div key={index}>
            <Product singleP={p} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;

