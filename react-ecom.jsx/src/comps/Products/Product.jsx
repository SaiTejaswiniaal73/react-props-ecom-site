import React from "react";
import "./Products.css";

const Product = ({ singleP }) => {
  const product = singleP;
  console.log(product);
  return (
    <div className="product-card">
      <img
        className="products-image"
        width={200}
        src={product.images[0]} // make sure it's an array
        alt={product.title}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/200x150?text=No+Image"; // fallback image
        }}
      />

      {/* <img  className="products-image" src={product.images} alt=" " width={200} /> */}
      <div>
        <h3 className="product-name">
          {/* <span>Name:</span> */}
          {product.title}
        </h3>
      </div>
      <p className="products-price">
        <span>Price:</span>
        {product.price}
      </p>

      <p className="product-tags">
        <span>Category:</span>
        {product.category}
      </p>
      <p className="product-brand">
        <span>Brand:</span>
{product.brand}
      </p>
      <p className="products-rating">
        <span>Rating:</span>
        {product.rating}
      </p>
      
      <p className="producst-dime">
        <span>Width:</span>
        {product.dimensions.width},<span>Height:</span>
        {product.dimensions.height}
      </p>
     
    </div>
  );
};

export default Product;