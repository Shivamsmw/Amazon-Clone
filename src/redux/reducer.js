import { START_REGISTER } from "./action";
import { REGISTER_ERROR } from "./action";
import { REGISTER_DONE } from "./action";
import { LOGIN_DONE } from "./action";
import { START_LOGIN } from "./action";
import { LOGOUT_ERROR } from "./action";
import { LOGOUT_DONE } from "./action";
import { START_LOGOUT } from "./action";
import { LOGIN_ERROR } from "./action";
import { FREEZE_STATE } from "./action";
const initialState = {
  status: false,
  cart: [],
  user: null,
  error: null,
};
const cartReducer = (store = initialState, action) => {
  switch (action.type) {
    case FREEZE_STATE:
      return {
        ...store,
        user: action.payload,
      };
    case START_REGISTER:
    case START_LOGIN:
    case START_LOGOUT:
      return {
        ...store,
        status: true,
      };
    case REGISTER_DONE:
    case LOGIN_DONE:
      return {
        ...store,
        status: false,
        user: action.payload,
      };
    case LOGOUT_DONE:
      return {
        ...store,
        user: null,
      };
    case REGISTER_ERROR:
    case LOGIN_ERROR:
    case LOGOUT_ERROR:
      return {
        ...store,
        status: false,
        error: action.payload,
      };
    default:
      return store;
  }
};
export default cartReducer;
