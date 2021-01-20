import api from "../../api/api";

export function addTask({ commit }, task) {
  const payload = {
    id: task.url,
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
export async function readDataFromAPI({ commit, dispatch }) {
  try {
    const res = await fetch(api.baseURL);
    if (!res.ok) {
      console.error("Erro ao recuperar dados do servidor", res.status);
    }
    const data = await res.json();
    console.log("data", data);
    data.forEach(task => {
      dispatch("addTask", task);
    });
  } catch (error) {
    console.error("Erro ao recuperar dados do servidor", error);
  }
}
