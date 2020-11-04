export const ADD = "ADD";
export const REMOVE = "ADD";
export const RESET = "ADD";

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + action.payload;
    case REMOVE:
      return state - action.payload;
    case RESET:
      return 0;
    default:
      return state;
  }
};
