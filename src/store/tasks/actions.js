import api from "../../api/api";
import { showErrorMessage, showSuccessMessage } from "../../utils/Dialogs";

import { Loading, uid } from "quasar";

export async function addTask({ commit }, task) {
  try {
    Loading.show();
    const id = uid();
    const payload = {
      id: id,
      task: task
    };
    const res = await fetch(api.baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task)
    });
    console.log("res", await res.json());
    if (!res.ok) {
      console.error("Erro ao cadastras tarefa", res.status);
    }
    commit("addTask", payload);
    Loading.hide();
  } catch (error) {
    console.error("Erro ao cadastras tarefa", res.status);
    showErrorMessage("Erro ao cadastrar tarefa");
  }
}

export async function updateTask({ commit }, payload) {
  try {
    Loading.show();
    console.log("payload", payload);
    const res = await fetch(`${payload.updates.url}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload.updates)
    });
    if (!res.ok) {
      console.error("Erro ao editar tarefa", res.status);
    }
    console.log("res", await res.json());
    commit("updateTask", payload);
    Loading.hide();
  } catch (error) {
    console.error("Erro ao editar tarefa", res.status);
    showErrorMessage("Erro ao editar tarefa");
  }
}

export async function deleteTask({ commit, state }, id) {
  try {
    Loading.show();
    const url = state.tasks[id].url;
    const res = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });
    if (!res.ok) {
      console.error("Erro ao deletar tarefa");
    }
    commit("deleteTask", id);
    showSuccessMessage("Tarefa excluída!");
  } catch (error) {
    console.error("Erro ao deletar tarefa", error);
    showErrorMessage("Erro ao deletar tarefa");
  }
}

export async function deleteAllTasks({ commit, state }) {
  try {
    Loading.show();
    console.log("AQUIIIIII");
    const res = await fetch(api.baseURL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });
    if (!res.ok) {
      console.error("Erro ao deletar tarefas", res.status);
    }

    Object.keys(state.tasks).forEach(key => {
      commit("deleteTask", key);
    });

    showSuccessMessage("Tarefas excluídas!");
  } catch (error) {
    console.error("Erro ao deletar tarefas", error);
    showErrorMessage("Erro ao deletar tarefas");
  }
}

export function setSearch({ commit }, payload) {
  commit("setSearch", payload);
}
export async function readDataFromAPI({ commit, dispatch }) {
  try {
    Loading.show();
    const res = await fetch(api.baseURL);
    if (!res.ok) {
      console.error("Erro ao recuperar dados do servidor", res.status);
    }
    const data = await res.json();
    console.log("data", data);
    data.forEach(task => {
      const id = uid();
      const payload = {
        id: id,
        task: task
      };
      commit("addTask", payload);
    });
    Loading.hide();
  } catch (error) {
    console.error("Erro ao recuperar dados do servidor", error);
    showErrorMessage("Erro ao recuperar dados do servidor");
  }
}
