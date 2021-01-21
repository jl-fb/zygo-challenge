import { LocalStorage } from "quasar";

export function getFromLocalStorage(key) {
  try {
    return LocalStorage.getItem(key);
  } catch (error) {
    console.error("Erro ao recuperar tarefa no localStorage");
  }
}
export function setToLocalStorage(key, value) {
  try {
    /*
    NOTE
    O Quasar recupera dados com seu tipo de dados original. 
    Você diz a ele para armazenar um número e, 
    em seguida, recuperá-lo e ainda será um número
    */
    return LocalStorage.getItem(key, value);
  } catch (error) {
    console.error("Erro ao recuperar tarefa no localStorage");
  }
}
export function deleteFromLocalStorage(key) {
  try {
    return LocalStorage.remove(key);
  } catch (error) {
    console.error("Erro ao recuperar tarefa no localStorage");
  }
}
