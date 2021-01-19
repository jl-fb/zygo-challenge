<template>
  <q-card>
    <modal-header>Adicionar tarefa</modal-header>
    <q-form @submit.prevent="onSubmit" @reset="onReset" ref="form">
      <q-card style="max-width: 400px">
        <q-card-section class="q-pt-none">
          <modal-task-name :title.sync="toSubmit.title" ref="modalTaskName " />
        </q-card-section>

        <modal-buttons />
      </q-card>
    </q-form>
  </q-card>
</template>

<script>
import { addTask } from "src/store/tasks/actions";
import { mapActions } from "vuex";
import ModalHeader from "./Shared/ModalHeader.vue";
import ModalTaskName from "./Shared/ModalTaskName.vue";
import ModalButtons from "./Shared/ModalButtons.vue";
export default {
  name: "AddTask",
  components: {
    ModalHeader: require("./Shared/ModalHeader").default,
    ModalTaskName: require("./Shared/ModalTaskName").default,
    ModalButtons: require("./Shared/ModalButtons").default
  },
  data() {
    return {
      toSubmit: {
        title: "",
        completed: false
      }
    };
  },
  methods: {
    ...mapActions("tasks", ["addTask"]),
    onSubmit() {
      this.$refs.form.validate();
      if (!this.$refs.form.hasError) {
        console.log("foi", this.toSubmit);
        this.submitTask(this.toSubmit);
      }
    },

    submitTask(task) {
      this.addTask(task);
      this.$emit("close");
    },
    onReset() {
      this.toSubmit.title = null;
      this.toSubmit.completed = false;
    }
  }
};
</script>

<style>
.q-pt-none {
  min-width: 300px;
}
</style>
