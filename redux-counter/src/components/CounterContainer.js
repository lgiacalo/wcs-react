const { Component } = require("react");

class CounterContainer extends Component {
  render() {
    return (
      <>
        <p>0</p>
        <div>
          <button>remove 10</button>
          <button>remove 1</button>
          <button>reset</button>
          <button>add 1</button>
          <button>add 10</button>
        </div>
      </>
    );
  }
}

export default CounterContainer;
