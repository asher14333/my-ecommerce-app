import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

const Productpage = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [cartPosition, setCartPosition] = useState('200px'); 


  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity++;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setCartPosition('1000px');

  };

  const removeFromCart = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  
    const filteredCart = updatedCart.filter((cartItem) => cartItem.quantity > 0);
  
    setCart(filteredCart);
  
    if (filteredCart.length === 0) {
      setCartPosition('200px');
    }
  };
  
  
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    console.log('Saved Cart:', savedCart);
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    setCartPosition('1000px');

  }, []);

  useEffect(() => {
    console.log('Cart Updated:', cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  const cartwrapper = {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: '150px',
    right: cartPosition,
    padding: '10px',
  }
  
  return (
    <div className="product-page">
      <Header />
      <table>
        <tr>
          <td><ProductList addToCart={addToCart} /></td>
          <td style={cartwrapper}><Cart cart={cart} removeFromCart={removeFromCart} /></td>
        </tr>
      </table>
      <Footer />
    </div>
  );
};

export default Productpage;
