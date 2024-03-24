// ProductList.js
import React from 'react';
import ProductItem from './ProductItem';
import productsData from '../data/products';

const ProductList = () => {
  return (
    <div className="product-list">
      {productsData.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
