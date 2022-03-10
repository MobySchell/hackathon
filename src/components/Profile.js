import React, { Component } from "react";
import "../../node_modules/bootstrap-icons/icons/person-bounding-box.svg";
import Jobs from "./modals/Jobs";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      position: "",
      details: "",
      approved: false,
    };
  }

  onCompanyPost(e) {
    e.preventDefault();
  }

  onJobPost() {
    const job = new Jobs(
      this.state.companyName,
      this.state.position,
      this.state.details,
      this.state.approved
    );

    this.props.createJob(job);
    this.setState({ companyName: "", position: "", details: "" });
  }

  onCompanyChange(e) {
    this.setState({ companyName: e.target.value });
  }

  onPositionChange(e) {
    this.setState({ position: e.target.value });
  }

  onDetailsChange(e) {
    this.setState({ details: e.target.value });
  }

  render() {
    const { companyName, position, details } = this.state;

    return (
      <div>
        <div className="mt-5"></div>
        <div className="container d-flex justify-content-center">
          <div className="w-50 border border-3 rounded-3 border-primary shadow-lg">
            <h1 className="mt-4">Profile</h1>
            <div style={{ fontSize: 80 }}>
              <i className="bi bi-person-bounding-box"></i>
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
            <div className="mb-3 container">
              <form onSubmit={(e) => this.onCompanyPost(e)}>
                <label htmlFor="companyName" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="companyName"
                  placeholder=""
                  value={companyName}
                  onChange={(e) => this.onCompanyChange(e)}
                />

                <label htmlFor="position" className="form-label">
                  Position
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="position"
                  placeholder=""
                  value={position}
                  onChange={(e) => this.onPositionChange(e)}
                />

                <label htmlFor="details" className="form-label">
                  Details Of The Job
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="details"
                  placeholder=""
                  value={details}
                  onChange={(e) => this.onDetailsChange(e)}
                />

                <button
                  type="submit"
                  className="btn btn-outline-primary mt-2"
                  onClick={() => this.onJobPost()}
                >
                  Post Job
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// First And Last Name, Your Phone Number, Your Email address
/* Todo: onAddJob() {
  const job = new Jobs(this.companyName ;
    this.position;
    this.details;
    this.approved)
}
*/
