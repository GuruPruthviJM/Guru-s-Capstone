// src/redux/auth/logInActions.js
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./logInTypes";
import { loginService } from "../../../components/services/logInService";



export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = (userData) => ({ type: LOGIN_SUCCESS, payload: userData });
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const loginUser = (username, password, role) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const userData = await loginService(username, password, role);
    sessionStorage.setItem("user", JSON.stringify(userData)); 
    dispatch(loginSuccess(userData));
  } catch (error) {
    dispatch(loginFailure(error.response?.data?.message || "Login failed"));
  }
};

export const logout = () => (dispatch) => {
  sessionStorage.removeItem("user");
  dispatch({ type: LOGOUT });
};