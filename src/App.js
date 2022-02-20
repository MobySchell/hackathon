import "./App.css";
import React, { Component } from "react";

import { Routes, Route } from "react-router-dom";
import firebase from "./firebase/firebase";

import Home from "./components/Home.js";
import About from "./components/About.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.db = firebase.firestore();
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    );
  }
}

export default App;
