import { Component } from "react";
import { connect } from "react-redux";
import { switchAction } from "../store/actionsCreators";

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

// const LightComponentStore = connect(
//   (state) => ({
//     light: state,
//   }),
//   (dispatch) => ({
//     onSwitch: () => dispatch({ type: SWITCH_ACTION }),
//   })
// )(LightComponent);

const mapStateToProps = (state) => ({
  light: state,
});

const mapDispatchToProps = (dispatch) => ({
  onSwitch: () => dispatch(switchAction()),
});

const LightComponentStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(LightComponent);

export default LightComponentStore;
