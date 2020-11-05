import { UPDATE_FILTER } from "./filterReducer";

export const setFIlterAction = (value) => ({
  type: UPDATE_FILTER,
  payload: value,
});
