import "../css/img-cont.css";
import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

class Actors extends Component {
  state = {
    data: [],
    isAdmin: false
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:3001/actors");
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
            <div className="image-content" key={m.URL}>
              <div
                className="image"
                style={{ backgroundImage: `url(${m.URL})` }}
              ></div>
              <div className="content">
                {!this.state.isAdmin && <h1> {m.NAME}</h1>}
                {this.state.isAdmin && (
                  <h1>
                    <Link to={`/actform/${m.ID}`}>{m.NAME}</Link>
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

export default Actors;
