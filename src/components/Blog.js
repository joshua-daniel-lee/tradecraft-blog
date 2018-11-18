import React, { Component } from "react";
import Introduction from "../blogs/Introduction";
import "../App.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <Introduction />
      </div>
    );
  }
}

export default Blog;
