// CartItem.js
import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: {item.price * item.quantity}</p>
      <button onClick={() => console.log('Remove clicked')}>Remove</button>
    </div>
  );
};

export default CartItem;
