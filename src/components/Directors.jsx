import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

class Directors extends Component {
  state = {
    data: [],
    isAdmin: false
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:3001/directors");
    this.setState({ data: res.data });
    const isAdmin = localStorage.getItem("isAdmin");
    this.setState({ isAdmin });
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
        {this.state.data.map(m => {
          return (
            <div key={m.URL} className="image-content">
              <div
                className="image"
                style={{ backgroundImage: `url(${m.URL})` }}
              ></div>
              <div key={m.URL} className="content">
                {!this.state.isAdmin && <h1> {m.NAME}</h1>}
                {this.state.isAdmin && (
                  <h1>
                    {" "}
                    <Link to={`/dirform/${m.ID}`}>{m.NAME}</Link>
                  </h1>
                )}
                <br />
                {m.DESCRIPTION}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Directors;
