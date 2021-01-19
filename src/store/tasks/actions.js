import { uid } from "quasar";

export function addTask({ commit }, task) {
  console.log(task);
  let url = uid();
  const payload = {
    id: url,
    task: task
  };
  commit("addTask", payload);
}

export function updateTask({ commit }, payload) {
  commit("updateTask", payload);
}

export function deleteTask({ commit }, id) {
  commit("deleteTask", id);
}

export function setSearch({ commit }, payload) {
  commit("setSearch", payload);
}
