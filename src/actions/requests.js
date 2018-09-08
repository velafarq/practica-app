import * as action from "./index";

import { API_BASE_URL } from "../config";

export const getTasks = () => dispatch => {
  dispatch(action.getTasksRequested());
  dispatch(action.isFetchingTrue());
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
      dispatch(action.isFetchingFalse());
    })
    .catch(err => {
      dispatch(action.getTasksError());
      dispatch(action.errorTrue());
    });
};

export const getTask = id => dispatch => {
  dispatch(action.getTaskRequested());
  dispatch(action.isFetchingTrue());
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
        dispatch(action.isFetchingFalse());
      }
    })

    .catch(err => {
      dispatch(action.getTaskError());
      dispatch(action.errorTrue());
    });
};

export const addTask = task => dispatch => {
  dispatch(action.isFetchingTrue());
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
      dispatch(action.isFetchingFalse());
      dispatch(action.errorFalse());
      dispatch(action.addTask(task));
    })

    .catch(err => {
      dispatch(action.errorTrue());
      console.log(err);
    });
};

export const removeTask = id => dispatch => {
  dispatch(action.isFetchingTrue());
  return fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: "DELETE",
    headers: new Headers({
      Authorization: `bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json"
    })
  })
    .then(res => res.json())
    .then(task => {
      dispatch(action.isFetchingFalse());
      dispatch(action.errorFalse());
      dispatch(action.removeTask(id));
    })
    .catch(err => {
      dispatch(action.errorTrue());
      console.log(err);
    });
};

export const toggleTaskStatus = (id, status) => dispatch => {
  dispatch(action.isFetchingTrue());
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
    .then(() => {
      dispatch(action.toggleTaskStatus(id, status));

      dispatch(action.isFetchingFalse());
      dispatch(action.errorFalse());
    })
    .catch(error => {
      dispatch(action.errorTrue());
      console.log(error);
    });
};

export const updateTaskPractice = (id, practiceDuration) => dispatch => {
  dispatch(action.isFetchingTrue());
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
    .then(() => {
      dispatch(action.updateTaskPractice(id, practiceDuration));
      dispatch(action.isFetchingFalse());
      dispatch(action.errorFalse());
    })
    .catch(error => {
      dispatch(action.errorTrue());
      console.log(error);
    });
};

export const pushTaskNote = (id, title, body) => dispatch => {
  dispatch(action.isFetchingTrue());
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
    .then(() => {
      dispatch(action.isFetchingFalse());
      dispatch(action.errorFalse());
      dispatch(action.pushTaskNote(id, title, body));
    })
    .catch(error => {
      dispatch(action.errorTrue());
      console.log(error);
    });
};

export const getNotes = () => dispatch => {
  dispatch(action.getNotesRequested());
  dispatch(action.isFetchingTrue());
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
      dispatch(action.isFetchingFalse());
    })
    .catch(err => {
      dispatch(action.getNotesError());
      dispatch(action.errorTrue());
    });
};

export const addNote = content => dispatch => {
  dispatch(action.isFetchingTrue());
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
      dispatch(action.isFetchingFalse());
    })
    .catch(err => {
      dispatch(action.errorTrue());
      console.log(err);
    });
};
