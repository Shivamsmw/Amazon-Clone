import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root_reducer";
const middle = [thunk];

middle.push(logger);

const store = createStore(rootReducer, applyMiddleware(...middle));
export default store;
