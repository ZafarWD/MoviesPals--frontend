import axios from "axios";
import React, { Component } from "react";

import { Link } from "react-router-dom";

import Navbar from "./Navbar";

class Visitors extends Component {
  state = {
    account: { name: "", review: "" },
    errors: {}
  };

  validate = () => {
    const errors = {};

    if (
      this.state.account.name.trim() === "" ||
      this.state.account.review.trim() === ""
    )
      errors.name = "*name or review is empty";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = async e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;

    localStorage.setItem("isAdmin", true);
    const { data } = await axios.post(
      `http://localhost:3001/visitors`,
      this.state.account
    );
    console.log(data);
    window.location = "/reviews";
  };

  handleNameChange = e => {
    const account = { ...this.state.account };
    account.name = e.currentTarget.value;
    this.setState({ account });
  };

  handleReviewChange = e => {
    const account = { ...this.state.account };
    account.review = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    return (
      <div>
        <Navbar />
        <form onSubmit={this.handleSubmit}>
          <div className="login-space visitors-space"> </div>
          <h2> Your review means a LOT!</h2>
          <input
            value={this.state.account.name}
            type="text"
            placeholder="Name"
            onChange={this.handleNameChange}
          />
          <input
            value={this.state.account.review}
            type="text"
            placeholder="Review"
            onChange={this.handleReviewChange}
          />
          {this.state.errors.name && (
            <div className="login-error"> {this.state.errors.name} </div>
          )}
          <div className="login-buttons">
            <button type="submit"> Submit </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Visitors;
