import { API_BASE_URL } from "../config";
import {
  loginRequest,
  loginError,
  loginSuccess,
  logoutSuccess,
  logoutRequest
} from "./index";

export const register = (email, password) => dispatch => {
  const data = JSON.stringify({ email, password });
  return fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      localStorage.setItem("token", data.token);
      dispatch(loginSuccess(data.token));
    })
    .catch(error => console.log(error));
};

export const login = (email, password) => dispatch => {
  dispatch(loginRequest(email, password));
  const data = JSON.stringify({
    email,
    password
  });
  return fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      localStorage.setItem("token", data.token);
      dispatch(loginSuccess(data.token));
    })
    .catch(error => dispatch(loginError("There was an error")));
};

export const logout = () => dispatch => {
  dispatch(logoutRequest());
  localStorage.removeItem("token");
  dispatch(logoutSuccess());
};
