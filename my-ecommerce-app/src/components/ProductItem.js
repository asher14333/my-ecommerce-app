// ProductItem.js
import React, { useState } from 'react';

const ProductItem = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="product-item" onMouseEnter={toggleDetails} onMouseLeave={toggleDetails}>
      <img 
      src={product.image} 
      alt={product.name} 
      style={{
        maxWidth: '200px',
        height: 'auto'
      }}/>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      {showDetails && <p>{product.description}</p>}
      <button onClick={() => console.log('Add to Cart clicked')}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
