import "./App.css";
import React, { Component } from "react";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Admin from "./Admin/Admin";
import PendingUsers from "./Admin/PendingUsers";
import Users from "./Admin/Users";
import Jobs from "./Admin/Jobs";
import JobListings from "./components/JobListings";
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/job-listings" element={<JobListings />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/pending-users" element={<PendingUsers />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/jobs" element={<Jobs />} />
        </Routes>
      </div>
    );
  }
}

export default App;
