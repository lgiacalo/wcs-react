import { Provider } from "react-redux";
import { createStore } from "redux";
import Result from "./Containers/Result";

const houses = ["Serpentard", "Griffondor", "Serdaigle", "Pouffsoufle"];

const initialState = {
  houses,
  selectedHouse: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CHOICE_WITH_MY_INDEX":
      return { ...state, selectedHouse: state.houses[action.indexSelected] };
    default:
      return state;
  }
};
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Result />
    </Provider>
  );
}

export default App;
