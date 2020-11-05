import { connect } from "react-redux";
import { setFIlterAction } from "../store/filterActions";
import { filterSelector } from "../store/filterSelectors";

export function TodoFilter({ value, onChange }) {
  console.log("value :>> ", value);
  return (
    <div>
      <button disabled={value === null} onClick={() => onChange(null)}>
        Aucun filtre
      </button>
      <button disabled={value === true} onClick={() => onChange(true)}>
        Complété
      </button>
      <button disabled={value === false} onClick={() => onChange(false)}>
        A faire
      </button>
    </div>
  );
}

export const TodoFilterStore = connect(
  (state) => ({
    value: filterSelector(state),
  }),
  (dispatch) => ({
    onChange: (value) => dispatch(setFIlterAction(value)),
  })
)(TodoFilter);
