import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Links from "./components/Links";
import About from "./components/About";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Hero />
          <Links />
          <About />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
