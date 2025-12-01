import React, { useEffect } from "react";

function App() {
  useEffect(() => { console.log("Component Mounted"); }, []);

  return (
    <div>
      <h1>React useEffect Example</h1>
      <p>Check the console when this component loads.</p>
    </div>
  );
}

export default App;

