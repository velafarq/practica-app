import * as action from "./index";
import { API_BASE_URL } from "../config";

export const getTasks = () => dispatch => {
  return fetch(`${API_BASE_URL}/tasks`, {
    method: "GET",
    headers: new Headers({
      Authorization: `bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json"
    })
  })
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

export const addTask = task => dispatch => {
  const data = JSON.stringify({ task });

  return fetch(`${API_BASE_URL}/tasks`, {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("token")}`
    }
  })
    .then(res => res.json())
    .then(task => {
      // dispatch(action.addTask(task));
    })

    .catch(err => console.log(err));
};

export const getNotes = () => dispatch => {
  dispatch(action.getNotesRequested());
  return fetch(`${API_BASE_URL}/notes`, {
    method: "GET",
    headers: new Headers({
      Authorization: `bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json"
    })
  })
    .then(res => {
      if (!res.ok) {
        throw res;
        return;
      }
      return res.json();
    })
    .then(notes => {
      console.log("these", notes);
      dispatch(action.getNotesSuccess(notes));
    })
    .catch(err => dispatch(action.getNotesError()));
};

export const addNote = content => dispatch => {
  const data = JSON.stringify({ content });
  return fetch(`${API_BASE_URL}/notes`, {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("token")}`
    }
  })
    .then(res => res.json())
    .then(note => {
      console.log(data);
      dispatch(action.addNote(note));
    })
    .catch(err => console.log(err));
};
