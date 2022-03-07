import React, { Component } from "react";
import galaxy from "../components/imgs/galaxyReg.jpg";
import firebase from "./../firebase/firebase.js";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.db = firebase.firestore();
    this.auth = firebase.auth();

    this.state = {
      Name: "",
      CellNumber: "",
      Email: "",
      Role: "",
    };
  }

  onRegister() {}

  onInputChange(e) {
    console.log(e);
    this.setState({
      Name: e.target.value,
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row border border-5 rounded-3 mt-5 shadow-lg">
            <div className="col m-0 p-0">
              <img className="w-100" src={galaxy} alt="Register" />
            </div>
            <div className="col p-5">
              <form>
                <div>
                  <h1>Join the Team</h1>
                </div>

                <div className="form-floating mb-3 mt-5">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingFirstAndLastName"
                    placeholder="First And Last Name"
                    aria-describedby="textHelp"
                    value={this.state.Name}
                    onChange={(e) => this.onInputChange(e)}
                  />
                  <label for="floatingFirstAndLastName" className="form-label">
                    First And Last Name
                  </label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    id="exampleInputTel"
                    placeholder="Phone Number"
                    aria-describedby="telHelp"
                    value={this.state.CellNumber}
                    onChange={(e) => this.onInputChange(e)}
                  />
                  <label for="exampleInputTel" className="form-label">
                    Your Phone Number
                  </label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Email Address"
                    aria-describedby="emailHelp"
                    value={this.state.Email}
                    onChange={(e) => this.onInputChange(e)}
                  />
                  <label for="exampleInputEmail1" className="form-label">
                    Your Email address
                  </label>
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Re-enter Password"
                  />
                </div>

                <button type="submit" className="btn btn-primary mt-3 px-5">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
