import React, { Component } from "react";
import AdminNav from "./AdminNav";
import PendingUsers from "./PendingUsers";

export default class Admin extends Component {
  render() {
    return (
      <div>
        <AdminNav></AdminNav>
        <PendingUsers />
      </div>
    );
  }
}
