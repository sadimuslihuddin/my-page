import { combineReducers } from "redux";
import { landingTab } from "./landing";

const appReducer = combineReducers({
  landingTab: landingTab,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
