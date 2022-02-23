import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap-icons/icons/yin-yang.svg";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container-fluid container">
            <Link className="navbar-brand  mx-5" to="/">
              <i
                className="bi bi-yin-yang text-danger"
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
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    <button type="button" className="btn btn-outline-primary">
                      Home
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/about">
                    <button type="button" className="btn btn-outline-primary">
                      About
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
