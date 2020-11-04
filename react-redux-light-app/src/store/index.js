import { createStore } from "redux";
import { lightReducer } from "./reducers.js";

const store = createStore(
  lightReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
