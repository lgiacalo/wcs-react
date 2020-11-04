import { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { switchAction } from "../store/actionsCreators";

function LightComponent(props) {
  const light = useSelector((state) => state);
  const dispatch = useDispatch();
  const onSwitch = useCallback(() => {
    dispatch(switchAction());
  }, [dispatch]);

  // const { light, onSwitch } = props;
  return (
    <div>
      <p>{light}</p>
      <button onClick={onSwitch}>Switch</button>
    </div>
  );
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
