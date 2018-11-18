import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="section container">
          <div className="card z-depth-4">
            <div className="card-content">About</div>
          </div>
        </div>
        <div className="dates center">
          {" "}
          <Link to="/">Introduction</Link>
        </div>
      </div>
    );
  }
}

export default About;
