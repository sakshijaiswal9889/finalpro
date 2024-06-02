import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductCard;