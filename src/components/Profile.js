import React, { Component } from "react";
import "../../node_modules/bootstrap-icons/icons/person-bounding-box.svg";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="mt-5"></div>
        <div className="container d-flex justify-content-center">
          <div className="w-50 border border-3 rounded-3 border-primary shadow-lg">
            <h1 className="mt-4">Profile</h1>
            <div style={{ fontSize: 80 }}>
              <i class="bi bi-person-bounding-box"></i>
            </div>
            <div className="row my-3">
              <div className="col my-2">
                <div className="my-1">First And Last Name</div>
                <div className="my-1">Your Phone Number</div>
                <div className="my-1">Your Email address</div>
              </div>
              <div className="col my-2">
                <div className="my-1">First And Last Name</div>
                <div className="my-1">Your Phone Number</div>
                <div className="my-1">Your Email address</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// First And Last Name, Your Phone Number, Your Email address
