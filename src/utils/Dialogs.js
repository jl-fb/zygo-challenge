import { Dialog, Loading } from "quasar";

export function showErrorMessage(erro) {
  Dialog.create({ title: "Error", message: erro });
  Loading.hide();
}

export function showSuccessMessage(message) {
  Dialog.create({ title: "Pronto!", message: message });
  Loading.hide();
}
