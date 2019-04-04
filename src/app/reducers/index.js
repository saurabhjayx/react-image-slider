import { combineReducers } from "redux";
import SliderReducer from "./slider";

export default combineReducers({
  slider: SliderReducer,
})
