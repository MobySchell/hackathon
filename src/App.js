import "./App.css";
import React, { Component } from "react";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Admin from "./Admin/Admin";
import PendingUsers from "./Admin/PendingUsers";
import Users from "./Admin/Users";
import AdminJobs from "./Admin/AdminJobs";
import JobListings from "./components/JobListings";
import Profile from "./components/Profile";

import firebase from "./firebase/firebase";

class App extends Component {
  constructor(props) {
    super(props);

    this.auth = firebase.auth();
    this.db = firebase.firestore();

    this.state = {
      user: null,
      loading: true,
      jobs: [],
    };
  }

  componentDidMount() {
    this.auth.onAuthStateChanged((user) => {
      this.setState({ user: user, loading: false });
    });
  }

  onJobPosted(job) {
    this.state.jobs.push(job);
    this.setState({ jobs: this.state.jobs });
  }

  render() {
    const { user, loading } = this.state;

    return (
      <div className="App">
        <Navbar user={user} />
        {loading ? (
          <div>Loading</div>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={<Profile createJob={(job) => this.onJobPosted(job)} />}
            />
            <Route
              path="/job-listings"
              element={<JobListings jobs={this.state.jobs} />}
            />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/pending-users" element={<PendingUsers />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/jobs" element={<AdminJobs />} />
          </Routes>
        )}
      </div>
    );
  }
}

export default App;
