import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./components/Home.js";
import About from "./components/About.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
