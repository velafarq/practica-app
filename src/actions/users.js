import { API_BASE_URL } from "../config";

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
      if (!res.ok) {
        throw res;
        return;
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
      localStorage.setItem("token", data.token);
    })
    .catch(error => console.log(error));
};

export const login = (email, password) => dispatch => {
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
      if (!res.ok) {
        throw res;
        return;
      }
      return res.json();
    })
    .then(data => {
      localStorage.setItem("token", data.token);
    })
    .catch(error => console.log(error));
};
