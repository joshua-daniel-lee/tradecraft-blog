import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <nav className="nav-wrapper blue-grey darken-4">
        <div className="container">
          <Link to="/" className="brand-logo">
            Tradecraft Blog
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
