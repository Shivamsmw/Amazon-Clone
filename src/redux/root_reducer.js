import { combineReducers } from "redux";
import cartReducer from "./reducer";
const rootReducer = combineReducers({
  data: cartReducer,
});
export default rootReducer;
