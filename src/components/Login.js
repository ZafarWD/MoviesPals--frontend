import React, { Component } from "react";

import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    account: { username: "admin@moviepals.com", password: "" },
    errors: {}
  };

  validate = () => {
    const errors = {};

    if (this.state.account.password !== "password123")
      errors.password = "*password empty or incorrect";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;

    localStorage.setItem("isAdmin", true);
    window.location = "/movies";
  };

  handlePassChange = e => {
    const account = { ...this.state.account };
    account.password = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="login-space"> </div> <h2> Login </h2>
        <input
          value={this.state.account.username}
          type="text"
          placeholder="@username"
          readOnly
        />
        <input
          value={this.state.account.password}
          type="password"
          placeholder="Password"
          onChange={this.handlePassChange}
        />{" "}
        {this.state.errors.password && (
          <div className="login-error"> {this.state.errors.password} </div>
        )}{" "}
        <div className="login-buttons">
          <button type="submit"> Submit </button>{" "}
          <Link to="/movies">
            <button> Skip </button>{" "}
          </Link>{" "}
        </div>{" "}
      </form>
    );
  }
}

export default Login;
