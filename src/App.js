import React from "react";
import "./App.css";
import Picture from "./components/Photo";

function App() {
  return (
    <div>
      <div className="App-header">
        <h1>nAsA photo of the dAy</h1>
      </div>
      <div className="App">
        <Picture />
      </div>
    </div>
  );
}

export default App;
