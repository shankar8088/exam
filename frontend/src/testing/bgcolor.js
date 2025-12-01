import React, { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("white");

  const changeColor = () => {
    const colors = ["red", "blue", "green", "yellow", "orange"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return ( 
    <div style={{ backgroundColor: bgColor, height: "100vh" }}>
      <button onClick={changeColor}>Change Background</button>
    </div>
  );
}

export default App;
