import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";

import "../css/reviews.css";

class Reviews extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:3001/visitors");
    console.log(res.data);
    this.setState({ data: res.data });
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="visitor-heading">Your reviews:</div>
        {this.state.data.map(r => {
          return (
            <div key={r.review} className="visitors-container">
              <span className="visitor-field-name">{r.name}</span>
              <span className="visitor-field-review">{r.review}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Reviews;
