// Menu.js

import React from 'react';
const Menu = () => {
  // In a real app, fetch the menu items from a backend server
  const menuItems = [
    { id: 1, name: 'Burger', price: 10 },
    { id: 2, name: 'Pizza', price: 12 },
    // Add more menu items
  ];

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;