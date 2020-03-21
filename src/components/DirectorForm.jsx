import axios from "axios";
import React, { Component } from "react";

import Navbar from "./Navbar";

class DirectorForm extends Component {
  state = {
    data: []
  };

  handleSubmit = e => {
    e.preventDefault();
    window.location = "/movies";
  };

  handleDescChange = e => {
    const data = [...this.state.data];
    data.DESCRIPTION = e.currentTarget.value;
    this.setState({ data });
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const { data } = await axios.get(`http://localhost:3001/directors/${id}`);
    console.log(data);
    this.setState({ data });
  }

  renderTitle() {
    if (this.state.data[0] === undefined) return "loading....";
    else return this.state.data[0].NAME;
  }

  renderDescription() {
    if (this.state.data[0] === undefined) return "loading....";
    else return this.state.data[0].DESCRIPTION;
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <form onSubmit={this.handleSubmit}>
          <h2 className="movieform-heading"> Director Form </h2>
          <input value={this.renderTitle()} type="text" readOnly />
          <input
            value={this.renderDescription()}
            type="text"
            onChange={this.handleDescChange}
          />

          <div className="login-buttons">
            <button type="submit"> Submit </button>
          </div>
        </form>
      </div>
    );
  }
}

export default DirectorForm;
