import "./App.css";
import React, { Component } from "react";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./components/Home.js";
import About from "./components/About.js";

class App extends Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    );
  }
}

export default App;
