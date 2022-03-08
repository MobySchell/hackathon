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
      Role: "Employee",
      password: "",
    };
  }

  onRegister(e) {
    e.preventDefault();
  }

  // Value of the state
  onNameChange(e) {
    this.setState({
      Name: e.target.value,
    });
  }
  onCellNumberChange(e) {
    this.setState({
      CellNumber: e.target.value,
    });
  }
  onEmailChange(e) {
    this.setState({
      Email: e.target.value,
    });
  }
  onPasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  render() {
    const { Name, CellNumber, Email, password } = this.state;

    return (
      <>
        <div className="container">
          <div className="row border border-5 rounded-3 mt-5 shadow-lg">
            <div className="col m-0 p-0">
              <img className="w-100" src={galaxy} alt="Register" />
            </div>
            <div className="col p-5">
              <div>
                <h1>Join the Team</h1>
              </div>
              <form onSubmit={(e) => this.onRegister(e)}>
                <div className="form-floating mb-3 mt-5">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingFirstAndLastName"
                    placeholder="First And Last Name"
                    aria-describedby="textHelp"
                    value={Name}
                    onChange={(e) => this.onNameChange(e)}
                  />
                  <label
                    htmlFor="floatingFirstAndLastName"
                    className="form-label"
                  >
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
                    value={CellNumber}
                    onChange={(e) => this.onCellNumberChange(e)}
                  />
                  <label htmlFor="exampleInputTel" className="form-label">
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
                    value={Email}
                    onChange={(e) => this.onEmailChange(e)}
                  />
                  <label htmlFor="exampleInputEmail1" className="form-label">
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
                    id="newPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => this.onPasswordChange(e)}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="validatePassword"
                    placeholder="Re-enter Password"
                  />
                </div>
              </form>

              <button type="submit" className="btn btn-primary mt-3 px-5">
                Register
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
