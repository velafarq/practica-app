import * as action from "./index";
import { API_BASE_URL } from "../config";

export const getTasks = () => dispatch => {
  dispatch(action.getTasksRequested());
  return fetch(`${API_BASE_URL}/tasks`, {
    method: "GET",
    headers: new Headers({
      Authorization: `bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json"
    })
  })
    .then(res => {
      return res.json();
    })
    .then(tasks => {
      dispatch(action.getTasksSuccess(tasks));
    })
    .catch(err => dispatch(action.getTasksError()));
};

export const addTask = task => dispatch => {
  return fetch(`${API_BASE_URL}/tasks`, {
    method: "POST",
    body: task,
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("token")}`
    }
  })
    .then(res => res.json())
    .then(task => {
      dispatch(action.addTask(task));
    })

    .catch(err => console.log(err));
};

export const removeTask = id => dispatch => {
  return fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: "DELETE",
    headers: new Headers({
      Authorization: `bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json"
    })
  })
    .then(res => res.json())
    .then(task => {
      dispatch(action.removeTask(id));
    })
    .catch(err => console.log(err));
};

export const toggleStatus = (id, status) => dispatch => {
  const data = JSON.stringify({
    status,
    _id: id
  });

  return fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: "PUT",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("token")}`
    }),
    body: data
  })
    .then(() => dispatch(action.toggleStatus(id, status)))
    .catch(error => {
      console.log(error);
    });
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
      return res.json();
    })
    .then(notes => {
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
      dispatch(action.addNote(note));
    })
    .catch(err => console.log(err));
};
