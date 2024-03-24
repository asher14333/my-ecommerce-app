// Productpage.js
import React, { useEffect, useState } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

const Productpage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from local storage on component mount
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(savedCartItems);
  }, []);

  useEffect(() => {
    // Save cart items to local storage whenever cartItems changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="product-page">
      <Header />
      <table>
        <tr>
          <td><ProductList /></td>
          <td style={{ verticalAlign: 'top' }}><Cart cartItems={cartItems} /></td>
        </tr>
      </table>
      <Footer />
    </div>
  );
};

export default Productpage;
