import axios from "axios";
import React, { Component } from "react";

import Navbar from "./Navbar";

class MovieForm extends Component {
  state = {
    data: []
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    await axios.put(`http://localhost:3001/movies/${id}`, this.state.data[0]);
    window.location = "/movies";
  };

  handleDescChange = e => {
    const data = [...this.state.data];
    data[0].description = e.currentTarget.value;
    // data[0].description = e.currentTarget.value;
    this.setState({ data });
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const { data } = await axios.get(`http://localhost:3001/movies/${id}`);
    this.setState({ data });
  }

  renderTitle() {
    if (this.state.data[0] === undefined) return "loading....";
    else return this.state.data[0].title;
  }

  renderDescription() {
    if (this.state.data[0] === undefined) return "loading....";
    else return this.state.data[0].description;
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <form onSubmit={this.handleSubmit}>
          <h2 className="movieform-heading"> Movie Form </h2>
          <input
            value={this.renderTitle()}
            type="text"
            placeholder=""
            readOnly
          />
          <input
            value={this.renderDescription()}
            type="text"
            placeholder="Write your own description"
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

export default MovieForm;
