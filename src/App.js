import "./App.css";

import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div className="App">
      <Tooltip position="top" text="Thanks for hovering! I'm a tooltip">
        <button
          style={{
            fontSize: 25,
            borderRadius: 15,
            backgroundColor: "lightcoral",
          }}
        >
          Hover over me!!!
        </button>
      </Tooltip>
    </div>
  );
}

export default App;
