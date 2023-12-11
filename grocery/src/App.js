import React, { useState } from "react";
import "./App.css";

const groceryItems = [
  { id: 1, name: "Apples", price: 2.5 },
  { id: 2, name: "Bananas", price: 1.5 },
  { id: 3, name: "Milk", price: 3.0 },
  { id: 4, name: "Bread", price: 2.0 },
];

const GroceryApp = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="App">
      <h1>Grocery Delivery</h1>
      <div className="grocery-items">
        <h2>Available Items</h2>
        <ul>
          {groceryItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <p>Total: ${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default GroceryApp;
