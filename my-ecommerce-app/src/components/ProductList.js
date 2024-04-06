import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products') 
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, []); 

  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;