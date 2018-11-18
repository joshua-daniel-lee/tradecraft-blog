import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Blog from "./components/Blog";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Hero />
          <About />
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
