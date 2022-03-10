import React, { Component } from "react";

export default class JobListings extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h3 className="mt-5">Available Jobs:</h3>
          <div className="mt-5"></div>

          <div>
            <div className="container row row-cols-2 d-flex justify-content-center">
              {this.props.jobs.map((job) => {
                return (
                  <div
                    key={job.id}
                    class="card text-start p-0 m-3 shadow"
                    style={{ maxWidth: 450 }}
                  >
                    <div class="card-header">{job.companyName}</div>
                    <div class="card-body">
                      <h5 class="card-title">{job.position}</h5>
                      <p class="card-text">{job.details}</p>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Understood
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
