import INITIAL_STATE from "./models/slider";
import {
  FETCH_IMAGES
} from "../actionTypes";


export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_IMAGES:
      let results = [...state.results];
      if (action.payload) {
        return({ ...state, results: [{...action.payload}, ...results] });
      }
      break;
    default:
      return state;
  }
}
