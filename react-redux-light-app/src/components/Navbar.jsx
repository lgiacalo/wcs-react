import { Component } from "react";

class Navbar extends Component {
  render() {
    const { light } = this.props;
    return <div className="Navbar">{light}</div>;
  }
}

export default Navbar;
