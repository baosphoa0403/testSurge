import React, { Component } from "react";
import {Link} from "react-router-dom"
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/"className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
                <Link to="/about"className="nav-link" href="#">
                  About
                </Link>
                <Link to="list-movie"className="nav-link" href="#">
                  listMovie
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
