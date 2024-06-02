import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductDetails;