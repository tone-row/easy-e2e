import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Change something about the site to see if the deploy preview url
          updates
        </p>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          data-testid="user input"
        />
        <h1>{value}</h1>
      </header>
    </div>
  );
}

export default App;
