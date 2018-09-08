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

export const getTask = id => dispatch => {
  dispatch(action.getTaskRequested());
  return fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: "GET",
    headers: new Headers({
      Authorization: `bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json"
    })
  })
    .then(res => {
      return res.json();
    })
    .then(task => {
      console.log("this is the task", task);
      if (task) {
        dispatch(action.getTaskSuccess(task));
      }
    })

    .catch(err => dispatch(action.getTaskError()));
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

export const toggleTaskStatus = (id, status) => dispatch => {
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
    .then(() => dispatch(action.toggleTaskStatus(id, status)))
    .catch(error => {
      console.log(error);
    });
};

export const updateTaskPractice = (id, practiceDuration) => dispatch => {
  const data = JSON.stringify({
    practiceDuration
  });

  return fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: "PUT",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("token")}`
    }),
    body: data
  })
    .then(() => dispatch(action.updateTaskPractice(id, practiceDuration)))
    .catch(error => {
      console.log(error);
    });
};

export const pushTaskNote = (id, title, body) => dispatch => {
  const data = JSON.stringify({
    title,
    body
  });

  return fetch(`${API_BASE_URL}/tasks/${id}/notes`, {
    method: "PUT",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("token")}`
    }),
    body: data
  })
    .then(() => dispatch(action.pushTaskNote(id, title, body)))
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
