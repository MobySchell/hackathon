import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdminNav extends Component {
  render() {
    return (
      <div className="p-3">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link
              className="nav-link border-bottom border-primary border-3"
              aria-current="page"
              to="/admin"
            >
              Pending Users
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link border-bottom border-primary border-3"
              to="/admin/users"
            >
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link border-bottom border-primary border-3"
              to="/admin/jobs"
            >
              Jobs
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
