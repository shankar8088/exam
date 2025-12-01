import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const items = [
    { id: 1, name: "Item A", price: 10 },
    { id: 2, name: "Item B", price: 15 }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.map((item) => (
        <div key={item.id}>
          {item.name} - ₹{item.price}
          <button onClick={() => addToCart(item)}>Add</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default App;
