const { Component } = require("react");

class LightComponent extends Component {
  render() {
    const { light, onSwitch } = this.props;
    return (
      <div>
        <p>{light}</p>
        <button onClick={onSwitch}>Switch</button>
      </div>
    );
  }
}

export default LightComponent;
