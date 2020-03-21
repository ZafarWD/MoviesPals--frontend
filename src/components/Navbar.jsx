import "../css/navbar.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-header">
            <Link className="nav-brand" to="/movies">
              moviepals.com
            </Link>
          </div>

          <div className="nav-content">
            <Link className="nav-link link" to="/movies">
              Movies
            </Link>
            <Link className="nav-link link" to="/actors">
              Actors
            </Link>
            <Link className="nav-link link" to="/directors">
              Directors
            </Link>
            <Link className="nav-link link" to="/reviews">
              Reviews
            </Link>
            <Link className="nav-link link" to="/visitors">
              Visitors
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
