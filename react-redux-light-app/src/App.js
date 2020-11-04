import React, { Component } from "react";
import LightComponent from "./components/LightComponent";
import Navbar from "./components/Navbar";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light: "on",
    };
  }

  onSwitch = () => {
    this.setState((prevState) => ({
      light: prevState.light === "on" ? "off" : "on",
    }));
  };

  render() {
    const { light } = this.state;
    return (
      <div className="App">
        <Navbar light={light} />
        <LightComponent light={light} onSwitch={this.onSwitch} />
      </div>
    );
  }
}

export default App;
