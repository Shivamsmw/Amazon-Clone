import { auth } from "../firebase";
export const START_REGISTER = "START_REGISTER_USER";
export const REGISTER_ERROR = "REGISTER_ERROR";
export const REGISTER_DONE = "REGISTER_ERROR";
export const START_LOGOUT = "START_LOGOUT";
export const LOGOUT_ERROR = "LOGOUT_ERROR";
export const LOGOUT_DONE = "LOGOUT_DONE";
export const START_LOGIN = "START_LOGIN";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_DONE = "LOGIN_DONE";
export const FREEZE_STATE = "FREEZE_STATE";
export const ADD_TO_CART = "ADD_TO_CART";
export const EMPTY_CART = "EMPTY_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const freezeState = user => ({
  type: FREEZE_STATE,
  payload: user,
});
export const emptyCart = () => ({
  type: EMPTY_CART,
});
const startRegister = () => ({
  type: START_REGISTER,
});
const doneRegister = user => ({
  type: REGISTER_DONE,
  payload: user,
});
const errorRegister = error => ({
  type: REGISTER_ERROR,
  payload: error,
});
export const addtoCart = item => ({
  type: ADD_TO_CART,
  payload: item,
});
export const deleteFromCart = title => ({
  type: DELETE_FROM_CART,
  payload: title,
});
const startLogout = () => ({
  type: START_LOGOUT,
});
const doneLogout = () => ({
  type: LOGOUT_DONE,
});
const errorLogout = error => ({
  type: LOGOUT_ERROR,
  payload: error,
});

const startLogin = () => ({
  type: START_LOGIN,
});
const doneLogin = user => ({
  type: LOGIN_DONE,
  payload: user,
});
const errorLogin = error => ({
  type: LOGIN_ERROR,
  payload: error,
});
export const registerInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(startRegister());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(doneRegister(user));
      })
      .catch(error => dispatch(errorRegister(error.message)));
  };
};

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(startLogin());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(doneLogin(user));
      })
      .catch(error => dispatch(errorLogin(error.message)));
  };
};

export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(startLogout());
    auth
      .signOut()
      .then(res => dispatch(doneLogout()))
      .catch(error => dispatch(errorLogout(error.message)));
  };
};
