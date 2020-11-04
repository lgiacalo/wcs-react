import { connect } from "react-redux";

import { Component } from "react";
import {
  createResetAction,
  createAddAction,
  createRemoveAction,
} from "../store/creatorsActions";

class CounterComponent extends Component {
  render() {
    const { counter, add, remove, reset } = this.props;
    return (
      <>
        <p>{counter}</p>
        <div>
          <button onClick={() => remove(10)}>remove 10</button>
          <button onClick={() => remove(1)}>remove 1</button>
          <button onClick={reset}>reset</button>
          <button onClick={() => add(1)}>add 1</button>
          <button onClick={() => add(10)}>add 10</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state,
});

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(createResetAction()),
  add: (n) => dispatch(createAddAction(n)),
  remove: (n) => dispatch(createRemoveAction(n)),
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);

export default CounterContainer;
