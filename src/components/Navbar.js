import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap-icons/icons/sunset.svg";
import "../../node_modules/bootstrap-icons/icons/list.svg";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg border-bottom border-primary border-3 shadow-sm">
          <div className="container-fluid container">
            <Link className="navbar-brand  mx-5" to="/">
              <i
                className="bi bi-sunset text-primary"
                style={{ fontSize: 35 }}
              ></i>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon d-flex justify-content-center align-items-center">
                <i className="bi bi-list" style={{ fontSize: 35 }}></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav navbar-right">
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    <button
                      type="button"
                      className="btn btn-outline-primary shadow-sm"
                    >
                      Admin
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <button
                      type="button"
                      className="btn btn-outline-primary shadow-sm"
                    >
                      Login
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    <button
                      type="button"
                      className="btn btn-outline-primary shadow-sm"
                    >
                      Register
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/job-listings">
                    <button
                      type="button"
                      className="btn btn-outline-primary shadow-sm"
                    >
                      Job Listings
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    <button
                      type="button"
                      className="btn btn-outline-primary shadow-sm"
                    >
                      Profile
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
