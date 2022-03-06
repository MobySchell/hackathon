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
              <div
                class="card text-start p-0 m-3 shadow"
                style={{ maxWidth: 450 }}
              >
                <div class="card-header">Company Name</div>
                <div class="card-body">
                  <h5 class="card-title">Position</h5>
                  <p class="card-text">
                    Job Details: Where it is and maybe possible pay on it
                  </p>
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

              <div
                class="card text-start p-0 m-3 shadow"
                style={{ maxWidth: 450 }}
              >
                <div class="card-header">Company Name</div>
                <div class="card-body">
                  <h5 class="card-title">Position</h5>
                  <p class="card-text">
                    Job Details: Where it is and maybe possible pay on it
                  </p>

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

              <div
                class="card text-start p-0 m-3 shadow"
                style={{ maxWidth: 450 }}
              >
                <div class="card-header">Company Name</div>
                <div class="card-body">
                  <h5 class="card-title">Position</h5>
                  <p class="card-text">
                    Job Details: Where it is and maybe possible pay on it
                  </p>

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
            </div>
          </div>

          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
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
