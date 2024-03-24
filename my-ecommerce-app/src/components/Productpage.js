import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

const Productpage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity++;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  
    setCart(updatedCart.filter((cartItem) => cartItem.quantity > 0));
  };
  
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);



  return (
    <div className="product-page">
      <Header />
      <table>
        <tr>
          <td><ProductList addToCart={addToCart} /></td>
          <td className="cart-wrapper" style={{ verticalAlign: 'top' }}><Cart cart={cart} removeFromCart={removeFromCart} /></td>
        </tr>
      </table>
      <Footer />
    </div>
  );
};

export default Productpage;
