// Order.js

import React, { useState } from 'react';

const Order = ({ user }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const addToOrder = (itemId) => {
    setSelectedItems([...selectedItems, itemId]);
  };

  const removeFromOrder = (itemId) => {
    const updatedOrder = selectedItems.filter((id) => id !== itemId);
    setSelectedItems(updatedOrder);
  };

  const getTotalPrice = () => {
    // In a real app, calculate the total price based on menu items and quantities
    return selectedItems.reduce((total, itemId) => {
      // Calculate total price logic
    }, 0);
  };

  const handlePlaceOrder = () => {
    // In a real app, send the order to the backend for processing
    console.log('Order placed:', selectedItems);
  };

  return (
    <div>
      <h2>Order</h2>
      <ul>
        {selectedItems.map((itemId) => (
          <li key={itemId}>
            {/* Display selected items */}
            <button onClick={() => removeFromOrder(itemId)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${getTotalPrice()}</p>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default Order;