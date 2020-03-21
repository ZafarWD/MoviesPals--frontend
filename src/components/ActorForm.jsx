import axios from "axios";
import React, { Component } from "react";

import Navbar from "./Navbar";

class ActorForm extends Component {
  state = {
    data: []
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const { data } = await axios.put(
      `http://localhost:3001/actors/${id}`,
      this.state.data[0]
    );
    console.log(data);
    window.location = "/actors";
  };

  handleDescChange = e => {
    const data = [...this.state.data];
    data[0].DESCRIPTION = e.currentTarget.value;
    this.setState({ data });
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const { data } = await axios.get(`http://localhost:3001/actors/${id}`);
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
          <h2 className="movieform-heading"> Actor Form </h2>
          <input
            value={this.renderTitle()}
            type="text"
            placeholder=""
            readOnly
          />
          <input
            value={this.renderDescription()}
            type="text"
            placeholder=""
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

export default ActorForm;
