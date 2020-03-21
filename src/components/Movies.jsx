import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

import "../css/img-cont.css";

class Movies extends Component {
  state = {
    isAdmin: false,
    data: []
  };

  async componentDidMount() {
    const { data } = await axios.get(`http://localhost:3001/movies`);
    this.setState({ data });
    const isAdmin = localStorage.getItem("isAdmin");
    this.setState({ isAdmin });
    console.log(isAdmin);
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>

        {this.state.data.map(m => {
          return (
            <div
              key={m.url}
              className="image-content"
              style={{ borderRadius: "none" }}
            >
              <div
                className="image"
                style={{ backgroundImage: `url(${m.url})` }}
              ></div>
              <div className="content">
                {!this.state.isAdmin && (
                  <h1
                    style={{
                      textDecoration: "underline",
                      marginBottom: "20px"
                    }}
                  >
                    {m.title}
                  </h1>
                )}
                {this.state.isAdmin && (
                  <h1
                    style={{
                      textDecoration: `underline`,
                      marginBottom: "20px"
                    }}
                  >
                    <Link to={`/movieform/${m.id}`}>{m.title}</Link>
                  </h1>
                )}

                <h3>
                  <span>Rating</span>: {m.rating}
                </h3>
                <h3>
                  <span>Director</span>: {m.director}
                </h3>
                <h3>
                  <span>Released</span>: {m.date}th {m.month}, {m.year}
                </h3>
                <p className="card-text mt-2"> {m.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Movies;
