import React, { Component } from "react";
import galaxy from "../components/imgs/galaxy.jpg";

export default class Login extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row border border-5 rounded-3 mt-5 shadow-lg">
            <div className="col m-0 p-0">
              <img className="w-100 " src={galaxy} alt="Login" />
            </div>
            <div className="col p-5">
              <form>
                <div>
                  <h1>Welcome Back</h1>
                </div>

                <div className="form-floating mb-3 mt-5">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Email"
                    aria-describedby="emailHelp"
                  />
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-3 px-5">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
