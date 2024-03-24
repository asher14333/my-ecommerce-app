// Cart.js
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      <h3>Total: {total}</h3>
    </div>
  );
};

export default Cart;
