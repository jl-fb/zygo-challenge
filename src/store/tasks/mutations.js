import Vue from "vue";
import {
  setToLocalStorage,
  deleteFromLocalStorage
} from "../../utils/LocalStorage";

export function addTask(state, payload) {
  Vue.set(state.tasks, payload.id, payload.task);
  setToLocalStorage("tasks", state.tasks);
}
export function updateTask(state, payload) {
  Object.assign(state.tasks[payload.id], payload.updates);
  setToLocalStorage("tasks", state.tasks);
}

export function deleteTask(state, payload) {
  Vue.delete(state.tasks, payload);
  setToLocalStorage("tasks", state.tasks);
}

export function setSearch(state, payload) {
  state.search = payload;
}
