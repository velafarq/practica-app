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
      if (data.token !== null && data.token !== undefined) {
        localStorage.setItem("token", data.token);
        dispatch(loginSuccess(data.token));
      } else {
        dispatch(loginError("Username already taken."));
      }
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
      if (data.token !== null && data.token !== undefined) {
        localStorage.setItem("token", data.token);

        dispatch(loginSuccess(data.token));
      } else {
        dispatch(loginError("Incorrect username or password."));
      }
    })
    .catch(error => console.log(error));
};

export const logout = () => dispatch => {
  dispatch(logoutRequest());
  localStorage.removeItem("token");
  dispatch(logoutSuccess());
};
