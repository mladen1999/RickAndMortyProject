import { useState, useEffect } from "react";

import "./App.css";
import Card from "./components/Card/Card";
import Characters from "./components/Characters/Characters";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Characters />
    </div>
  );
}

export default App;
