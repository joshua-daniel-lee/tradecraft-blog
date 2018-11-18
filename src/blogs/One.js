import React, { Component } from "react";
import logo from "../assets/imageOne.jpg";

class One extends Component {
  render() {
    return (
      <div className="One">
        <div className="section container">
          <div className="card z-depth-5">
            <div className="card-content">
              <span className="card-title grey-text">One - Typhoon Yutu</span>
              <div className="card">
                <div className="card-image">
                  <img src={logo} alt="#" />
                </div>
              </div>
              <div className="lighten-4 grey-text">
                <p>Posted: 2018-11-17</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default One;
