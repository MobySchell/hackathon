import React, { Component } from "react";
import AdminNav from "./AdminNav";

export default class Jobs extends Component {
  render() {
    return (
      <div>
        <AdminNav></AdminNav>
        <div className="container mt-3">
          <div class="card shadow-lg">
            <div class="card-header">
              <h3>Jobs</h3>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex align-items-center">
                <div className="flex-fill">Company</div>
                <div className="flex-fill">Details On Job</div>
                <div className="flex-fill">
                  <button
                    type="button"
                    class="btn btn-outline-info"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Info
                  </button>
                </div>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <div className="flex-fill">Company</div>
                <div className="flex-fill">Details On Job</div>
                <div className="flex-fill">
                  <button
                    type="button"
                    class="btn btn-outline-info"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Info
                  </button>
                </div>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <div className="flex-fill">Company</div>
                <div className="flex-fill">Details On Job</div>
                <div className="flex-fill">
                  <button
                    type="button"
                    class="btn btn-outline-info"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Info
                  </button>
                </div>
              </li>
            </ul>
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
