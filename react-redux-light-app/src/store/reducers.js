export const SWITCH_ACTION = "SWITCH_ACTION";

const initialState = "on";

export const lightReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_ACTION:
      return state === "on" ? "off" : "on";
    default:
      return state;
  }
};
