import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <div>
        <img src={item.image} alt={item.name} height= "200px" width="200px" />
        <p>{item.name}</p>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Total: ${item.quantity * item.price}</p>
        <button onClick={() => removeFromCart(item)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
