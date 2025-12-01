import React, { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering</h1>

      <p>{login ? "Login Successful" : "Please Login"}</p>

      <button onClick={() => setLogin(!login)}>
        {login ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;  
