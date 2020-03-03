import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

import UseAnimations from "react-useanimations";
// Package currently contains a bug where the icon doesn't play the reverse animation when assigned a onClick event caller. Bug has been fixed,
// currently awaiting pull request acceptance

import "../styles/Style.scss";

const logo = require("../assets/logo.jpg");

function NavbarComponent(props) {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          <img height="30px" width="auto" src={logo} alt="Wealth systems logo"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            {" "}
            <UseAnimations animationKey="menu2" size={22} />
          </span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <Link className="nav-link" to="/user-info">
              <li className="nav-item active">Your Profile</li>
            </Link>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavbarComponent;
