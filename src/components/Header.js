import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <nav className=" Header nav-wrapper blue-grey darken-4">
        <div className="container">
          <Link to="/" className="brand-logo">
            tradecraft.info
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
