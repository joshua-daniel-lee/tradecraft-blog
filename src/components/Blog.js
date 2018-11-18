import React, { Component } from "react";
import Introduction from "../blogs/Introduction";
import One from "../blogs/One";
import "../App.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <Introduction />
        <One />
      </div>
    );
  }
}

export default Blog;
