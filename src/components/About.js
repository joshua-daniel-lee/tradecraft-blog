import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="section container">
          <div className="card darken-4 z-depth-4">
            <div className="card-content">
              <blockquote>Check out my work:</blockquote>
              <div className="content">
                <ul>
                  <li>
                    <a
                      href="https://github.com/joshualeehawaii"
                      target="_blank"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a href="https://about.me/joshuadaniellee" target="_blank">
                      About.me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
