import React, { Component } from "react";
import galaxy from "../components/imgs/galaxy.jpg";
import firebase from "../firebase/firebase";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.auth = firebase.auth();

    this.state = {
      Email: "",
      password: "",
      error: "",
    };
  }

  async onLogin(e) {
    e.preventDefault();

    try {
      const { Email, password } = this.state;
      const login = await this.auth.signInWithEmailAndPassword(Email, password);
      console.log(login);
      this.props.history.push("/job-listings");
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  onEmailChange(e) {
    this.setState({ Email: e.target.value });
  }
  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    const { Email, password, error } = this.state;

    return (
      <>
        <div className="container">
          <div className="row border border-5 rounded-3 mt-5 shadow-lg">
            <div className="col m-0 p-0">
              <img className="w-100 " src={galaxy} alt="Login" />
            </div>
            <div className="col p-5">
              <form onSubmit={(e) => this.onLogin(e)}>
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
                    value={Email}
                    onChange={(e) => this.onEmailChange(e)}
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
                    value={password}
                    onChange={(e) => this.onPasswordChange(e)}
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-3 px-5">
                  Login
                </button>

                {error ? (
                  <div class="alert alert-danger mt-3" role="alert">
                    {error}
                  </div>
                ) : (
                  <div></div>
                )}
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
