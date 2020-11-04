import { ADD, REMOVE, RESET } from "./counterReducer";

export const createResetAction = () => ({
  type: RESET,
});

export const createAddAction = (n) => ({
  type: ADD,
  payload: n,
});

export const createRemoveAction = (n) => ({
  type: REMOVE,
  payload: n,
});
