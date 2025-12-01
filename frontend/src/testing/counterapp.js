import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>

      <button onClick={() => { setCount(count + 1);
          if (count + 1 === 10) alert("🎉 You clicked 10 times!"); }} > Increment
      </button>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  ); 
}

export default App;
