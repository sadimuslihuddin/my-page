import { LANDING_TAB } from "../actions/landing";

export const landingTab = (state = '', action) => {
  switch (action.type) {
    case LANDING_TAB:
      return action.payload;
    default:
      return state
  }
};
