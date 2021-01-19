import Vue from "vue";

export function addTask(state, payload) {
  console.log(payload);
  Vue.set(state.tasks, payload.id, payload.task);
}
export function updateTask(state, payload) {
  Object.assign(state.tasks[payload.id], payload.updates);
}

export function deleteTask(state, payload) {
  Vue.delete(state.tasks, payload);
}

export function setSearch(state, payload) {
  state.search = payload;
}
