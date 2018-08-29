import * as action from "./index";
import { API_BASE_URL } from "../config";

export const getTasks = () => dispatch => {
  return fetch(`${API_BASE_URL}/tasks`)
    .then(res => {
      if (!res.ok) {
        throw res;
        return;
      }
      return res.json();
    })
    .then(tasks => {
      dispatch(action.getTasks(tasks));
    })
    .catch(err => console.log(err));
};

export const createTask = ({ task }) => dispatch => {
  const data = JSON.stringify({ task });

  return fetch(`${API_BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("token")}`
    },
    body: data
  })
    .then(res => res.json())
    .then(task => {
      dispatch(action.addTask({ task: task }));
    })
    .catch(err => console.log(err));
};
